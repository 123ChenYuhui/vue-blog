import {getToken,setToken,removeToken} from "../utils/auth";

const state = {
  token:getToken(),
  username:''
}
export default state
