
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
      num: 0,
      marker: []
    }
    

    this.moveMap = this.moveMap.bind(this);
    this.makePin = this.makePin.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.moveTokyo = this.moveTokyo.bind(this);
    // this.moveSinagawa = this.moveSinagawa.bind(this);
    // this.moveSinbasi = this.moveSinbasi.bind(this);
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
      marker: marker
    }))


    var testmap = this.mapbox
    var markinfo = this.state.marker

    this.mapbox.on('dblclick', function(e) {

      var tt = 1;
      tt = 2;

      // markinfo.remove();
      
    this.setState((state)=> ({
      num: state.num + 1
    }))

      var marker2 = new mapboxgl.Marker();
      marker2.setLngLat([e.lngLat.lng, e.lngLat.lat]);

      marker2.addTo(testmap);
      // marker2.addTo(this.mapbox);

    // それまで表示していたピンを削除する
    // this.state.marker.remove();
    });

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

  makePin(e) {
    // // それまで表示していたピンを削除する
    // this.state.marker.remove();

  }

  moveMap(e) {
    // それまで表示していたピンを削除する
    this.state.marker.remove();

    var marker = new mapboxgl.Marker();
    marker.setLngLat([e._targetInst.memoizedProps.lat, e._targetInst.memoizedProps.lon]);

    var popup = new mapboxgl.Popup();
    popup.setHTML('<h3>' + e._targetInst.memoizedProps.children + '</h3>');
    marker.setPopup(popup);

    marker.addTo(this.mapbox);

    this.setState((state) => ({
      marker: marker
    }))

    var ll = new mapboxgl.LngLat(e._targetInst.memoizedProps.lat, e._targetInst.memoizedProps.lon);
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
        <div style={this.mapstyleee} className={'map'}  onClick={this.makePin}  ref={e => (this.container = e)}></div>
        {/* <button style={this.btnStyle} onClick={this.moveMap}>Click</button> */}
        <button onClick={this.moveMap} lat='140.72116702175174' lon='35.64997652994234' >Click</button>
        <button onClick={this.moveMap} lat='139.767036' lon='35.680865'>東京</button>
        <button onClick={this.moveMap} lat='139.758153' lon='35.666397'>新橋</button>
        <button onClick={this.moveMap} lat='139.74015' lon='35.629867'>品川</button>
        <div>{this.state.num}</div>
      </div>
    )
  }

}

export default App;
