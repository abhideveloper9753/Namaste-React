//now create the nested div with h1

const parent = React.createElement('div', {id: "parent"}, React.createElement('div', {id: "child"}, 
    React.createElement("h1", {}, "Hello nested classes"
    )
) ) 

const Abhi = React.createElement('div', {id: "first"}, 
    React.createElement('div', {id: "second"},
        [ 
    React.createElement("h1", {}, "Third"), 
    React.createElement("p", {},"Abhi GAutam")]
),[React.createElement('div', {id: "second"},
    [ 
React.createElement("h1", {}, "Third"), 
React.createElement("p", {},"Abhi GAutam")]
)])





// const heading = React.createElement("h1", {id: "head"}, "Hello World using React");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(Abhi);