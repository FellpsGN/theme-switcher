import React, { useState } from "react";
import {
  ChakraProvider,
  Card,
  CardBody,
  Text,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function App() {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ChakraProvider>
      <Flex
        w={"100%"}
        height={"100vh"}
        backgroundColor={isChecked ? "black" : "white"}
      >
        <Flex
          w={"100%"}
          height={"100vh"}
          position={"absolute"}
          top={"0"}
          left={"0"}
        >
          <Card position={"absolute"} top={"50%"} left={"50%"}>
            <CardBody
              textAlign={"center"}
              color={isChecked ? "white" : "black"}
            >
              <Text display={"block"}>Theme Switcher</Text>
              <SunIcon />
              <MoonIcon />
              <Switch
                checked={false}
                onChange={handleChecked}
                display={"block"}
              />
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
