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
  QuestionCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "Start"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "Struct"},
  {icon: <ToolOutlined/>, key: 'cmd', label: "CMD Tool"},
  {icon: <BugOutlined/>, key: 'debug', label: "Debug"},
  {icon: <VideoCameraOutlined/>, key: 'video', label: "Video"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "Library", children: [
      {icon: <AaOutline/>, key: 'assets', label: "Assets"},
      {icon: <NodeIndexOutlined/>, key: 'bj', label: "BJ"},
      {icon: <NodeIndexOutlined/>, key: 'cj', label: "CJ"},
      {icon: <NodeIndexOutlined/>, key: 'japi', label: "JAPI(SL)"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "Colour"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "Object"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "Modify"},
      {icon: <SyncOutlined/>, key: 'sync', label: "Sync"},
      {icon: <RetweetOutlined/>, key: 'async', label: "Async"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "Setup", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "Slots"},
      {icon: <ProfileOutlined/>, key: 'description', label: "Description"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "DamageFlow"},
      {icon: <FireOutlined/>, key: 'enchant', label: "Enchant"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "TTG"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "Event"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "Monitor"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "Quest"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "Command"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "Example", children: [
      {icon: <ProfileOutlined/>, key: 'description', label: "Description"},
      {icon: <ForwardOutlined/>, key: 'process', label: "Process"},
      {icon: <SoundOutlined/>, key: 'sound', label: "Sound"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "Timer"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "Worth"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "Dialog"},
      {icon: <StockOutlined/>, key: 'orderRoute', label: "BluePrint"},
    ]
  },
  {icon: <QuestionCircleOutlined/>, key: 'problemUI', label: "UI problems"},
  {
    icon: <QuestionOutlined/>, key: 'other', label: "Other", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "JetbrainSetting"},
      {icon: <SmileOutline/>, key: 'q_a', label: "Q&A"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "Publish"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "War3Terrain"},
      {icon: <ExclamationShieldOutline/>, key: 'war3_crash', label: "War3Crash"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "War3Sync"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLuaEngine"},
    ]
  },
  {icon: <HeartOutlined/>, key: 'sponsor', label: "Sponsor", net: "https://afdian.net/a/hunzsig?tab=sponsor"},
  {icon: <TeamOutlined/>, key: 'fans', label: "Fans"},
]
