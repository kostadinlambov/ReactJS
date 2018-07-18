import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class AddPokemonForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {},
            pokemonColection: []

        };

        console.log(this.props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const name = event.target.dataset.name;
        const value = event.target.value;
        const newObj = {}
        newObj[name] = value;

        console.log(name + ': ' + value)

        this.setState({
            form: Object.assign(this.state.form, newObj)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://localhost:5000/pokedex/create',
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.state.form), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(data => data.json())
            .then(response => {
                if (response.success) {
                    window.location.reload()
                }
                // window.location.reload()
                this.setState({ pokemonColection: response.pokemonColection })
            }).catch(err => console.log(err))
    }

    render = () => {
        return (
            <div>
                <h1>Create Pokemon</h1>
                <form className="max-width-60">
                    {/* <div style={{ display: 'inline-grid' }}> */}
                        <div className="form-group">

                            <Link to='/' className='logout' onClick={this.logout}>Logout</Link><br/>
                            <label className="text-center" htmlFor="exampleInputEmail1">Create Pokemon</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pokemonName"
                                placeholder="Enter pokemon name"
                                data-name="pokemonName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pokemonImg">Pokemon Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pokemonImg"
                                placeholder="Enter pokemon image url"
                                data-name="pokemonImg"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pokemonInfo">Pokemon Info</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pokemonInfo"
                                placeholder="Enter pokemon info"
                                data-name="pokemonInfo"
                                onChange={this.handleChange}
                            />
                        </div>
                        <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Create Pokemon</button>
                    {/* </div> */}
                </form>
            </div>
        )
    }
}


