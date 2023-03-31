import React from 'react';
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';
import { PostContainer, Main, PostText, CodeContainer } from './style'

export default function ClipBoardCopy(){

    /* const handleCopyClipBoard = async (text) => {
         const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('링크가 복사되었습니다.');
             
        try {
          await navigator.clipboard.writeText(text);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (e) {
          console.log(e)
          alert('복사에 실패하였습니다');
        } 
        
      }; */
    
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
                        이렇게 클립보드API를 이용하면 간단하게 클립보드를 이용한 복사기능을 만들 수 있다. <br />
                        이때 주의사항이 있는데 클립보드에 엑세스 하면 암호나 신용카드 번호와 같이 중요한 정보에 엑세스 할 수 있으니 <br />
                        이와 같은 이유로 http가 없는 임시 서버에서 실험을 할 경우 동작하지 않을 수 있다. <br />
                        <br />   
                        <a href="https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API">클립보드 공식 API</a>
                    </PostText>
                </div>
            <GiscusApp />
            </Main>
        </PostContainer>
    )
}
