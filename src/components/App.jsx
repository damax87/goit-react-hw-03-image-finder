import React, { Component } from "react";
import { Loader } from "./Loader/Loader";
import { Instance } from "./Modal/Modal";

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
      React homework template
    </div>
  );
};
