class Details extends React.Component {
    render() {
        return <h1>{this.state.name}</h1>
    }
}

class Button extends React.Component {
    render() {
        return(
            <button>
                {this.state.name}
            </button>    
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeArray: [0,0,0],
          details: ""
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(id, details) {
        let arr = [0,0,0];
        arr[id] = 1;
        this.setState({
           activeArray: arr,
           details: details
        });
    }
    
    render() {
        return(
            <div>
                <Button id={0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="dragos"/>
                <Button id={1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="mihail"/>
                <Button id={2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="busuioc"/>
            </div>    
        );
    }
}




ReactDOM.render(
    <App />,
    document.getElementById("root")
);