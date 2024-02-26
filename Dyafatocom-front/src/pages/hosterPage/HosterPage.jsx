import React from 'react'
import Navbar from '../../components/hosterComponents/navBar/NavBar'
import OfferCard from '../../components/hosterComponents/offer-card/OfferCard'
import FilterComponent from '../../components/hosterComponents/filtre/FiltreComponent'
import { cities } from '../../contants'
import { services } from '../../contants'
import styles from "./HosterPage.module.css"
function HosterPage() {


 const offer = {
  titre:"awesome housing",
  describtion:" something something something something something ",
  dateDebut:new Date(),
  maxDuration: 3,
  services:["food","sleep over","discover city"],
  prix:123,
  rating:6,
 }

 const handleFilter = (selectedCity, selectedService) =>{
  console.log("selectedCity : "+ selectedCity);
  console.log("selectedService : "+ selectedService);
 }

  return (
   <>
   <div className={styles.header}>
    <Navbar/>
   </div>
   <div className={styles.body}>
    <FilterComponent cities={cities} services={services} handleFilter={handleFilter}/>
    <div className={styles.offers}>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
     <OfferCard offer={offer}/>
    </div>
   </div>
   </>
  )
}

export default HosterPage