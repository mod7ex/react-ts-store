declare global {
  interface Window {}

  /* Toast */
  type ToastType = "success" | "primary" | "danger" | "warn" | "info";

  interface IToast {
    content: string;
    type?: ToastType;
    title?: string;
  }
}

export {};
