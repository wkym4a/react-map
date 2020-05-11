import React, { Component }  from 'react';
import mapboxgl from 'mapbox-gl'
// import { connect } from 'react-redux';
import './App.css';

// Appコンポーネント
class App extends Component {


  mapstyle = {
    width:"800px",
    height:"300px",
    backgroundColor:"red"
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v9',
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }




  render() {
    return(
      <div>
        MAP
        <div style={this.mapstyle} className={'map'} ref={e => (this.container = e)}></div>
      </div>
    )
  }

}

export default App;
