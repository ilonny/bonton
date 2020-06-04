<?php

namespace backend\models;

use Yii;
// use Category;
/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property string $name
 * @property float $price
 * @property string|null $photos
 * @property string|null $image
 * @property string|null $image_hover
 * @property int $category_id
 * @property string|null $size
 * @property string|null $color
 * @property string|null $description
 * @property string|null $other
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property string|null $is_new
 * @property float|null $new_price
 * @property int|null $is_popular
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'price', 'category_id'], 'required'],
            [['price', 'new_price'], 'number'],
            [['description', 'other', 'is_new'], 'string'],
            [['category_id', 'is_popular'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'price' => 'Price',
            'photos' => 'Photos',
            'image' => 'image',
            'image_hover' => 'image_hover',
            'category_id' => 'Category ID',
            'size' => 'Size',
            'color' => 'Color',
            'description' => 'Description',
            'other' => 'Other',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'is_new' => 'Is New',
            'new_price' => 'New Price',
            'is_popular' => 'Is Popular',
        ];
    }

    public function findByCategory($category_id, $size = '', $color = '', $price_min = '', $price_max = '', $sort_price = '')
    {
        // var_dump($size);die();
        $cats_ids = is_array($category_id) ? $category_id : [$category_id];
        $cats = [$category_id];
        $cats_l1 = (new Category())->findSubcategories($category_id);
        foreach ($cats_l1 as $key => $cat_l1) {
            $cats_ids[] = $cat_l1->id;
            $cats_l2 = (new Category())->findSubcategories($cat_l1->id);
            foreach ($cats_l2 as $key2 => $cat_l2) {
                $cats_ids[] = $cat_l2->id;
                $cats_l3 = (new Category())->findSubcategories($cat_l2->id);
                foreach ($cats_l3 as $key2 => $cat_l3) {
                    $cats_ids[] = $cat_l3->id;
                }
            }
        }
        $cats_ids = array_unique($cats_ids, SORT_REGULAR);
        $productsQuery = Product::find()->andWhere(['in', 'category_id', $cats_ids]);
        if ($price_min) {
            $productsQuery->andWhere(['>=', 'price', $price_min]);
        }
        if ($price_max) {
            $productsQuery->andWhere(['<=', 'price', $price_max]);
        }
        if ($sort_price == 'up') {
            // var_dump(1);die();
            $productsQuery->orderBy(['price' => 'ASC']);
        }
        if ($sort_price == 'down') {
            // var_dump(2);die();
            $productsQuery->orderBy(['price' => SORT_DESC]);
        }
        $products = $productsQuery->all();

        if ($size) {
            $products = array_filter($products, function ($product) use ($size) {
                if ($product->size && $product->size !== '""') {
                    return count(array_intersect(json_decode($product->size), $size));
                }
                return false;
            });
        }
        if ($color) {
            $products = array_filter($products, function ($product) use ($color) {
                if ($product->color && $product->color !== '""') {
                    return count(array_intersect(json_decode($product->color), $color));
                }
                return false;
            });
        }
        return $products;
    }
}


//todo: write findByCategory (all childrens);
