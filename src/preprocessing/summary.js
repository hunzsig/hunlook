import React from "react";

import {
  ContentOutline,
  UnorderedListOutline,
  BankcardOutline,
  FileOutline,
  VideoOutline,
  AppOutline,
  AaOutline,
  ExclamationTriangleOutline,
  AntOutline,
  MessageOutline,
  EditSOutline,
  DownlandOutline,
  AppstoreOutline,
  SoundOutline,
  LoopOutline,
  ClockCircleOutline,
} from "antd-mobile-icons";

const SUMMARY = [
  {
    name: "例子",
    icon: "BuildOutlined",
    children: [
      {
        name: "预设值参考",
        icon: "UngroupOutlined",
        path: "<HOST>/docs/example/setup",
      },
      {
        name: "事件反应",
        icon: "AlertOutlined",
        path: "<HOST>/docs/example/eventReaction",
      },
      {
        name: "TPL 模版",
        icon: "CopyOutlined",
        path: "<HOST>/docs/example/tpl",
      },
      {
        name: "难度选择对话框",
        icon: "UngroupOutlined",
        path: "<HOST>/docs/example/dialog",
      },
    ],
  },
  {
    name: "其他学习",
    icon: "QuestionCircleOutlined",
    children: [
      {
        name: "Jetbrain设置",
        icon: "StarOutlined",
        path: "<HOST>/docs/other/jetbrain",
      },
      {
        name: "询问的技巧",
        icon: "MessageOutlined",
        path: "<HOST>/docs/other/q_a",
      },
      {
        name: "平台上线须知",
        icon: "CloudUploadOutlined",
        path: "<HOST>/docs/other/dz",
      },
      {
        name: "魔兽作图小技巧",
        icon: "BgColorsOutlined",
        path: "<HOST>/docs/other/war3_tec",
      },
      {
        name: "魔兽地形贴图路径",
        icon: "FundOutlined",
        path: "<HOST>/docs/other/war3_terrainArt",
      },
      {
        name: "魔兽常见崩溃原因",
        icon: "BugOutlined",
        path: "<HOST>/docs/other/war3_crash",
      },
      {
        name: "魔兽函数异同特征",
        icon: "AliyunOutlined",
        path: "<HOST>/docs/other/war3_func",
      },
      {
        name: "YDLua引擎",
        icon: "DashboardOutlined",
        path: "<HOST>/docs/other/lua_engine",
      },
      {
        name: "UI & FDF",
        icon: "HighlightOutlined",
        path: "<HOST>/docs/other/ui_fdf",
      },
      {
        name: "Excel",
        icon: "FileExcelOutlined",
        path: "<HOST>/docs/other/excel",
      },
    ],
  },
];


// only one layout
export default [
  {icon: <ContentOutline/>, key: 'index', label: "快速开始"},
  {icon: <UnorderedListOutline/>, key: 'struct', label: "项目结构"},
  {icon: <BankcardOutline/>, key: 'cmd', label: "命令工具"},
  {icon: <FileOutline/>, key: 'update', label: "更新日志"},
  {icon: <VideoOutline/>, key: 'video', label: "视频演示"},
  {
    icon: <AppOutline/>, key: 'lib', label: "功能库", children: [
      {icon: <AaOutline/>, key: 'assets', label: "资产"},
      {icon: <ExclamationTriangleOutline/>, key: 'bj', label: "BJ"},
      {icon: <ExclamationTriangleOutline/>, key: 'cj', label: "CJ"},
      {icon: <AntOutline/>, key: 'colour', label: "文本颜色"},
      {icon: <MessageOutline/>, key: 'description', label: "描述体"},
      {icon: <ExclamationTriangleOutline/>, key: 'japi', label: "JAPI"},
      {icon: <EditSOutline/>, key: 'modify', label: "修改器"},
      {icon: <DownlandOutline/>, key: 'process', label: "流程"},
      {icon: <AppstoreOutline/>, key: 'object', label: "对象"},
      {icon: <SoundOutline/>, key: 'sound', label: "声效"},
      {icon: <LoopOutline/>, key: 'sync', label: "同步"},
      {icon: <ClockCircleOutline/>, key: 'timer', label: "计时器"},
    ]
  },
]
