import router from "./router.js";

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
  // stat: "http://api.hunzsig.org:2333/hlua", // 统计
  // bgm: "https://github.com/singluar/assets/raw/main/war3mapSound/bgm/Geoff%20Knorr%20-%20China%20(The%20Atomic%20Era).mp3",
  title: undefined, // title 标题，默认 <book>技术文档 · 魂书
  router: router,
  lang: [
    {key: "zh_cn", label: "简体中文",},
    {key: "en_us", label: "English",},
  ]
}
