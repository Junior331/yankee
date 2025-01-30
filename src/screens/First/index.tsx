import React from "react";
import {
  Text,
  Container,
  ContainerText,
  DropTopContainer,
  DropBottom1Container,
  DropBottom2Container,
  DropBottom3Container,
} from "./styles";
import Ellipse3 from "@/assets/icons/Ellipse3";
import Ellipse5 from "@/assets/icons/Ellipse5";
import Ellipse4 from "@/assets/icons/Ellipse4";
import Ellipse6 from "@/assets/icons/Ellipse6";
import { Header, Cards } from "@/components/organism";
import { TitleSoous, Button } from "@/components/elements";
import { useNavigationHandler } from "@/hooks/navigation";

export default function First() {
  const { navigate } = useNavigationHandler();

  return (
    <Container>
      <Header />
      <ContainerText>
        <DropTopContainer>
          <Ellipse3 />
        </DropTopContainer>
        <TitleSoous fontSize={40} />
        <Text style={{ marginBottom: 20 }}>inspire through your actions</Text>
        <Cards />
      </ContainerText>
      <Button title="let's start!" onPress={() => navigate("Second")} />
      <DropBottom1Container>
        <Ellipse5 />
      </DropBottom1Container>
      <DropBottom2Container>
        <Ellipse4 />
      </DropBottom2Container>
      <DropBottom3Container>
        <Ellipse6 />
      </DropBottom3Container>
    </Container>
  );
}
