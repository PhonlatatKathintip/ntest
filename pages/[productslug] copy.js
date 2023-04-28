import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import React from "react";

const singleproduct = ({ ntests }) => {
  return (
    <div className="container single-container">
      <div className="left-section">
        <Image src={ntests.image} width={300} height={700} alt="" />
      </div>
      <div className="right-section">
        <h3>{ntests.name}</h3>
        <p className="price">${ntests.price}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: ntests.description.html,
          }}
        ></div>
        <a className="btn">Add to cart 🛒</a>
      </div>
    </div>
  );
};
export default singleproduct;

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://api-ap-northeast-1.hygraph.com/v2/clgyx5z41246101ue9mnm4lf8/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery($slug: String) {
        ntests(where: { slug: $slug }) {
          id
          name
          price
          slug
          image
        }
      }
    `,
    variables: {
      slug: params.productslug,
    },
  });

  const ntests = data.data.ntests;
  return {
    props: {
      ntests,
    },
  };
}
