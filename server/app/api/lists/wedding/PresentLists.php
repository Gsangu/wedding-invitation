<?php

namespace app\api\lists\wedding;

use app\api\lists\BaseApiDataLists;
use app\common\model\wedding\WeddingPresent;


/**
 * 出席列表
 * Class ArticleLists
 * @package app\api\lists\article
 */
class PresentLists extends BaseApiDataLists
{
    public function lists(): array
    {
        $lists = WeddingPresent::field('id,name,phone,count,desc,create_time')
            ->order('create_time', 'desc')
            ->select()
            ->toArray();

        return $lists;
    }
    public function count(): int
    {
        return WeddingPresent::count();
    }
}