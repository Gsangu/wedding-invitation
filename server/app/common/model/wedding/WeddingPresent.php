<?php

namespace app\common\model\wedding;

use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;


/**
 * 出席信息模型
 * Class WeddingPresent
 * @package app\common\model\wedding;
 */
class WeddingPresent extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';
}