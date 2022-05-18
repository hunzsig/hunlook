import React from "react";

import {
  AaOutline,
  AntOutline,
  AppOutline,
  BankcardOutline,
  BellOutline,
  CollectMoneyOutline,
  ContentOutline,
  EnvironmentOutline,
  ExclamationShieldOutline,
  ExclamationTriangleOutline,
  FileOutline,
  FileWrongOutline,
  FingerdownOutline,
  GiftOutline,
  GlobalOutline,
  HandPayCircleOutline,
  KoubeiOutline,
  LocationOutline,
  LoopOutline,
  PictureOutline,
  PlayOutline,
  QuestionCircleOutline,
  SetOutline,
  SmileOutline,
  TransportQRcodeOutline,
  UnorderedListOutline,
} from "antd-mobile-icons";

// only one layout
export default [
  {icon: <ContentOutline/>, key: 'index', label: "快速开始"},
  {icon: <UnorderedListOutline/>, key: 'struct', label: "项目结构"},
  {icon: <BankcardOutline/>, key: 'cmd', label: "命令工具"},
  {icon: <FileOutline/>, key: 'update', label: "更新日志"},
  {icon: <FileWrongOutline/>, key: 'print', label: "调试打印"},
  {
    icon: <GlobalOutline/>, key: 'slk', label: "SLK", children: [
      {icon: <EnvironmentOutline/>, key: 'hslk1', label: "入门"},
      {icon: <EnvironmentOutline/>, key: 'hslk2', label: "进阶"},
      {icon: <FileOutline/>, key: 'f6', label: "原生物编字段"},
      {icon: <FileOutline/>, key: 'misc', label: "MISC数据"},
      {icon: <FileOutline/>, key: 'excel', label: "Excel"},
    ]
  },
  {
    icon: <AppOutline/>, key: 'lib', label: "功能库", children: [
      {icon: <AaOutline/>, key: 'api', label: "API"},
      {icon: <ExclamationTriangleOutline/>, key: 'bj', label: "BJ"},
      {icon: <ExclamationTriangleOutline/>, key: 'cj', label: "CJ"},
      {icon: <ExclamationTriangleOutline/>, key: 'japi', label: "JAPI(本地)"},
      {icon: <ExclamationTriangleOutline/>, key: 'japi_dz', label: "JAPI(DZ)"},
      {icon: <KoubeiOutline/>, key: 'attr', label: "属性"},
      {icon: <LoopOutline/>, key: 'sync', label: "同步"},
      {icon: <AntOutline/>, key: 'color', label: "文本颜色"},
    ]
  },
  {
    icon: <HandPayCircleOutline/>, key: 'example', label: "例子", children: [
      {icon: <CollectMoneyOutline/>, key: 'dialog', label: "难度选择对话框"},
      {icon: <FingerdownOutline/>, key: 'pickHero', label: "常见两种选英雄"},
      {icon: <PlayOutline/>, key: 'attack', label: "简单刷兵"},
      {icon: <GiftOutline/>, key: 'attr', label: "自定义Attr属性"},
      {icon: <GiftOutline/>, key: 'damaging', label: "预设伤害流"},
      {icon: <BellOutline/>, key: 'eventReaction', label: "事件反应"},
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
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
      {icon: <BankcardOutline/>, key: 'ui_fdf', label: "FDF"},
    ]
  },
]
