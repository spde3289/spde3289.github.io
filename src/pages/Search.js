import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Passengers from '../components/Passengers'

const Search = (props) => {
    console.log(props.value)
    return(
        <>
            <Header/>
            <Passengers value={props.value} />
            <Footer/>
        </>
    );
}

export default Search
