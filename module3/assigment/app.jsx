class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            activity: "",
            checks: []
        }
    }
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
                <div className="first-name">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>
                </div>
                <div className="last-name">
                    <label htmlFor="last-name">First Name</label>
                    <input type="text" id="last-name" />
                </div>
                <div className="select">
                    <label htmlFor="select-activity">Select Activity</label>
                    <select value={this.props.activity} id="select-activity">
                        <option value="Science Lab">Science Lab</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Painting">Painting</option>
                    </select>
                </div>
                <div className="checks">
                    <label>Check All that apply</label>
                    <div className="check">
                        <input type="checkbox" id="a"/>
                        <label htmlFor="a">a) Dietary Restrictions</label>
                    </div>
                    <div className="check">
                        <input type="checkbox" id="b" />
                        <label htmlFor="b">b) Physical Disabilities</label>
                    </div>
                    <div className="check">
                        <input type="checkbox" id="c" />
                        <label htmlFor="c">c) Medical Needs</label>
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        );
    }
}

const Users = props => {
    return (
        <ul className="ursers">
            {props.users.map((user, i) => <List firstName={props.firstName} lastName={props.lastName}/>)}
        </ul>
    );  
};

const List = props => {
    let fullName = props.firstName + ' ' + props.lastName;
    return (
        <li>
            <h3>{fullName}</h3> 
        </li>
    );  
};


ReactDOM.render(
    <App />,
    document.getElementById("root")
);