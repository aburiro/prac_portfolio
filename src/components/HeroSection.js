import Carousel from 'react-bootstrap/Carousel';

import image_1 from '../assets/images/slide-1.jpg'
import image_2 from '../assets/images/slide-2.jpg'
import image_3 from '../assets/images/slide-3.jpg'


function HeroSection() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    height={700}
                    className="d-block w-100"
                    src={image_1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    {/*<h5>First slide label</h5>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>


            
     <Carousel.Item>
         <img
             height={700}
             className="d-block w-100"
             src={image_2}
             alt="Third slide"
         />
         <Carousel.Caption>
             {/*<h5>First slide label</h5>*/}
             {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
         </Carousel.Caption>
     </Carousel.Item>


     
     <Carousel.Item>
         <img
             height={700}
             className="d-block w-100"
             src={image_3}
             alt="First slide"
         />
         <Carousel.Caption>
             {/*<h5>First slide label</h5>*/}
             {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
         </Carousel.Caption>
     </Carousel.Item>



        </Carousel>
    );
}

export default HeroSection;
