import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Detail from './Detail.js';
import Pagination from './Pagination.js';
import anime from 'animejs';
import Image from './Image.js';

class App extends Component {
  constructor(props){
    super(props);
    this.ref_App = React.createRef();
    this.state = {
      selected: 0,
      content: [
        {
          name: 'Santorini',
          description: 'The 1st city in my bucket list.',  
          time: '10/2016',
          photos: [require('./assets/1x/s-f.jpg'), require('./assets/Santorini/2.jpg'), require('./assets/1x/s-m.png'), 20 ],
          // photos array format: Main photo, secondary photo, Mask for layering effect, topMargin for City name, leftMargin for City name, City name text color. 
          gallery: [
            {
              src:require('./assets/Santorini/1.jpeg'), 
              name: 'Fira Ocean',
              caption: 'Fira at the gloriest time of the day.'
            },
            {
              src:require('./assets/Santorini/2.jpg'), 
              name: 'Tunnel',
              caption: 'Hide away from the heat.'
            },
            {
              src:require('./assets/Santorini/3.jpg'), 
              name: 'Greek Yogurt',
              caption: 'Little treat after lunch.'
            },
            {
              src:require('./assets/Santorini/4.jpg'), 
              name: 'A Lone Boat',
              caption: 'Approaching the harbour.'
            },
            {
              src:require('./assets/Santorini/5.jpg'), 
              name: 'Tourist',
              caption: 'Blending in with tourist group.'
            },
            {
              src:require('./assets/Santorini/6.jpg'), 
              name: 'Frame',
              caption: 'Santorini throught a frame.'
            },
          ],
        },
        {
          name: 'Crete',
          description: 'The next destination after Santorini which I know little about.',  
          time: '10/2016',
          photos: [require('./assets/1x/Crete-f.jpg'),  require('./assets/Crete/2.jpg'), require('./assets/1x/Crete-m.png'), 10, 0 ],
          gallery: [
            {
              src:require('./assets/Crete/1.jpg'), 
              name: 'Lighthouse',
              caption: 'Gorgeous sunset at Chania Port.'
            },
            {
              src:require('./assets/Crete/2.jpg'), 
              name: 'Sunset',
              caption: 'Dinner with view.'
            },
            {
              src:require('./assets/Crete/3.jpg'), 
              name: 'Sunrise',
              caption: 'Sunrise at the airport.'
            },
            
          ],
        },
        {
          name: 'Venice',
          description: 'One of the most, if not the most glorious locations in the world.',  
          time: '1/2017',
          photos: [require('./assets/1x/Venice-f.jpg'),  require('./assets/Venice/2.jpg'), require('./assets/1x/Venice-m.png'), 5 , , 'rgba(119,71,57,.7)' ],
          gallery: [
            {
              src:require('./assets/Venice/1.jpg'), 
              name: 'Backlight',
              caption: 'Afternoon shine.'
            },
            {
              src:require('./assets/Venice/2.jpg'), 
              name: 'The View',
              caption: 'No caption needed.'
            },
            {
              src:require('./assets/Venice/3.jpg'), 
              name: 'Ariel',
              caption: 'Ariel view from a tower.'
            },
          ],
        },
        {
          name: 'Tokyo',
          description: 'The city where I dream to be since I was a little kid.',  
          time: '4/2016',
          photos: [require('./assets/1x/Tokyo-f.jpg'), require('./assets/Tokyo/2.jpg'),require('./assets/1x/Tokyo-m.png'), 1 , 0 ,'rgba(3,14,34,.7)' ],
          gallery: [
            {
              src:require('./assets/Tokyo/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/2.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/3.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/4.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/5.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/6.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/Tokyo/7.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
          ],
        },
      ],
    }
  }
  onSelected = (e) => {
    this.setState({selected: e})
  }
  // Toggle selected Class on .App when back button in Detail Component clicked
  onBack = () =>{
    const AppDOM = this.ref_App.current;
    AppDOM.classList.remove('selected');
  }
  // Go to Detail View of each city when Gallery Button clicked
  onDetail = () => {
    const AppDOM = this.ref_App.current;
    var tl = anime.timeline({
      easing: 'easeInSine',
      duration: 500
    });
    tl
    .add({
      targets: ['.detail-wrapper .blank','.detail-wrapper'],
      translateY: '-100vh',
      delay: anime.stagger(300),
      easing: 'easeInOutSine',
    })
    .add({
      targets: '.detail-wrapper .title',
      translateY: [40,0],
      opacity: [0,1],
      delay: 150, // increase delay by 100ms for each elements.
      complete: function()
      {
        AppDOM.classList.add('selected');
      }
    })
  }
  render() {
    const selected = this.state.selected;
    const content = this.state.content;
    
    return (
      <div className="App" ref={this.ref_App}>
        <div className="wrapper">
          {/* Navigation Component */}
          <Nav selected={this.onSelected} navigation={content}></Nav>
          {/* Pagination Component */}
          <Pagination selected={selected} total={content.length}></Pagination>
          {/* Go to detail Button */}
          <div className="button" onClick={this.onDetail}>↼ Gallery</div>
          {/* Images Blocks Component */}
          <Image src={content[selected]}/>
          {/* Copyrights block */}
          <div className="copyrights">© 2018 Tam Nguyen.  All rights reserved.</div>
          {/* Web title block */}
          <div className="title">Journey</div>
        </div>
        {/* Detail Component */}
        <Detail content = {content[selected]} 
                onBack = {this.onBack}
        ></Detail>
      </div>
    );
  }
}

export default App;
