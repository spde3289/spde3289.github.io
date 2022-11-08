import React from 'react';
import styled from "styled-components";
import GiscusApp from '../../components/GiscusApp';

const SecondPost = () => {
    return(
        <>
        <MarkDownstyle>
            asdasdasdas
        </MarkDownstyle>
            <GiscusApp/>
        </>
    );
};

const MarkDownstyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;



export default SecondPost;