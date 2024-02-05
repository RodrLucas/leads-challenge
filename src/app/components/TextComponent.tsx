import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export function TextComponent({ children }: { children: ReactNode }) {
  return (
    <Text fontSize="medium" color="grey">
      {children}
    </Text>
  );
}
