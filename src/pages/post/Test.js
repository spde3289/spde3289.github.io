import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';


const Test = () => {
    return(
        <>
            <A>
                <Main>
                    <PostHeader 
                    title='test' 
                    tagName='알고리즘' 
                    date='2022.12.01'/>
                    테스트하기
                    <Comment>
                        <B>
                            <GiscusApp/>
                        </B>
                    </Comment>
                </Main>
            </A>
        </>
    );
};

const A = styled.div`
    display: flex;
    justify-content: center;
`;
const Main = styled.main`
    width: 1000px;
`;

const Comment = styled.div`
    display: flex;
    justify-content: center;
`;

const B = styled.div`
    width: 800px;
`;

export default Test;