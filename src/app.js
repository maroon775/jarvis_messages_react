import React, {Component} from 'react';
import 'normalize.css';
import './assets/style.css';

import Messages from "./module/main/messages";


export default class App extends Component {
	render()
	{
		return (<Messages />);
	}
}
