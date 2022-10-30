import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Passengers from '../components/Passengers'

const Search = () => {
    const location = useLocation();

    const value = location.state.value;
    console.log(value);
    return(
        <>
            <Header/>
            
            <Passengers/>
            <Footer/>
        </>
    );
}

export default Search
