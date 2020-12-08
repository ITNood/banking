import http from '../Http'
class api{
    async choices(url, params) {
        //请求。页面中.then执行成功时的操作。
        return await http.post(url, params)
    }
    async choiced(url, params) {
        //请求。页面中.then执行成功时的操作。
        return await http.get(url, params)
    }

}
export default new api()