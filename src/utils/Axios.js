const axios = require('axios');
const qs = require('qs');
//const system = require('system')
import system from "./System"
axios.defaults.baseURL = '/pinmao'
var token = "";
var http = {
    base: axios.defaults.baseURL,
    upload: "/pinmao",
    get: function(url, params, fun) {
        if (url.indexOf(".do") != -1) {
            axios.defaults.baseURL = "/video";
        }
        if (token == null || token == "")
            token = sessionStorage.getItem("token"); //从缓存中获取
        Object.assign(params, { token: token });
        axios.get(url, { params: params })
            .then(function(response) {
                if (response.data.code == "400") {
                    window.location.href = "/#/adminlogin";
                    return;
                }
                fun(response);
            })
            .catch((error) => {
                system.notice.message('操作失败/网络异常', 'error');
                //调用dialog
            })
            .then(function() {
                //调用dialog
            });
    },
    post: function(url, params, fun) {
        if (token == null || token == "")
            token = sessionStorage.getItem("token"); //从缓存中获取
        Object.assign(params, { token: token });
        var theparams = qs.stringify(params);
        if (url.indexOf(".do") != -1) {
            axios.defaults.baseURL = "/video";
            theparams = JSON.stringify(params);
            axios.post(url, theparams, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(function(response) {
                    if (response.data.code == "400") {
                        window.location.href = "/#/adminlogin";
                        return;
                    }
                    fun(response);
                })
                .catch((error) => {

                    system.notice.message('操作失败/网络异常', 'error');
                    //调用dialog
                })
                .then(function() {
                    //调用dialog
                });
        } else {
            axios.post(url, theparams)
                .then(function(response) {
                    if (response.data.code == "400") {
                        window.location.href = "/#/adminlogin";
                        return;
                    }
                    fun(response);
                })
                .catch((error) => {
                    system.notice.message('操作失败/网络异常', 'error');
                    //调用dialog
                })
                .then(function() {
                    //调用dialog
                });
        }

    },
    setToken: function(itoken) {
        token = itoken;
    }
}
export default http