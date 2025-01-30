import React from "react";

import { Button } from "@/components/elements";
import { Header } from "@/components/organism";
import { Container, Title, Subtitle, Divider } from "./styles";

const LoginScreen = () => {
  return (
    <Container>
      <Header />
      <Title>First time with us?{"\n"}Let’s go!!</Title>
      <Button title="Create an account" />
      <Divider />
      <Subtitle>You already have{"\n"} an account here?</Subtitle>
      <Button title="Sign in" />
    </Container>
  );
};

export default LoginScreen;
