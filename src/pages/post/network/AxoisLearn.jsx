import React from "react";
import PostHeader from '../../../components/post/PostHeader'
import GiscusApp from '../../../components/post/GiscusApp';
import { 
    PostContainer, 
    Main, 
    SubTitle, 
    TextBox, 
    CodeContainer, 
    ReferenceLink, } from '../style'

export default function AxiosLearn(){

  const code = `
    {
      url: // url은 요청에 사용될 서버 URL입니다.
      method: // 기본값은 get다.
      baseURL: // url이 절대 값이 아닌경우 URL앞에 붙는다.
      transformResquest: [function(){}] // 응답 데이터가 then/catch로 전달되기 전에 변경할 수 있게 해준다.
      transformResponse: [function(){}] // 응답 데이터가 then/catch로 전달되기 전에 변경할 수 있게 해준다.
      headers: {} //사용자 지정 헤더이다.
      params: // 요청과 함께 전송되는 URL파라미터이다.
      data: function() {} // 바디로 전송하는 데이터의 대안문법이다.
      timeout: // 요청이 timeout보다 오래 걸리면 요청이 중단된다.
      withCredentials: // 기본값은 false이다.
      adapter: function(config) {} // 커스텀 헨들링 요청을 처리할 수 있다.
      auth: {} // auth는 HTTP Basic 인증이 사용되며, 자격 증명을 제공한다.
      responseType: // 서버에서 받는 데이터의 타입이다.
      responseEncoding: // 응답 디코딩에 사용할 인코딩이다.
      xsrfCookieName: // xsrf 토큰 값으로 사용할 쿠키의 이름이다.
      xsrfHeaderName: // xsrf 토큰 값을 운반하는 HTTP 헤더의 이름이다.
      onUplodePregress : function() {} // 업로드 진행 이벤트를 처리한다.
      onDownloadProgress: function() {} // 다운로드 진행 이벤트를 처리한다.
      
    }
  `;

  const code1 = `
    const instance = axios.create({
      baseURL: 'https://some-domain.com/api/',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });
  `
  
  const code2 = `
    //GET
    axios.get(url, [config])

    //POST
    axios.post(url[, data[, config]])

    //PUT
    axios.put(url[, data[, config]])
    
    //DELETE
    axios.delete(url[, config])
  `

  return(
    <PostContainer>
      <PostHeader 
      title='Axios를 배워보자'
      tagName='Front_end'
      date='2023.02.15' />
      <Main>
        <SubTitle>
          Axios란?
        </SubTitle>
        <TextBox>
          Axios는 Promiss기반 HTTP 클라이언트이다.<br />
          간단하게 백엔드랑 통신을 쉽게 해주는 라이브러리이다. <br />
          특징으로는 HTTP요청과 응답을 JSON형태로 할 수 있다는 점이다.
        </TextBox>
        <SubTitle>
          사용방법
        </SubTitle>
        <TextBox>
          axios로 백엔드와 통신을 할 때는 <br />
          get(조회), post(등록및 전송), put(수정), delete(삭제) <br />
          이렇게 4가지의 HTTP 메서드를 이용하여 통신할 수 있다. <br />
        </TextBox>
        <CodeContainer>
          <pre>
            <code>
              {code2}
            </code>
          </pre>
        </CodeContainer>
        <SubTitle>
          요청 Config
        </SubTitle>
        <CodeContainer>
          <pre>
            <code>
              {code}
            </code>
          </pre>
        </CodeContainer>
        <SubTitle size='sub'>
          인스턴스 생성
        </SubTitle>
        <CodeContainer>
          <pre>
            <code>
              {code1}
            </code>
          </pre>
        </CodeContainer>
        <ReferenceLink href='https://axios-http.com/'>
          참고자료 : https://axios-http.com/
        </ReferenceLink>
      </Main>
      <GiscusApp />
    </PostContainer>
  );
};