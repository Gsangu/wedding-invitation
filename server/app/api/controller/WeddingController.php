<?php
namespace app\api\controller;


use app\api\lists\wedding\MessageLists;
use app\api\lists\wedding\PresentLists;
use app\api\logic\WeddingLogic;

/**
 * 婚礼信息管理
 * Class WeddingController
 * @package app\api\controller
 */
class WeddingController extends BaseApiController
{
    public array $notNeedLogin = ['MessageLists'];

    public function MessageLists()
    {
        return $this->dataLists(new MessageLists());
    }

    public function presentLists()
    {
        return $this->dataLists(new PresentLists());
    }

    public function addMessage()
    {
        $params = $this->request->post();
        WeddingLogic::addMessage($params, $this->userId);
        return $this->success('添加成功');
    }

    public function addOrUpdatePresent() {
        $params = $this->request->post();
        WeddingLogic::addOrUpdatePresent($params, $this->userId);
        return $this->success('添加成功');
    }

}
