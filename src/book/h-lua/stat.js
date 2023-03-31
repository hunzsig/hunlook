import {Api} from "h-react-antd-mobile";

export default () => {
  Api.query().post({HLUA_ADD: {}});
}
