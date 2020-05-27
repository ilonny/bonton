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
    
}
