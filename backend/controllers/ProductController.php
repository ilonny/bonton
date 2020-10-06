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
/**
 * Category controller
 */
class ProductController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['login', 'error'],
                        'allow' => true,
                    ],
                    [
                        'actions' => ['logout', 'index', 'edit', 'delete', 'create', 'save'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }
    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex($category_id = 0)
    {
        $products = Product::find()->andWhere(['category_id' => $category_id])->all();
        $res_cats = [];
        $cats = Category::find()->all();
        $cat_name = '';
        if ($category_id) {
            $categoryCurrent = Category::findOne($category_id);
            $cat_name = $categoryCurrent->name;
        }
        foreach ($cats as $key => $main_category) {
            $res[$key]['id'] = $main_category->id;
            $res[$key]['name'] = $main_category->name;
            $res[$key]['parent_id'] = $main_category->parent_id;
        }
        foreach ($products as $product) {
            if ($product->size && $product->size !== '""') {
                $prod_sizes = $product->size ? json_decode($product->size) : [];
                $sizes_ids = array_map(function ($s) {return intval($s);}, $prod_sizes);
                $sizes = Size::find()->where(['id' => $sizes_ids])->all();
                $sizes_arr = [];
                foreach ($sizes as $size) {
                    $sizes_arr[] = $size->name;
                }
                $sizes = implode(', ', $sizes_arr);
            } else {
                $sizes = 'Не указано';
            }
            if ($product->color && $product->color !== '""') {
                $prod_colors = $product->color ? json_decode($product->color) : [];
                $colors_ids = array_map(function ($s) {return intval($s);}, $prod_colors);
                $colors = Color::find()->where(['id' => $colors_ids])->all();
                $colors_arr = [];
                foreach ($colors as $color) {
                    $colors_arr[] = $color->name;
                }
                $colors = implode(', ', $colors_arr);
            } else {
                $colors = 'Не указано';
            }
            $product->size = $sizes;
            $product->color = $colors;
        }
        $res_cats = (new Category())->buildTree($res);
        return $this->render('index', [
            'products' => $products,
            'category_id' => $category_id,
            'cats' => $res_cats,
            'cat_name' => $cat_name,
        ]);
    }

    public function actionCreate($category_id)
    {
        $model = new Product;
        $size_arr = (new Size())->getSizeTree($category_id);
        $size_arr = ArrayHelper::map($size_arr, 'id', 'name');
        $colors = Color::find()->all();
        $color_arr = [];
        foreach ($colors as $key => $value) {
            $color_arr[$value->id] = $value->name;
            // $color_arr[$key]['id'] = $value->id;
            // $color_arr[$key]['name'] = $value->name;
        }
        // echo '<pre>';
        // var_dump($color_arr);die();
        // echo '</pre>';
        if (Yii::$app->request->isPost) {
            $model->load(Yii::$app->request->post());
            var_dump($model->validate());
            if (count($model->errors)) {
                echo '<pre>';
                var_dump($model->errors);
                echo '</pre>';
                die();
            }
            $uploadFormModel = new UploadForm();
            $uploadFormModel->imageFiles = UploadedFile::getInstances($model, 'photos');
            if ($uploadFormModel->upload($model->name)) {
                // file is uploaded successfully
                // var_dump($uploadFormModel->imageFiles);
                $model->photos = json_encode(array_map(function ($image) use ($model) {
                    return $model->name.'_'.$image->name;
                }, $uploadFormModel->imageFiles), JSON_UNESCAPED_UNICODE);
            }
            $model->color = json_encode(Yii::$app->request->post('Product')['color'], JSON_UNESCAPED_UNICODE);
            $model->size = json_encode(Yii::$app->request->post('Product')['size'], JSON_UNESCAPED_UNICODE);
            $model->save();
            if ($model->load(Yii::$app->request->post())) {
                return $this->redirect('/product/index?category_id='.$category_id);
                // return $this->refresh();
            }
        }
        return $this->render('create', [
            'category_id' => $category_id,
            'size_arr' => $size_arr,
            'color_arr' => $color_arr,
        ]);
    }   

    public function actionSave($category_id = 0, $product_id  = 0) {
        if ($product_id) {
            $model = Product::findOne($product_id);
        } else {
            $model = new Product;
        }
        $size_arr = (new Size())->getSizeTree($category_id);
        $size_arr = ArrayHelper::map($size_arr, 'id', 'name');
        $colors = Color::find()->all();
        $color_arr = [];
        if (Yii::$app->request->isPost) {
            $model->load(Yii::$app->request->post());
            // var_dump($model->validate());
            if (count($model->errors)) {
                echo '<pre>';
                var_dump($model->errors);
                echo '</pre>';
                die();
            }
            $uploadFormModel = new UploadForm();
            $uploadFormModel->imageFiles = UploadedFile::getInstances($model, 'photos');
            if ($product_id) {
                $old_photos = $model->photos ? json_decode($model->photos) : [];
                $marked_delete_photos = Yii::$app->request->post('deletet_photos') ? json_decode(Yii::$app->request->post('deletet_photos')) : [];
                $saved_photos = array_filter($old_photos, function($old_photo) use ($marked_delete_photos) {
                    return !in_array($old_photo, $marked_delete_photos);
                });
                // echo '<pre>';
                // var_dump($old_photos);
                // var_dump($marked_delete_photos);
                // var_dump($saved_photos);
                // echo '</pre>';
                // die();
                $model->photos = json_encode($saved_photos, JSON_UNESCAPED_UNICODE);
            }
            if ($uploadFormModel->upload($model->name)) {
                // file is uploaded successfully
                // var_dump($uploadFormModel->imageFiles);
                if ($product_id) {
                    $new_uploads = array_map(function ($image) use ($model) {
                        return $model->name.'_'.$image->name;
                    }, $uploadFormModel->imageFiles);
                    $updated_photos = array_merge($saved_photos, $new_uploads);
                    // var_dump($updated_photos);die();
                    $model->photos = json_encode($updated_photos, JSON_UNESCAPED_UNICODE);
                    // $old_photos = $model->photos;
                    // var_dump($old_photos);die();
                } else {
                    $model->photos = json_encode(array_map(function ($image) use ($model) {
                        return $model->name.'_'.$image->name;
                    }, $uploadFormModel->imageFiles), JSON_UNESCAPED_UNICODE);
                }
            }
            $model->color = json_encode(Yii::$app->request->post('Product')['color'], JSON_UNESCAPED_UNICODE);
            $model->size = json_encode(Yii::$app->request->post('Product')['size'], JSON_UNESCAPED_UNICODE);
            if ($product_id){
                $model->update();
            } else {
                $model->save();
            }
            if ($model->load(Yii::$app->request->post())) {
                return $this->redirect('/product/index?category_id='.$category_id);
                // return $this->refresh();
            }
        }
    }

    public function actionEdit($id)
    {
        $model = Product::findOne($id);
        $category_id = $model->category_id;
        $size_arr = (new Size())->getSizeTree($category_id);
        $size_arr = ArrayHelper::map($size_arr, 'id', 'name');
        $colors = Color::find()->all();
        $color_arr = [];
        foreach ($colors as $key => $value) {
            $color_arr[$value->id] = $value->name;
        }
        if ($model->size && $model->size !== '""') {
            $prod_sizes = $model->size ? json_decode($model->size) : [];
            $sizes_ids = array_map(function ($s) {return intval($s);}, $prod_sizes);
            $sizes = Size::find()->where(['id' => $sizes_ids])->all();
            $chosen_sizes = [];
            foreach ($sizes as $size) {
                $chosen_sizes[] = $size->id;
            }
            // $model->size = $chosen_sizes;
        } else {
            $chosen_sizes = [];
            // $model->size = [];
        }
        if ($model->color && $model->color !== '""') {
            $prod_colors = $model->color ? json_decode($model->color) : [];
            $colors_ids = array_map(function ($s) {return intval($s);}, $prod_colors);
            $colors = Color::find()->where(['id' => $colors_ids])->all();
            $chosen_colors = [];
            foreach ($colors as $color) {
                $chosen_colors[] = $color->id;
            }
            // $model->color = $chosen_colors;
        } else {
            $chosen_colors = [];
            // $model->size = [];
        }
        $model->size = $chosen_sizes;
        $model->color = $chosen_colors;
        // var_dump($size_arr);
        // var_dump($model->size);die();
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                $model->save();
                return $this->redirect('/product/index');
                // return $this->refresh();
            }
        }
        return $this->render('create', [
            'model' => $model,
            'category_id' => $category_id,
            'size_arr' => $size_arr,
            'color_arr' => $color_arr,
            'chosen_sizes' => $chosen_sizes,
            'chosen_colors' => $chosen_colors
        ]);
    }   

    public function actionDelete($id)
    {
        $model = Product::findOne($id);
        $category_id = $model->category_id;
        $model->delete();
        return $this->redirect('/product/index?category_id='.$category_id);
    } 
}
