const Student = () => {
  return React.createElement("div", { id: "myDiv", className: "divcls" }, [
    React.createElement("h5", {}, " nimal "),
    React.createElement("h2", {}, " nisal "),
    React.createElement("h3", {}, " kamal "),
  ]);
};
const StudentCrad = () => {
  return React.createElement(
    "div",
    { className: "imgdiv" },

    React.createElement("img", {
      src: "./img/newdp.jpeg",
      className: "img",
    }),
    React.createElement(Student),
  );
};

const App = () => {
  return React.createElement("div", { className: "containerdiv" }, [
    "this is react container",
    //React.createElement(Student),
    React.createElement(StudentCrad),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
