// import useToast from "~/hooks/useToast";
import ToastsList from "~/partials/ToastsList";
import "~/index.scss";

function App() {
  // const toaster = useToast();

  // const handelClick = () => {
  //   toaster.success({ title: "Title", content: "some ipsom data" });
  // };

  return (
    <>
      <ToastsList />
      {/* <button onClick={() => handelClick()}>click</button> */}
    </>
  );
}

export default App;
