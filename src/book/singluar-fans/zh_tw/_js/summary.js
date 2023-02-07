import React from "react";

import {
  AaOutline,
  ExclamationShieldOutline,
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
  VideoCameraOutlined,
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
  TeamOutlined,
  SaveOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "快速開始"},
  {icon: <TeamOutlined/>, key: 'fans', label: "粉絲版優勢"},
  {icon: <SaveOutlined/>, key: 'get', label: "獲得粉絲版"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "專案結構"},
  {icon: <ToolOutlined/>, key: 'cmd', label: "命令工具"},
  {icon: <BugOutlined/>, key: 'debug', label: "除錯列印"},
  {icon: <VideoCameraOutlined/>, key: 'video', label: "影片演示"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "功能庫", children: [
      {icon: <AaOutline/>, key: 'assets', label: "資産"},
      {icon: <NodeIndexOutlined/>, key: 'bj', label: "BJ"},
      {icon: <NodeIndexOutlined/>, key: 'cj', label: "CJ"},
      {icon: <NodeIndexOutlined/>, key: 'japi', label: "JAPI(SL)"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "文字顔色"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "物件"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "修改器"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同步"},
      {icon: <RetweetOutlined/>, key: 'async', label: "非同步"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "預設套路", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "常規欄"},
      {icon: <ProfileOutlined/>, key: 'description', label: "描述體"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "傷害流"},
      {icon: <FireOutlined/>, key: 'enchant', label: "附魔"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "飄浮字"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反應"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "監聽器"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任務"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "命令"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "例子", children: [
      {icon: <ProfileOutlined/>, key: 'description', label: "描述體"},
      {icon: <ForwardOutlined/>, key: 'process', label: "流程"},
      {icon: <SoundOutlined/>, key: 'sound', label: "聲效"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "計時器"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "層級資源"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難度選擇對話方塊"},
      {icon: <StockOutlined/>, key: 'orderRoute', label: "路線藍圖"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "其他學習", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設定"},
      {icon: <SmileOutline/>, key: 'q_a', label: "詢問的技巧"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "平臺上線須知"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獸地形貼圖路徑"},
      {icon: <ExclamationShieldOutline/>, key: 'war3_crash', label: "魔獸常見崩潰原因"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獸函式異同特徵"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
    ]
  },
]
