export default class Telegram {
	static api = null;
	static apiHost = 'https://api.telegram.org/';
	static apiKey = '';
	
	constructor(apiKey, requestMiddleware)
	{
		this.apiKey = apiKey;
		this.api = requestMiddleware.create({
			baseURL     :Telegram.apiHost,
			responseType:'json'
		});
	}
	
	getBotMessages()
	{
		return this.api.get(`/bot${this.apiKey}/getUpdates`)
	}
}
