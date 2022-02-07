import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Container } from "../components/styles/Container.Styled";
import { Blockquote } from "../components/styles/Blockquote";
import { Figure } from "../components/styles/Figure";

export default function Quote({ slice }) {
  return (
    <Container>
      <Image
        src={slice.primary.image.url}
        {...slice.primary.image.dimensions}
        alt=""
      />
      <Figure>
        <Blockquote>
          <PrismicRichText field={slice.primary.quote} />
        </Blockquote>
        <figcaption>
          <PrismicRichText field={slice.primary.quotee} />
        </figcaption>
      </Figure>
    </Container>
  );
}
