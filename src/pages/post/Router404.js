import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader'
import GiscusApp from '../../components/GiscusApp';

const Router404 = () => {
    return(
        <>
            <A>
                <Main>
                    <PostHeader
                    title="react-router 404 not found"
                    tagName='react'
                    date='2022.11.10'/>
                    <div>
                        <PostText>
                            블로그에 댓글 기능을 추가하고 싶어 Giscus을 알아보고 바로 블로그에 적용을 한 후 
                            잘 동작하나 확인을 하던 와중 갑자기 404 페이지가 떠서 아주 놀랐던 기억이 있다.
                        </PostText>
                        <PostText>
                            처음에는 내가 Giscus를 잘 못 적용해서 생긴 문제인줄 알고 댓글기능을 제거해도
                            같은 문제가 발생하여 구글링을 해보니 react-router 기능을 사용할떄 
                        </PostText>
                    </div>
                    <Comment>
                        <B>
                            <GiscusApp />
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

const PostText = styled.p`
    font-size: 16px;
    margin: 50px 0;
`;

const CodeImg = styled.div`
    display: flex;
    justify-content: center;
`;

const Comment = styled.div`
    
    display: flex;
    justify-content: center;
`;

const B = styled.div`
    width: 800px;
`;



export default Router404;