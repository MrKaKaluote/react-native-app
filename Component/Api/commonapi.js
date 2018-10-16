
/**
 * author @gaosong
 * 通用api统一调用
 */
import { fetchData } from "../Global/fetch";

// 登录
export function loginIn(params) {
    return fetchData(`/root/login/checkMemberLogin`, params)
}