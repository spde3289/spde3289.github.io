import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import content from '../postInfo';

const Passengers = (props) => {

    const maxPageNumber = 5;
    const [contentList, setContentList] = useState(content);
    const [pageDate, setPageDate] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const totalPages = Math.ceil(contentList.length/maxPageNumber);
    
    useEffect(()=>{
        if(props.value){
            setContentList(content.filter((list) => list.title.toLowerCase().includes(props.value.toLowerCase() )))
        };
    },[props.value]);

    useEffect(()=>{
        setPageDate([...contentList].reverse().slice( currentPage*5-5 ,currentPage*5));
        setLoading(false);
    },[currentPage, contentList]);

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