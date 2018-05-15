class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
            </div>
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
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="register-form">
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>
                </div>
                <div>
                    <label htmlFor="last-name">First Name</label>
                    <input type="text" id="last-name" />
                </div>
                <div>
                    <label htmlFor="select-activity">First Name</label>
                    <select value={this.props.activity} id="select-activity">
                        <option value="Science Lab">Science Lab</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Painting">Painting</option>
                    </select>
                </div>
            </form>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);