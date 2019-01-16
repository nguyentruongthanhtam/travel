import React, {
  Component
} from 'react';
import anime from 'animejs';
export default class Pagination extends Component {
  componentWillReceiveProps()
  {
    anime({
      targets: '.pagination .current-page',
      translateY: [20,0],
      opacity: [0,1],
      duration: 400,
      easing: 'easeInSine'
    })
  }
  render(){
    const selected = this.props.selected;
    const total = this.props.total;
    return ( 
      <div className="pagination">
        <div className="current-page">{'0' + (selected+1)}</div>
        <div className="dash"></div>
        <div>{'0' + total}</div>
      </div>
    )
  }
}