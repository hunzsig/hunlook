import React from "react";

import {
  AaOutline,
  BankcardOutline,
  KoubeiOutline,
  PictureOutline,
  SetOutline,
  SmileOutline,
  TransportQRcodeOutline,
} from "antd-mobile-icons";

import {
  ThunderboltOutlined,
  NodeExpandOutlined,
  DingtalkOutlined,
  QuestionOutlined,
  CloudUploadOutlined,
  BuildOutlined,
  ToolOutlined,
  ApartmentOutlined,
  ExceptionOutlined,
  BugOutlined,
  FunctionOutlined,
  ReadOutlined,
  SoundOutlined,
  SyncOutlined,
  FormatPainterOutlined,
  NodeIndexOutlined,
  FireOutlined,
  AppstoreOutlined,
  CopyOutlined,
  ClockCircleOutlined,
  RetweetOutlined,
  BoxPlotOutlined,
  HighlightOutlined,
  DollarCircleOutlined,
  MenuUnfoldOutlined,
  ForwardOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  CodeOutlined,
  BellOutlined,
  UnorderedListOutlined,
  FontSizeOutlined,
  StockOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "快速开始"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "项目结构"},
  {icon: <ToolOutlined/>, key: 'cmd', label: "命令工具"},
  {icon: <ExceptionOutlined/>, key: 'update', label: "更新日志"},
  {icon: <BugOutlined/>, key: 'debug', label: "调试打印"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "功能库", children: [
      {icon: <AaOutline/>, key: 'assets', label: "资产"},
      {icon: <NodeIndexOutlined/>, key: 'bj', label: "BJ"},
      {icon: <NodeIndexOutlined/>, key: 'cj', label: "CJ"},
      {icon: <NodeIndexOutlined/>, key: 'japi', label: "JAPI"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "文本颜色"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "对象"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "修改器"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同步"},
      {icon: <RetweetOutlined/>, key: 'async', label: "异步"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "预设套路", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "常规栏"},
      {icon: <ProfileOutlined/>, key: 'description', label: "描述体"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "伤害流"},
      {icon: <FireOutlined/>, key: 'enchant', label: "附魔"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "飘浮字"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反应"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "监听器"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任务"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "命令"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "例子", children: [
      {icon: <ProfileOutlined/>, key: 'description', label: "描述体"},
      {icon: <ForwardOutlined/>, key: 'process', label: "流程"},
      {icon: <SoundOutlined/>, key: 'sound', label: "声效"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "计时器"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "层级资源"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "难度选择对话框"},
      {icon: <StockOutlined/>, key: 'orderRoute', label: "路线蓝图"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "其他学习", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain设置"},
      {icon: <SmileOutline/>, key: 'q_a', label: "询问的技巧"},
      {icon: <CloudUploadOutlined/>, key: 'dz', label: "平台上线须知"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔兽作图小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔兽地形贴图路径"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔兽函数异同特征"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
      {icon: <BankcardOutline/>, key: 'fdf', label: "FDF"},
    ]
  },
]
