import React from 'react';
import styled from "styled-components";
import Passengers from '../components/Passengers'
//import Tag from '../components/Tag';

const Posts = () => {

    return(
        <div>
            <PostMain> 
                {/* <Filter>
                     <Tag tagName={'all'}/> 
                     <Tag tagName={'react'}/> 
                </Filter> */}
                <PageClum>
                    <Passengers/>
                </PageClum>
            </PostMain>
        </div>
    );
};

const PostMain = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
`
/* const Filter = styled.div`
    padding: 5px;
    display: flex;
    border: 1px dashed black;
    margin-bottom: 25px;
`; */

const PageClum = styled.div`
    width: 662px;
    margin: 0 auto;
`;

export default Posts;