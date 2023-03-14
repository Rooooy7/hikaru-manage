/**
 * 获得 Vue 应用的基础路径
 */
export function getBasePath() {
  return process.env.VUE_APP_APP_NAME || '/'
}

/**
 * 获得 Vue 应用的访问路径
 *
 * @param path 路径
 */
export function getPath(path) {
  // 基础路径，必须以 / 结尾
  const basePath = getBasePath()
  if (!basePath.endsWith('/')) {
    return basePath + '/'
  }
  // 访问路径，必须不能以 / 开头
  if (path.startsWith('/')) {
    path = path.substring(1)
  }
  return basePath + path
}

/**
 * 获得租户功能是否开启
 */
export function getTenantEnable() {
  // console.log("enable: " + process.env.VUE_APP_TENANT_ENABLE)
  if (process.env.VUE_APP_TENANT_ENABLE === 'true') {
    return true
  }
  if (process.env.VUE_APP_TENANT_ENABLE === 'false') {
    return false
  }
  return process.env.VUE_APP_TENANT_ENABLE || true
}

