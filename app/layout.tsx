import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
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
          <MainNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
