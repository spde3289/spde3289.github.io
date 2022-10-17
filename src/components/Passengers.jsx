import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Header from './Header';

const content = [
    {key: 1, title: 'useEffect 무한루프', body: 'asdasd', date:'2022.09.13', category: 'react', link: '/first'},
    {key: 2, title: '첫 글', body: 'asdasd', date:'2022.09.13', category: '웹', link: '/second'},
];

const Passengers = () => {
    Header(content)

    const maxPageNumber = 5;
    const totalPages = Math.ceil(content.length/maxPageNumber);
    const [pageDate, setPageDate] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(()=>{
        setPageDate(content.slice( currentPage*5-5 ,currentPage*5));
        setLoading(false);
    },[currentPage]);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const onPrevClick = () => {
        if((currentPage-1) % maxPageNumber === 0){
            setMaxPageLimit(maxPageLimit - maxPageNumber);
            setMinPageLimit(minPageLimit - maxPageNumber);
        };
        setCurrentPage(prev=> prev-1);
    };

    const onNextClick = () => {
        if(currentPage+1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + maxPageNumber);
            setMinPageLimit(minPageLimit + maxPageNumber);
        };
        setCurrentPage(prev=>prev+1);
    };

    const pageInfo = {
        pageDate,
        currentPage,
        maxPageLimit,
        minPageLimit,
        totalPages
    };

    return(
        <>
            { !loading ? <Pagination {...pageInfo}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                onPageChange={onPageChange}/>
            : <div/>}
        </>
    );

};

export default Passengers;