import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class NavBar extends React.Component {

    render(){
        console.log(this.props);
        if (this.props.location.pathname === "/") {
            return <></>;
        } else {
            return (
                <div className="nav-bar">
                    <div onClick={() => this.props.history.push("/main")} className="logo">
                        FaveFinder
                    </div>
                    <div className="nav-links">
                        <div className='link' onClick={() => this.props.history.push("/add-fave")}>Add A Fave</div>
                        <div className='link' onClick={() => this.props.history.push("/all-faves")}>
                            Everyone's Faves
                        </div>
                        <div className='link' onClick={() => this.props.history.push("/my-faves")}>My Faves</div>
                    </div>
                    <div className="profile-info">
                        <div className="welcome">Welcome {this.props.user.username}!</div>
                        <button
                            onClick={() => axios.post('/auth/logout').then(()=> this.props.history.push('/'))}
                            className='logout'
                        >Logout</button>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
	return { user: state.reducer.user };
}
export default connect(mapStateToProps)(withRouter(NavBar));
