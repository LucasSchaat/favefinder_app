import React, {Component} from 'react'
import axios from 'axios'

class AddFave extends Component {
    constructor(){
        super()
        this.state = {
            imageInput: '',
            titleInput: '',
            contentInput: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submit = (image, title, content) => {
        axios.post(`/api/fave`, {image, title, content}).then( () => {
            this.props.history.push('/all-faves')
        })
    }
    
    render(){
        const {imageInput, titleInput, contentInput} = this.state
        return(
            <div className='add-form-container'>
                <div className='add-box'>
                    <input
                        name='titleInput'
                        value={titleInput}
                        onChange={e=>this.handleChange(e)}
                        placeholder='Post Title'
                    />
                    <img
                        src={imageInput || 'data:image/png;base64,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'}
                        alt='preview'
                        className='image-preview'
                    />
                    <input
                        name='imageInput'
                        value={imageInput}
                        onChange={e=>this.handleChange(e)}
                        placeholder='Image URL'
                    />
                    <textarea
                        name='contentInput'
                        value={contentInput}
                        onChange={e=>this.handleChange(e)}
                        placeholder='Add your comments here'
                    />
                    <button className='submit-form' onClick={() => this.submit(imageInput, titleInput, contentInput)}>Submit Fave!</button>
                </div>
            </div>
        )
    }
}

export default AddFave