import React, {
  Component
} from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src.photos
    }
  }
  static getDerivedStateFromProps(props, state) {
    if(props.src.photos !== state.src)
    {
      return {
        src: props.src.photos
      }
    }
    else
      return ;
  }
  render(){
    let source = this.state.src;
    return ( 
      <div className="decors">
        <div className="square1"><div style={{backgroundImage: `url('${source[0]}')`}}></div></div> 
        <div className="square2"><div  style={{backgroundImage: `url('${source[1]}')`}}></div></div>         
      </div>
    )
  }
}