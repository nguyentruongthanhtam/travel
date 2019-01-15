import React, {
  Component
} from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }
  componentDidMount()
  {
    
  }
  render(){
    const { photoIndex, isOpen } = this.state;
    const images = this.props.images;
    return ( 
      <div className="gallery">
       {/* <h1>Gallery</h1> */}
       
       <div className="cards">
        {
          images.map((image,index)=>
            <figure className="card" 
              key={index}
              style={{background: `url(${image.src}) 0 0/cover`}}
              onClick={()=>this.setState({isOpen: true, photoIndex: index})}
            >
              <figcaption>
                <div className="name">{image.name}</div>
                <div className="description">{image.caption}</div>
              </figcaption>
            </figure>
          )
        }
       </div>

       {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            imageTitle={images[photoIndex].name}
            imageCaption={images[photoIndex].caption}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}