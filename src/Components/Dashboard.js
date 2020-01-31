import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../ducks/reducer'

class Dashboard extends React.Component {
	componentDidMount(){
	    axios.get('/auth/user').then(res => {
	        console.log(res)
	        if(res.data === 'No user on session'){
	            this.props.history.push('/')
	        } else {
                this.props.getUser(res.data)
            }
	    })
	}

	render() {
        console.log(this.props)
		return (
			<div className="dashboard-container">
				<h1>Welcome to FaveFinder!</h1>
				<p>Please click the links above to continue</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { user: state.reducer.user };
}

export default connect(mapStateToProps, {getUser})(Dashboard)