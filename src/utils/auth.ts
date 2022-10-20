import {Cookies} from 'react-cookie'
const cookies = new Cookies()

export const makeAuthHeader = () => {
	let user = cookies.get(process.env.REACT_APP_USER_COOKIE || '');
  
	if (user) {
	  return {
			'uid': user.email,
	  	'access-token': user.authentication_token,
      'expiry': user.expiry,
      'client': user.client
	  }
	}
  return {};
};