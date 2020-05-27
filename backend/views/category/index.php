<?php

/* @var $this yii\web\View */
// var_dump($categories);die();
$this->title = 'Список категорий';

function renderList($cats) {
    // var_dump($cats[1]);
    $html = '';
    foreach ($cats as $category) {
        if (isset($category['children'])) {
            $html .= '<a href="#" class="list-group-item">'.$category['name'].'</a>';
            $html .= '<div class="list-group">';
            $html .= renderList($category['children']);
            $html .= '</div>';
        } else {
            $html .= '<a href="#" class="list-group-item">'.$category['name'].'</a>';
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