const data = [
    {
        question: "How is the number 9 represented as a binary number?",
        correct: "1001",
        incorect: ["1000", "1110", "1010"]
    },
    {
        question: "In Roman Numerals, what does XL equate to?",
        correct: "40",
        incorect: ["60", "15", "90"]
    },
    {
        question: "HTML is what type of language?",
        correct: "Markup Language",
        incorect: ["Macro Language", "Programming Language", "Scripting Language"]
    },
    {
        question: "This mobile OS held the largest market share in 2012.",
        correct: "iOS",
        incorect: ["Android", "BlackBerry", "Symbian"]
    },
    {
        question: "Kuala Lumpur is the capital of which country?",
        correct: "Malaysia",
        incorect: ["Indonesia", "Singapore", "Thailand"]
    },
    {
        question: "Which of the following countries banned the use of personal genetic ancestry tests?",
        correct: "Germany",
        incorect: ["Austria", "Canada", "Sweden"]
    },
    {
        question: "Who patented a steam engine that produced continuous rotary motion?",
        correct: "James Watt",
        incorect: ["Nikola Tesla", "Albert Einstein", "Alessandro Volta"]
    },
    {
        question: "In what year was the Oculus Rift revealed to the public through a Kickstarter campaign?",
        correct: "2012",
        incorect: ["2010", "2011", "2013"]
    },
    {
        question: "In the hexadecimal system, what number comes after 9?",
        correct: "The Letter A",
        incorect: ["10", "The Number 0", "16"]
    },
    {
        question: "What is the first Mersenne prime over 1000?",
        correct: "1279",
        incorect: ["2203", "1009", "1069"]
    },
    {
        question: "To the nearest whole number, how many radians are in a whole circle?",
        correct: "6",
        incorect: ["3", "4", "5"]
    },

];

class App extends React.Component {
    render() {
        return (
            <Quiz />
        );
    }
}

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            gameOver: false,
            correctAnswers: 0,
            incorectAnswers: 0,
            question: data[0]
        };
        this.checkResult = this.checkResult.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }
    
    checkResult(option) {
        if (option === this.state.question.correct) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1,
            });
        } else {
            this.setState({
                incorectAnswers: this.state.incorectAnswers + 1
            });
        }
        this.nextQuestion();
    }

    nextQuestion() {
        if (this.state.index < 10) {
            this.setState({
                index: this.state.index + 1,
                question: data[this.state.index + 1]
            });
        } else {
            this.setState({
                gameOver: true
            });
        }

        this.render();
    }
    
    renderQuestion() {
        let question = this.state.question.question;
        return(
            <h3 className="question">{question}</h3>
        );
    }

    renderOptions() {
        let options = this.state.question.incorect.concat(this.state.question.correct);
        
        return (
            <ul className="options">
                {options.map((opt, i) => <Option checkResult={option => this.checkResult(option)} key={i} option={opt} />)}
            </ul> 
        );
    }

    playAgain() {
        this.setState({
            index: 0,
            gameOver: false,
            correctAnswers: 0,
            incorectAnswers: 0,
            question: data[0]
        });
        
    }

    render() {
        if (!this.state.gameOver) {
            return (
                <div className="quiz-app">
                    {this.renderQuestion()}
                    {this.renderOptions()}
                    <PlayAgain playAgain={this.playAgain} />
                    <Answers correctAnswers={this.state.correctAnswers}
                        incorectAnswers={this.state.incorectAnswers}
                    />
                </div>
            ); 
        } else {
            return (
                <div className="quiz-app">
                    <PlayAgain playAgain={this.playAgain} />
                    <Answers correctAnswers={this.state.correctAnswers}
                        incorectAnswers={this.state.incorectAnswers}
                    />
                </div>
            );
        }
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.callParent = this.callParent.bind(this);
    }

    callParent() {
        this.props.checkResult(this.props.option)
    }

    render() {
        return (
            <li className="options-field" onClick={this.callParent}>{this.props.option}</li>
        );
    }
}

const PlayAgain = props => <button className="play-again" onClick={props.playAgain}>Play Again</button>;

const Answers = props => {
    return (
        <div className="answers">
            <p>Correct Answers: {props.correctAnswers}</p>
            <p>Incorect Answers: {props.incorectAnswers}</p>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);