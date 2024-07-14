"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";
import { SDKProvider } from "@telegram-apps/sdk-react";
import {ModalQueueProvider} from "@/contexts/ModalQueueProvider";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <SDKProvider>
        <ModalQueueProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ModalQueueProvider>
      </SDKProvider>
    </NextUIProvider>
  );
}
