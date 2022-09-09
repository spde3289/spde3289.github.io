import React from 'react';
import styled from "styled-components";

const ContentBox = (props) => {
    console.log(props.title)
    return(
        <Content>{props.title}</Content>
    );
};

const Content = styled.div`
    width: 600px;
    height: 120px;
    margin: 10px auto;
    border: .3px solid #000;
    border-radius: 10px;
`;

export default ContentBox;