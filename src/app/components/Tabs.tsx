import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CardComponent } from "./Card/Card";

export function FTabs() {
  return (
    <ChakraTabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab
          _selected={{ color: "white", bg: "orange.400", fontWeight: "bold" }}
        >
          Invited
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "orange.400", fontWeight: "bold" }}
        >
          Accepted
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardComponent isAccepted={false} />
        </TabPanel>
        <TabPanel>
          <CardComponent isAccepted={true} />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  );
}
