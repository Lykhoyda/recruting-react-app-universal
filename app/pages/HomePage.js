import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 200px;
`;

const LinkStyles = styled.div`
  text-decoration: none;
`;

const Home = () => {
  return (
    <Wrapper>
      <h3>Welcome!</h3>
      <p>Interested in new opportunities? We are hiring!</p>
      <Link to="/vacancies" style={{ textDecoration: "none" }}>
        <Button raised color="secondary">
          Hot vacancies
        </Button>
      </Link>
    </Wrapper>
  );
};

export default {
  component: Home
};
