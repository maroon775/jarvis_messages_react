import {connect} from 'react-redux';
import * as actions from './actions';
import List from './components/list';

const mapStateToProps = (state) => state.main.messages;

const mapDispatchToProps = (dispatch) => ({
	onMount: () => dispatch(actions.loadMessages()),
	onGetUpdate: () => dispatch(actions.loadMessages()),
// 	onSendMessage: (message) => dispatch(actions.()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
