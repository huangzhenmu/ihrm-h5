import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/company', 'get', data)
export const detail = data => createAPI(`/company/get/${data.id}`, 'get')