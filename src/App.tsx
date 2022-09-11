import useToast from "./hooks/useToast";

function App() {
  const toast = useToast();

  const handelClick = () => {
    toast({ content: "some shit", title: "thhhhh", ttl: 333 });
  };

  return (
    <>
      <button onClick={() => handelClick()}>click</button>
    </>
  );
}

export default App;
