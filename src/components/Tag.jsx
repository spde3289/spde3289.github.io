import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
//import content from '../postInfo';

const Tag = ({tagName,currentTag, color}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const OnClick = (e) => {
        if(tagName.charAt(0) === '#'){
            setPosition(e.clientX, e.clientY);
            const tag = tagName.replace('# ', '')
            //const list = content.filter(el => el.category === tag )
            //console.log(list)
            currentTag(tag)
        }
    };
    console.log(color)
    return(
        <Tech color={color} onClick={OnClick}>{tagName}</Tech>
    );
};


const Tech = styled.div`
    width: max-content;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #313161;
    transition: all .2s ease-in-out;
    background-color: ${({color}) => color};
    border-radius: 10px;
    padding: 7px 9px;
    margin: 3px;
    cursor: pointer;
`;



export default Tag;