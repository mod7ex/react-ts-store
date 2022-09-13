import useToast from "~/hooks/useToast";
import ToastsList from "~/partials/ToastsList";
import "~/index.scss";

function App() {
  const toaster = useToast();

  const handelClick = () => {
    toaster.success({ title: "Title", content: "some ipsom data" });
  };

  return (
    <>
      <ToastsList />
      <button onClick={() => handelClick()}>click</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut
        voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi
        minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero
        esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus
        voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum?
        Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut
        voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi
        minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero
        esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus
        voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum?
        Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut
        voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi
        minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero
        esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus
        voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum?
        Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi ut voluptatum facere neque libero esse vero saepe dolorum? Quam placeat hic commodi minima similique a possimus voluptatum sequi tempore.
      </p>
    </>
  );
}

export default App;
