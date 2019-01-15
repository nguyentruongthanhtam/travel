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
          description: 'loreAute esse nostrud aliquip aliquip nostrud culpa eiusmod minim laboris est commodo dolore est sint.',  
          time: '2/2018',
          photos: [require('./assets/1x/s-f.jpg'), require('./assets/2.jpg'), require('./assets/1x/s-m.png'), 20 ],
          // photos array format: Main photo, secondary photo, Mask for layering effect, topMargin for City name, leftMargin for City name, City name text color. 
          gallery: [
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
          ],
        },
        {
          name: 'Crete',
          description: 'loreAute esse nostrud aliquip aliquip nostrud culpa eiusmod minim laboris est commodo dolore est sint.',  
          time: '2/2018',
          photos: [require('./assets/1x/Crete-f.jpg'),  require('./assets/2.jpg'), require('./assets/1x/Crete-m.png'), 10, 0 ],
          gallery: [
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
          ],
        },
        {
          name: 'Venice',
          description: 'loreAute esse nostrud aliquip aliquip nostrud culpa eiusmod minim laboris est commodo dolore est sint.',  
          time: '2/2018',
          photos: [require('./assets/1x/Venice-f.jpg'),  require('./assets/2.jpg'), require('./assets/1x/Venice-m.png'), 5 , , 'rgba(119,71,57,.7)' ],
          gallery: [
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/2.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/3.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/4.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
          ],
        },
        {
          name: 'Tokyo',
          description: 'loreAute esse nostrud aliquip aliquip nostrud culpa eiusmod minim laboris est commodo dolore est sint.',  
          time: '2/2018',
          photos: [require('./assets/1x/Tokyo-f.jpg'), require('./assets/2.jpg'),require('./assets/1x/Tokyo-m.png'), 1 , 0 ,'rgba(3,14,34,.7)' ],
          gallery: [
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
              name: 'Name',
              caption: 'Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi.'
            },
            {
              src:require('./assets/1.jpg'), 
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
      delay: anime.stagger(400),
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
          <Nav selected={this.onSelected} navigation={content}></Nav>
          <Image src={content[selected]}/>
          <div className="button" onClick={this.onDetail}>↼ Gallery</div>
          <Pagination selected={selected} total={content.length}></Pagination>
          <div className="copyrights">© 2018 Tam Nguyen.  All rights reserved.</div>
          <div className="title">Journey</div>
        </div>
        <Detail content = {content[selected]} 
                onBack = {this.onBack}
        ></Detail>
      </div>
    );
  }
}

export default App;
