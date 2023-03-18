import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";

const Container = styled.div`
  margin: 0 60px;
  padding: 20px 0px;
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
`;

const Button = styled.button`
  background-color: darkorange;
  border: none;
  border-radius: 30px;
  padding-left: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  width: 130px;
  justify-content: flex-end;
`;


const CategoryProducts = () => {

  return (
    <>
    <Container>
      <InfoContainer>
        <Title>
          Browse Our <br />
          <span style={{ color: "darkorange" }}>Hottest</span> Categories
        </Title>
        <Button>
          See All{" "}
          <EastOutlined
            style={{
              background: "white",
              borderRadius: 50,
              padding: 2,
              color: "black",
              marginLeft: 10,
            }}
          />
        </Button>
      </InfoContainer>
      </Container>
      <ProductSlider/>
    </>
  );
};

export default CategoryProducts;
