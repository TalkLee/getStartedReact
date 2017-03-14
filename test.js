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








