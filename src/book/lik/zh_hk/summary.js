import React from "react";

import {
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
  AntDesignOutlined,
  ApartmentOutlined,
  BugOutlined,
  FunctionOutlined,
  BulbOutlined,
  SoundOutlined,
  SyncOutlined,
  FormatPainterOutlined,
  SubnodeOutlined,
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
  FontColorsOutlined,
  StockOutlined,
  TranslationOutlined,
  FundViewOutlined,
  FolderViewOutlined,
  LoadingOutlined,
  CaretDownOutlined,
  PullRequestOutlined,
  StrikethroughOutlined,
  SwapOutlined,
  ExpandOutlined,
  FrownOutlined,
  PictureOutlined,
  MessageOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <BulbOutlined/>, key: 'index', label: "快速開始"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "項目結構"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "命令工具"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <AppstoreOutlined/>, key: 'base', label: "根基庫"},
  {icon: <AppstoreOutlined/>, key: 'object', label: "對象門面"},
  {icon: <AppstoreOutlined/>, key: 'ability', label: "技能庫"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "事件"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "重要功能", children: [
      {icon: <BugOutlined/>, key: 'debug', label: "調試打印"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同步"},
      {icon: <RetweetOutlined/>, key: 'async', label: "異步"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "計時器"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "修改器"},
      {icon: <ProfileOutlined/>, key: 'description', label: "描述體"},
      {icon: <ForwardOutlined/>, key: 'process', label: "流程"},
      {icon: <SoundOutlined/>, key: 'sound', label: "聲效"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "層級資源"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "文本顔色"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "預設設計", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "常規欄"},
      {icon: <ProfileOutlined/>, key: 'description', label: "描述體"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "傷害流"},
      {icon: <FireOutlined/>, key: 'enchant', label: "附魔"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "飄浮字"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反應"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "監聽器"},
      {icon: <BellOutlined/>, key: 'propChange', label: "參數監聽"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任務"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "命令"},
      {icon: <TranslationOutlined/>, key: 'i18n', label: "國際化"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'ui', label: "UI界面基礎", children: [
      {icon: <FolderViewOutlined/>, key: 'kit', label: "套件"},
      {icon: <PictureOutlined/>, key: 'backdrop', label: "背景"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "指針"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "幀動畫"},
      {icon: <ExpandOutlined/>, key: 'map', label: "地圖"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'uiUp', label: "UI界面進階", children: [
      {icon: <FrownOutlined/>, key: 'problem', label: "疑難雜症"},
      {icon: <MessageOutlined/>, key: 'echo', label: "消息體"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "更多例子", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "路線藍圖"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "主動改被動"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難度選擇對話框"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "其他學習", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設置"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "混淆加密"},
      {icon: <SmileOutline/>, key: 'q_a', label: "詢問的技巧"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "平臺上線須知"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔獸作圖小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獸地形貼圖路徑"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獸函數異同特徵"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
    ]
  },
]
