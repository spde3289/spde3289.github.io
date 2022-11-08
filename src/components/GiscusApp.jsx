import Giscus from '@giscus/react';

export default function GiscusApp() {
  return (
    <Giscus
      repo="spde3289/spde3289.github.io"
      repoId="R_kgDOH_0sSg"
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="pathname"
      term='light'
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="Welcome to @giscus/react component!"
      theme="light"
      lang="ko"
      loading="lazy"
    />
  );
}