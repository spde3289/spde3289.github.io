import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { useTheme } from "styled-components";
import Passengers from '../components/post/pagination/Passengers'
import Tag from '../components/Tag';
import content from '../postInfo';

import { AiOutlineSearch, AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Posts = () => {

    const [text, setText] = useState('');
    const [posState, setPosState] = useState(0);
    const [tag, setTag] = useState('all');
    const ref = useRef();
    const location = useLocation();
    const theme = useTheme();
    const value = location.state?.value;

    const category = content.map(el=>el.category)
    const uniqueArr = category.filter((element, index) => {
        return category.indexOf(element) === index;
    }).map(el => '# ' + el)
    const newTagList = [...uniqueArr]
    newTagList.unshift('# all')

    useEffect(()=>{
        value === undefined ? setText('') : setText(value);
    },[value])

    const ChangeText = (e) => {
        setText(e.target.value);
    };

    const DeleteText = () => {
        setText('');
    };

    const OnClick = (type) => {
        const maxWidth = ref.current.offsetWidth;
        const maxMove = 700;

        if(type === 'left'){
            if(posState - maxMove <= 0 ){
                setPosState(0);
            }else{
                setPosState(posState - maxMove);
            };
        }
        if(type === 'right'){
            if(maxWidth - 800 - posState <= maxMove){
                setPosState(maxWidth - 800);
            }else{
                setPosState(posState + maxMove);
            };
        };
    };

    const currentTag = (e) => {
        setTag(e);
    };

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
                        {newTagList.map(el =>
                            <Tag color={ el.replace('# ', '') === tag ? theme.color.currentTag : '' } key={el} tagName={el} currentTag={currentTag}/>
                        )}
                    </TagContainer>
                </TagSlider> 
                <SliderButton onClick={()=>{OnClick('right')}}>
                    <AiOutlineRight className="icon"/>
                </SliderButton>
            </SliderContainer>
            <PostContainer>
                <Passengers tag={tag} value={ text.length === 0 ? null : text }/>
            </PostContainer>
        </PostMain>
    );
};

const PostMain = styled.main`
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    font-size: 20px;
`;

const SearchContainer = styled.div`
    width: 540px;
    padding: 2px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
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
    background-color: ${({theme}) => theme.color.body};
    color: ${({theme}) => theme.color.font};
    font-size: 16px;
    height: 34px;
    width: 460px;
    margin-left: 8px;
    border: none;
    outline: none;
`;

const SliderContainer = styled.div`  
    display: flex;
    align-items: center;
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
    transition: all 500ms ease-in-out 0s;
`;

const SliderButton = styled.div`
    color : ${({ theme }) => theme.color.font};
    margin-bottom: -4px;
    cursor: pointer;
`;

const PostContainer = styled.div`
    width: 662px;
    margin: 0 auto;
`;

export default Posts;