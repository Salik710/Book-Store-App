/* eslint-disable no-unused-vars */
import {useState,useEffect} from 'react';
import BookCards from '../components/BookCards';

const FavoriteBooks = () => {
  let API = "http://localhost:3000/all-books";
  const fetchApiData = async (url) => {
    const res = await fetch(url);
    const data  = await res.json();
    console.log(data);
  }
  const [books,setBooks] = useState([])
  useEffect(() => 
  {
    fetchApiData(API)
    // before

    // fetch("http://localhost:3000/all-books")
    // .then(res => res.json())
    // .then((data) => console.log(data))
  },[])

  return (
    <>
      <BookCards books = {books} headline="Best Seller Books"/>
    </>
  )
}

export default FavoriteBooks