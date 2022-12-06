import {Cookies} from 'react-cookie'
const cookies = new Cookies()

type UserCookie = {
  id: string
  jwt: string
}

export const setUser = (payload: UserCookie) => {
  if (!process.env.REACT_APP_USER_COOKIE){ return null }
	return cookies.set(process.env.REACT_APP_USER_COOKIE, payload, {path: '/'});
}

export const getUser = () => {
  if (!process.env.REACT_APP_USER_COOKIE){ return null }
  return cookies.get(process.env.REACT_APP_USER_COOKIE);
}

export const clearUser = () => {
  if (!process.env.REACT_APP_USER_COOKIE){ return null }
	return cookies.remove(process.env.REACT_APP_USER_COOKIE, {path: '/'});
}
