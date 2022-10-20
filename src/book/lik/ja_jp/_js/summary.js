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
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <BulbOutlined/>, key: 'index', label: "始める"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "プロジェクト構造"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "コマンドツール"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <AppstoreOutlined/>, key: 'object', label: "対象"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "事件"},
  {
    icon: <FunctionOutlined/>, key: 'library', label: "ライブラリ", children: [
      {icon: <BugOutlined/>, key: 'debug', label: "デバッグ"},
      {icon: <SyncOutlined/>, key: 'sync', label: "同時発生"},
      {icon: <RetweetOutlined/>, key: 'async', label: "非同時発生"},
      {icon: <ClockCircleOutlined/>, key: 'timer', label: "計時係"},
      {icon: <HighlightOutlined/>, key: 'modify', label: "変更"},
      {icon: <ProfileOutlined/>, key: 'description', label: "記述体"},
      {icon: <ForwardOutlined/>, key: 'process', label: "過程"},
      {icon: <SoundOutlined/>, key: 'sound', label: "音響"},
      {icon: <DollarCircleOutlined/>, key: 'worth', label: "価値"},
      {icon: <FormatPainterOutlined/>, key: 'colour', label: "カラー"},
    ]
  },
  {
    icon: <DingtalkOutlined/>, key: 'setup', label: "予定設定", children: [
      {icon: <UnorderedListOutlined/>, key: 'slot', label: "バッグ"},
      {icon: <ProfileOutlined/>, key: 'description', label: "記述体"},
      {icon: <NodeExpandOutlined/>, key: 'damaging', label: "ダメージフロー"},
      {icon: <FireOutlined/>, key: 'enchant', label: "魔法付き"},
      {icon: <FontSizeOutlined/>, key: 'ttg', label: "テキストタグ"},
      {icon: <ThunderboltOutlined/>, key: 'eventReaction', label: "事件反応"},
      {icon: <CopyOutlined/>, key: 'tpl', label: "TPL"},
      {icon: <BellOutlined/>, key: 'monitor', label: "モニター監視"},
      {icon: <BellOutlined/>, key: 'propChange', label: "prop監視"},
      {icon: <ScheduleOutlined/>, key: 'quest', label: "任務"},
      {icon: <CodeOutlined/>, key: 'cmd', label: "コマンドツール"},
      {icon: <TranslationOutlined/>, key: 'i18n', label: "国際化"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'ui', label: "UIインタフェース", children: [
      {icon: <FolderViewOutlined/>, key: 'kit', label: "スイート"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "ポインタ"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "フレームアニメーション"},
      {icon: <ExpandOutlined/>, key: 'map', label: "地図"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "その他の例", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "ロードマップ"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "アクティブスキルをパッシブスキルに変更"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難易度選択ダイアログ"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "その他のラーニング", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設定"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "難読暗号化"},
      {icon: <SmileOutline/>, key: 'q_a', label: "問い合わせのテクニック"},
      {icon: <CloudUploadOutlined/>, key: 'dz', label: "DZのオンライン上の注意事項"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔獣のトリック"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獣地形マップパス"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獣関数異同特徴"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLuaエンジン"},
    ]
  },
]
