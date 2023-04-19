import React from "react";
import PostHeader from '../../../../components/post/PostHeader'
import GiscusApp from '../../../../components/post/GiscusApp';
import styled from "styled-components";
import { 
    PostContainer, 
    Main, 
    SubTitle, 
    TextBox, 
    } from '../../style'



export default function ThemProjectChim_1(){
    return(
        <PostContainer>
            <PostHeader 
            title='팀프로젝트 기록 - 1'
            tagName='react'
            date='2023.02.13' />
            <Main>
                <SubTitle>
                    시작 계기
                </SubTitle>
                <TextBox>
                    그동안 클론코딩을 하면서 기본적인 html과 css를 js 익혔고 이번에는  <br />
                    팀프로젝트에 참여해서 협업을 하는 경험을 하고 싶었다.  <br />
                    그래서 동아리등을 알아보던 와중 왁물원이라는 네이버 카페에서 카페 회원들 끼리 자체적으로  <br />
                    왁물원 내부 서비스를 만들어 보고 싶다는 글이 올라와 얼른 신청을 했다.  <br /><br />
                    왁물원은 우왁굳이라는 스트리머가 운영하는 카페인데 카페 회원들끼리 컨탠츠등을 만들어서 스트리머에게 조공하는  <br />
                    일이 종종 있다. 이러한 일이 자주 생기다보니 따로 "왁물원 인력사무소"라는 게시판이 만들어 질 정도인데 문제는  <br />
                    구인 구직에 대한 양식이 없다보니 내가 원하는 분야의 구인 구직글을 따로 모아 보기힘들 뿐더러  <br />
                    이미 마감이 된 게시글과 구인중인 게시글이 섞여있어 불편함을 느낄 수 있다. <br />
                    그래서 인력사무소 게시글을 모아서 정렬해주는 사이트를 만들어보자는 내용이였다. <br />

                </TextBox>
                <SubTitle>
                    1주차 회의 
                </SubTitle>
                <TextBox>
                    팀장님과 면접을 본 후 디스코드에 들어가보니 이미 백엔드 개발자 2명 프론트 개발자 1분 기획자 1분 디자이너 1분 <br />
                    이 계셨고 초기 기획이 끝나 있는 상태 였다. <br />
                    첫 회의는 그동안 기획한 내용과 앞으로 프로젝트를 어떻게 진행할지에 대해서 서로 의견을 나누는 시간이였다.<br />
                    앞으로 프로젝트 진행상황은 노션으로 공유하기로 했다. <br />
                    전체 회의를 마친 후 2차로 프론트 회의를 가졌는데 프론트 회의에서는 어떤 기술을 사용할건지 의논 했다. <br />
                    react, react-router(라우팅), styled-component(css), recoil(상태관리), jest(테스트)를 사용하기로 하고 <br />
                    Material UI라이브러리를 사용해서 ui작업을 하기로 했다. <br />
                </TextBox> 
            </Main>
            <GiscusApp />
        </PostContainer>
    )
}

