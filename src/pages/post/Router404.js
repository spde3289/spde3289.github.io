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
                    title="React-router 404 not found"
                    tagName='react'
                    date='2022.11.10'/>
                    <div>
                        <SubTitle>
                            문제발생
                        </SubTitle>
                        <PostText>
                            블로그에 댓글 기능을 추가하고 싶어 Giscus을 알아보고 바로 블로그에 적용을 한 후 
                            잘 동작하나 확인을 하던 와중 갑자기 404 페이지가 떠서 아주 놀랐던 기억이 있다.
                            react-router를 사용할때 이동페이시에서 새로고침을 했을 때 생기는 문제였다.
                        </PostText>
                        <SubTitle>
                            이유
                        </SubTitle>
                        <PostText>
                            React 는 CSR(클라이언트 사이트 렌더링)이다. 이를 React-Router 로 Path를
                            이동 시킨다고 생각되지만 이름만 변경될뿐 이동이 되는 것은 아니다. 
                            최초 접속 이후에 서버에 요청을 하면 index.html 파일을 보내준다 
                        </PostText>
                        <SubTitle>
                            해결방법
                        </SubTitle>
                        <PostText>
                            <h3>HashRouter</h3>
                                일단 HashRouter 를 사용하는 방법이 있다. BrowserRourer를 HashRouter로
                                변경을 해주면 될 정도로 간단한 방법인데 <br/>단점으로는 못생긴 url과 검색 엔진 최적화(SEO)
                                가 안 된 다는 것 이다.
                                <br/>
                                <br/>
                            <h3>index.html 리다이렉션 - 깃허브</h3>
                                이 방법은 이 위에 있는 방법보다는 좀 더 복잡한 방법이다.
                        </PostText>
                    </div>
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


const A = styled.main`
    display: flex;
    justify-content: center;
`;
const Main = styled.div`
    width: 1000px;
`;

const SubTitle = styled.h2`
    font-size: 26px;
`;

const PostText = styled.p`
    width: 56em;
    font-size: 16px;
    margin: 50px 0;
`;

/* const CodeImg = styled.div`
    display: flex;
    justify-content: center;
`; */

const Comment = styled.div`
    display: flex;
    justify-content: center;
`;

const B = styled.div`
    width: 800px;
`;



export default Router404;