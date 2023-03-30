import React from 'react';
import styled from 'styled-components';
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';


export default function ClipBoardCopy(){

    const handleCopyClipBoard = async (text) => {
    /*     const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('링크가 복사되었습니다.');
             */
        try {
          await navigator.clipboard.writeText(text);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (e) {
          console.log(e)
          alert('복사에 실패하였습니다');
        } 
        
      };
    
    return(
        <PostContainer>
            <Main>
                <PostHeader 
                title='클립보드를 이용하여 텍스트를 복사하기'
                tagName='javascript'
                date='2023.02.01'
                />
                <div>
                    <PostText>
                        텍스트를 복사하는 기능을 만들고 싶을 때 클립보드 기능을 이용하면 쉽게 만들 수 있다 <br />
                        <a href="https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API">클립보드 API</a>
                    </PostText>
                    <CodeContainer>
                        <pre>
                            <code>
                                {`
                                    navigator.clipboard.writeText()
                                `}
                            </code>
                        </pre>
                    </CodeContainer>
                    <PostText>
                        이렇게 간단한 한 줄로 텍스트 클립보드를 이용한 복사기능을 만들 수 있다. <br />
                        클립보드 기능을 이용하여 간단하게 읽고 쓸 수 있다 그런데 
                    </PostText>
                </div>
            </Main>
        </PostContainer>
    )
}

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
    margin  : ${props => props.theme.margin.textBtm};
`;

/* 
    const CodeImg = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    margin-bottom:  ${props => props.theme.margin.textBtm};
`;
 */
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
