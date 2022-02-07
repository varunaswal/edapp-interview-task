import React from "react";
import { GridContainer } from "../components/styles/GridContainer.Styled";
import { GridItem } from "../components/styles/GridItem.Styled";
import { PrismicRichText } from "@prismicio/react";
import { Blockquote } from "../components/styles/Blockquote";
import { Figure } from "../components/styles/Figure";

export default function TextWithBackground({ slice }) {
  console.log(slice);
  return (
    <GridContainer backgroundImageUrl={slice.primary.background_image.url}>
      <GridItem
        startColumn={slice.slice_label === "textwithbackgroundleft" ? 1 : 3}
      >
        <PrismicRichText field={slice.primary.title} />

        <PrismicRichText field={slice.primary.text} />
        {!!slice.primary.quote.length && (
          <Figure>
            <Blockquote>
              <PrismicRichText field={slice.primary.quote} />
            </Blockquote>
          </Figure>
        )}
      </GridItem>
    </GridContainer>
  );
}
