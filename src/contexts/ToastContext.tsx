import { createContext, useState, type ReactNode } from "react";

interface Toast {
  id: number;
  message: string;
  tone: "success" | "error";
}
interface ToastContextValue {
  toasts: Toast[];
  showToast: (message: string, tone?: Toast["tone"]) => void;
  dismissToast: (id: number) => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<Toast[]>([]);

  const showToast = (message: string) => {
    const id = Date.now();
    const tone = "success";
    setToast([...toast, { id, message, tone }]);

    setTimeout(() => {
      setToast((currentToast) =>
        currentToast.filter((toast) => toast.id !== id),
      );
    }, 4000);
  };
  const dismissToast = (id: number) => {
    setToast((currentToast) => currentToast.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext value={{ toasts: toast, showToast, dismissToast }}>
      <div className="toast-container">
        {toast.map((toast) => (
          <>
            <p key={toast.id} className="toast">
              {toast.message}
            </p>
            <button
              onClick={() => {
                dismissToast(toast.id);
              }}
            >
              x
            </button>
          </>
        ))}
      </div>
      {children}
    </ToastContext>
  );
}
