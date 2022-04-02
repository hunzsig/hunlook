import React from "react";

import {
  ContentOutline,
  UnorderedListOutline,
  BankcardOutline,
  FileOutline,
  VideoOutline,
  AppOutline,
  AaOutline,
  ExclamationTriangleOutline,
  AntOutline,
  MessageOutline,
  EditSOutline,
  DownlandOutline,
  AppstoreOutline,
  SoundOutline,
  LoopOutline,
  ClockCircleOutline,
  HandPayCircleOutline,
  QuestionCircleOutline,
  GiftOutline,
  BellOutline,
  BillOutline,
  CollectMoneyOutline,
  SetOutline,
  SmileOutline,
  LocationOutline,
  KoubeiOutline,
  PictureOutline,
  ExclamationShieldOutline,
  ShrinkOutline,
  TransportQRcodeOutline,
} from "antd-mobile-icons";

// only one layout
export default [
  {icon: <ContentOutline/>, key: 'index', label: "快速开始"},
  {icon: <UnorderedListOutline/>, key: 'struct', label: "项目结构"},
  {icon: <BankcardOutline/>, key: 'cmd', label: "命令工具"},
  {icon: <FileOutline/>, key: 'update', label: "更新日志"},
  {icon: <VideoOutline/>, key: 'video', label: "视频演示"},
  {
    icon: <AppOutline/>, key: 'lib', label: "功能库", children: [
      {icon: <AaOutline/>, key: 'assets', label: "资产"},
      {icon: <ExclamationTriangleOutline/>, key: 'bj', label: "BJ"},
      {icon: <ExclamationTriangleOutline/>, key: 'cj', label: "CJ"},
      {icon: <AntOutline/>, key: 'colour', label: "文本颜色"},
      {icon: <MessageOutline/>, key: 'description', label: "描述体"},
      {icon: <ExclamationTriangleOutline/>, key: 'japi', label: "JAPI"},
      {icon: <EditSOutline/>, key: 'modify', label: "修改器"},
      {icon: <DownlandOutline/>, key: 'process', label: "流程"},
      {icon: <AppstoreOutline/>, key: 'object', label: "对象"},
      {icon: <SoundOutline/>, key: 'sound', label: "声效"},
      {icon: <LoopOutline/>, key: 'sync', label: "同步"},
      {icon: <ClockCircleOutline/>, key: 'timer', label: "计时器"},
    ]
  },
  {
    icon: <HandPayCircleOutline/>, key: 'example', label: "例子", children: [
      {icon: <GiftOutline/>, key: 'setup', label: "预设值参考"},
      {icon: <GiftOutline/>, key: 'attributeDamage', label: "预设伤害"},
      {icon: <GiftOutline/>, key: 'attributeEnchant', label: "预设附魔"},
      {icon: <BellOutline/>, key: 'eventReaction', label: "事件反应"},
      {icon: <BillOutline/>, key: 'tpl', label: "TPL模版"},
      {icon: <CollectMoneyOutline/>, key: 'dialog', label: "难度选择对话框"},
    ]
  },
  {
    icon: <QuestionCircleOutline/>, key: 'other', label: "其他学习", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain设置"},
      {icon: <SmileOutline/>, key: 'q_a', label: "询问的技巧"},
      {icon: <LocationOutline/>, key: 'dz', label: "平台上线须知"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔兽作图小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔兽地形贴图路径"},
      {icon: <ExclamationShieldOutline/>, key: 'war3_crash', label: "魔兽常见崩溃原因"},
      {icon: <ShrinkOutline/>, key: 'war3_func', label: "魔兽函数异同特征"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
      {icon: <BankcardOutline/>, key: 'ui_fdf', label: "FDF"},
      {icon: <FileOutline/>, key: 'excel', label: "Excel"},
    ]
  },
]
