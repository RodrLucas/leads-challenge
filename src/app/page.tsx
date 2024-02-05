import { Card, CardBody } from "@chakra-ui/react";
import { FTabs } from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card margin={["5", "5", "20"]}>
        <CardBody>
          <FTabs />
        </CardBody>
      </Card>
    </main>
  );
}
