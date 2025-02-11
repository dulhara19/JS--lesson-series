const Student = ()=> {
    return React.createElement(
        "div",
        { id: "myDiv", className: "divcls"},
        [React.createElement("h5",{}," nimal "),
        React.createElement("h2",{}," nisal "),
        React.createElement("h3",{}," kamal ")
        ]
    )
}



const App = ()=>{
    return React.createElement(
       "div",
       {className :"containerdiv"},
       ["this is react container",
        React.createElement(Student)]
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
