import React from 'react';

class CreateForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            imageUrl: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    
    onChangeHandler(event) {
        event.preventDefault();
        let target = event.target;

        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
                event.preventDefault();
                this.props.createGame(this.state)
            }}>
                <label>Title</label>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeHandler}
                />
                <label>Description</label>
                <textarea 
                    type="text" 
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChangeHandler}
                />
                <label>ImageUrl</label>
                <input 
                    type="text" 
                    id="imageUrl"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    onChange={this.onChangeHandler}
                />

                <input type="submit" value="Create"/>
            </form>
        </div>
    )
    } 
}

export default CreateForm;

