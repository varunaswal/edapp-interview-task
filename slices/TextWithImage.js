import React from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { Container } from "../components/styles/Container.Styled";
import { GridContainer } from "../components/styles/GridContainer.Styled";
import { GridItem } from "../components/styles/GridItem.Styled";
import { Blockquote } from "../components/styles/Blockquote";
import { Figure } from "../components/styles/Figure";

export default function TextWithImage({ slice }) {
  return (
    <Container>
      <GridContainer>
        {/* Insert first if text is on right */}
        {slice.slice_label === "textwithimageright" && (
          <Image
            src={slice.primary.image.url}
            {...slice.primary.image.dimensions}
            alt=""
          />
        )}
        <GridItem
          startcolumn={slice.slice__label === "textwithimageleft" ? 1 : 2}
          span={2}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.text} />
        </GridItem>
        {/* Otherwise insert after text */}
        {slice.slice_label === "textwithimageleft" && (
          <Image
            src={slice.primary.image.url}
            {...slice.primary.image.dimensions}
            alt=""
          />
        )}
      </GridContainer>
      {!!slice.primary.quote.length && (
        <Figure>
          <Blockquote>
            <PrismicRichText field={slice.primary.quote} />
          </Blockquote>
        </Figure>
      )}
    </Container>
  );
}
