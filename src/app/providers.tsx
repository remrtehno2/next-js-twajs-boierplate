import { NextUIProvider } from "@nextui-org/system";
import { Suspense } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </NextUIProvider>
  );
}
