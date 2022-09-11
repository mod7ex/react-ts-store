import { useAppDispatch } from "~/store/hooks";
import { drop, add } from "~/store/slices/toasts";
import type { AppDispatch } from "~/store";

type ToasterGenre = (payload: Omit<IToast, "type">) => ReturnType<AppDispatch>;

type ToastActions = Record<ToastType, ToasterGenre> & { drop: typeof drop };

export default function useToast(): ToastActions {
  const dispatch = useAppDispatch();

  return {
    success: (payload) => dispatch(add({ ...payload, type: "success" })),
    primary: (payload) => dispatch(add({ ...payload, type: "primary" })),
    danger: (payload) => dispatch(add({ ...payload, type: "danger" })),
    info: (payload) => dispatch(add({ ...payload, type: "info" })),
    warn: (payload) => dispatch(add({ ...payload, type: "warn" })),
    drop,
  };
}
