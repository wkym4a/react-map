import React, { Component }  from 'react';
import mapboxgl from 'mapbox-gl'
// import { connect } from 'react-redux';
import './App.css';

// Appコンポーネント
class App extends Component {


  mapstyleee = {
    width:"800px",
    height:"300px",
    backgroundColor:"red"
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v11',
      /* 地図の初期緯度経度[lng,lat] */
      center: [139.72116702175174, 35.64997652994234],
      /* 地図の初期ズームレベル */
      zoom: 8
    })

    // 地図にピンを立てる
    var marker = new mapboxgl.Marker().setLngLat([139.72116702175174, 35.64997652994234]).addTo(this.map);
    var marker2 = new mapboxgl.Marker().setLngLat([140.72116702175174, 35.64997652994234]).addTo(this.map);
  }

  componentWillUnmount() {
    this.map.remove()
  }




  render() {
    return(
      <div>
        MAP
        <div style={this.mapstyleee} className={'map'} ref={e => (this.container = e)}></div>
      </div>
    )
  }

}

export default App;
