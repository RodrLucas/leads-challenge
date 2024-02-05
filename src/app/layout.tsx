import { Metadata } from "next";
import { ReactNode } from "react";
import { ChakraProviders } from "./providers/chakraProvider";

export const metadata: Metadata = {
  title: "FCamra",
  description: "Front-end leads",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
