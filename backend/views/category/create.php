<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\models\Category;
/* @var $this yii\web\View */
// var_dump($categories);die();
$this->title = 'Создание категории';

?>
<div class="site-index">
    <h1>Создание категории товаров</h1>
    <div class="body-content">
        <div id="add" class="tab-pane">
            <?php
                $form = ActiveForm::begin();
                $model = new Category;
            ?>
            <?= $form->field($model, 'name')->textInput()->label('Наименование'); ?>
            <?= $form->field($model, 'description')->textInput()->label('Короткое описание (не обязательно)'); ?>
            <?= $form->field($model, 'parent_id')->hiddenInput(['value' => $parent_id])->label(false); ?>
            <div class="form-group">
                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>