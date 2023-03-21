import React from "react";

import {
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
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <BulbOutlined/>, key: 'index', label: "Start"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "Struct"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "CMD"},
  {icon: <FireOutlined/>, key: 'hot', label: "Hot"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "Event"},
  {
    icon: <RadarChartOutlined/>, key: 'core', label: "Core", children: [
      {icon: <HeatMapOutlined/>, key: 'base', label: "Base"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "Object"},
      {icon: <DribbbleOutlined/>, key: 'ability', label: "Ability"},
      {icon: <AppstoreAddOutlined/>, key: 'sublib', label: "SubLib"},
    ]
  },
  {
    icon: <FunctionOutlined/>, key: 'library', label: "Library", children: [
      {icon: <BugOutlined/>, key: 'debug', label: "Debug"},
      {icon: <SyncOutlined/>, key: 'sync', label: "Sync"},
      {icon: <RetweetOutlined/>, key: 'async', label: "Async"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "Timer"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "Modify"},
      {icon: <ProfileOutlined/>, key: 'description', label: "Description"},
      {icon: <ForwardOutlined/>, key: 'process', label: "Process"},
      {icon: <SoundOutlined/>, key: 'sound', label: "Sound"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "Worth"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "Colour"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "Setup", children: [
      {icon: <MacCommandOutlined/>, key: 'common', label: "Common"},
      {icon: <ProfileOutlined/>, key: 'description', label: "Description"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "DmgFlow"},
      {icon: <FireOutlined/>, key: 'enchant', label: "Enchant"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "TextTag"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "EventReaction"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "Monitor"},
      {icon: <BellOutlined/>, key: 'propChange', label: "Prop"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "Quest"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "CMD"},
      {icon: <TranslationOutlined/>, key: 'i18n', label: "I18N"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'ui', label: "UI", children: [
      {icon: <FolderViewOutlined/>, key: 'kit', label: "Kit"},
      {icon: <FrownOutlined/>, key: 'problem', label: "Difficult"},
      {icon: <FontSizeOutlined/>, key: 'text', label: "Text"},
      {icon: <PictureOutlined/>, key: 'backdrop', label: "Backdrop"},
      {icon: <BorderOuterOutlined/>, key: 'label', label: "Label"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "Cursor"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "Animate"},
      {icon: <DragOutlined/>, key: 'drag', label: "Drag"},
      {icon: <BoxPlotOutlined/>, key: 'bar', label: "Bar"},
      {icon: <ProfileOutlined/>, key: 'tooltips', label: "Tooltips"},
      {icon: <FullscreenExitOutlined/>, key: 'adapter', label: "Adapter"},
      {icon: <RadiusSettingOutlined/>, key: 'gradient', label: "Gradient"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "Example", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "BluePrint"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "PosToPas"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "Dialog"},
      {icon: <AntCloudOutlined/>, key: 'ai', label: "AI"},
      {icon: <ThunderboltOutlined/>, key: 'effect', label: "Effect"},
      {icon: <CompassOutlined/>, key: 'aura', label: "Aura"},
      {icon: <TrademarkCircleOutlined/>, key: 'region', label: "Region"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "Other", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "JetbrainSetting"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "Encrypt"},
      {icon: <SmileOutline/>, key: 'learn', label: "Learn"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "Publish"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "War3Technic"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "War3Terrain"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "War3Sync"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLuaEngine"},
    ]
  },
  {icon: <HeartOutlined/>, key: 'sponsor', label: "Sponsor", net: "https://afdian.net/a/hunzsig?tab=sponsor"},
]
