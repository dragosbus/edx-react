class App extends React.Component {
    render() {
        return (
            <Header/>
        ); 
    }
}

const Header = () => {
    return (
        <header>
            <h1>Register</h1>
        </header>
    );
};

class Form extends React.Component {
    
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);