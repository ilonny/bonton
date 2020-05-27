<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use backend\models\Category;
/**
 * Category controller
 */
class CategoryController extends Controller
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
    public function actionIndex()
    {
        $res = [];
        $cats = Category::find()->all();
        foreach ($cats as $key => $main_category) {
            $res[$key]['id'] = $main_category->id;
            $res[$key]['name'] = $main_category->name;
            $res[$key]['parent_id'] = $main_category->parent_id;
        }
        $res = (new Category())->buildTree($res);
        return $this->render('index', ['categories' => $res]);
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
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                $model->save();
                return $this->redirect('/category/index');
                // return $this->refresh();
            }
        }
        return $this->render('edit', ['model' => $model]);
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
