class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            activity: "Science Lab",
            checks: []
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.checkboxesHandler = this.checkboxesHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        let newUser = {
            firstName: e.target.elements[0].value,
            lastName: e.target.elements[1].value,
            activity: this.state.activity,
            checks: this.state.checks
        };
        this.setState(prevState => {
            return {
                users: prevState.users.concat(newUser)
           } 
        });
    }

    selectHandler(e) {
        this.setState({
            activity: e.target.value
        });
    }

    checkboxesHandler(e) {
        if (e.target.checked) {
            this.state.checks.push(e.target.id);
        } else {
            this.state.checks.splice(this.state.checks.indexOf(e.target.id), 1);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Form submitHandler={this.submitHandler} selectHandler={this.selectHandler} checkHandler={this.checkboxesHandler} />
                <Users users={this.state.users}/>
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
            <form id="register-form" onSubmit={this.props.submitHandler}>
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
                    <select onClick={this.props.selectHandler} value={this.props.activity} id="select-activity">
                        <option value="Science Lab">Science Lab</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Painting">Painting</option>
                    </select>
                </div>
                <div className="checks">
                    <label>Check All that apply</label>
                    <div className="check">
                        <input onClick={this.props.checkHandler} type="checkbox" id="a"/>
                        <label htmlFor="a">a) Dietary Restrictions</label>
                    </div>
                    <div className="check">
                        <input onClick={this.props.checkHandler} type="checkbox" id="b" />
                        <label htmlFor="b">b) Physical Disabilities</label>
                    </div>
                    <div className="check">
                        <input onClick={this.props.checkHandler} type="checkbox" id="c" />
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
            {props.users.map((user, i) => <List key={i} firstName={user.firstName} lastName={user.lastName} activity={user.activity} restrictions={user.checks}/>)}
        </ul>
    );  
};

const List = props => {
    let fullName = props.firstName + ' ' + props.lastName;
    return (
        <li>
            <h3>{fullName}</h3>
            <h5>{props.activity}</h5>
            <h5>{props.restrictions.join('')}</h5>
        </li>
    );  
};


ReactDOM.render(
    <App />,
    document.getElementById("root")
);