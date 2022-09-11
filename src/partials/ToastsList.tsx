import React from "react";
import { useAppSelector } from "~/store/hooks";

const Toast: React.FC<IToast> = ({ content, title, type }) => {
  return (
    <div
      style={{
        margin: "1em",
      }}
    >
      {title} - {content} - {type}
    </div>
  );
};

export default function ToastsList() {
  const toastsList = useAppSelector((s) => s.toasts.list);

  return toastsList.length ? (
    <div style={{ padding: "1em" }}>
      {toastsList.map(({ key, value }) => (
        <Toast {...value} key={key} />
      ))}
    </div>
  ) : null;
}
