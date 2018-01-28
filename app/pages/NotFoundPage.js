import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
`;

const NotFoundPage = () => {
  return <Heading>Ooops, route not found.</Heading>;
};

export default {
  component: NotFoundPage
};
