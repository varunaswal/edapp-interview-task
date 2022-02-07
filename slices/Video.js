import React from "react";
import { Container } from "../components/styles/Container.Styled";
import { VideoContainer } from "../components/styles/VideoContainer.Styled";

export default function EmbeddedVideo({ slice }) {
  return (
    <Container>
      <VideoContainer
        dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
      />
    </Container>
  );
}
