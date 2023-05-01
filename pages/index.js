import React from "react";
import { Card } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Button } from "@mui/material";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Axios from "axios";

export const getStaticProps = async () => {
  const res = await Axios.get("http://localhost:3001/api/user/");
  //console.log(res.data);
  return {
    props: { ntests: res.data },
  };
};

export default function Home({ ntests }) {
  console.log(ntests);
  return (
    <div className="flex-1 flex-row grid grid-cols-4 gap-4 mr-3 ml-3">
      {ntests.rows.map((ntests, index) => {
        return (
          <div key={index}>
            <Card className="justify-center mb-3 mt-3  flex-wrap">
              <div key={ntests.slug}>
                <Link href={`products/${ntests.slug}`}>
                  <div>
                    <img
                      height={320}
                      width={320}
                      src={ntests.image}
                      alt={ntests.name}
                    />
                  </div>
                </Link>
                <div className=" rounded-xl text-center bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 mb-3">
                  <div>
                    <h3>{ntests.name}</h3>
                    <p>${ntests.price}</p>
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
