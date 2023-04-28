import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import React from "react";

const singleproduct = ({ ntests }) => {
  return (
    <div>
      <div>
        <Image src={ntests.image} width={300} height={700} alt="" />
      </div>
      <div>
        <h3>{ntest.name}</h3>
        <p className="price">${ntests.price}</p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit
            voluptatum vitae labore molestiae, maiores, hic ad officiis
            laudantium in officia, nam vel quod! Nesciunt aperiam explicabo
            facere laboriosam eius.
          </p>
        </div>
        <button className="">Add to cart 🛒</button>
      </div>
    </div>
  );
};
export default singleproduct;

export async function getStaticPaths({ params }) {
  const client = new ApolloClient({
    uri: "https://api-ap-northeast-1.hygraph.com/v2/clgyx5z41246101ue9mnm4lf8/master",
    cache: new InMemoryCache(),
  });
  const data = await client.query({
    query: gql`
      query MyQuery {
        ntests {
          id
          name
          slug
          price
          image
        }
      }
    `,
  });

  const paths = data.data.ntests.map((singleProduct) => {
    return {
      params: {
        ntestslug: singleProduct.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

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
      slug: params.ntestslug,
    },
  });

  const ntests = data.data.ntests;
  return {
    props: {
      ntests,
    },
  };
}
