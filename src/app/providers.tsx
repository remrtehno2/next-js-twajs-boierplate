"use client";
import { NextUIProvider } from "@nextui-org/system";
import { Suspense } from "react";
import { SDKProvider } from "@tma.js/sdk-react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <SDKProvider>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </SDKProvider>
    </NextUIProvider>
  );
}
