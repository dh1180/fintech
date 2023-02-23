import React, { useState } from "react";
import Welcome from "./Welcome";

const ListComponents = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return (
            <p>{news.title}</p>
        );
      })}
    </div>
  );
};

export default ListComponents;