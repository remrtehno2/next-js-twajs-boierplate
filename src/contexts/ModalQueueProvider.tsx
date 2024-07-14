import React, { useCallback, useState } from "react";

type ModalQueueContext = {
  close: () => void;
  add: (onClose: { onClose: () => void }) => void;
  modals: number;
};

export const ModalQueueContext = React.createContext<ModalQueueContext>({
  close: () => {},
  add: () => {},
  modals: 0,
});

export const ModalQueueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalQueue, setModalQueue] = useState<(() => void)[]>([]);

  const deleteLastModal = useCallback(() => {
    setModalQueue((prevItems) => {
      const newState = [...prevItems];

      const callBackDelete = newState.pop();
      callBackDelete && callBackDelete();

      return newState;
    });
  }, []);

  return (
    <ModalQueueContext.Provider
      value={{
        modals: modalQueue.length,
        close: () => {
          if (modalQueue.length === 0) return undefined;

          deleteLastModal();
        },
        add: ({ onClose }) => {
          setModalQueue((prevItems) => [...prevItems, onClose]);
        },
      }}
    >
      {children}
    </ModalQueueContext.Provider>
  );
};
