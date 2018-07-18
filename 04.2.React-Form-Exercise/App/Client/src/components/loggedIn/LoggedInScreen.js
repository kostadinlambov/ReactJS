import React, { Component } from 'react'
import AddPokemonForm from './AddPokemomnForm'
import Pokemon from './Pokemon'

export default class LoggedInScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokeArray: []
        };
        // this.updateRoster = this.updateRoster.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:5000/pokedex/pokedex')
        .then(rawData => rawData.json())
        .then(response => this.setState({pokeArray: response.pokemonColection}))
        .catch(err => console.log(err))
    }

    // updateRoster(newRoster){
    //     this.setState({pokeArray: newRoster})
    // }


    render = () => {
        return (
            // <div style={{ display: 'inline-grid' }}>
            <div>
                <AddPokemonForm />
                {/* <AddPokemonForm updateRoster={this.updateRoster}/> */}
                {this.state.pokeArray.map(pokemon => <Pokemon item={pokemon}/>)}
            </div>
        )
    }

}


