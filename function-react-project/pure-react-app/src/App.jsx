import React from "react";
import ReactDOM from "react-dom/client";
import Studentcard from "./components/StudentCard";

// const App = () => {
//   return React.createElement("div", { className: "containerdiv" }, [
//     "this is react container",
//     //React.createElement(Student),
//     React.createElement(
//       StudentCrad,
//       {
//         name: "dulhara",
//         age: "23",
//         country: "srilanka",
//       },
//       null,
//     ),
//   ]);
// };

const App = () => {
  const obj = { name: "dulhara", age: "23", country: "srilanka" };
  return (
    <div className="containerdiv">
      <h1>my react app</h1>
      <Studentcard obj={obj} />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
