// import useToast from "~/hooks/useToast";
import ToastsList from "~/partials/ToastsList";
import "~/index.scss";
import { useState } from "react";
import { Transition } from "react-transition-group";

function App() {
  // const toaster = useToast();

  // const handelClick = () => {
  //   toaster.success({ title: "Title", content: "some ipsom data" });
  // };

  const [show, setShow] = useState(true);

  return (
    <>
      <ToastsList />
      {/* <button onClick={() => handelClick()}>click</button> */}

      <h1>
        <button onClick={() => setShow((v) => !v)}>toggle</button>
      </h1>

      <Transition timeout={300}>
        <div style={{ backgroundColor: "blue", padding: "1rem" }}>
          {show ? (
            <div style={{ backgroundColor: "green", maxWidth: "20rem", margin: "0 auto" }}>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit amet consectetur.
              <br />
            </div>
          ) : null}
        </div>
      </Transition>
    </>
  );
}

export default App;
