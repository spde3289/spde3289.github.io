import React from 'react';
import styled from "styled-components";

const Tag = ({tagName}) => {

    const OnClick = () => {
        console.log(tagName);
        console.log(tagName);
        
    };

    return(
        <Tech onClick={OnClick}>{tagName}</Tech>
    );
};

const Tech = styled.div`
    width: max-content;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #313161;
    background: #f3f3f4;
    border-radius: 10px;
    padding: 7px 9px;
    margin: 3px;
    cursor: pointer;
`;

export default Tag;