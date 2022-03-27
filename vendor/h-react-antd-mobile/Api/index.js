import Query from "./Query";
import {Toast} from "antd-mobile";

/**
 * api 请求
 * @param scope
 * @param params
 * @param then
 * @param refresh
 * @constructor
 */
const Index = {

  setting: {},

  /**
   * 配置host
   * @param settingKey
   * @param host 链接
   * @param crypto 加密方式
   * @param append 附加参数,只支持静态数据
   */
  config: (settingKey = 'def', host, crypto = null, append = null) => {
    Index.setting[settingKey] = {
      host: host,
      crypto: crypto,
      append: append,
    };
  },

  /**
   * mixed query
   * @param settingKey
   * @returns {Query}
   */
  query: (settingKey = 'def') => {
    const setting = Index.setting[settingKey];
    if (setting === undefined) {
      throw 'setting error';
    }
    return new Query(setting);
  },

  /**
   * @param response
   * @param success
   * @param error
   * @param throwable
   */
  handle: (response, success = null, error = null, throwable = null) => {
    if (response.error === 0) {
      if (success !== null) {
        success();
      } else {
        Toast.show({
          icon: 'success',
          content: 'success',
        });
      }
    } else if (response.error === 44444) {
      Toast.show({
        icon: 'fail',
        content: 'login_offline',
      })
    } else if (response.error === 99999) {
      if (throwable !== null) {
        throwable();
      } else {
        console.error(response.msg);
        Toast.show({
          icon: 'fail',
          content: 'fail',
        });
      }
    } else {
      if (error !== null) {
        error();
      } else {
        Toast.show({
          icon: 'fail',
          content: response.msg,
        });
      }
    }
  }

};

export default Index;
