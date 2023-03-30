import React from 'react';
import styled from "styled-components";
//import content from '../postInfo';

const Tag = ({tagName,currentTag, color}) => {
    const OnClick = (e) => {
        if(tagName.charAt(0) === '#'){
            const tag = tagName.replace('# ', '')
            currentTag(tag)
        }
    };
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