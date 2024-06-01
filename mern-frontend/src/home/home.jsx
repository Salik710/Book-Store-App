// import React from 'react'
import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"
import FavBooks from "./FavBooks"
import PromoBanner from "./PromoBanner"
import OtherBooks from "./OtherBooks"
import Review from "./Review"
const home = () => {
  return (
    <>
    <Banner/>
    <h1>Home</h1>
    <BestSellerBooks/>
    <FavBooks/>
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
    </>
  )
}
export default home