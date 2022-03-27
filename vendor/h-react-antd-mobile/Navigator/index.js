/**
 * @param shakes 震动时间(number) | [震动时间(number)，停止时间(number)，震动时间(number)，停止时间(number)]
 */
import {History} from "../index";

const vibration = (shakes) => {
  window.navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate;
  if (window.navigator.vibrate) {
    window.navigator.vibrate(shakes);
  }
}

const browserLangs = {
  "en": "en_us",
  "en_GB": "en_us",
  "en_US": "en_us",
  "ja": "ja_jp",
  "ja_JP": "ja_jp",
  "ko": "ko_kr",
  "ko_KR": "ko_kr",
  "zh_CN": "zh_cn",
  "zh_HK": "zh_hk",
  "zh_TW": "zh_tw"
};

const Navigator = {

  /**
   * 返回设备（或浏览器型号）
   * @returns {string}
   */
  device: () => {
    const dev = [];
    const ua = navigator.userAgent.toLowerCase();
    if (!!ua.match(/\(i[^;]+;( U;)? cpu.+mac os x/)) {
      dev.push('ios');
    }
    if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
      dev.push('android');
    }
    if (ua.indexOf('iphone') > -1) {
      dev.push('iphone');
    }
    if (ua.indexOf('ipad') > -1) {
      dev.push('ipad');
    }
    if (ua.match(/MicroMessenger\/[0-9]/i)) {
      dev.push('wechat');
    }
    if (ua.match(/QQ\/[0-9]/i)) {
      dev.push('qq');
    }
    if (ua.indexOf('windows phone') > -1) {
      dev.push('wp');
    }
    if (ua.indexOf('lumia') > -1) {
      dev.push('lumia');
    }
    return dev.join(' ');
  },
  language: () => {
    let lang = navigator.language || navigator.browserLanguage;
    lang = lang.replace('-', '_');
    return browserLangs[lang] || 'zh_cn';
  },
  /**
   * @param 震动
   */
  vibration: {
    short: () => {
      vibration(50);
    },
    long: () => {
      vibration(500);
    },
    double: () => {
      vibration([50, 50, 50, 50]);
    },
    shake: (shake) => {
      vibration(shake);
    }
  },
  banReturnPressCount: 0,
  banReturn: () => {
    if (window.history) {
      window.history.pushState(null, null, document.URL);
      window.onpopstate = function (event) {
        Navigator.banReturnPressCount += 1;
        const _t = window.setTimeout(() => {
          window.clearTimeout(_t);
          Navigator.banReturnPressCount -= 1;
        }, 200);
        if (Navigator.banReturnPressCount >= 2) {
          window.history.back();
        } else {
          window.history.pushState(null, null, History.state.currentUrl ? History.state.currentUrl : document.URL);
        }
      };
      const banCode = (e) => {
        const ev = e || window.event;
        const obj = ev.target || ev.srcElement;
        const t = obj.type || obj.getAttribute('type');
        const isBack = ev.keyCode === Number.parseInt(1e3, 2);
        let isReadOnly = obj.getAttribute('readonly');
        let isEnabled = obj.getAttribute('enabled');
        isReadOnly = isReadOnly === null ? false : isReadOnly;
        isEnabled = isEnabled === null ? true : isEnabled;
        const iptCom = ["password", "text", "textarea", "search"];
        const flag1 = (isBack && iptCom.includes(t) && (isReadOnly || isEnabled !== true));
        const flag2 = (isBack && !iptCom.includes(t));
        if (flag2) {
          return false;
        }
        if (flag1) {
          return false;
        }
      }
      document.onkeypress = banCode;
      document.onkeydown = banCode;
    }
  }
}

export default Navigator;
