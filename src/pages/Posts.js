import React from 'react';
import styled from "styled-components";
import Header from '../components/Header'
import Footer from '../components/Footer'
import First from './post/First.js'
import ContentBox from '../components/ContentBox';



const Posts = () => {
    return(
        <div>
            <Header></Header>
            <PostMain> Posts 입니다.
                <ContentBox/>
                <First/>
            </PostMain>
            <Footer></Footer>
        </div>
    )
}

const PostMain = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
`

export default Posts;