<?php

namespace app\common\model\wedding;

use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;


/**
 * 留言信息模型
 * Class WeddingMessage
 * @package app\common\model\wedding;
 */
class WeddingMessage extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';
}