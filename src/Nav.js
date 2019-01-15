import React, {
  Component
} from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
  }
  // Infinite Carousel
  _goNext = () => {
    const current = this.state.selected; // selected value of the array
    const max = this.props.navigation.length-1 // max limit of the section array
    const min = 0;
    
    if(current <= max - 1) // while current value still in the range
    {
      this.setState({
        selected: current+1,
      })
      this.props.selected(current+1);
    }
    else // return nothing
    {   // when iteration hits max limit
      return;
    }
  }

  _goPrev = () => {
    const current = this.state.selected;
    const min = 0;
    const max = this.props.navigation.length-1;
    if(current > min) // while current value still in the range
    {
      this.setState({
        selected: current-1,
      })
      this.props.selected(current-1);
    }
    else // return nothing 
    {   // when iteration hits min value
      return;
    }
  }

  renderArrow() {
    return ( 
      <div className = "arrows" >
        
        <div onClick = {
          () => this._goPrev()
        }></div>

        <div onClick= {
          () => this._goNext()
        }></div>

      </div>
    )
  }
  render(){
    const selected = this.state.selected;
    const deviceWidth = window.innerWidth;
    const navMove = {
        paddingTop: `120px`,
        transform: deviceWidth > 414 ? `translateY(${this.state.selected*(-150)}px)` : `translateY(${this.state.selected*(-60)}px)`,
        transition: 'all .5s ease',
    }
    const active = (i) => {
      if(i === this.state.selected)
        return {
          color: '#444',
          transition: 'all .5s ease',
        }
      }
    const nav = this.props.navigation.map((name, i) =>
        <div className = "name"
          key = {i}
          style={active(i)}
          >
          <h1>{name.name}</h1>
          <h3>{name.time}</h3>
          {/* <div>{name.description}</div> */}
        </div>
    )
    return ( 
      <nav> 
        { this.renderArrow() } 

        <div style={navMove} className='nav-wrapper'>
          {nav} 
        </div>
      </nav>
    )
  }
}