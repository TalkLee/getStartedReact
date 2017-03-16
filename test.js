function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Harper",
    lastName: "Perez"
};

const element = {
    <h1>
        Hello ,  {formatName(user)} !
    </h1>
};


ReactDOM.render(
    element,
    document.getElementById("root")
);

const element = <div tabIndex="0"></div>;

const element = <img src={user.url}>;

const element = React.createElement(
    "h1",  //标签
    {className: "gretting"}, // 属性
    "Hello,world!"  // 内容
);


const element = (
    <h1 className="gretting">Hello,World</h1>
);

function tick() {
    const element = (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is { new Date().toLocaleTimeString() }</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById("root")
    );
}

function welcome(props) {
    return <h1>Hello,{props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>;
    }
}
const element = <div />;
const element = <Welcome name="Sara" />

function Welcome(props) {
    return <h1>Hello,{props.name}</h1>;
}

const element = <Welcome name="Sara"/> ;
ReactDOM.render(
    element,
    document.getElementById("root")
);

function Welcome(props) {
    return <h1>Hello, {props.name} </h1>;
}

function app() {
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function tick() {
    const element = (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById("root")
    );
}

setInterval(tick,1000);

function Clock(props) {
    return (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {props.date.toLcaleTimeString()}</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock  />,
        document.getElementById("root")
    );
}

setInterval(tick,1000);

class Clock extends: React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
     render() {
         return (
         <div>
            <h1>Hello,world!</h1>
            <h2>It is {this.state.date.toLocaleDateString}</h2>
        </div>
        );
     }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()} ;
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),   // 定时调用该方法,tick方法设置date属性
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
        return (
            <div>
                <h1>Hello，World!</h1>
                <h2>It is {this.state.date.toLocaleDateString()}.</h2>
            </div>
        );
    }
}


this.setState(function(prevState,props) {
    return {
        counter:  prevState.counter + props.increment
    }
});

this.setState((prevState,props) => ({
    counter: prevState.counter + props.increment
}));

constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    }
}

<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

<button onClick="activateLasers()">
</button>

<button onClick={}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
    }
    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

function UserGreeting(props) {
    return  <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greetign(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick} >
        Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} >
        Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLoginClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
            <Greeting isLoggedIn = {isLoggedIn}/>
            {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById("root")
);

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 }
        </div>
    )
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>
                Hello!
            </h1>
            {unreadMessages.length > 0  && <h2>adadasd</h2> }
        </div>
    );
}
const messages = ["rEACT","123"];
ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById("root")
);


render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        The user is <b>{isLoggedIn ? "current" : "note" }</b> logged in.
        </div>
    );
}

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}


