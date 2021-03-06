import React from "react";

import {
  BankcardOutline,
  ExclamationShieldOutline,
  FingerdownOutline,
  KoubeiOutline,
  PictureOutline,
  SetOutline,
  SmileOutline,
  TransportQRcodeOutline,
} from "antd-mobile-icons";

import {
  FontColorsOutlined,
  LineHeightOutlined,
  ThunderboltOutlined,
  NodeExpandOutlined,
  ScheduleOutlined,
  DingtalkOutlined,
  CodeOutlined,
  QuestionOutlined,
  MenuUnfoldOutlined,
  BorderVerticleOutlined,
  CloudUploadOutlined,
  BuildOutlined,
  ToolOutlined,
  ApartmentOutlined,
  ExceptionOutlined,
  BugOutlined,
  FunctionOutlined,
  ReadOutlined,
  UngroupOutlined,
  SyncOutlined,
  FormatPainterOutlined,
  NodeIndexOutlined,
  BorderOutlined,
  ControlOutlined,
  FileSearchOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";


// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "快速开始"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "项目结构"},
  {icon: <ToolOutlined/>, key: 'cmd', label: "命令工具"},
  {icon: <ExceptionOutlined/>, key: 'update', label: "更新日志"},
  {icon: <BugOutlined/>, key: 'print', label: "调试打印"},
  {icon: <NodeIndexOutlined/>, key: 'api', label: "API"},
  {
    icon: <UngroupOutlined/>, key: 'slk', label: "SLK", children: [
      {icon: <BorderOutlined/>, key: 'hslk1', label: "入门"},
      {icon: <ControlOutlined/>, key: 'hslk2', label: "进阶"},
      {icon: <FileSearchOutlined/>, key: 'f6', label: "原生物编字段"},
      {icon: <FileSearchOutlined/>, key: 'misc', label: "MISC数据"},
      {icon: <FileSearchOutlined/>, key: 'setData', label: "设置数据"},
      {icon: <FileExcelOutlined/>, key: 'excel', label: "Excel"},
    ]
  },
  {
    icon: <FunctionOutlined/>, key: 'lib', label: "功能库", children: [
      {icon: <NodeIndexOutlined/>, key: 'bj', label: "BJ"},
      {icon: <NodeIndexOutlined/>, key: 'cj', label: "CJ"},
      {icon: <NodeIndexOutlined/>, key: 'japi', label: "JAPI(本地)"},
      {icon: <NodeIndexOutlined/>, key: 'japi_dz', label: "JAPI(DZ)"},
      {icon: <FontColorsOutlined/>, key: 'attr', label: "属性"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同步"},
      {icon: <FormatPainterOutlined/>, key: 'color', label: "文本颜色"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "预设套路", children: [
      {icon: <FontColorsOutlined/>, key: 'attr', label: "自定义属性"},
      {icon: <LineHeightOutlined/>, key: 'attrThree', label: "三围属性影响"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "伤害流"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反应"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任务"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "命令"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "例子", children: [
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "难度选择对话框"},
      {icon: <BorderVerticleOutlined/>, key: 'attack', label: "简单刷兵"},
      {icon: <FingerdownOutline/>, key: 'pickHero', label: "常见两种选英雄"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "其他学习", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain设置"},
      {icon: <SmileOutline/>, key: 'q_a', label: "询问的技巧"},
      {icon: <CloudUploadOutlined/>, key: 'dz', label: "平台上线须知"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔兽作图小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔兽地形贴图路径"},
      {icon: <ExclamationShieldOutline/>, key: 'war3_crash', label: "魔兽常见崩溃原因"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
      {icon: <BankcardOutline/>, key: 'fdf', label: "FDF"},
    ]
  },
]
