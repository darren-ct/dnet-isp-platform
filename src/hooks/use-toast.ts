import { useNotificationStore } from "../stores";
import { useCallback } from "react";

export function useToast() {
  const { setMessage, onOpen } = useNotificationStore();

  const toast = useCallback(
    (message: string) => {
      setMessage(message);
      onOpen();
    },
    [onOpen, setMessage]
  );

  return { toast };
}
