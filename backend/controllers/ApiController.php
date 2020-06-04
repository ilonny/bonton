<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use common\models\LoginForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
use backend\models\UploadForm;
use backend\models\Color;
use yii\web\UploadedFile;
use yii\helpers\Json;
use yii\web\Response;
use DateTime;
use yii\filters\Cors;
use yii\filters\auth\HttpBasicAuth;
/**
 * Category controller
 */
class ApiController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        // // remove authentication filter
        // $auth = $behaviors['authenticator'];
        // unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Access-Control-Allow-Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
                'Access-Control-Expose-Headers' => [],
            ]
        ];
        // re-add authentication filter
        // $behaviors['authenticator'] = $auth;
        // // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        // $behaviors['authenticator']['except'] = ['options'];
        return $behaviors;
    }
    // public function beforeAction($action)
    // {
    //     \Yii::$app->response->format = Response::FORMAT_JSON;
    //     return parent::beforeAction($action);
    // }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex($category_id = 0)
    {
        return Json::encode([
            'hello' => 'can i help?'
        ]);
    }

    public function actionGetCategories()
    {
        $categories = Category::find()->all();
        $categories_array = [];
        foreach ($categories as $key => $category) {
            array_push($categories_array, [
                'id' => $category->id,
                'code' => $category->id,
                'name' => $category->name,
                'parent_id' => $category->parent_id,
            ]);
        }
        $res = (new Category())->buildTree($categories_array);
        foreach ($res as $key => $b) {
            if ($b['id'] == 1) {
                $type = 'men';
            } else {
                $type = 'women';
            }
            $res[$key]['type'] = $type;
            if (isset($b['children'])) {
                foreach ($b['children'] as $key_c1 => $c1) {
                    $res[$key]['children'][$key_c1]['type'] = $type;
                    // $c1['type'] = $type;
                    if (isset($c1['children'])) {
                        foreach ($c1['children'] as $key_c2 => $c2) {
                            $res[$key]['children'][$key_c1]['children'][$key_c2]['type'] = $type;
                            // $c2['type'] = $type;
                            if (isset($c2['children'])) {
                                foreach ($c2['children'] as $key_c3 => $c3) {
                                    $res[$key]['children'][$key_c1]['children'][$key_c2]['children'][$key_c3]['type'] = $type;
                                    // $c3['type'] = $type;
                                }
                            }
                        }
                    }
                }
            }
        }
        return Json::encode([
            'normalized' => $categories_array,
            'tree' => $res,
        ]);
    }
    public function actionGetProducts($category_id = 0, $page = 1, $type = 'men', $categories = '') {
        if ($categories) {
            $category_id = explode('+', $categories);
        } else {
            if (!$category_id) {
                if ($type == 'men') {
                    $category_id = 1;
                }
                if ($type == 'women') {
                    $category_id = 2;
                }
            }
        }
        $products_on_page_count = 15;
        if (!$category_id) {
            $products = Product::find()->all();
        } else {
            $products = (new Product())->findByCategory($category_id);
        }
        // $sizes = Size::find()->all();
        $res_products = [];
        foreach ($products as $key => $product) {
            if ($product->photos === '[]') $product->photos = null;
            if (!$product->is_new) $product->is_new = null;
            if (!$product->is_popular) $product->is_popular = null;
            if (!$product->size || $product->size == '""') $product->size = null;
            if (!$product->color || $product->color == '""') $product->color = null;
            $size_arr = [];
            $color_arr = [];
            if ($product->size) {
                foreach (json_decode($product->size) as $key => $size_id) {
                    $size_model = Size::findOne($size_id);
                    array_push($size_arr, [
                        'id' => $size_model->id,
                        'code' => $size_model->id,
                        'name' => $size_model->name,
                    ]);
                }
            }
            if ($product->color) {
                foreach (json_decode($product->color) as $key => $color_id) {
                    $color_model = Color::findOne($color_id);
                    array_push($color_arr, [
                        'id' => $color_model->id,
                        'code' => $color_model->id,
                        'name' => $color_model->name,
                    ]);
                }
            }
            $photos_arr = [];
            $image = null;
            $image_hover = null;
            if ($product->photos) {
                $photos_arr = json_decode($product->photos, true);
            }
            if (count($photos_arr) > 0) {
                $image = Yii::$app->request->hostInfo."/uploads/".$photos_arr[0];
                $image_hover = $image;
            }
            if (count($photos_arr) > 1) {
                $image_hover = Yii::$app->request->hostInfo."/uploads/".$photos_arr[1];
            }
            // $size_arr = (new Size())->getSizeTree($product->category_id);
            // $size_arr = ArrayHelper::map($size_arr, 'id', 'name');

            array_push($res_products, [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'new_price' => $product->new_price,
                'description' => $product->description,
                'photos' => $product->photos,
                'image' => $image,
                'image_hover' => $image_hover,
                'category_id' => $product->category_id,
                'is_new' => $product->is_new,
                'is_popular' => $product->is_popular,
                'size' => $product->size,
                'color' => $product->color,
                'size_names' => $size_arr,
                'color_arr' => $color_arr,
            ]);
        }

        $products_on_page = array_slice($res_products, intval($page-1) * $products_on_page_count, $products_on_page_count);
        $pages_count = ceil(count($res_products) / $products_on_page_count);
        return json_encode([
            'all_products' => $res_products,
            'products_on_page' => $products_on_page,
            'pages_count' => $pages_count,
            'page' => $page,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
}