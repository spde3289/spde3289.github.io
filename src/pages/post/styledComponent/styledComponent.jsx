import React from "react";
import PostHeader from '../../../components/post/PostHeader'
import GiscusApp from '../../../components/post/GiscusApp';
import code2 from './code2.txt'
import { PostContainer, Main, SubTitle, TextBox, CodeContainer, ReferenceLink } from '../style'

export default function StyledComponent(){

    return(
        <PostContainer>
            <Main>
                <PostHeader 
                title='styled-component를 사용해보자'
                tagName='styled-component'
                date='2023.02.03'
                />
                <div>
                    <TextBox>
                        react를 처음 공부할 때 html과 js는 한 파일에서 작성하는데 css도 한 파일에서 작성 할 수 있지 
                        않을까 란 생각이 들어 찾아보다가 styled-component를 알게 되었다. <br />
                        <br />
                        styled-component는 js in css 로 말 그대로 js파일 내부에 css를 작성한다는 뜻으로 
                        styled-component의 장점으로는 css의 컴포넌트화로 유지보수가 쉬워지고 재사용성이 올라간다.
                    </TextBox>
                    <SubTitle>
                        패기지 설치
                    </SubTitle>
                    <CodeContainer>
                        <pre>
                            <code>
                                {`
    # npm 설치
    npm install --save styled-components

    # yarn 설치
    yarn add styled-components
                                `}
                            </code>
                        </pre>
                    </CodeContainer>
                    <SubTitle>
                        사용 방법
                    </SubTitle>
                    <TextBox>
                        설치가 잘 되었다면 사용방법에 대해 알아보자 
                    </TextBox>
                    <CodeContainer>
                        <pre>
                            <code>
                                {`
    import styled from "styled-components";

    const Title = styled.h1\`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    \`;
                                `}
                            </code>
                        </pre>
                    </CodeContainer>
                </div>
                <GiscusApp />
            </Main>

        </PostContainer>
    )
}