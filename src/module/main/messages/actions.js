import * as config from '../../../config';
import * as requestMiddleware from '../../../middlewares/request';
import Telegram from '../../../api/telegram';

const TelegramApi = new Telegram(config.TELEGRAM_BOT_APIKEY, requestMiddleware);

export const initState = {
	items    :[],
	isLoading:false,
};

export const SET_MESSAGES = '/module/main/messages/SET_MESSAGES';
export const setMessages = (items = []) => ({
	type   :SET_MESSAGES,
	payload:{
		items
	}
});

export const TOGGLE_LOADING = '/module/main/messages/TOGGLE_LOADING';
export const toggleLoading = (isLoading = false) => ({
	type: TOGGLE_LOADING,
	payload: {
		isLoading
	}
});

export const loadMessages = () => (dispatch) => {
	dispatch(toggleLoading(true));
	console.log('Loading');
	TelegramApi
		.getBotMessages()
		.then((response) => {
			dispatch(toggleLoading());
			
			if(response.data.ok === true)
			{
				dispatch(setMessages(response.data.result));
			}
		});
};
