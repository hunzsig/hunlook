import React from "react";

import {
  ContentOutline,
  UnorderedListOutline,
  BankcardOutline,
  FileOutline,
  InformationCircleOutline,
  HandPayCircleOutline,
  QuestionCircleOutline,
  ClockCircleOutline,
  FilterOutline,
  ChatAddOutline,
  UserContactOutline,
  SmileOutline,
  KoubeiOutline,
  PictureOutline,
  MinusOutline,
} from "antd-mobile-icons";

// only one layout
export default [
  {icon: <ContentOutline/>, key: 'index', label: "快速开始"},
  {icon: <UnorderedListOutline/>, key: 'struct', label: "目录结构"},
  {icon: <FileOutline/>, key: 'update', label: "更新日志"},
  {icon: <InformationCircleOutline/>, key: 'warning', label: "注意事项"},
  {
    icon: <HandPayCircleOutline/>, key: 'example', label: "例子", children: [
      {icon: <ClockCircleOutline/>, key: 'timer', label: "计时器的运用"},
      {icon: <FilterOutline/>, key: 'filter', label: "Filter（单位组）"},
      {icon: <ChatAddOutline/>, key: 'pickHero', label: "常见两种选英雄"},
      {icon: <UserContactOutline/>, key: 'enemy', label: "设定敌人玩家"},
      {icon: <MinusOutline/>, key: 'sk_js_leap', label: "一刹"},
      {icon: <MinusOutline/>, key: 'sk_js_slash', label: "无影斩"},
    ]
  },
  {
    icon: <QuestionCircleOutline/>, key: 'other', label: "其他学习", children: [
      {icon: <SmileOutline/>, key: 'q_a', label: "询问的技巧"},
      {icon: <KoubeiOutline/>, key: 'war3_tec', label: "魔兽作图小技巧"},
      {icon: <PictureOutline/>, key: 'war3_terrainArt', label: "魔兽地形贴图路径"},
      {icon: <BankcardOutline/>, key: 'ui_fdf', label: "FDF"},
    ]
  },
]
