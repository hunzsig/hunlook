import React from "react";

import {
  CollectMoneyOutline,
  FileOutline,
  KoubeiOutline,
  PictureOutline,
  SetOutline,
  SmileOutline,
  TransportQRcodeOutline,
} from "antd-mobile-icons";

import {
  AntCloudOutlined,
  AntDesignOutlined,
  ApartmentOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  BellOutlined,
  BorderOuterOutlined,
  BoxPlotOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CaretDownOutlined,
  ClockCircleOutlined,
  CloudUploadOutlined,
  CodeOutlined,
  CompassOutlined,
  CopyOutlined,
  DingtalkOutlined,
  DollarCircleOutlined,
  DragOutlined,
  DribbbleOutlined,
  ExpandOutlined,
  FireOutlined,
  FolderViewOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  FormatPainterOutlined,
  ForwardOutlined,
  FrownOutlined,
  FullscreenExitOutlined,
  FunctionOutlined,
  FundViewOutlined,
  HeartOutlined,
  HeatMapOutlined,
  HighlightOutlined,
  LoadingOutlined,
  MacCommandOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  NodeExpandOutlined,
  PictureOutlined,
  ProfileOutlined,
  PullRequestOutlined,
  QuestionOutlined,
  RadarChartOutlined,
  RadiusSettingOutlined,
  RetweetOutlined,
  ScheduleOutlined,
  SoundOutlined,
  StockOutlined,
  StrikethroughOutlined,
  SubnodeOutlined,
  SwapOutlined,
  SyncOutlined,
  ThunderboltOutlined,
  TrademarkCircleOutlined,
  TranslationOutlined,
  UnorderedListOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <BulbOutlined/>, key: 'index', label: "快速開始"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "項目結構"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "命令工具"},
  {icon: <FireOutlined/>, key: 'hot', label: "熱更新"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "事件"},
  {
    icon: <RadarChartOutlined/>, key: 'core', label: "功能核心", children: [
      {icon: <HeatMapOutlined/>, key: 'base', label: "根基庫"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "對象門面"},
      {icon: <DribbbleOutlined/>, key: 'ability', label: "技能庫"},
      {icon: <AppstoreAddOutlined/>, key: 'sublib', label: "拓展庫"},
    ]
  },
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
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "文本顏色"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "預設設計", children: [
      {icon: <MacCommandOutlined/>, key: 'game', label: "構成"},
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
      {icon: <FontSizeOutlined/>, key: 'text', label: "文本"},
      {icon: <PictureOutlined/>, key: 'backdrop', label: "背景"},
      {icon: <BorderOuterOutlined/>, key: 'label', label: "圖文"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "指針"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "幀動畫"},
      {icon: <DragOutlined/>, key: 'drag', label: "拖拽"},
      {icon: <BoxPlotOutlined/>, key: 'bar', label: "條"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'uiUp', label: "UI界面進階", children: [
      {icon: <FrownOutlined/>, key: 'problem', label: "疑難雜症"},
      {icon: <FullscreenExitOutlined/>, key: 'adapter', label: "自適應"},
      {icon: <RadiusSettingOutlined />, key: 'gradient', label: "漸變"},
      {icon: <ExpandOutlined/>, key: 'map', label: "地圖"},
      {icon: <BoxPlotOutlined/>, key: 'barState', label: "狀態條"},
      {icon: <FileOutline/>, key: 'balloon', label: "氣泡"},
      {icon: <CollectMoneyOutline/>, key: 'toast', label: "吐司"},
      {icon: <MessageOutlined/>, key: 'echo', label: "消息體"},
      {icon: <ZoomInOutlined/>, key: 'detail', label: "詳情展示"},
      {icon: <BoxPlotOutlined/>, key: 'targetGage', label: "狀態條"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "更多例子", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "路線藍圖"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "主動改被動"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難度選擇框"},
      {icon: <AntCloudOutlined/>, key: 'ai', label: "AI"},
      {icon: <ThunderboltOutlined/>, key: 'effect', label: "特效"},
      {icon: <CompassOutlined/>, key: 'aura', label: "領域"},
      {icon: <TrademarkCircleOutlined/>, key: 'region', label: "區域"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "其他學習", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設置"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "混淆加密"},
      {icon: <SmileOutline/>, key: 'q_a', label: "詢問的技巧"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "平台上線須知"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔獸作圖小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獸地形貼圖路徑"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獸函數異同特徵"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLua引擎"},
    ]
  },
  {icon: <HeartOutlined/>, key: 'sponsor', label: "熱心發電榜", net: "https://afdian.net/a/hunzsig?tab=sponsor"},
]
