import React from "react";
import { Card } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Button } from "@mui/material";
//import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: "https://api-ap-northeast-1.hygraph.com/v2/clgyx5z41246101ue9mnm4lf8/master",
//     cache: new InMemoryCache(),
//   });
//   const data = await client.query({
//     query: gql`
//       query ProductsQuery {
//         products {
//           id
//           name
//           slug
//           price
//           image {
//             url
//           }
//         }
//       }
//     `,
//   });
//   const allProducts = data.data.products;
//   return {
//     props: {
//       allProducts,
//     },
//   };
// }

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

export default function Home() {
  const allProducts = [
    {
      slug: 1,
      image: {
        url: "https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2Fjordan-1-retro-high-og-chicago-1.jpg&w=1920&q=75",
      },
      name: "Jordan 1 Retro High OG Chicago",
      price: 200,
    },
    {
      slug: 2,
      image: {
        url: "https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2Fjordan-1-retro-high-og-chicago-1.jpg&w=1920&q=75",
      },
      name: "Jordan 1 Retro High OG Chicago",
      price: 200,
    },
    {
      slug: 3,
      image: {
        url: "https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2Fjordan-1-retro-high-og-chicago-1.jpg&w=1920&q=75",
      },
      name: "Jordan 1 Retro High OG Chicago",
      price: 200,
    },
    {
      slug: 3,
      image: {
        url: "https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2Fjordan-1-retro-high-og-chicago-1.jpg&w=1920&q=75",
      },
      name: "Jordan 1 Retro High OG Chicago",
      price: 200,
    },
  ];

  return (
    <div className="flex-1 flex-row grid grid-cols-4 gap-4 mr-3 ml-3">
      {allProducts.map((product) => {
        return (
          <div>
            <Card className="justify-center mb-3 mt-3  flex-wrap">
              <div key={product.id}>
                <Link href={`products/${product.slug}`}>
                  <div>
                    <img
                      height={320}
                      width={320}
                      src={product.image.url}
                      alt={product.name}
                    />
                  </div>
                </Link>
                <div className=" rounded-xl text-center bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 mb-3">
                  <div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                  <Button>Add to cart 🛒</Button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       allProducts,
//     },
//   };
// }
