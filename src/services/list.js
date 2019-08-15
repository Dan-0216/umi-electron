import request from '@/utils/request.js'
export async function getList(param){
    return request('/api/order')
}