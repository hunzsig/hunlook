import React from "react";

import {
  AaOutline,
  ContentOutline,
} from "antd-mobile-icons";


// only one layout
export default [
  {icon: <ContentOutline/>, key: '', label: "首页"},
  {
    icon: <AaOutline/>, key: 'abc', label: "ABC", children: [
      {icon: <ContentOutline/>, key: 'tyh', label: "abc2"},
    ]
  },
]
