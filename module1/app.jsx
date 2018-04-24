const vehicles = {
    cars: [
        {
            year: 2013,
            model: "A",
            price: 32000
        },
        {
            year: 2011,
            model: "B",
            price: 4000
        },
        {
            year: 2016,
            model: "B",
            price: 15000
        },
    ],
    trucks: [
        {
            year: 2014,
            model: "D",
            price: 18000
        },
        {
            year: 2013,
            model: "E",
            price: 5200
        }
    ],
    convertibles: [
        {
            year: 2009,
            model: "F",
            price: 2000
        },
        {
            year: 2010,
            model: "G",
            price: 6000
        },
        {
            year: 2012,
            model: "H",
            price: 12500
        },
        {
            year: 2017,
            model: "M",
            price: 50000
        }
    ]
};

const App = props => {
    return (
        <div className="constainer">
            <Header />
            <Options />
            <Table category="Cars" vehicle="cars" />
            <Table category="Trucks" vehicle="trucks" />
            <Table category="Convertibles" vehicle="convertibles" />
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <h1 className="main-heading">Welcome to React Transportation</h1>
            <h2 className="second-heading">The best place to buy vehicles online</h2>
        </header>
    );  
};

const Options = () => {
    return (
        <div className="options">
            <h3>Choose Options</h3>
            <div>
                <label>New Only</label>
                <input type="checkbox" defaultChecked/>
            </div>
            <div>
                <label>Select Type</label>
                <select name="category">
                    <option value="All">All</option>
                    <option value="cars">Cars</option>
                    <option value="trucks">Trucks</option>
                    <option value="convertibles">Convertibles</option>
                </select>
            </div>
        </div>
    );  
};

const Table = props => {
    return (
        <div className="vehicle">
            <h3>{props.category}</h3>    
            <table>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Model</td>
                        <td>Price</td>
                        <td>Buy</td>
                    </tr>
                </thead>
                <Vehicle vehicles={vehicles} vehicle={props.vehicle} />
            </table>
        </div>
    );
};

const Vehicle = props => {
    return (
        <tbody>
            {props.vehicles[props.vehicle].map(v => {
                return (
                    <tr>
                        <td>{v.year}</td>
                        <td>{v.model}</td>
                        <td>{v.price}</td>
                        <td>
                            <button>Buy Now</button>
                        </td>
                    </tr>  
                );
            })}
        </tbody>
    );  
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);