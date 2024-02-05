import {
  Card as FCard,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import {
  faBriefcase,
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardFooterComponent } from "./FooterCard";
import { TextComponent } from "../TextComponent";

export function CardComponent({ isAccepted }: { isAccepted: boolean }) {
  return (
    <FCard>
      <CardHeader>
        <Flex gap={3}>
          <Avatar name="Oshigaki Kisame" />
          <div>
            <Heading size="md">Client Report</Heading>
            <TextComponent>January 4 @ 2:37 pm</TextComponent>
          </div>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={10} direction={["column", "column", "row"]}>
            <Flex gap={3} alignItems="center">
              <FontAwesomeIcon width={12} icon={faLocationDot} />
              <TextComponent>Yanderra 2574</TextComponent>
            </Flex>
            <Flex gap={3}>
              <FontAwesomeIcon width={12} icon={faBriefcase} />
              <TextComponent>Painters</TextComponent>
            </Flex>
            <Flex gap={3}>
              <TextComponent>Job ID: 5577421</TextComponent>
            </Flex>
          </Flex>
          <Flex gap={10} flexDirection="column">
            {isAccepted && (
              <Flex gap={5}>
                <Flex gap={3}>
                  <FontAwesomeIcon width={12} icon={faMobile} />
                  <TextComponent>11989291287</TextComponent>
                </Flex>
                <Flex gap={3}>
                  <FontAwesomeIcon width={12} icon={faEnvelope} />
                  <TextComponent>lucasrodriguessantos0@gmail.com</TextComponent>
                </Flex>
              </Flex>
            )}

            <TextComponent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque numquam velit eum quasi doloribus cumque alias
              assumenda unde esse quia at ducimus veritatis vitae, aperiam
              voluptates voluptatum incidunt id dignissimos!
            </TextComponent>
          </Flex>
          {!isAccepted && <CardFooterComponent />}
        </Stack>
      </CardBody>
    </FCard>
  );
}
