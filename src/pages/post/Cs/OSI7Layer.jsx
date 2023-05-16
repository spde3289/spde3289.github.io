import React from "react";
import styled from "styled-components";
import PostHeader from '../../../components/post/PostHeader'
import GiscusApp from '../../../components/post/GiscusApp';
import { 
  PostContainer, 
  Main, 
  SubTitle, 
  TextBox, 
  ReferenceLink, 
} from '../style'
import OSI7 from './imgs/OSI7/OSI_7.jpg'

export default function OSI7Layer(){

  return(
    <PostContainer>
      <PostHeader 
      title='7계층에 대해 알아보자'
      tagName='cs'
      date='2023.03.12' />
      <Main>
        <SubTitle>
          7계층이란?
        </SubTitle>
        <FlexContainer>
          <TextBox>
            7계층은 네트워크 통신이 일어나는 과정을 7단계로 나눈 것 을 말한다. <br />
            각각 물리층, 데이터링크층, 네트워크층, 전송층, 세션층, 표현층, 가장 상위계층에 속하는 응용층 으로 나뉘고 
            두 컴퓨터가 네트워크를 형성하여 데이터를 주고 받기 위해서는 7계층이 모두 필요하여 각각의 계층은 독립된 기능을 제공한다 
            또한 서로 인접한 계층 간에만 의존하게 된다.
          </TextBox>
          <img style={{ width:'600px',}} src={OSI7} alt='osi7 계층 이미지'/>
        </FlexContainer>
        <SubTitle>
          1계층 : 물리 계층
        </SubTitle>
        <TextBox>
          물리계층은 OSI모델의 맨 및에 있는 계층이며, 데이터가 전송되는 물리적인 매체이다. 데이터는 0과 1의 전기적 신호
          상태로 이루어져 있다 <br />
          이 계층의 예시를 들면 허브 어댑터 중계기등 물리적인 전송이 가능하게 한다.
        </TextBox>
        <SubTitle>
          2계층 : 데이터링크 계층
        </SubTitle>
        <TextBox>
          데이터 링크 계층은 물리적인 네트워크를 통해 전송하는 수단을 제공한다. 이 계층의 주 목적은 물리적인 장지를 식별하는데 사용할 
          수 있는 주소 지정체계를 제공하는 것 이다. 오류나 재전송하는 기능이 존재하며 MAC주소를 통해서 통신을 한다.
          <br />
          이 계층의 예시를 들면 브리지, 스위치, 이더넷 등이 있다
        </TextBox>
        <SubTitle>
          3계층 : 네트워크 계층
        </SubTitle>
        <TextBox>
          네트워크 계층에서는 네트워크 간에 데이터 라우팅, 흐름제어, 세크멘테이션, 오류제어, 인터네트워킹을 담당한다. <br />
          라우팅이란 어떤 네트워크 안에서 통신 데이터를 짜여진 알고리즘에 의해 최대한 빠르게 
          보낼 최적의 경로를 선택하는 과정을 라우팅이라고 한다. 
          <br />
          이 계층의 장비는 라우터 L3스위치등이 있다.
        </TextBox>
        <SubTitle>
          4계층 : 전송 계층
        </SubTitle>
        <TextBox>
          전송 계층의 주 목적으로는 하위 계층에 신뢰할 수 있는 데이터 전송 서비스를 제공하는 것이다. <br />
          신뢰성있고 효율적인 데이터를 전송하기 위해 오류검출 및 복구, 흐름제어와 중복검사등을 수행한다. 
          <br />
          이 계층의 예로는 특정 방화벽이나 프록시 서버가 있다.
        </TextBox>
        <SubTitle>
          5계층 : 세션 계층
        </SubTitle>
        <TextBox>
          세션계층 에서는 두 컴퓨터 간의 대화나 세션을 관리하며 포트연결 이라고도 한다. 장치 간에 연결을 설정,
          관리 및 종료, 양방향인지 단방향인지 여부확인 등을 수행한다.
        </TextBox>
        <SubTitle>
          6계층 : 표현 계층
        </SubTitle>
        <TextBox>
          표현 계층에서는 전달받은 데이터를 읽은수 있는 형식으로 변환하는데 이는 응용 계층의 부담을 덜어주는 역할이 되기도 한다. <br />
          또한 데이터의 암호화, 복호화등을 수행하고 데이터 압축이 가능하다.
        </TextBox>
        <SubTitle>
          7계층 : 응용 계층
        </SubTitle>
        <TextBox>
          응용 계층은 OSI 7계층 모델에서 최상위 계층으로 사용자가 네트워크에 접근하는 방법을 제공한다. <br />
          예를 들어 구글의 크롬, 이메일, 데이터베이스 관리등 사용자와 가장 가까운 계층이다
        </TextBox>
        <ReferenceLink target="_blank" href="http://wiki.hash.kr/index.php/OSI_7_%EA%B3%84%EC%B8%B5">
          http://wiki.hash.kr/index.php/OSI_7_계층
        </ReferenceLink> <br />
        <ReferenceLink target="_blank" href="https://onecoin-life.com/19">
          https://onecoin-life.com/19
        </ReferenceLink> <br />

      </Main>
      <GiscusApp />
    </PostContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
`;