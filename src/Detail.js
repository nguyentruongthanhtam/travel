import React, {
  Component
} from 'react';
import anime from 'animejs';
import Rellax from 'rellax';
import Gallery from './Gallery'
export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    var rellax = new Rellax('.rellax');
  }
  goBack = () =>
  {
    var tl = anime.timeline({
      easing: 'easeOutSine',
      duration: 300
    });
    tl
    .add({
      targets: '.App .detail-wrapper .title',
      translateY: [0,20],
      opacity: [1,0],
    })
    .add({
      targets: ['.detail-wrapper','.detail-wrapper .blank'],
      translateY: '0',
      easing: 'easeInOutSine',
      delay: anime.stagger(400)
    })
    this.props.onBack(); // send onClose event to parent Compoent
  }
  render(){
    const source = this.props.content.photos;
    const name = this.props.content.name;
    const time = this.props.content.time;
    const description = this.props.content.description;
    const gallery = this.props.content.gallery;
    const top = source[3];
    const left = source[4];
    const textColor = source[5];
    return ( 
      <div  className='detail-wrapper'>
        <div className="blank"></div>
        <div className="landing" style={{background: `url('${source[0]}') center /cover`}}>
          <div  className="mask" 
                style={{background: `url('${source[2]}') center /cover`}}>
          </div>
          <div  className="title" 
                style={{top: top+'em', left: left!=0 ? left+'em' : 'unset'}}>
            <div  className='rellax text' 
                  style={{fontSize: '2em',color: textColor, margin: '.5em 0'}}
                  data-rellax-speed='-2'>
              {time}
            </div>
            <div className='rellax text'
                style={{fontSize: '8em', letterSpacing: '.2em', paddingLeft: '.2em'}}
                data-rellax-speed='-4'>
              {name}
            </div>
          </div>
          <div  className='back' 
                style={{color: textColor}}
                onClick={this.goBack}>
            ↼ Back    
          </div>
        </div>

        <div className="quote">
          {description}</div>
        <Gallery images={gallery}></Gallery>
      </div>
    )
  }
}