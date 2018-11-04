import { actionTypes } from './constants';

export const setHydrate = isHydrated => ({
	type: actionTypes.SET_HYDRATE,
	isHydrated,
});
