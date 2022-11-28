import {Cookies} from 'react-cookie'
const cookies = new Cookies()

export const makeAuthHeader = () => {
	const user = cookies.get(process.env.REACT_APP_USER_COOKIE || '');
  
	if (user) {
    return {
			Authorization: `Bearer ${user.jwt}`
    }
	}
  return {};
};