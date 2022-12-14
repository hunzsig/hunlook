import router from "./router.js";
// import Www from './../pages/Www';

/**
 * 这里是h-react.HistoryInitial需要预处理的数据项
 * 会以数组的形势返回，以数组的顺序加载
 * 当HistoryInitial有传入预处理数据时，会在数据完全处理完后，在进行页面渲染
 * 数据格式：[
 *  [key,setting],[key,setting],[key,setting]...
 * ]
 * key会保存到 History.state内，
 * setting可以设 function _promise() { return new Promise... } 或值
 */
export default {
  book: "singluar", // 选一本书
  // title: "HunZsig", // title 标题，默认 <book>技术文档 · 魂书
  // cover: Www, // 封面(Composer)
  router: router,
  lang: [
    {key: "zh_cn", label: "简体中文",},
    // {key: "zh_hk", label: "香港繁體",},
    // {key: "zh_tw", label: "臺灣繁體",},
    // {key: "en_us", label: "English",},
    // {key: "ja_jp", label: "日本語",},
  ]
}
