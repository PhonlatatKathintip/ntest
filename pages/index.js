import React from "react";
import { Card } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Button } from "@mui/material";

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
    <div className="flex-1 flex-row grid grid-cols-4 gap-4">
      {allProducts.map((product) => {
        return (
          <div>
            <Card>
              <div key={product.id}>
                <Link href={`products/${product.slug}`}>
                  <div>
                    <img
                      height={380}
                      width={380}
                      src={product.image.url}
                      alt={product.name}
                    />
                  </div>
                </Link>
                <div className=" rounded-xl text-center bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
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
