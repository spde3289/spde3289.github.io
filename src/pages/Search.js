import React from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import Passengers from '../components/Passengers'

const Search = () => {
    const location = useLocation();

    const value = location.state.value;
    console.log(value);
    return(
        <>
            <Main>
                <div>{value}</div>
                <Passengers value={value} />
            </Main>
        </>
    );
};

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
`;



export default Search
