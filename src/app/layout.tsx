import "@/styles/globals.css";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
