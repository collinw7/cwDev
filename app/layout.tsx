import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GlobalHeader } from "@/components/global-header";
import { Provider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CWSE",
  description: "Portfolio site for CWSE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={inter.className}>
        <Provider>
          <GlobalHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
