import React from 'react';
import PostHeader from '../../../components/post/PostHeader';
import GiscusApp from '../../../components/post/GiscusApp';
import { PostContainer, Main, TextBox, CodeContainer, ReferenceLink } from '../style'

export default function ClipBoardCopy(){

    return(
        <PostContainer>
            <PostHeader 
            title='클립보드를 이용하여 텍스트를 복사하기'
            tagName='javascript'
            date='2023.02.01'
            />
            <Main>
                <TextBox>
                    텍스트를 복사하는 기능을 만들고 싶을 때 클립보드 기능을 이용하면 쉽게 만들 수 있다 <br />
                </TextBox>
                <CodeContainer>
                    <pre>
                        <code>
                            {`
    const handleCopyClipBoard = async (text) => {
        navigator.clipboard.writeText()
    };
                            `}
                        </code>
                    </pre>
                </CodeContainer>
                <TextBox>
                    이렇게 클립보드API를 이용하면 간단하게 클립보드를 이용한 복사기능을 만들 수 있다. <br />
                    이때 주의사항이 있는데 클립보드에 엑세스 하면 암호나 신용카드 번호와 같이 중요한 정보에 엑세스 할 수 있는 문제가 생긴다 <br />
                    이와 같은 이유 때문에 http가 없는 임시 서버에서 실험을 할 경우 동작하지 않을 수 있다. <br />
                </TextBox>
                    <ReferenceLink href="https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API">클립보드 공식 API</ReferenceLink>
                <TextBox>
                    클립보드를 사용 할 수 없는 상황이라면 document.execCommand 기능을 이용하면 된다.
                </TextBox>
                <CodeContainer>
                    <pre>
                        <code>
                            {`
    const handleCopyClipBoard = (text) => {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('링크가 복사되었습니다.');
    };
                            `}
                        </code>
                    </pre>
                </CodeContainer>
                <ReferenceLink href="https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand">execCommand 공식 문서</ReferenceLink>
            </Main>
            <GiscusApp />
        </PostContainer>
    )
}
