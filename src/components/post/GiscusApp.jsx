import styled, { useTheme } from 'styled-components';
import Giscus from '@giscus/react';

export default function GiscusApp() {

  const theme = useTheme()

  return (
    <Container>
      <Giscus
        id='comments'
        repo="spde3289/spde3289.github.io"
        repoId="R_kgDOH_0sSg"
        category="Q&A"
        categoryId="DIC_kwDOF1L2fM4B-hVS"
        mapping="title"
        term='Welcome to @giscus/react component!'
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme.color.comment}
        lang="ko"
        loading="lazy"
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
`;
