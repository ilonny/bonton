<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\models\Category;
use backend\models\Size;
/* @var $this yii\web\View */
// var_dump($categories);die();
$this->title = 'Редактирование категории';
?>
<div class="site-index">
    <h1>Редактирование категории товаров</h1>
    <div class="body-content">
        <div id="add" class="tab-pane">
            <?php
                $form = ActiveForm::begin();
            ?>
            <?= $form->field($model, 'name')->textInput()->label('Наименование'); ?>
            <?= $form->field($model, 'description')->textInput()->label('Короткое описание (не обязательно)'); ?>
            <?= $form->field($model, 'parent_id')->hiddenInput()->label(false); ?>
            <div class="form-group">
                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>
        <div>
            <h3>Список доступных размеров</h3>
            <?php foreach ($size_arr as $size):?>
                <?php 
                echo '
                    <div class="list-group-item">
                        <div class="row">
                            <div class="col-xs-4">'.$size['name'].'</div>
                            <div class="col-xs-8">
                                <div class="row">
                                    <div class="col-xs-3 text-right">
                                        <!-- <form action="/size/delete" method="POST">
                                        <input type="hidden" name="id" value="'.$size['id'].'"/>
                                        </form> -->
                                        <a href="'.Url::to(['size/delete', 'id' => $size['id'], 'category_id' => $size['category_id']]).'" class="btn btn-danger">Удалить</a>
                                    </div>
                                    <div class="col-xs-4 text-right">
                                        <a href="'.Url::to(['size/edit', 'id' => $size['id']]).'" class="btn btn-primary">Редактировать</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ';?>
            <?php endforeach; ?>
            <hr>
            <h3>Добавить размер для категории товаров</h1>
            <div class="body-content">
                <div id="add" class="tab-pane">
                    <?php
                        $form = ActiveForm::begin([
                            'action' => ['size/create'],
                        ]);
                        $modelSize = new Size;
                    ?>
                    <?= $form->field($modelSize, 'name')->textInput()->label('Наименование'); ?>
                    <?= $form->field($modelSize, 'description')->textInput()->label('Короткое описание (не обязательно)'); ?>
                    <?= $form->field($modelSize, 'category_id')->hiddenInput(['value' => $model->id])->label(false); ?>
                    <div class="form-group">
                        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-primary']) ?>
                    </div>
                    <?php ActiveForm::end(); ?>
                </div>
            </div>
        </div>
    </div>