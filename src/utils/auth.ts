import { useLocalStorage } from '@vueuse/core'
import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type'

const token = useLocalStorage(STORAGE_TOKEN_KEY, '')

function isLogin() {
  return !!token.value
}

function getToken() {
  return token.value
}

function setToken(newToken: string) {
  token.value = newToken
}

function clearToken() {
  token.value = null
}

export { clearToken, getToken, isLogin, setToken }
