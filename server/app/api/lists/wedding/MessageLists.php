<?php

namespace app\api\lists\wedding;

use app\api\lists\BaseApiDataLists;
use app\common\model\wedding\WeddingMessage;


/**
 * 留言列表
 * Class ArticleLists
 * @package app\api\lists\article
 */
class MessageLists extends BaseApiDataLists
{
    public function lists(): array
    {
        $lists = WeddingMessage::field('name,desc,user_id,create_time')
            ->order('create_time', 'desc')
            ->select()
            ->toArray();

        return $lists;
    }
    public function count(): int
    {
        return WeddingMessage::count();
    }
}