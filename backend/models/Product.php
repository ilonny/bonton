<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property string $name
 * @property float $price
 * @property string|null $photos
 * @property int $category_id
 * @property string|null $size
 * @property string|null $color
 * @property string|null $description
 * @property string|null $other
 * @property string|null $created_at
 * @property string|null $updated_at
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
            [['price'], 'number'],
            [['photos', 'size', 'color', 'description', 'other'], 'string'],
            [['category_id'], 'integer'],
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
            'category_id' => 'Category ID',
            'size' => 'Size',
            'color' => 'Color',
            'description' => 'Description',
            'other' => 'Other',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
