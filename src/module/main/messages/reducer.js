import * as actions from './actions';

export default function(state = actions.initState, action){
	switch(action.type)
	{
		case actions.SET_MESSAGES:
		case actions.TOGGLE_LOADING:
			return {...state, ...action.payload};
		default:
			return state;
	}
}
