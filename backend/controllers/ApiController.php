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
    
}