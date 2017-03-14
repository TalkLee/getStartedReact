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

