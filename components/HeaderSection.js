import React from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { Container } from "./styles/Container.Styled";
import { Divider } from "./styles/Divider.Styled";

export default function HeaderSection({ caseStudy }) {
  return (
    <>
      <Container backgroundImageUrl={caseStudy.header_image.url} height={400} />
      <Container>
        <Image
          src={caseStudy.brand_logo.url}
          alt=""
          width="330px"
          height="50px"
        />
        <PrismicRichText field={caseStudy.heading} />
        <PrismicRichText field={caseStudy.subheading} />
        <Divider />
        <PrismicRichText field={caseStudy.description} />
      </Container>
    </>
  );
}
