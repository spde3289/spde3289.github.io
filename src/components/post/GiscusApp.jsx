import Giscus from '@giscus/react';
import styled from 'styled-components';

export default function GiscusApp() {
  return (
    <Container>
      <Giscus
        id='comments'
        repo="spde3289/spde3289.github.io"
        repoId="R_kgDOH_0sSg"
        category="Announcements"
        categoryId="DIC_kwDOF1L2fM4B-hVS"
        mapping="url"
        term='Welcome to @giscus/react component!'
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
`;
