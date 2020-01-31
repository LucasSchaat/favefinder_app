import React, {Component} from 'react'
import axios from 'axios'

class LoginRegister extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            loginToggle: true
        }
    }

    toggleLogin = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    login = (username, password) => {
        axios.post('/auth/login', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/main')
        })
    }

    register = (username, password) => {
        axios.post('/auth/register', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/main')
        })
    }

    render(){
        const {username, password, loginToggle} = this.state
        return(
            <div className='landing-container'>
                <div className='landing-box'>
                    {loginToggle ? (
                        <button onClick={this.toggleLogin}>Go To Register</button>
                    ): (
                        <button onClick={this.toggleLogin}>Go To Login</button>
                    )}
                    <div className='login-input'>
                        <p>{'Username:'}{` `}</p>
                        <input
                            name='username'
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div className='login-input'>
                        <p>{'Password:'}{` `}</p>
                        <input
                            name='password'
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                    {loginToggle ? (
                        <button onClick={() => this.login(username, password)}>Submit Login</button>
                    ): (
                        <button onClick={() => this.register(username, password)}>Submit Register</button>
                    )}

                </div>
            </div>
        )
    }
}

export default LoginRegister