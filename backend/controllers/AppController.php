<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;

/**
 * Site controller
 */
class AppController extends Controller
{
    public function actionIndex()
    {
        return file_get_contents(__DIR__.'/../web/bonton/index.html');
    }
    
}
