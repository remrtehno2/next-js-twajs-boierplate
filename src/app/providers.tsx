"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";
import { SDKProvider } from "@telegram-apps/sdk-react";

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
