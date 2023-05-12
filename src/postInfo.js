import { 
    UseEffectInfiniteLoop,
    Router404,
    BJ1712,
    BJ2292,
    BJ4344,
    ReactFragment,
    ClipBoardCopy,
    StyledComponent,
    StyledComponentGlobleStyle,
    SementicTag,
    ReactRouterLearn,
    DisplayGridLearn,
    ThemProjectChimONE,
    Restful
} from "./pages/post";

const content = [
    {
        key: 1, 
        title: 'useEffect 무한루프', 
        body: '이 블로그를 만들면서 useEffect를 사용했는데 렌더링이 계속 일어나 사이트가 다운됐었다 useEffect(함수,[종속성]) useEffect는 종속성이 변했을 때 useEffect 내부에 있는 함수를 실행시키는 역할을 한다. 자꾸 렌더링이 일어나는 이유를 찾아보니 함수부분에 setState를 하고 종속성에 state 값을 넣어줘서 그런거였다.', 
        date:'2022.09.13', 
        category: 'react', 
        link: 'useEffect_infinite_loop',
        element: <UseEffectInfiniteLoop />
    },
    {
        key: 2, 
        title: 'React-router 404 not found', 
        body: '문제발생 블로그에 댓글 기능을 추가하고 싶어 Giscus을 알아보고 바로 블로그에 적용을 한 후 잘 동작하나 확인을 하던 와중 갑자기 404 페이지가 떠서 아주 놀랐던 기억이 있다. react-router를 사용할때 이동페이시에서 새로고침을 했을 때 생기는 문제였다. 이유 React 는 CSR(클라이언트 사이트 렌더링)이다. 이를 React-Router 로 Path를', 
        date:'2022.09.13', 
        category: 'react', 
        link: 'router_404',
        element: <Router404 />
    },
    {
        key: 3, 
        title: '백준 1712번 알고리즘 [node.js]', 
        body: '첫 줄에 A, B, C 가 주어지는데 A는 고정비용 B는 가변비용 C는 판매가격이라고 할 때 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 손익분기점을 넘기는 값을 구하는 문제이다  간단하게 생각해서 마진은 판매가격에서 가변비용을 빼주게 되면 나온다. 이 마진을 고정비용으로 나눠주게 되면 손익분기점이 나오는데 ', 
        date:'2022.12.01', 
        category: '백준 문제풀이', 
        link: 'BJ1712',
        element: <BJ1712 />
    },
    {
        key: 4, 
        title: '백준 2292번 알고리즘 [node.js]', 
        body: '육각형으로 이루어진 벌집이 있다. 중앙에 방 1부터 시작해서 이웃하는 방에 돌아가면서 1찍 증가하는 번주를 매기는데 숫자 N이 주어졌을 떄, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈때 몇개의 방을 지나가는지(시작과 끝을 포함)를 계산하는 문제이다. 예를 들어 13까지는 3개, 58까지는 5개를 지난다.', 
        date:'2022.12.12', 
        category: '백준 문제풀이',  
        link: 'BJ2292',
        element: <BJ2292 />
    },
    {
        key: 5, 
        title: '백준 4344번 알고리즘 [node.js]', 
        body: '육각형으로 이루어진 벌집이 있다. 중앙에 방 1부터 시작해서 이웃하는 방에 돌아가면서 1찍 증가하는 번주를 매기는데 숫자 N이 주어졌을 떄, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈때 몇개의 방을 지나가는지(시작과 끝을 포함)를 계산하는 문제이다. 예를 들어 13까지는 3개, 58까지는 5개를 지난다.', 
        date:'2022.12.21', 
        category: '백준 문제풀이',  
        link: 'BJ4344',
        element: <BJ4344 />
    },
    {
        key: 6, 
        title: 'Fragment에 대해 알아보자', 
        body: '리엑트에서 컴포넌트 단위로 개발을 하면서 의미 없는 div태그로 감싸여진 코드들을 볼 수 있다. 이는 jsx를 사용하면서 return은 두개의 값을 반환 할 수 없어 하나의 최상위 태그를 사용해야 하기 때문이다. 이때 Fragment를 사용하면 의미 없는 태그 사용을 막을 수 있다. 일반적으로 div를 사용하면 이런식으로 보여지게 된다.', 
        date:'2022.12.21', 
        category: 'react',  
        link: 'React_Fragment_learn',
        element: <ReactFragment />
    },
    {
        key: 7, 
        title: '클립보드를 이용하여 텍스트를 복사하기', 
        body: '텍스트를 복사하는 기능을 만들고 싶을 때 클립보드 기능을 이용하면 쉽게 만들 수 있다 이렇게 클립보드API를 이용하면 간단하게 클립보드를 이용한 복사기능을 만들 수 있다. 이때 주의사항이 있는데 클립보드에 엑세스 하면 암호나 신용카드 번호와 같이 중요한 정보에 엑세스 할 수 있는 문제가 생긴다 이와 같은 이유 때문에 http가 없는 임시 서버에서 실험을 할 경우 동작하지 않을 수 있다.', 
        date:'2023.02.01', 
        category: 'javascript',  
        link: 'ClipboardCopy',
        element: <ClipBoardCopy />
    },
    {
        key: 8, 
        title: 'styled-component를 사용해보자', 
        body: 'react를 처음 공부할 때 html과 js는 한 파일에서 작성하는데 css도 한 파일에서 작성 할 수 있지않을까 란 생각이 들어 찾아보다가 styled-component를 알게 되었다. styled-component는 js in css 로 말 그대로 js파일 내부에 css를 작성한다는 뜻으로 styled-component의 장점으로는 css의 컴포넌트화로 유지보수가 쉬워지고 재사용성이 올라간다. 패키지 설치 사용 방법 설치가 잘 되었다면 사용방법에 대해 알아보자 ', 
        date:'2023.02.03', 
        category: 'styled-component',  
        link: 'StyledComponent',
        element: <StyledComponent />
    },
    {
        key: 9, 
        title: 'styled-component 전역 스타일링에 대해 알아보자', 
        body: '이전에 포스트에서 styled-component 사용법에 대해서 다뤘었는데 오늘은 GlobalStyle과 Theme에 대해 알아보겠다.  GolbalStyle 사용방법 간단하게 createGlobalStyle 이라는 함수를 사용해 css를 작성한 후 최상위 컴포넌트에 추가해주면 된다. 이렇게 사용하면 전역으로 css를 설정할 수 있어 불필요하게 중복되는 스타일링을 줄일 수 있다. Theme 사용방법', 
        date:'2023.02.05', 
        category: 'styled-component',  
        link: 'StyledComponent_GlobleStyle',
        element: <StyledComponentGlobleStyle />
    },
    {
        key: 10, 
        title: '[HTML] Sementic Tag란?', 
        body: 'Sementic Tag란? 우선 Sementic Tag의 뜻은 의미가 있는 태그라는 뜻이다. 반대로 div와 span태그와 같은 태그는 non-sementic tag라고 한다 그럼 div 태그로 만들 수 있는데 왜 의미가 있는 태그가 필요할까? Sementic Tag 가 필요한 이유 3가지 1. seo ( Search engine optimization ) 마크업을 통해 보다 많은 검색에 노출 시킬 수 있다.', 
        date:'2023.02.07', 
        category: 'html',  
        link: 'sementic_tag',
        element: <SementicTag />
    },
    {
        key: 11, 
        title: 'react-router에 대해서 알아보자', 
        body: 'react-router란? react-router는 클라이언트 측 라우팅이 가능하게 도와주는 라이브러리다. react-router를 사용하면 간단하게 url을 변경하면서 여러 페이지로 이루어진 어플리케이션을 만들 수 있다. 패키지 설치 사용방법 위에 코드에 대해 설명을 하면 우선 최상위 컴포넌트에서 BrowserRouter로 감싸준후 Route를 Routes로 감싸준다. Route에 path에는 url경로를 element에는 보여주고자 하는 컴포넌트를 넣어준다. ', 
        date:'2023.02.09', 
        category: 'react-router',  
        link: 'react_router_learn',
        element: <ReactRouterLearn />
    },
    {
        key: 12, 
        title: 'display Grid를 배워보자', 
        body: 'gird는 행과 열이 있는 레이아웃 시스템을 제공한다. 1차원 레이아웃을 지원하는 flex와 다르게 좀 더 복잡한 레이아웃을 위해 grid를 사용할 수 있다. gird는 flex와 같이 Container와 Item이라는 두가지 개념으로 구분되어 있는데 Container는 Item을 감싸는 부모 요소이며 그 안에 Item을 배치 할 수 있다. Grid Container Properties Container를 위한 속성은 아래와 같다.', 
        date:'2023.02.11', 
        category: 'css',  
        link: 'grid_learn',
        element: <DisplayGridLearn />
    },
    {
        key: 13, 
        title: 'REST FUL에 대해서 알아보자', 
        body: 'RESTful API는 클라이언트와 서버의 통신을 REST형태로 지원하는 API이다 그럼 REST는 무엇일까? REST는 (Representational state transfer)의 약어로 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다. REST는 클라이언트 측에서 URL형태로 Server에 요청을 할 수 있다.', 
        date:'2023.02.16', 
        category: 'network',  
        link: 'restful_learn',
        element: <Restful />
    },
    { 
        key: 14, 
        title: '팀프로젝트 기록 - 1', 
        body: '그동안 클론코딩을 하면서 기본적인 html, css, js 익혔고 이번에는 팀프로젝트에 참여해서 협업을 하는 경험을 하고 싶었다. 그래서 동아리같이 팀 단위로 개발하는 곳 을 알아보던 와중 왁물원이라는 네이버 카페에서 카페회원들 끼리 자체적으로 카페 내부 서비스를 만들어 보고 싶다는 글이 올라와 얼른 신청을 했다.', 
        date:'2023.03.06', 
        category: 'react',  
        link: 'team_project_chim_1',
        element: <ThemProjectChimONE />
    },
    { 
        key: 14, 
        title: 'test', 
        body: '그동안 클론코딩을 하면서 기본적인 html, css, js 익혔고 이번에는 팀프로젝트에 참여해서 협업을 하는 경험을 하고 싶었다. 그래서 동아리같이 팀 단위로 개발하는 곳 을 알아보던 와중 왁물원이라는 네이버 카페에서 카페회원들 끼리 자체적으로 카페 내부 서비스를 만들어 보고 싶다는 글이 올라와 얼른 신청을 했다.', 
        date:'2023.03.06', 
        category: 'react',  
        link: 'team_project_chim_1',
        element: <ThemProjectChimONE />
    },
];

export default content