<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
use kartik\file\FileInput;
use kartik\select2\Select2

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
            <?= $form->field($model, 'new_price')->textInput()->label('Цена со скидкой в рублях (оставить пустым если скидки нет)'); ?>
            <?= $form->field($model, 'photos[]')->widget(FileInput::classname(), [
                    'options' => [
                        'accept' => 'image/*',
                        'multiple' => true,
                    ],
                    'pluginOptions' => [
                        'showPreview' => true,
                        'showCaption' => true,
                        'showRemove' => true,
                        'showUpload' => false
                    ]
                ]);
            // ->fileInput(['multiple' => true, 'accept' => 'image/*']);
            ?>
            <?= $form->field($model, 'size')->widget(Select2::classname(), [
                    'data' => $size_arr,
                    'options' => ['placeholder' => 'Выберите доступные размеры товара', 'multiple' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]);
                // ->dropDownList($size_arr, ['multiple'=>'true']);
            ?>
            <?= $form->field($model, 'color')->widget(Select2::classname(), [
                    'data' => $color_arr,
                    'options' => ['placeholder' => 'Выберите доступные цвета товара', 'multiple' => true],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
                //->dropDownList($color_arr, ['multiple'=>'true']);
            ?>
            <?= $form->field($model, 'is_new')->widget(Select2::classname(), [
                    'data' => ['0' => 'Нет', '1' => 'Да'],
                    'options' => ['placeholder' => 'Новинка'],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
                //->dropDownList($color_arr, ['multiple'=>'true']);
            ?>
            <?= $form->field($model, 'is_popular')->widget(Select2::classname(), [
                    'data' => ['0' => 'Нет', '1' => 'Да'],
                    'options' => ['placeholder' => 'Популярность'],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
                //->dropDownList($color_arr, ['multiple'=>'true']);
            ?>
            <div class="form-group">
                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>