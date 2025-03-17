<?php
namespace app\api\controller;

use WpOrg\Requests\Requests;

/**
 * 婚礼信息管理
 * Class WeddingController
 * @package app\api\controller
 */
class ChatController extends BaseApiController
{
    public array $notNeedLogin = ['Completions'];

    public function Completions()
    {
        $url = "https://api.siliconflow.cn/v1/chat/completions";
        $response = Requests::post($url, [
            'Authorization' => 'Bearer ' . $this->request->header('Authorization', 'sk-lkbsweqyohetavaosagiqhvcvaafgddkhzppkzfcudigxnys'),
            'Content-Type' => 'application/json'
        ], json_encode($this->request->post()));
        return $this->data($response->body);
        //return $this->dataLists(new MessageLists());
    }

}
