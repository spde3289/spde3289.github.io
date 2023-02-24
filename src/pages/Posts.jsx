import React, { useState } from 'react';
import styled from "styled-components";
import Passengers from '../components/Passengers'
import Tag from '../components/Tag';

import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


const Posts = () => {

    const [text, setText] = useState('');

    const ChangeText = (e) => {
        setText(e.target.value);
    };

    return(
            <PostMain> 
                <SearchContainer>
                    <AiOutlineSearch className='icon'/>
                    <Search 
                    type="text" 
                    value={text} 
                    onChange={ChangeText}/>
                </SearchContainer>
                <SliderContainer>
                    <SliderButton>
                        <AiOutlineLeft className="icon"/>
                    </SliderButton>
                    <TagSlider>
                        <TagContainer>
                            <Tag tagName={'# all'} /> 
                            <Tag tagName={'# react'}/> 
                            <Tag tagName={'# react-router'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                        </TagContainer>
                    </TagSlider> 
                    <SliderButton>
                        <AiOutlineRight className="icon"/>
                    </SliderButton>
                </SliderContainer>
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

const SearchContainer = styled.div`
    margin: 0 auto;
    padding: 15px;    
    width: 700px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Search = styled.input`
    width: 400px;
    outline: none;
    font-size: 16px;
`;

const SliderContainer = styled.div`  
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const TagSlider = styled.div`
    position: relative;
    width: 800px;
    height: 42px;
    //border: 1px dashed black;
    display: flex;
    overflow: hidden;
`; 

const TagContainer = styled.div`
    position: absolute;
    left: 0px;
    display: flex;
`;

const SliderButton = styled.button`
    border: 0.1px solid black;
    background-color: white;
`;

const PostContainer = styled.div`
    width: 662px;
    margin: 0 auto;
`;

export default Posts;