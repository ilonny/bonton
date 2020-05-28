<?php
use yii\helpers\Url;
$this->title = 'Список Товаров';

function renderListCategories($cats) {
    // var_dump($cats[1]);
    $html = '';
    foreach ($cats as $category) {
        if (isset($category['children'])) {
            $html .= '
                <div class="list-group-item">
                    <div class="row">
                        <div class="col-xs-4">'.$category['name'].'</div>
                        <div class="col-xs-8">
                            <div class="col-xs-4 text-right">
                                <a href="'.Url::to(['product/index', 'category_id' => $category['id']]).'" class="btn btn-primary">Перейти</a>
                            </div>
                        </div>
                    </div>
                </div>
            ';
            $html .= '<div class="list-group">';
            $html .= renderListCategories($category['children']);
            $html .= '</div>';
        } else {
            $html .= '
            <div class="list-group-item">
                <div class="row">
                    <div class="col-xs-4">'.$category['name'].'</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-4 text-right">
                            <a href="'.Url::to(['product/index', 'category_id' => $category['id']]).'" class="btn btn-primary">Перейти</a>
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
    <h1>Товары <?= $cat_name ?></h1>
    <div class="body-content">
        <div class="just-padding">
            <?php if ($category_id == 0):?>
                <div class="list-group list-group-root well">
                    <?php echo renderListCategories($cats); ?>
                </div>
            <?php else: ?>
                <a class="btn btn-success" href="<?=Url::to(['/product/create?category_id='.$category_id])?>">Добавить товар</a>
            <?php endif;?>
        </div>
    </div>
</div>