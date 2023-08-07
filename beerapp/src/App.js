import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        beers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers').then(({ data }) => {
      this.setState({ beers: data });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.beers.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </div>
    );
  }
}

class Beer extends React.Component {
    render() {
      const { beer } = this.props;
  
      return (
        <div className="beer-card">
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>Tagline: {beer.tagline}</p>
          <p>Description: {beer.description}</p>
          <button>Like</button>
        </div>
      );
    }
  }