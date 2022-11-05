import Carousel from 'react-bootstrap/Carousel';
import './HomePageStyle.scss';

const HomePage = () => {
  return (
    <div className='home-page-style'>
      <Carousel variant='dark' className='carousel-main'>
        <Carousel.Item className='mt-20 carousel-item'>
          <div className='mt-20 carousel-item'>
            <h1 className='mt-20'>First</h1>
          </div>
          <Carousel.Caption>
            <h3 color='black'>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item'>
            <h1>Second</h1>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
