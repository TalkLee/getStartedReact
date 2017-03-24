function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Harper",
    lastName: "Perez"
};

const element = { <
    h1 >
    Hello,
    { formatName(user) }!
    <
    /h1>
};


ReactDOM.render(
    element,
    document.getElementById("root")
);

const element = < div tabIndex = "0" > < /div>;

const element = < img src = { user.url } > ;

const element = React.createElement(
    "h1", //标签
    { className: "gretting" }, // 属性
    "Hello,world!" // 内容
);


const element = ( <
    h1 className = "gretting" > Hello, World < /h1>
);

function tick() {
    const element = ( <
        div >
        <
        h1 > Hello, world! < /h1> <
        h2 > It is { new Date().toLocaleTimeString() } < /h2> <
        /div>
    );
    ReactDOM.render(
        element,
        document.getElementById("root")
    );
}

function welcome(props) {
    return <h1 > Hello, { props.name } < /h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1 > Hello, { this.props.name } < /h1>;
    }
}
const element = < div / > ;
const element = < Welcome name = "Sara" / >

    function Welcome(props) {
        return <h1 > Hello, { props.name } < /h1>;
    }

const element = < Welcome name = "Sara" / > ;
ReactDOM.render(
    element,
    document.getElementById("root")
);

function Welcome(props) {
    return <h1 > Hello, { props.name } < /h1>;
}

function app() {
    return ( <
        div >
        <
        Welcome name = "Sara" / >
        <
        Welcome name = "Cahal" / >
        <
        Welcome name = "Edite" / >
        <
        /div>
    );
}
ReactDOM.render( <
    App / > ,
    document.getElementById("root")
);

function Comment(props) {
    return ( <
        div className = "Comment" >
        <
        UserInfo user = { props.author }
        /> <
        div className = "Comment-text" > { props.text } <
        /div> <
        div className = "Comment-date" > { formatDate(props.date) } <
        /div>
    );
}

function Avatar(props) {
    return ( <
        img className = "Avatar"
        src = { props.user.avatarUrl }
        alt = { props.user.name }
        />
    );
}

function UserInfo(props) {
    return ( <
        div className = "UserInfo" >
        <
        Avatar user = { props.author }
        /> <
        div className = "UserInfo-name" > { props.user.name } <
        /div> <
        /div>
    );
}

function tick() {
    const element = ( <
        div >
        <
        h1 > Hello, world! < /h1> <
        h2 > It is { new Date().toLocaleDateString() } < /h2> <
        /div>
    );
    ReactDOM.render(
        element,
        document.getElementById("root")
    );
}

setInterval(tick, 1000);

function Clock(props) {
    return ( <
        div >
        <
        h1 > Hello, world! < /h1> <
        h2 > It is { props.date.toLcaleTimeString() } < /h2> <
        /div>
    );
}

function tick() {
    ReactDOM.render( <
        Clock / > ,
        document.getElementById("root")
    );
}

setInterval(tick, 1000);

class Clock extends: React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return ( <
            div >
            <
            h1 > Hello, world! < /h1> <
            h2 > It is { this.state.date.toLocaleDateString } < /h2> <
            /div>
        );
    }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), // 定时调用该方法,tick方法设置date属性
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( <
            div >
            <
            h1 > Hello， World! < /h1> <
            h2 > It is { this.state.date.toLocaleDateString() }. < /h2> <
            /div>
        );
    }
}


this.setState(function(prevState, props) {
    return {
        counter: prevState.counter + props.increment
    }
});

this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));

constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    }
}

<
h2 > It is { this.state.date.toLocaleTimeString() }. < /h2>

<
button onClick = "activateLasers()" >
    <
    /button>

<
button onClick = {}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
    }
    return ( <
        a href = "#"
        onClick = { handleClick } >
        Click me <
        /a>
    )
}

function UserGreeting(props) {
    return <h1 > Welcome back! < /h1>;
}

function GuestGreeting(props) {
    return <h1 > Please sign up. < /h1>;
}

function Greetign(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting / > ;
    } else {
        return <GuestGreeting / > ;
    }
}

function LoginButton(props) {
    return ( <
        button onClick = { props.onClick } >
        Login <
        /button>
    );
}

function LogoutButton(props) {
    return ( <
        button onClick = { props.onClick } >
        Logout <
        /button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = < LogoutButton onClick = { this.handleLogoutClick }
            />;
        } else {
            button = < LoginButton onClick = { this.handleLoginClick }
            />;
        }

        return ( <
            div >
            <
            Greeting isLoggedIn = { isLoggedIn }
            /> { button } <
            /div>
        );
    }
}

ReactDOM.render( <
    LoginControl / > ,
    document.getElementById("root")
);

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return ( <
        div >
        <
        h1 > Hello! < /h1> { unreadMessages.length > 0 } <
        /div>
    )
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return ( <
        div >
        <
        h1 >
        Hello!
        <
        /h1> {
            unreadMessages.length > 0 && < h2 > adadasd < /h2> } <
                /div>
        );
    }
    const messages = ["rEACT", "123"];
    ReactDOM.render( <
        Mailbox unreadMessages = { messages }
        />,
        document.getElementById("root")
    );


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return ( <
            div >
            The user is < b > { isLoggedIn ? "current" : "note" } < /b> logged in. <
            /div>
        );
    }

    function WarningBanner(props) {
        if (!props.warn) {
            return null;
        }
        return ( <
            div className = "warning" >
            Warning!
            <
            /div>
        );
    }
    class Page extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showWarning: true }
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }
        handleToggleClick() {
            this.setState(prevState => ({
                showWarning: !prevState.showWarning
            }));
        }
        render() {
            return ( <
                div >
                <
                WarningBanner warn = { this.state.showWarning }
                /> <
                button onClick = { this.handleToToggleClick } > { this.state.showWarning ? "Hide" : "Show" } <
                /button> <
                /div>
            );
        }
    }

    const numbers = [1, 2, 3, 4, 5, 6];
    const listItem = numbers.map((number) =>
        <li> { number } < /li>
    )


    const listItem = numbers.map( (number) => 
        <li>{number}</li>
    )

    ReactDOM.render(
        <ul>{listItems}</ul>,
        document.getElementById("root")
    );

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) => 
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    const numbers = [1,2,3,4,5];
    ReactDOM.render(
        <NumberList numbers = {numbers} />,
        document.getElementById("root")
    );

    const numbers = [1,2,3,4,5];
    const listItem = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );


    const todoItems = todos.map((tood) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    )

    //不存在ID时，使用下标去标识

    const todoItems = todos.map((todo,index) => 
        <li key={index}>
            {todo.text}
        </li>
    );

    function ListItem(props) {
        const value = props.value;
        return (
            <li key={value.toString() } >
                {value}
            </li>
        );
    }
    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <ListItem value={number} />
        );
        return (
            <ul>
            {listItems}
            </ul>
        );
    }
    const numbers = [1,2,3,4,5];
    ReactDOM.render(
        <NumberList numbers={numbers} />,
        document.getElementById("root")
    );


    function ListItem(props) {
        return <li>{props.value}</li>
    }

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = number.map((number)=> 
            <ListItem key={number.toString()} value={number}/>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    const numbers = [1,2,3,4,5];
    ReactDOM.render(
        <NumberList numbers ={numbers} />,
        document.getElementById("root")
    );


    functio Blog(props) {
        const sidebar = (
            <ul>
                {props.posts.map((post) => 
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
        const content = props.posts.map((post) => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <div>
                {sidebar}
                <hr/>
                {content}
            </div>
        );
    }

    const posts =[
        {id:2,title:"Hello World", content: "Welcome to learning Reactz!"},
        {id:2,title:"Test",content:"12123"}
    ];
    ReactDOM.render(
        <Blog posts={posts} />,
        document.getElementById("root")
    );

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = number.map((number) => 
            <ListItem key={number.toString()}
                value={number} />
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    function NumberList(props) {
        const numbers = props.numbers;
        return (
            <ul>
                {numbers.map((number) => 
                    <ListItem key={number.toString()}
                        value={number} />
                )}
            </ul>
        );
    }

    class NameForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: ""};
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        handleSubmit(event) {
            alert("A name " + this.state.value);
            event.preventDefault();
        }
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} >
                    </label>
                    <input type="submit" value="Submit">
                </form>
            )
        }
    }


    class EssayForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 'Please write something'
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            handleChange(event) {
                this.setState({value: event.target.value});
            }
        }

        render() {
            return (
                <form onSubmit ={this.handleSubmit} >
                <label>
                    Name: 
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            );
        }
    }

<select>
    <option value="grapefruit">GrapeFruit</option>
</select>


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "cocount"  };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert("your favorite flavor is:" + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Pick your favorite La Croix flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="cocount">Cocount</option>
                </select>
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value =target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    } 
    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input 
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

function BoilingVerdict(props) {
    if(props.celsius >= 100 ) {
        return <p>boil.</p>;
    } 
    return <p>not</p>;
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" };
    } 
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }
    render() {

        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter</legend>
                <input value={temperature}
                onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)}
            </fieldset>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperaturInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleCHnage = this.hanldeChange.bind(this);
        this.state = {temperature: ''};
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>    
        );
    }
}

class Calculator extends React.Component {
    render()  {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);  
    if(Number.isNaN(input)) {
        return '';
    }
    const output = conver(input);
    const rounded = Math.round(output * 1000 ) /100;
    return rounded.toString();
}

function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
        {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
            Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our 
            </p>
        </FancyBorder>
    );
}

function SplitPane(props) {
    return ( 
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className-"SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={ <Contacts /> }
            right={<Chat />}
        />
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog 
        title="Welcome"
        message="Thank your"
        />
    );
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    }
}

class SignupDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {login: ''};
    }
    render() {
        return (
        <Dialog title="adas"
            message="123">
            <input value={this.state.login} 
                onChange={this.handleChange} />
            <button onClick={this.handleSignup}>
            Sign Up!
            </button>
        </Dialog>
        );
    };
    handleChange(e) {
        this.setState({login:e.target.value});
    }
    handleSignup() {
        alert("aboard, ${this.state.login}");
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colspan="2">
                    {this.props.category} 
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color:"red"}}>
                {this.props.product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCatagory = null;
        this.props.products.forEach(function(product) {
            if(product.category != lastCatagory) {
                row.push(<ProductCategoryRow catagory={product.catagory} key={product.category} /> );
            }
                row.push(<ProductRow product={product} key={product.name} />);
                lastCatagory = product.catagory;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type='text' palceholder="123" />
                <p>
                    <input type="checkbox" />
                    {''}
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products = {this.props.products} />
            </div>
        );
    }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

React.rener(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById("root")
);


class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">
                    {this.props.catagory}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ? this.props.product.name : <span stlye={{color:'red'}}> {this.props.product.name} </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCatagory = null;
        this.props.products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText) == -1 (!product.stocked && this.props.inStockOnly)) {
                return ;
            }
            if(product.category != lastCatagory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} /> );
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCatagory = product.catagory;
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='12'
                value={this.props.filterText} />
                <p>
                    <input type='checkbox' checked={this.props.isStockOnly} />
                    {" "}
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            isStockOnly: false
        };
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.isStockOnly}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.isStockOnly}
                />
            </div>
        );
    }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById("root")
);

React.createElement(component,props,..chidren)

<MyButton color="blue" shadowSize={2}>  
    Click me 
</MyButton>

React.createElement(
    MyButton,
    {color: 'blue', shadowSize:2},
    'Click me'
);

import React from 'react'

const MyComponent = {
    DatePicker: function(props) {
        return <div>Imagine a {props.color} datepicker </div>;
    }
}

function BlueDatePicker() {
    return <MyComponent.DatePicker color="blue" />;
}

import React from 'react';

function hello(props) {
    return <div>Hello {props.toWhat }</div>;
}

function Hello(props) {
    return <div>Hello {props.toWhat} </div>;
}

function HelloWorld() {
    return <Hello toWhat="World!" />;
}

import { PhotoStory, VideoStory } from './stories'

const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    return <components[props.storyType] story = 
}

function App1() {
    return <Greeting firstName="Ben" lastName="He" />;
}

function App2() {
    const props = { firstName : 'Ben', lastName: 'He'};
    return <Greeting {..props} />;
}

function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
    const todos = ["finish doc","submit"];
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message} /> )}
        </ul>
    );
}

