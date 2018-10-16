/**
 * 封装请求方法
 */
let baseurl = "http://114.55.72.164:8091"
export function fetchData(url, params) {
    url = `http://114.55.72.164:8091${url}`;
    params = {
        body: params
    }
    let token = ''
    storage.load({
        key: 'loginState'
    }).then(ret => {
        token = ret.token
    }).catch(err => {
        token = ''
    })
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': token
            },
            body: JSON.stringify(params),   //body参数，通常需要转换成字符串后服务器才能解析
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('res:', url, responseData);   //网络请求成功返回的数据
                resolve(responseData);
            })
            .catch((err) => {
                console.log('err:', url, err);   //网络请求失败返回的数据  
                reject(err);
            });
    });

}