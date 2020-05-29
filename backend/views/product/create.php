<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
use kartik\file\FileInput;
use kartik\select2\Select2;
?>

<div class="site-index">
    <h1>Создание товара</h1>
    <div class="body-content">
        <div id="add" class="tab-pane">
            <?php
                if (!isset($model)) {
                    $model = new Product;
                    $product_id = 0;
                } else {
                    $current_photos = [];
                    $category_id = $model->category_id ? $model->category_id : $category_id;
                    $product_id = $model->id;
                    if ($model->photos) {
                        $current_photos = array_map(function ($photo) {
                            return '/uploads/'.$photo;
                        }, json_decode($model->photos));
                    }
                }
                $form = ActiveForm::begin(['action' => ['product/save?category_id='.$category_id.'&product_id='.$product_id]]);
            ?>
            <?= $form->field($model, 'name')->textInput()->label('Наименование'); ?>
            <?= $form->field($model, 'description')->textInput()->label('Короткое описание (не обязательно)'); ?>
            <?= $form->field($model, 'category_id')->hiddenInput(['value' => $category_id])->label(false); ?>
            <?= $form->field($model, 'price')->textInput()->label('Цена в рублях'); ?>
            <?= $form->field($model, 'new_price')->textInput()->label('Цена со скидкой в рублях (оставить пустым если скидки нет)'); ?>
            <div>
            <?php if ($model->id): ?>
                <div class="form-group">
                    <label class="control-label" >Загруженные фотографии</label>
                    <div class="row">
                        <?php foreach ($current_photos as $ph): ?>
                            <div class="col-xs-4 wrapper-img" style="position: relative;">
                                <img style="max-width: 100%" src="<?= $ph ?>">
                                <div class="btn btn-danger" id="mark-delete-photo">Удалить</div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <input type="hidden" id="deleted-photos" name="deletet_photos">
                <?= $form->field($model, 'id')->hiddenInput()->label(false); ?>
            <?php endif; ?>
            </div>
            <?= $form->field($model, 'photos[]')->widget(FileInput::classname(), [
                    'options' => [
                        'accept' => 'image/*',
                        'multiple' => true,
                        'label' => 'sho?'
                    ],
                    'pluginOptions' => [
                        'initialPreviewAsData'=>true,
                        'overwriteInitial'=>true,
                        'showPreview' => true,
                        'showCaption' => true,
                        'showRemove' => true,
                        'showUpload' => false
                    ]
                ]);
            ?>
            <?= $form->field($model, 'size')->widget(Select2::classname(), [
                    'data' => $size_arr,
                    'options' => ['placeholder' => 'Выберите доступные размеры товара', 'multiple' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]);
            ?>
            <?= $form->field($model, 'color')->widget(Select2::classname(), [
                    'data' => $color_arr,
                    'options' => ['placeholder' => 'Выберите доступные цвета товара', 'multiple' => true],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
            ?>
            <?= $form->field($model, 'is_new')->widget(Select2::classname(), [
                    'data' => ['0' => 'Нет', '1' => 'Да'],
                    'options' => ['placeholder' => 'Новинка'],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
            ?>
            <?= $form->field($model, 'is_popular')->widget(Select2::classname(), [
                    'data' => ['0' => 'Нет', '1' => 'Да'],
                    'options' => ['placeholder' => 'Популярность'],
                    'pluginOptions' => [
                        'allowClear' => true
                    ],
                ]);
            ?>
            <div class="form-group">
                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>


    <script>
        window.addEventListener('DOMContentLoaded', function () {
            var images_to_delete = [];
            $(document).on('click', '#mark-delete-photo', function() {
                console.log('images_to_delete');
                var img_src =$(this).parent().find('img').attr('src').replace('/uploads/', '');
                images_to_delete.push(img_src);
                $(this).parent().remove();
                $("#deleted-photos").val(JSON.stringify(images_to_delete))
                console.log(images_to_delete);
            });
        })
    </script>