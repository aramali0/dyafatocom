// Offer.jsx
import React, { useState } from 'react';
import image from "../../assets/img.png";
import casa from "../../assets/img_1.png";
import map from "../../assets/img_2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBBtn,
} from "mdb-react-ui-kit";
import img from "../../assets/offer-image.jpg";
import img2 from "../../assets/offer-image1.jpg";
import styles from "../hosterComponents/offer-card/OfferCard.module.css";

function Offer(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img, img2];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <MDBContainer fluid className="my-5">
            <MDBRow className="justify-content-center">
                <MDBCol md="8">
                    <MDBCard className="shadow border rounded-3">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                                    <div className="bg-image rounded hover-zoom-custom" style={{ height: '200px' }}>
                                        <MDBCardImage src={image} fluid className="w-100 h-100 rounded" />
                                    </div>

                                    <p className="text-primary mt-2">Located in :</p>

                                    <div className="bg-image rounded hover-zoom hover-overlay" style={{ height: '200px' }}>
                                        <div className={styles.offerImage}>
                                            <img
                                                className={`${styles.offerImgSrc} ${styles.offerImage}`}
                                                src={images[currentImageIndex]}
                                            />
                                            <button className={styles.buttonLeft} onClick={prevImage}>&lt;</button>
                                            <button className={styles.buttonRight} onClick={nextImage}>&gt;</button>
                                        </div>
                                    </div>

                                    <strong className="text-primary mt-2">Casablanca <i className="fa-solid fa-location-dot"></i></strong>
                                    <br />
                                    <MDBCardImage src={map} fluid className="w-100 rounded mt-2" style={{cursor:"pointer"}} />
                                    <strong className="text-primary mt-2">View in map <i className="fa-solid fa-location-dot"></i></strong>
                                </MDBCol>
                                <MDBCol md="12" lg="8">
                                    <h3 className="text-center text-primary mb-4">🌟 Special Offer 🌟</h3>
                                    <p className="text-center mt-3 ">Offer By: <strong className="text-info">Cristiano Ronaldo</strong></p>
                                    <p className="text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt soluta! Ab accusamus delectus facilis inventore, labore maxime odit voluptas?</p>

                                    <div className="d-flex justify-content-around mt-3">
                                        <p className="text-center text-success"><strong>Posting Date:</strong> {new Date().toLocaleDateString()}</p>
                                        <p className="text-center text-danger"><strong>Duration:</strong> 2 days</p>
                                    </div>

                                    <div className="d-flex justify-content-around border border-1 bg-white p-3 rounded">
                                        <div>
                                            <p className="text-primary"><strong>Name:</strong> Mohamed</p>
                                            <p className="text-primary"><strong>Last Name:</strong> Elfadili</p>
                                            <p className="text-primary"><strong>Age:</strong> 21</p>
                                        </div>
                                        <div>
                                            <p className="text-primary"><strong>Email:</strong> email@gmail.com</p>
                                            <p className="text-primary"><strong>Phone:</strong> 066612234</p>
                                            <div className="text-center d-flex justify-content-center">
                                                <strong className="text-primary">Languages:</strong>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item text-danger">🇫🇷 fr</li>
                                                    <li className="list-inline-item text-success">🇬🇧 en</li>
                                                    <li className="list-inline-item text-warning">🇦🇪 ar</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <strong className="text-primary">Activities:
                                            <ul className="list-unstyled">
                                                <li className="text-danger">🍔 FOOD</li>
                                                <li className="text-success">🌙 SLEEP_OVER</li>
                                                <li className="text-warning">🏙 DISCOVER_CITY</li>
                                            </ul>
                                        </strong>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-center mt-3 text-warning"><strong>Rating:</strong> 5.5 <FontAwesomeIcon icon={faStar} className="text-warning" /></p>
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <MDBBtn color="primary" size="sm" style={{ height: '32px', width: '120px' }}>
                                            Other plans
                                        </MDBBtn>
                                        <MDBBtn outline color="primary" size="sm" style={{ height: '32px', width: '120px' }}>
                                            Reserve
                                        </MDBBtn>

                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Offer;
