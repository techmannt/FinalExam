import { Token, api } from './api';

export const redirectForLogin = async () => {
	if (Token) {
		let result = await api('/auth/tokens/validate');
		if (result?.msg === 'loggedIn') {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
