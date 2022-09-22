import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Paging from '../components/Paging'

const content = [
    {key: 1, title: '타이틀1', body: 'This is 1', date:'2022.09.13', category: '웹'},
];

const Posts = () => {
    const maxPageNumber = 5;
    const totalPages = Math.ceil(content.length/maxPageNumber)
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
        <div>
            <Header></Header>
            <PostMain> 
                Posts 입니다.
                <PageClum>
                { !loading 
                ? <Paging {...pageInfo}
                    onPrevClick={onPrevClick}
                    onNextClick={onNextClick}
                    onPageChange={onPageChange}/>
                : <Box></Box>}
                </PageClum>
            </PostMain>
            <Footer></Footer>
        </div>
    );
};

const PostMain = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
`
const PageClum = styled.div`
    width: 662px;
    margin: 0 auto;
`;

const Box = styled.div`
    width: 100%;
    height: 812px;
`;


export default Posts;