import React from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import styles from "~/partials/toasts.module.scss";
import { HiXCircle } from "react-icons/hi";
import { drop } from "~/store/slices/toasts";

const Toast: React.FC<IToast & { _key: string }> = ({ content, title, type, _key }) => {
  console.log(_key);

  return (
    <div className={styles.toast}>
      <span>
        <b>{title}</b>
        <p>{content}</p>
      </span>
      <button className="raw-btn" data-key={_key}>
        <HiXCircle />
      </button>
    </div>
  );
};

export default function ToastsList() {
  const dispatch = useAppDispatch();

  const _onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const _parent = target.parentElement as HTMLElement;
    const _grand_parent = _parent.parentElement as HTMLElement;

    const _targets = [target, _parent, _grand_parent];

    const _item = _targets.find(({ tagName, dataset }) => tagName === "BUTTON" && dataset.key !== undefined);

    if (_item) {
      console.log(_item.dataset.key);
      dispatch(drop(_item.dataset.key!));
    }
  };

  const toastsList = useAppSelector((s) => s.toasts.list);

  return toastsList.length ? (
    <div className={styles.container} onClick={_onClick}>
      {toastsList.map(({ key, value }) => (
        <Toast {...value} key={key} _key={key} />
      ))}
    </div>
  ) : null;
}
