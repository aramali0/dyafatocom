import { FaStar } from "react-icons/fa6";
import { useState } from "react"; // Import useState hook
import styles from "./OfferCard.module.css";
import img from "../../../assets/offer-image.jpg";
import img2 from "../../../assets/offer-image1.jpg";

function OfferCard({ offer }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of current image index
  const images = [img, img2];

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const dateDebut = new Date(offer.date);
  // Convert date to a readable format
  const formattedDate = dateDebut.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`${styles.offerCard} ${styles.offerContainer}`}>
      <div className={styles.offerImage}>
        <img
          className={`${styles.offerImgSrc} ${styles.offerImage}`}
          src={images[currentImageIndex]}
          alt={offer.titre}
        />
        <button className={styles.buttonLeft} onClick={prevImage}>&lt;</button> 
        <button className={styles.buttonRight} onClick={nextImage}>&gt;</button> 
      </div>
      <div className={styles.offerInfo}>
        <div className={`${styles.offerName} ${styles.offerTitle}`}>
          {offer.titre}
        </div>
        <div className={styles.offerRatingPrice}>
          <div className={`${styles.offerPrice} ${styles.offerRate}`}>
            {offer.prix + " $"}
          </div>
          <div className={styles.offerRating}>
            <p className={`${styles.rating} ${styles.offerRate}`}>
              {offer.rating}
            </p>
            <FaStar
              className={`${styles.startRatoffer} ${styles.offerRate}`}
            />
          </div>
        </div>
        <div className={styles.offerDetails}>
          <p className={styles.offerDateMaxDuration}>
            Date: {formattedDate} | Max Duration: {offer.maxDuraion} days
          </p>
          <div className={styles.services}>
            
              <button className={styles.servicesButton}>
                {offer.service}
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
