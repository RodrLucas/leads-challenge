"use client";

import { Button, Flex } from "@chakra-ui/react";
import { TextComponent } from "../TextComponent";

export function CardFooterComponent() {
  return (
    <Flex gap={5} alignItems="center" direction={["column", "column", "row"]}>
      <Flex gap={5}>
        <Button colorScheme="orange" variant="solid">
          Accept
        </Button>
        <Button colorScheme="gray" variant="solid">
          Decline
        </Button>
      </Flex>
      <TextComponent>
        <strong>$49.00</strong> Lead Invitation
      </TextComponent>
    </Flex>
  );
}
