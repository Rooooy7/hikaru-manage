// import request from '@/utils/request'
import { getRefreshToken } from '@/utils/auth'
import service from '@/utils/request'

// 刷新访问令牌
export function refreshToken() {
  return service({
    url: '/system/auth/refresh-token?refreshToken=' + getRefreshToken(),
    method: 'post'
  })
}
