import React from "react";
import { Container } from "./styles";
import { Image } from "react-native";

export const Cards = () => {
  return (
    <Container>
      <Image
        style={{
          zIndex: 998,
          position: "relative",
          left: 80,
          top: 20,
        }}
        source={require("../../../assets/images/card2.png")}
      />
      <Image
        style={{ zIndex: 999 }}
        source={require("../../../assets/images/card3.png")}
      />
      <Image
        style={{ zIndex: 997, position: "relative", right: 80, top: 20 }}
        source={require("../../../assets/images/card1.png")}
      />
    </Container>
  );
};

export default Cards;
