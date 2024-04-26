import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Provider } from "mobx-react";
import Providers from "./Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "User Product",
  description: "Generated by Md. Moniruzzaman",
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta property="og:title" content="User Product" key="title" />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#0CC2AA"
          startPosition={0.3}
          stopDelayMs={300}
          height={2}
          showOnShallow={true}
          options={{ showSpinner: true }}
          shallowRouting
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
