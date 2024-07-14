import "@/styles/globals.css";
import { Providers } from "./providers";
import LayoutChildren from "./LayoutChildren";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <head />
      <body>
        <Providers>
          {children}
          <LayoutChildren />
        </Providers>
      </body>
    </html>
  );
}
