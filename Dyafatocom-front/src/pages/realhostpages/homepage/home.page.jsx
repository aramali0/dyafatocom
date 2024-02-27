


import ImageSlider from '../../../components/realhostComponenets/slider/image.slider';
import './home.css';

function HomePageTouriste() {
    const isEmpty = true;
    return ( <>
         {
            isEmpty ? 
            
            <div className="home-container">
                <div className="left-container">
                    <
                        ImageSlider
                        slides={[
                            {image :"src/assets/image1.jpg"},
                            {image :"src/assets/image2.jpg"},
                            {image :"src/assets/offer-image.jpg"},
                            {image :"src/assets/offer-image1.jpg"},
                            ]}
                    />
                </div>
                <div className="right-container">
                    <div className="offer-title">Welcome to my best house you and your family you are the best</div>
                    <div className='offer-description'>This is then description This is then description This is then description This is then description This is then description This is then description This is then description This is then description</div>
                    <div className='offer-date-from'>
                        <p>From : </p> <input type="date" />
                    </div>
                    <div className='offer-date-to'>
                        <p>To : </p> <input type="date" />
                    </div>
                    <div className='offer-services'>
                        <p>Included : </p>
                    <ul className='offer-services-items'>
                        <li className='offer-service-item'>Sport</li>
                        <li className='offer-service-item'>Food</li>
                        <li className='offer-service-item'>Gym</li>
                        <li className='offer-service-item'>Holiday</li>
                    </ul>
                </div>
                </div>
                
            </div>
            : <h1>Not empty</h1>
        }
    </> );
}

export default HomePageTouriste;