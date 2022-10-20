import React from "react";

import {
  AaOutline,
  BankcardOutline,
  ExclamationShieldOutline,
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
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "始める"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "プロジェクト構造"},
  {icon: <ToolOutlined/>, key: 'cmd', label: "コマンドツール"},
  {icon: <ExceptionOutlined/>, key: 'update', label: "更新日誌"},
  {icon: <BugOutlined/>, key: 'debug', label: "デバッグ"},
  {icon: <VideoCameraOutlined/>, key: 'video', label: "ビデオ録画"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "ライブラリ", children: [
      {icon: <AaOutline/>, key: 'assets', label: "資産"},
      {icon: <NodeIndexOutlined/>, key: 'bj', label: "BJ"},
      {icon: <NodeIndexOutlined/>, key: 'cj', label: "CJ"},
      {icon: <NodeIndexOutlined/>, key: 'japi', label: "JAPI(SL)"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "カラー"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "対象"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "変更"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同期"},
      {icon: <RetweetOutlined/>, key: 'async', label: "非同期"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "設定", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "バッグ"},
      {icon: <ProfileOutlined/>, key: 'description', label: "記述体"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "ダメージフロー"},
      {icon: <FireOutlined/>, key: 'enchant', label: "魔法をかける"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "テキストタグ"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反応"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "モニター装置"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任務"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "コマンドツール"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "例", children: [
      {icon: <ProfileOutlined/>, key: 'description', label: "記述体"},
      {icon: <ForwardOutlined/>, key: 'process', label: "過程"},
      {icon: <SoundOutlined/>, key: 'sound', label: "音響"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "計時係"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "価値"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難易度選択ダイアログ"},
      {icon: <StockOutlined/>, key: 'orderRoute', label: "計画"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "他のもの", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設定"},
      {icon: <SmileOutline/>, key: 'q_a', label: "に質問"},
      {icon: <CloudUploadOutlined/>, key: 'dz', label: "DZのオンライン上の注意事項"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔獣のトリック"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獣地形マップパス"},
      {icon: <ExclamationShieldOutline/>, key: 'war3_crash', label: "魔獣崩壊原因"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獣関数異同特徴"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDluaエンジン"},
      {icon: <BankcardOutline/>, key: 'fdf', label: "FDF"},
    ]
  },
]
