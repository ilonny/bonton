<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;

?>

<div class="site-index">
    <h1>Создание товара</h1>
    <div class="body-content">
        <div id="add" class="tab-pane">
            <?php
                $form = ActiveForm::begin();
                $model = new Product;
            ?>
            <?= $form->field($model, 'name')->textInput()->label('Наименование'); ?>
            <?= $form->field($model, 'description')->textInput()->label('Короткое описание (не обязательно)'); ?>
            <?= $form->field($model, 'category_id')->hiddenInput(['value' => $category_id])->label(false); ?>
            <?= $form->field($model, 'price')->textInput()->label('Цена в рублях'); ?>
            <?= $form->field($model, 'photos[]')->fileInput(['multiple' => true, 'accept' => 'image/*']) ?>
            <?= $form->field($model, 'size')->dropDownList($size_arr, ['multiple'=>'true']); ?>
            <?= $form->field($model, 'color')->dropDownList($color_arr, ['multiple'=>'true']); ?>
            <div class="form-group">
                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>