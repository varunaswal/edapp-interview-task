import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import * as Slices from "../slices";
import HeaderSection from "../components/HeaderSection";

const resolver = ({ sliceName }) => Slices[sliceName];

export default function CaseStudy({ caseStudy }) {
  return (
    <div>
      <Head>
        <title>Edapp Marley Spoon case study</title>
        <meta name="description" content="Edapp case study for marley spoon" />
      </Head>

      <main>
        <HeaderSection caseStudy={caseStudy} />
        <SliceZone
          slices={caseStudy.body}
          resolver={resolver}
          components={Slices}
        />
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const prismicRepo = process.env.PRISMIC_REPO_URL;
  const endpoint = prismic.getEndpoint(prismicRepo);
  const client = prismic.createClient(endpoint);

  const caseStudy = await client.getByUID("case_study", "marley-spoon");

  return {
    props: {
      caseStudy: caseStudy.data,
    },
  };
}
