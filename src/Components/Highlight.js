import React, {Component} from 'react'
import axios from 'axios'

class Highlight extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            title: '',
            image: '',
            content: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/fave/${this.props.match.params.id}`).then(res => {
            this.setState({
                username: res.data.username,
                title: res.data.title,
                image: res.data.image,
                content: res.data.content
            })
        })
    }

    render(){
        const {username, title, image, content} = this.state
        return (
            <div className='highlight-container'>
                <div className='highlight-box'>
                    <h2>Posted By: {username}</h2>
                    <h2>{title}</h2>
                    <img src={image} alt='posted fave pic'/>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}

export default Highlight