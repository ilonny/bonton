<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
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
                        'actions' => ['logout', 'index', 'edit', 'delete', 'create'],
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
        $products = Product::find()->all();
        $res_cats = [];
        $cats = Category::find()->all();
        foreach ($cats as $key => $main_category) {
            $res[$key]['id'] = $main_category->id;
            $res[$key]['name'] = $main_category->name;
            $res[$key]['parent_id'] = $main_category->parent_id;
        }
        $res_cats = (new Category())->buildTree($res);
        return $this->render('index', [
            'products' => $products,
            'category_id' => $category_id,
            'cats' => $res_cats,
        ]);
    }

    public function actionCreate($parent_id)
    {
        $model = new Category;
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                $model->save();
                return $this->redirect('/category/index');
                // return $this->refresh();
            }
        }
        return $this->render('create', ['parent_id' => $parent_id]);
    }   

    public function actionEdit($id)
    {
        $model = Category::findOne($id);
        // $size_arr = Size::find()->andWhere(['category_id' => $model->id])->all();
        $size_arr = (new Size())->getSizeTree($model->id);
        // echo '<pre>';
        // var_dump($size_arr);
        // echo '</pre>';
        // die();
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                $model->save();
                return $this->redirect('/category/index');
                // return $this->refresh();
            }
        }
        return $this->render('edit', ['model' => $model, 'size_arr' => $size_arr]);
    }   

    public function actionDelete($id)
    {
        $model = Category::findOne($id);
        $model->delete();
        // if (Yii::$app->request->isPost) {
        //     if ($model->load(Yii::$app->request->post())) {
        //         return $this->redirect('/category/index');
        //         // return $this->refresh();
        //     }
        // }
        return $this->redirect('/category/index');
    } 
}
