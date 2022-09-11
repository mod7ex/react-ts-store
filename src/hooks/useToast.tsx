import { useState } from "react";
import { uid } from "~/utils";

interface IToast {
  content: string;
  title?: string;
  ttl: number;
}

const toastsList = new Map<string, IToast>(); // Map works well with frequent deletion and adding

export default function useToast() {
  const [map, setMap] = useState(toastsList);

  return (payload: IToast) => {
    toastsList.set(uid(), payload);
    console.log(toastsList);
    setMap((v) => new Map([...Array.from(v), [uid(), payload]]));
  };
}
