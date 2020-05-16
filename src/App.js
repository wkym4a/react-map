
// import React, { Component } from 'react';
// // import Rect from './Rect';
// import './App.css';


// class App extends Component {


//   msgStyle = {
//     fontSize:"24pt",
//     color:"#900",
//     margin:"20px 0px",
//     padding: "5px",
//     borderBottom:"2px solid #900"
//   }
//   btnStyle = {
//     fontSize:"20pt",
//     padding:"0px 10px"
//   }


//   constructor(props){
//     super(props);
//     this.state = {
//       counter:0,
//       msg:'count start!',
//     };
//     this.doAction = this.doAction.bind(this);
//   }


//   doAction(e){
//     this.setState((state)=> ({
//       counter: state.counter + 1,
//       msg: 'count: ' + state.counter
//     }));
//   }

//   render(){
//     return <div>
//       <h1>React</h1>
//       <p style={this.msgStyle}>{this.state.msg}</p>
//       <button style={this.btnStyle} onClick={this.doAction}>Click</button>
//     </div>;
//   }


// }


// export default App;



import React, { Component }  from 'react';
// import { connect } from 'react-redux';
import './App.css';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoid2t5bTRhIiwiYSI6ImNrOTc0YnZpZzEwOXkzZW8xZjhrc3VxMTgifQ.FSjecqZ_pzwIEgPzBfsuoQ';

// Appコンポーネント
class App extends Component {

  mapstyleee = {
    width:"800px",
    height:"300px",
    backgroundColor:"red"
  }
  btnStyle = {
    fontSize:"20pt",
    padding:"0px 10px"
  }

  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    

    this.moveMap = this.moveMap.bind(this);
  }


  componentDidMount() {

    // this.setState((state) => ({
    //   map: new mapboxgl.Map({
    //     container: this.container,
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     /* 地図の初期緯度経度[lng,lat] */
    //     center: [139.72116702175174, 35.64997652994234],
    //     /* 地図の初期ズームレベル */
    //     zoom: 8
    //   }),
    //   num: 2
    // }))

    // var map = this.state.map;




    // // this.map = new mapboxgl.Map({
    this.mapbox = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v11',
      /* 地図の初期緯度経度[lng,lat] */
      center: [139.72116702175174, 35.64997652994234],
      /* 地図の初期ズームレベル */
      zoom: 8
    })

    var marker = new mapboxgl.Marker();
    marker.setLngLat([139.72116702175174, 35.64997652994234]);
    marker.addTo(this.mapbox);

    this.setState((state) => ({
      num: 2
    }))

    // // this.setState((state) => ({
    // //   map: [this.map]
    // // }))

    // // 地図にピンを立てる
    // var marker = new mapboxgl.Marker().setLngLat([139.72116702175174, 35.64997652994234]).addTo(this.state.map);
    // // var marker = new mapboxgl.Marker().setLngLat([139.72116702175174, 35.64997652994234]).addTo(map);
  }

  componentWillUnmount() {
    // this.map.remove()
  }

  moveMap(e) {

    var marker = new mapboxgl.Marker();
    marker.setLngLat([140.72116702175174, 35.64997652994234]);
    marker.addTo(this.mapbox);

    var ll = new mapboxgl.LngLat(140.72116702175174, 35.64997652994234);
    this.mapbox.panTo(ll)

    this.setState((state)=> ({
      
      num: state.num + 1
    }))

    // var marker2 = new mapboxgl.Marker();
    // marker2.setLngLat([140.22116702175174, 35.64997652994234]);
    // marker2.addTo(this.mapbox);
    // // var marker2 = new mapboxgl.Marker().setLngLat([140.72116702175174, 35.64997652994234]).addTo(map);
  }




  render() {
    return(
      <div>
        MAP
        <div style={this.mapstyleee} className={'map'} ref={e => (this.container = e)}></div>
        {/* <button style={this.btnStyle} onClick={this.moveMap}>Click</button> */}
        <button onClick={this.moveMap}>Click</button>
        <div>{this.state.num}</div>
      </div>
    )
  }

}

export default App;
