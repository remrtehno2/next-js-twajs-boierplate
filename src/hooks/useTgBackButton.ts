"use client";
import { ModalQueueContext } from "@/contexts/ModalQueueProvider";
import { initBackButton } from "@telegram-apps/sdk-react";
import { useContext, useEffect, useRef } from "react";

const useTgBackButton = () => {
  const ctx = useContext(ModalQueueContext);
  const ref = useRef(ctx.close);

  useEffect(() => {
    const [backButton] = initBackButton();

    backButton.off("click", ref.current);
    backButton.show();
    backButton.on("click", (ref.current = ctx.close));
  }, [ctx.modals]);
};

export { useTgBackButton };
