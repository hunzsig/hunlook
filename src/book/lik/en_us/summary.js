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
  ZoomInOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <BulbOutlined/>, key: 'index', label: "Start"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "Struct"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "CMD"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <AppstoreOutlined/>, key: 'base', label: "Base"},
  {icon: <AppstoreOutlined/>, key: 'object', label: "Object"},
  {icon: <AppstoreOutlined/>, key: 'ability', label: "Ability"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "Event"},
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
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "Slots"},
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
      {icon: <PictureOutlined/>, key: 'backdrop', label: "Backdrop"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "Cursor"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "Animate"},
      {icon: <ExpandOutlined/>, key: 'map', label: "Map"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'uiUp', label: "UI UP", children: [
      {icon: <FrownOutlined/>, key: 'problem', label: "Difficult"},
      {icon: <MessageOutlined/>, key: 'echo', label: "Echo"},
      {icon: <ZoomInOutlined/>, key: 'detail', label: "Detail"},
      {icon: <BoxPlotOutlined/>, key: 'targetGage', label: "TargetGage"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "Example", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "BluePrint"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "PosToPas"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "Dialog"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "Other", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "JetbrainSetting"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "Encrypt"},
      {icon: <SmileOutline/>, key: 'q_a', label: "Q&A"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "Publish"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "War3Technic"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "War3Terrain"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "War3Sync"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLuaEngine"},
    ]
  },
]
