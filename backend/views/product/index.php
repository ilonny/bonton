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
                <br>
                <br>
                <br>
                <table class="table table-striped" id="product-table">
                    <thead>
                        <th>id</th>
                        <th>Фото</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Новая цена</th>
                        <th>Размеры</th>
                        <th>Цвета</th>
                        <th>Новинка</th>
                        <th>Популярность</th>
                        <th>Действия</th>
                    </thead>
                    <tbody>
                        <?php foreach ($products as $product): ?>
                            <tr>
                                <th><?= $product->id; ?></th>
                                <th>
                                    <img
                                        style="max-width: 100px;"
                                        src="/uploads/<?= $product->photos ? json_decode($product->photos)[0] : null; ?>"
                                    />
                                </th>
                                <th><?= $product->name; ?></th>
                                <th><?= $product->price; ?></th>
                                <th><?= $product->new_price; ?></th>
                                <th><?= $product->size; ?></th>
                                <th><?= $product->color; ?></th>
                                <th><?= $product->is_new ? 'Да' : 'Нет'; ?></th>
                                <th><?= $product->is_popular ? 'Да' : 'Нет'; ?></th>
                                <th>
                                    <a class="btn btn-primary" href="<?=Url::to(['product/edit?id='.$product->id])?>">Редактировать</a>
                                    <a class="btn btn-danger" href="<?=Url::to(['product/delete?id='.$product->id])?>">Удалить</a>
                                </th>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif;?>
        </div>
    </div>
</div>

<script>
window.addEventListener('DOMContentLoaded', function () {
    $("#product-table").DataTable({
        order: [[0, 'desc']],
        "language":
        {
            "processing": "Подождите...",
            "search": "Поиск:",
            "lengthMenu": "Показать _MENU_ записей",
            "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
            "infoEmpty": "Записи с 0 до 0 из 0 записей",
            "infoFiltered": "(отфильтровано из _MAX_ записей)",
            "infoPostFix": "",
            "loadingRecords": "Загрузка записей...",
            "zeroRecords": "Записи отсутствуют.",
            "emptyTable": "В таблице отсутствуют данные",
            "paginate": {
            "first": "Первая",
            "previous": "Предыдущая",
            "next": "Следующая",
            "last": "Последняя"
            },
            "aria": {
            "sortAscending": ": активировать для сортировки столбца по возрастанию",
            "sortDescending": ": активировать для сортировки столбца по убыванию"
            }
        }
    });
})
</script>