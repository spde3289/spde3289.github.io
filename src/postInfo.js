const content = [
    {
        key: 1, 
        title: 'useEffect 무한루프', 
        body: '이 블로그를 만들면서 useEffect를 사용했는데 렌더링이 계속 일어나 사이트가 다운됐었다 useEffect(함수,[종속성]) useEffect는 종속성이 변했을 때 useEffect 내부에 있는 함수를 실행시키는 역할을 한다. 자꾸 렌더링이 일어나는 이유를 찾아보니 함수부분에 setState를 하고 종속성에 state 값을 넣어줘서 그런거였다.', 
        date:'2022.09.13', 
        category: [{
            key: 1, 
            category: ['react']
        }], 
        link: '/posts/useEffect_infinite_loop'
    },
    {
        key: 2, 
        title: 'React-router 404 not found', 
        body: '문제발생 블로그에 댓글 기능을 추가하고 싶어 Giscus을 알아보고 바로 블로그에 적용을 한 후 잘 동작하나 확인을 하던 와중 갑자기 404 페이지가 떠서 아주 놀랐던 기억이 있다. react-router를 사용할때 이동페이시에서 새로고침을 했을 때 생기는 문제였다. 이유 React 는 CSR(클라이언트 사이트 렌더링)이다. 이를 React-Router 로 Path를', 
        date:'2022.09.13', 
        category: [{
            key: 2, 
            category: ['react']
        }], 
        link: '/posts/router_404'
    },
    {
        key: 3, 
        title: '백준 1712번 알고리즘 [node.js]', 
        body: '첫 줄에 A, B, C 가 주어지는데 A는 고정비용 B는 가변비용 C는 판매가격이라고 할 때 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 손익분기점을 넘기는 값을 구하는 문제이다  간단하게 생각해서 마진은 판매가격에서 가변비용을 빼주게 되면 나온다. 이 마진을 고정비용으로 나눠주게 되면 손익분기점이 나오는데 ', 
        date:'2022.12.01', 
        category: [{
            key: 3, 
            category: ['알고리즘']
        }], 
        link: '/posts/BJ1712'
    },
    {
        key: 4, 
        title: '백준 2292번 알고리즘 [node.js]', 
        body: 'asdasd', 
        date:'2022.12.12', 
        category: [{
            key: 4, 
            category: ['알고리즘']
        }],  
        link: '/posts/BJ2292'
    },
];

export default content