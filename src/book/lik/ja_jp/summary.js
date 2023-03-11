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
  {icon: <BulbOutlined/>, key: 'index', label: "始める"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "プロジェクト構造"},
  {icon: <AntDesignOutlined/>, key: 'cmd', label: "コマンドツール"},
  {icon: <FireOutlined/>, key: 'hot', label: "ねつこうしん"},
  {icon: <SubnodeOutlined/>, key: 'japi', label: "JAPI"},
  {icon: <FontColorsOutlined/>, key: 'assets', label: "Assets"},
  {icon: <PullRequestOutlined/>, key: 'event', label: "事件"},
  {
    icon: <RadarChartOutlined/>, key: 'core', label: "機能コア", children: [
      {icon: <HeatMapOutlined/>, key: 'base', label: "ベースライブラリ"},
      {icon: <AppstoreOutlined/>, key: 'object', label: "対象"},
      {icon: <DribbbleOutlined/>, key: 'ability', label: "コンピテンシー"},
      {icon: <AppstoreAddOutlined/>, key: 'sublib', label: "拡張ライブラリ"},
    ]
  },
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
      {icon: <MacCommandOutlined/>, key: 'game', label: "构成"},
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
      {icon: <FontSizeOutlined/>, key: 'text', label: "テキスト"},
      {icon: <PictureOutlined/>, key: 'backdrop', label: "図"},
      {icon: <BorderOuterOutlined/>, key: 'label', label: "図文"},
      {icon: <CaretDownOutlined/>, key: 'cursor', label: "ポインタ"},
      {icon: <LoadingOutlined/>, key: 'animate', label: "むかつく"},
      {icon: <ExpandOutlined/>, key: 'map', label: "地図"},
      {icon: <DragOutlined/>, key: 'drag', label: "ドラッグ"},
      {icon: <BoxPlotOutlined/>, key: 'bar', label: "バー"},
      {icon: <BoxPlotOutlined/>, key: 'barState', label: "状態バー"},
      {icon: <FileOutline/>, key: 'balloon', label: "風船"},
      {icon: <CollectMoneyOutline/>, key: 'toast', label: "パン"},
    ]
  },
  {
    icon: <FundViewOutlined/>, key: 'uiUp', label: "UIステップアップ", children: [
      {icon: <FrownOutlined/>, key: 'problem', label: "難病"},
      {icon: <FullscreenExitOutlined/>, key: 'adapter', label: "てきおう"},
      {icon: <RadiusSettingOutlined />, key: 'gradient', label: "グラデーション"},
      {icon: <MessageOutlined/>, key: 'echo', label: "メッセージ体"},
      {icon: <ZoomInOutlined/>, key: 'detail', label: "詳細"},
      {icon: <BoxPlotOutlined/>, key: 'targetGage', label: "ステータスバー"},
    ]
  },
  {
    icon: <BuildOutlined/>, key: 'example', label: "その他の例", children: [
      {icon: <StockOutlined/>, key: 'orderRoute', label: "ロードマップ"},
      {icon: <SwapOutlined/>, key: 'pos2pas', label: "アクティブスキルをパッシブスキルに変更"},
      {icon: <MenuUnfoldOutlined/>, key: 'dialog', label: "難易度選択ダイアログ"},
      {icon: <AntCloudOutlined/>, key: 'ai', label: "AI"},
      {icon: <ThunderboltOutlined/>, key: 'effect', label: "効果"},
      {icon: <CompassOutlined/>, key: 'aura', label: "領域"},
      {icon: <TrademarkCircleOutlined/>, key: 'region', label: "長方形"},
    ]
  },
  {
    icon: <QuestionOutlined/>, key: 'other', label: "その他のラーニング", children: [
      {icon: <SetOutline/>, key: 'jetbrain', label: "Jetbrain設定"},
      {icon: <StrikethroughOutlined/>, key: 'encrypt', label: "難読暗号化"},
      {icon: <SmileOutline/>, key: 'q_a', label: "問い合わせのテクニック"},
      {icon: <CloudUploadOutlined/>, key: 'pt', label: "発表する"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔獣のトリック"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔獣地形マップパス"},
      {icon: <BoxPlotOutlined/>, key: 'war3_func', label: "魔獣関数異同特徴"},
      {icon: <TransportQRcodeOutline/>, key: 'lua_engine', label: "YDLuaエンジン"},
    ]
  },
  {icon: <HeartOutlined/>, key: 'sponsor', label: "スポンサー", net: "https://afdian.net/a/hunzsig?tab=sponsor"},
]
