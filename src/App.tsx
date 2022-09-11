import useToast from "~/hooks/useToast";
import ToastsList from "~/partials/ToastsList";

function App() {
  const toaster = useToast();

  const handelClick = () => {
    toaster.success({ title: "Title", content: "some ipsom data" });
  };

  return (
    <>
      <ToastsList />
      <br />
      <button onClick={() => handelClick()}>click</button>
    </>
  );
}

export default App;
