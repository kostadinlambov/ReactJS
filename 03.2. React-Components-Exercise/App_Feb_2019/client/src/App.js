import React, { Component } from 'react';
import './App.css';
import Street from './Street/Street';
import House from './House/House';
import HouseDetails from './HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      streets: [],
      selectedStreetIndex: 1,
      selectedHouseIndex: 1,
      hasFetched: false

    }
  }

  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        debugger;
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      })
  }

  getSelectedStreet() {
    return this.state.streets[this.state.selectedStreetIndex].homes;
  }

  getSelectedHouse() {
    console.log(this.state.streets[this.state.selectedStreetIndex].homes[this.state.selectedHouseIndex])
    debugger;
    return this.state.streets[this.state.selectedStreetIndex].homes[this.state.selectedHouseIndex];
  }

  houseHoverEvent(index) {
    debugger;
    this.setState({
      selectedHouseIndex: index
    })
  }

  streetHoverEvent(index) {
    this.setState({
      selectedStreetIndex: index
    })
  }

  render() {
    if (!this.state.hasFetched) {
      return <dir>Loading...</dir>;
      // return null;
    }

    const { type, description, imageUrl, price } = this.getSelectedHouse()


    return (
      <div className="App">
        <div className="street">
          <h2>Streets</h2>
          {
            this.state.streets.length > 0
              ? this.state.streets.map((street, index) => {
                return (<Street
                  location={street.location}
                  key={index}
                  id={index}
                  streetHoverEvent={this.streetHoverEvent.bind(this)}
                />)
              })
              : null}
        </div>

        <div className="houses">
          <h2>Houses</h2>
          {this.state.streets.length > 0
            ? this.getSelectedStreet().map((home, index) => {
              return (
                <House
                  type={home.type}
                  description={home.description}
                  id={index}
                  imageUrl={home.imageUrl}
                  price={home.price}
                  key={index}
                  houseHoverEvent={this.houseHoverEvent.bind(this)}
                />
              )
            })
            :null
          }
        </div>

        {
          this.state.streets.length > 0
            ? <HouseDetails
              type={type}
              description={description}
              imageUrl={imageUrl}
              price={price}
              key={this.state.selectedHouseIndex}
            />
            : null}
      </div>
    );
  }
}

export default App;
