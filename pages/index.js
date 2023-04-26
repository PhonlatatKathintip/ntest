import React from "react";
import { Card } from "@material-tailwind/react";
import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

export default function index() {
  return (
    <div>
      <div className="d-flex flex-row mb-3 justify-center">
        <Card>
          <Box sx={{ commonStyles, borderColor: "grey.500" }}>
            <div className="">
              <img src="https://th.bing.com/th/id/OIP.buvvTQK0cFvJwLZYhCjjGAAAAA?w=302&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
              <text className="h1">Nike Air Jordan</text>
            </div>
          </Box>
        </Card>
      </div>
    </div>
  );
}
