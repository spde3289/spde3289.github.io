import React, { useState } from 'react';
import styled from "styled-components";
import Passengers from '../components/Passengers'
import Tag from '../components/Tag';

const Posts = () => {

    const [text, setText] = useState(' ');

    const ChangeText = (e) => {
        setText(e.target.value);
    };


    return(
            <PostMain> 
                <Search 
                type="text" 
                value={text} 
                onChange={ChangeText}/>
                <Filter>
                     <Tag tagName={'all'} /> 
                     <Tag tagName={'react'}/> 
                     <Tag tagName={'react-router'}/> 
                     <Tag tagName={'백준 문제풀이'}/> 
                </Filter> 
                <PostContainer>
                    <Passengers value={ text.length===0 ? " " : text }/>
                </PostContainer>
            </PostMain>
    );
};

const PostMain = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
`;

const Search = styled.input`
    width: 200px;
`;

const Filter = styled.div`
    padding: 5px;
    display: flex;
    border: 1px dashed black;
    margin-bottom: 25px;
`; 

const PostContainer = styled.div`
    width: 662px;
    margin: 0 auto;
`;

export default Posts;