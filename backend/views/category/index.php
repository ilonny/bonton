<?php
use yii\helpers\Url;
/* @var $this yii\web\View */
// var_dump($categories);die();
$this->title = 'Список категорий';

function renderList($cats) {
    // var_dump($cats[1]);
    $html = '';
    foreach ($cats as $category) {
        if (isset($category['children'])) {
            $html .= '
                <div class="list-group-item">
                    <div class="row">
                        <div class="col-xs-4">'.$category['name'].'</div>
                        <div class="col-xs-8">
                            <div class="row">
                                <div class="col-xs-3 text-right">
                                    <form action="/category/delete" method="POST">
                                    <input type="hidden" name="id" value="'.$category['id'].'"/>
                                    <button href="'.Url::to(['category/delete', 'id' => $category['id']]).'" class="btn btn-danger">Удалить</button>
                                    </form>
                                </div>
                                <div class="col-xs-4 text-right">
                                    <a href="'.Url::to(['category/edit', 'id' => $category['id']]).'" class="btn btn-primary">Редактировать</a>
                                </div>
                                <div class="col-xs-5 text-right">
                                    <a href="'.Url::to(['category/create', 'parent_id' => $category['id']]).'" class="btn btn-success">Добавить подкатегорию</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ';
            $html .= '<div class="list-group">';
            $html .= renderList($category['children']);
            $html .= '</div>';
        } else {
            $html .= '
            <div class="list-group-item">
                <div class="row">
                    <div class="col-xs-4">'.$category['name'].'</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-3 text-right">
                                <form action="/category/delete" method="POST">
                                <input type="hidden" name="id" value="'.$category['id'].'"/>
                                <button href="'.Url::to(['category/delete', 'id' => $category['id']]).'" class="btn btn-danger">Удалить</button>
                                </form>
                            </div>
                            <div class="col-xs-4 text-right">
                                <a href="'.Url::to(['category/edit', 'id' => $category['id']]).'" class="btn btn-primary">Редактировать</a>
                            </div>
                            <div class="col-xs-5 text-right">
                                <a href="'.Url::to(['category/create', 'parent_id' => $category['id']]).'" class="btn btn-success">Добавить подкатегорию</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ';
        }
    }
    return $html;
}

?>
<div class="site-index">
    <h1>Категории</h1>
    <div class="body-content">

        <div class="just-padding">
            <div class="list-group list-group-root well">
                <?php
                    echo renderList($categories);
                ?>
            </div>
        </div>
    </div>




    <style>
        .just-padding {
            padding: 15px;
        }

        .list-group.list-group-root {
            padding: 0;
            overflow: hidden;
        }

        .list-group.list-group-root .list-group {
            margin-bottom: 0;
        }

        .list-group.list-group-root .list-group-item {
            border-radius: 0;
            border-width: 1px 0 0 0;
        }

        .list-group.list-group-root>.list-group-item:first-child {
            border-top-width: 0;
        }

        .list-group.list-group-root>.list-group>.list-group-item {
            padding-left: 30px;
        }

        .list-group.list-group-root>.list-group>.list-group>.list-group-item {
            padding-left: 45px;
        }
    </style>