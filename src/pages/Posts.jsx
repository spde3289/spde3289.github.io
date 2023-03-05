import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import Passengers from '../components/Passengers'
import Tag from '../components/Tag';

import { AiOutlineSearch, AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


const Posts = () => {

    const [text, setText] = useState('');
    const [posState, setposState] = useState(0);
    const ref = useRef();

    
    const [isLoaded, setIsLoaded] = useState(false);
    const target = useRef(null);

    const ChangeText = (e) => {
        setText(e.target.value);
    };

    const DeleteText = () => {
        setText('');
    };

    const OnClick = (type) => {
        const maxWidth = ref.current.offsetWidth;
        const maxMove = 500;

        if(type === 'left'){
            if(posState - maxMove <= 0 ){
                setposState(0);
            }else{
                setposState(posState - maxMove);
            };
        }
        if(type === 'right'){
            if(maxWidth - 800 - posState <= maxMove){
                setposState(maxWidth - 800);
            }else{
                setposState(posState + maxMove);
            };
        };
    };


    const getMoreItem = ()=> {
        console.log('asd')
        //setIsLoaded(false);
    }

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
          observer.unobserve(entry.target);
          await getMoreItem();
          observer.observe(entry.target);
        }
      };
    
      useEffect(() => {
        let observer;
        if (target.current) {
          observer = new IntersectionObserver(onIntersect, {
            threshold: 0.4,
          });
          observer.observe(target.current);
        }
        return () => observer && observer.disconnect();
      }, [target]);

    return(
            <PostMain> 
                <SearchContainer>
                    <AiOutlineSearch className='icon'/>
                    <Search 
                    type="text" 
                    value={text}
                    placeholder='search' 
                    onChange={ChangeText}/>
                    <AiOutlineClose 
                    className={ 'icon positions ' + (text.length === 0 ? 'none' : '')}
                    onClick={DeleteText}
                    />
                </SearchContainer>
                <SliderContainer>
                    <SliderButton onClick={()=>{OnClick('left')}}>
                        <AiOutlineLeft className="icon"/>
                    </SliderButton>
                    <TagSlider>
                        <TagContainer left={`-${posState}px`} ref={ref}>
                            <Tag tagName={'# all'} /> 
                            <Tag tagName={'# react'}/> 
                            <Tag tagName={'# react-router'}/> 
                            <Tag tagName={'# 백준 문제풀이'}/> 
                            <Tag tagName={'# recoil'}/> 
                            <Tag tagName={'# css'}/> 
                            <Tag tagName={'# html'}/> 
                        </TagContainer>
                    </TagSlider> 
                    <SliderButton onClick={()=>{OnClick('right')}}>
                        <AiOutlineRight className="icon"/>
                    </SliderButton>
                </SliderContainer>
                <PostContainer>
                    <Passengers value={ text.length === 0 ? " " : text }/>
                </PostContainer>
                <div ref={target}>
                    { isLoaded } 여기!
                 </div>
            </PostMain>
    );
};

const PostMain = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
`;

const SearchContainer = styled.div`
    width: 540px;
    padding: 2px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    //border-radius: 20px;
    margin: 0 auto 25px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .none{
        display: none;
    }

    .positions{
        position: absolute;
        right: 10px;
    }
`;

const Search = styled.input`
    font-size: 16px;
    height: 34px;
    width: 460px;
    margin-left: 8px;
    border: none;
    outline: none;
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
    left: ${ ({left})=>left};
    display: flex;
    //transform: translate3d(0px, 0px, 0px);
    transition: all 500ms ease-in-out 0s;
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