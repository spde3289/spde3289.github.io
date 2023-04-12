import styled, { useTheme } from 'styled-components';

export default function GiscusApp() {

  const theme = useTheme()

  return (
    <Container>
      <giscus-widget
        id='comments'
        repo="spde3289/spde3289.github.io"
        repoId="R_kgDOH_0sSg"
        category="General"
        categoryId="DIC_kwDOH_0sSs4CR0Uy"
        mapping="pathname"
        term='Welcome to @giscus/react component!'
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
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
