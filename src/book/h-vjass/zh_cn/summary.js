import React from "react";

import {
  BankcardOutline,
  FingerdownOutline,
  KoubeiOutline,
  PictureOutline,
  SmileOutline,
  UserContactOutline,
} from "antd-mobile-icons";

import {
  ApartmentOutlined,
  ClockCircleOutlined,
  EllipsisOutlined,
  FilterOutlined,
  HeartOutlined,
  ReadOutlined,
  WarningOutlined,
} from "@ant-design/icons";

// only one layout
export default [
  {icon: <ReadOutlined/>, key: 'index', label: "快速开始"},
  {icon: <ApartmentOutlined/>, key: 'struct', label: "目录结构"},
  {icon: <WarningOutlined/>, key: 'warning', label: "注意事项"},
  {icon: <SmileOutline/>, key: 'q_a', label: "询问的技巧"},
  {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔兽作图小技巧"},
  {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔兽地形贴图路径"},
  {icon: <BankcardOutline/>, key: 'ui_fdf', label: "FDF"},
  {icon: <ClockCircleOutlined/>, key: 'timer', label: "计时器的运用"},
  {icon: <FilterOutlined/>, key: 'filter', label: "Filter（单位组）"},
  {icon: <FingerdownOutline/>, key: 'pickHero', label: "常见两种选英雄"},
  {icon: <UserContactOutline/>, key: 'enemy', label: "设定敌人玩家"},
  {icon: <EllipsisOutlined/>, key: 'sk_js_leap', label: "一刹"},
  {icon: <EllipsisOutlined/>, key: 'sk_js_slash', label: "无影斩"},
  {icon: <HeartOutlined/>, key: 'sponsor', label: "热心发电榜", net: "https://afdian.net/a/hunzsig?tab=sponsor"},
]
