import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/images/carrusel.png';
import image1 from '../assets/images/ofertas.png';

function CarruselHome() {
  return (
    <Carousel>
      {/* <Carousel.Item>
        <div>
          <h3>OFERTAS</h3>
          <p>Antojate con nuestras ofertas para que te atrevas a saborear el deseo</p>
        </div>
      </Carousel.Item> */}
      <Carousel.Item>
      <img className="w-100" src={image} alt="Digital House"/>
        {/*<Carousel.Caption>
           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="w-100" src={image1} alt="Digital House"/> 
        {/*<Carousel.Caption>
           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> 
        </Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselHome;