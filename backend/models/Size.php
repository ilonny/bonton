<?php

namespace backend\models;

use Yii;
// use backend\Category;
/**
 * This is the model class for table "size".
 *
 * @property int $id
 * @property string $name
 * @property int $category_id
 * @property string|null $description
 * @property string|null $other
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property string|null $value
 */


function makeSingleArray($arr){
    if(!is_array($arr)) return false; 
    $tmp = array();
    foreach($arr as $val){
      if(is_array($val)){
        $tmp = array_merge($tmp, makeSingleArray($val)); 
      } else {
        $tmp[] = $val;
      }
    }
    return $tmp;
}


class Size extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'size';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'category_id'], 'required'],
            [['category_id'], 'integer'],
            [['description', 'other'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['name', 'value'], 'string', 'max' => 255],
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
            'category_id' => 'Category ID',
            'description' => 'Description',
            'other' => 'Other',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'value' => 'Value',
        ];
    }

    public function getSizeTree($first_category_child_id) {
        $res = [];
        $category = Category::findOne($first_category_child_id);
        if ($category->parent_id) {
            foreach (Size::find()->andWhere(['category_id' => $category->id])->all() as $size) {
                $res[]['id'] = $size->id;
                $res[]['name'] = $size->name;
            }
            $res[] = Size::getSizeTree($category->parent_id);
            // var_dump($res);
        } else {
            // $res[] = Size::find()->andWhere(['category_id' => $category->id])->all();
            foreach (Size::find()->andWhere(['category_id' => $category->id])->all() as $size) {
                $res[]['id'] = $size->id;
                $res[]['name'] = $size->name;
            }
        }

        return makeSingleArray($res);
    }
}
