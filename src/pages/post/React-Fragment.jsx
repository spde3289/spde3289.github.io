import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';
//import Bj1712 from '../../imgs/BJ1712/BJ1712.png';

const ReactFragment = () => {

    return(
        <>
            <PostContainer>
                <Main>
                    <PostHeader 
                    title='Fragment를 알아보자' 
                    tagName='React' 
                    date='2022.01.02'/>
                    <div>
                        <PostText>
                            리엑트에서 컴포넌트 단위로 개발을 하면서 의미 없는 div
                            태그로 감싸여진 코드들을 볼 수 있다. 
                        </PostText>
                        <PostText>
                            이때 Fragment를 사용하면 의미 없는 태그사용을 막을 수 있다
                        </PostText>
                        <CodeContainer>
                            <pre>
                                <code>
                                    {`
                                    const Table = () => {
                                        return(
                                            <table>
                                                <tr>
                                                    <Colums/>
                                                </tr>
                                            </table>
                                        )
                                    }
                                    `}
                                </code>
                            </pre>
                        </CodeContainer>
                        <CodeContainer>
                            <pre>
                                <code>
                                    {`
                                    const Colums = ()=> {
                                        return(
                                            <div>
                                                <td>Hello</td>
                                                <td>World</td>
                                            </div>
                                        )
                                    }
                                    `}
                                </code>
                            </pre>
                        </CodeContainer>
                        일반적으로 div를 사용하면 이런식으로 보여지게 된다.
                        <CodeContainer>
                            <pre>
                                <code>
                                    {`
                                    const Table = () => {
                                        return(
                                            <table>
                                                <tr>
                                                    <div>
                                                        <td>Hello</td>
                                                        <td>World</td>
                                                    </div>
                                                </tr>
                                            </table>
                                        )
                                    }
                                    `}
                                </code>
                            </pre>
                        </CodeContainer>
                        이때 Fragment 를 사용하게 되면 
                        <CodeContainer>
                            <pre>
                                <code>
                                    {`
                                    const Colums = ()=> {
                                        return(
                                            <Fragment>
                                                <td>Hello</td>
                                                <td>World</td>
                                            </Fragment>
                                        )
                                    }
                                    `}
                                </code>
                            </pre>
                        </CodeContainer>
                        <CodeContainer>
                            <pre>
                                <code>
                                    {`
                                    const Table = () => {
                                        return(
                                            <table>
                                                <tr>
                                                    <td>Hello</td>
                                                    <td>World</td>
                                                </tr>
                                            </table>
                                        )
                                    }
                                    `}
                                </code>
                            </pre>
                        </CodeContainer>
                        이렇게 깔끔하게 보여지게 된다. 이때 {`<></>`} 빈 태그를 사용하면 Fragment 선언을 생략하고 사용할 수 있다.
                            <pre>
                                <code>
                        <CodeContainer>
                                    {`
                                    const Colums = ()=> {
                                        return(
                                            <>
                                                <td>Hello</td>
                                                <td>World</td>
                                            </>
                                        )
                                    }
                                    `}
                        </CodeContainer>  
                                </code>
                            </pre>
                    </div>
                    <Comment>
                        <GiscusApp />
                    </Comment>
                </Main>
            </PostContainer>
        </>
    );
};


const PostContainer = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
`;

const Main = styled.main`
    width: ${props => props.theme.boxSize.main};
`;

const SubTitle = styled.h2`
    font-size: ${props => props.theme.fontSize.subTitle};
    margin-bottom: ${props => props.theme.margin.titBtm};
`;

const PostText = styled.p`
    font-size: ${props => props.theme.fontSize.nomal};
    margin-bottom: ${props => props.theme.margin.textBtm};
`;

const CodeImg = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    margin-bottom:  ${props => props.theme.margin.textBtm};
`;

const Comment = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    align-items: ${props => props.theme.display.content};
    width: 1000px;
`;

const CodeContainer = styled.div`
    background-color: #282c34;
    //width: 800px;
    //margin: 0 auto;
    text-align: left;
    color: #abb2bf;
    font-size: 15px;
`;



export default ReactFragment;