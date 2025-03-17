<?php

namespace app\api\logic;

use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\wedding\WeddingMessage;
use app\common\model\wedding\WeddingPresent;

/**
 * 婚礼逻辑
 * Class WeddingLogic
 * @package app\api\logic
 */
class WeddingLogic extends BaseLogic
{
    /**
     * @notes  添加资讯
     * @param array $params
     * @author heshihu
     * @date 2022/2/22 9:57
     */
    public static function addMessage(array $params, $userId)
    {
        WeddingMessage::create([
            'name' => $params['name'],
            'user_id' => $userId,
            'desc' => $params['desc'] ?? '',
            'create_time' => time(),
        ]);
    }

    public static function addOrUpdatePresent(array $params, $userId)
    {
        $present = WeddingPresent::where('user_id', $userId)->findOrEmpty();
        if ($present->isEmpty()) {
            $present->save([
                'name' => $params['name'],
                'phone' => $params['phone'],
                'count' => $params['count'],
                'desc' => $params['desc']?? '',
                'user_id' => $userId,
                'create_time' => time(),
            ]);
        } else {
            $present->save([
                'name' => $params['name'],
                'phone' => $params['phone'],
                'count' => $params['count'],
                'desc' => $params['desc']?? '',
                'update_time' => time(),
            ]);
        }
    }

}