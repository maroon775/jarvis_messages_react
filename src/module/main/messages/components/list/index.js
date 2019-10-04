import React, {Component} from 'react';
import propTypes from 'prop-types';
import {DateTime} from 'luxon';
import * as style from './style.less';
import Hello from "../../../../../components/hello";

export default class List extends Component {
	
	componentDidMount()
	{
		this.props.onMount();
	}
	
	formatDate(timestamp) {
		const time = DateTime.fromSeconds(timestamp).setLocale('ru');
		return time.toFormat('dd MMMM HH:mm:ss')
	}
	
	renderItem(item)
	{
		return <div className={/*item.text.toString().substr(0,1) === '/' ? style.commandItem : */style.inner}>
			<header>
				<a className={style.author} href={`https://t.me/${item.from.username}`}>
					{[item.from.first_name,item.from.last_name].join(' ')}
				</a>
				/
				<time className={style.time}>{this.formatDate(item.date)}</time>
			</header>
			<div className={style.text}>
				{item.text}
			</div>
		</div>
	}
	
	renderItems()
	{
		return this.props.items.map((item, i) => <article key={i} className={style.message}>{this.renderItem(item.message)}</article>);
	}
	
	render()
	{
		console.log(this.props);
		return (
			<div className={style.root}>
				{this.props.items.length > 0 ? this.renderItems() : <div>
					<Hello />
					
					Loading items
				</div>}
			</div>
		);
	}
}

List.propTypes = {
	items: propTypes.array,
	onMount: propTypes.func
};
