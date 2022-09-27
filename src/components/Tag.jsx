import React from 'react';
import styled from "styled-components";

const Tag = (props) => {
    return(
        <Tech>{props.tagName}</Tech>
    );
};

const Tech = styled.div`
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #f3f3f4;
    background: #f3f3f4;
    border-radius: 10px;
    padding: 5px 7px;
    margin-right: 10px;
`;

export default Tag;