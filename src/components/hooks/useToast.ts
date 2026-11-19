import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";

export function useToast() {
  const toastValue = useContext(ToastContext);
  if (toastValue === undefined) {
    throw new Error("component is not child of Toast Provider");
  }
  return toastValue;
}
