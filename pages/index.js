import React from "react";
import card from "@material-tailwind/react/theme/components/card";
import { Card } from "@material-tailwind/react";

export default function index() {
  return (
    <div>
      <div className="d-flex flex-row mb-3 justify-center">
        <Card>
          <img src="https://th.bing.com/th/id/OIP.buvvTQK0cFvJwLZYhCjjGAAAAA?w=302&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
          <text className="h1">Nike Air Jordan</text>
        </Card>
      </div>
    </div>
  );
}
