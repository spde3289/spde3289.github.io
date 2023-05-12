import React from "react";
import PostHeader from '../../../../components/post/PostHeader'
import GiscusApp from '../../../../components/post/GiscusApp';
import { 
    PostContainer, 
    Main, 
    SubTitle, 
    TextBox, 
} from '../../style'


export default function ThemProjectChimONE(){
    return(
        <PostContainer>
            <PostHeader 
            title='팀프로젝트 기록 - 1'
            tagName='react'
            date='2023.03.06' />
            <Main>
                <SubTitle>
                    시작 계기
                </SubTitle>
                <TextBox>
                    그동안 클론코딩을 하면서 기본적인 html, css, js 익혔고 이번에는 
                    팀프로젝트에 참여해서 협업을 하는 경험을 하고 싶었다.  <br />
                    그래서 동아리같이 팀 단위로 개발하는 곳 을 알아보던 와중 왁물원이라는 네이버 카페에서 
                    카페회원들 끼리 자체적으로 카페 내부 서비스를 만들어 보고 싶다는 글이 올라와 얼른 신청을 했다. <br /><br />
                    왁물원은 우왁굳이라는 스트리머가 운영하는 카페인데 카페 회원들끼리 컨탠츠등을 만들어서 
                    스트리머에게 조공하는 일이 종종 있다. <br />
                    이러한 일이 자주 생기다보니 따로 "왁물원 인력사무소"라는 게시판이 만들어 질 정도인데 문제는 
                    구인 구직에 대한 양식이 없다보니 내가 원하는 분야의 구인 구직글을 따로 모아 보기힘들 뿐더러  
                    이미 마감이 된 게시글과 구인중인 게시글이 섞여있어 불편함을 느낄 수 있다. <br />
                    그래서 인력사무소 게시글을 모아서 정렬해주는 사이트를 만들어보자는 내용이였다. <br />
                </TextBox>
                <SubTitle>
                    첫 회의 2.20(화)
                </SubTitle>
                <TextBox>
                    <strong> 전체 회의: <br /> </strong>
                    우선 MVP를 완성한 후 유저의 요청사항이나 반응에 따라 추가로 기능들을 만들어나가기로 했다 <br />
                    MVP: 왁물원 인력사무소 게시글 스크랩/분류 기능 구현, 관리자 페이지(회원 기능 없으므로 url로) 구현
                    관리자 페이지 내에서 자동으로 분류되지 못한 부분들 추가로 수정 가능하도록 구현 <br />
                    <br />
                    디자인에 대한 레퍼런스는 원티드를 참고하기로 했다. 
                    빠르면 02.21일 오후까지 메인페이지와 구인페이지에 대한 와이어프레임을 우선으로 작성하기로 했다.
                    <br /><br />
                    크롤링 : 카페의 게시글을 크롤링 해와서 나름의 기준대로 마감여부와 카테고리를 구분해 보여줘야 하는데 <br />
                    카페에 게시글이 등록될 때 마다 크롤링을 하게 되면 횟수 제한에 걸릴 뿐더러 서버에도 부담을 줄 수 있어 <br />
                    특정 시간마다 크롤링이 가능하게 해야한다. <br /><br />
                    관리자 페이지 : 크롤링한 데이터를 자동으로 카테고리를 분류를 해준후 분류가 되지 않은 데이터를 관리자 페이지에서 수정할 수 있도록 한다. <br /><br />
                    공고글 : 공고글에 사진이 있는 경우 게시글 내용과 같이 보여줄 수 있는지 확인필요 <br /><br />
                    카테고리 : 카테고리 하위에 태그가 있는 형태로 수평적으로 분류하기로 했다 (원티드 참고) <br /><br /><br />

                    프론트 회의 : <br />
                    프론트 회의에서는 어떤 기술을 사용할지에 대해 정했다. <br />
                    react, react-router, styled-components, jest, recoil, axios, react-query를 사용하기로 했다 <br />
                    기능 구현분배에 대해선 디자인이 나온 후에 정하기로 했다.
                </TextBox>
                <SubTitle>
                    두번째 회의 02.25(토)
                </SubTitle>
                <TextBox>
                    <strong> 전체 회의: <br /> </strong>
                    백엔드 : 공고글에 이미지가 있을 경우 URL형태로 이미지를 보여줄 수 있음을 확인했다. <br />
                    게시글을 태그정보만 분류해 DB에 저장해두고 유저가 요청할 때 마다 보여주기로 했다. <br />
                    프론트 : 디자인이 나온 후 역활 분담을 다 했고 다음주 회의 까지 클라이언트 페이지를 만들기로 했다. <br />
                    디자인 : 클라이언트쪽 디자인은 완료됐고 관리자페이지 디자인 예정이다. <br />
                    <br />
                    내가 할 일 : 디자인이 나온 후 내가 게시글에 대한 상세페이지와 구인페이지를 담당하기로 했다.
                </TextBox>
                <SubTitle>
                    세번째 회의 03.04(토)
                </SubTitle>
                <TextBox>
                    <strong> 전체 회의: <br /> </strong>
                    백엔드 : 네이버에서 데이터를 가져와 태그를 분류해줘야 하는데 모든 데이터를 가져올 때 마다 분류 작업을 하기엔 <br />
                    분류 작업이 오래 걸려 대략 3주간의 데이터만 가져오기로 했다.<br />
                    프론트 : 클라이언트 페이지는 거의 진행 되었다. 앞으로 관리자 페이지를 진행 할 예정 <br />
                    디자인 : 관리자 페이지 디자인 90%정도 완료, 완료 후 태블릿 버젼 디자인 작업 예정 <br />
                </TextBox>
                <SubTitle>
                  소감
                </SubTitle>
                <TextBox>
                  처음 하는 프로젝트라 팀원에게 피해가 갈까 걱정 됐지만 걱정하던 일은 일어나지 않았다. <br />
                  앞으로 진행 과정을 정리해 올리려 한다. <br />
                </TextBox>
            </Main>
            <GiscusApp />
        </PostContainer>
    )
}