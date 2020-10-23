import request from '@/untils/request/index.js'

export function apiGetBanner(data) {
    return request.request({
        url: '/banner',
        method: 'GET',
        data: data,
        authType: 'None'
    })
}