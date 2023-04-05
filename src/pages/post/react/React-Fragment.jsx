import React from 'react';
import PostHeader from '../../../components/post/PostHeader';
import GiscusApp from '../../../components/post/GiscusApp';
import { PostContainer, Main, TextBox, CodeContainer, ReferenceLink } from '../style'


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
                        <TextBox>
                            리엑트에서 컴포넌트 단위로 개발을 하면서 의미 없는 div태그로 감싸여진 코드들을 볼 수 있다. <br/>
                            이는 jsx를 사용하면서 return은 두개의 값을 반환 할 수 없어 하나의 최상위 태그를 사용해야 하기 때문이다. <br/>
                            이때 Fragment를 사용하면 의미 없는 태그 사용을 막을 수 있다. 
                        </TextBox>
                        <CodeContainer>
                            <pre>
                                <code>{`
    const Table = () => {
        return(
            <table>
                <tr>
                    <Colums/>
                </tr>
            </table>
        )
    }
    
    const Colums = ()=> {
        return(
            <div>
                <td>Hello</td>
                <td>World</td>
            </div>
        )
    }
                                    `}</code>
                            </pre>
                        </CodeContainer>
                        <TextBox>
                            일반적으로 div를 사용하면 이런식으로 보여지게 된다.
                        </TextBox>
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
                        <TextBox>
                            이때 Fragment 를 사용하게 되면 
                        </TextBox>
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
                        <TextBox>
                            이렇게 깔끔하게 보여지게 된다. 이때 {`<></>`} 빈 태그를 사용하면 Fragment 선언을 생략하고 사용할 수 있다.
                        </TextBox>
                        <CodeContainer>
                            <pre>
                                <code>
                                    
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
                                </code>
                            </pre>
                        </CodeContainer>  
                        <TextBox>
                            참고 문서 : <ReferenceLink href='https://reactjs.org/docs/forwarding-refs.html'>https://reactjs.org/docs/forwarding-refs.html</ReferenceLink>
                        </TextBox>
                    </div>
                    <GiscusApp />
                </Main>
            </PostContainer>
        </>
    );
};

export default ReactFragment;