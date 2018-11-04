import { actionTypes } from './constants';

const initialState = {
	hydrated: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_HYDRATE:
			return {
				...state,
				hydrated: action.isHydrated,
			};
			default:
				return state;
	}
};

export default appReducer;
