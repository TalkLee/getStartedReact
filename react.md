get started:

Component：

组件接受多个parameter(参数)，称做(props)，返回用来展示render方法中的层次视图。

render方法返回一个视图结构并将其渲染到页面上。
返回的视图结构为一个React element(React元素),
为一个轻量级的结构描述。
大多数React开发者使用JSX语法来写这种结构。
<div>在构建的时候会被转化为React.createElement("div")

举例：

<div className="shopping-list">
    <h1>Shopping list</h1>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>

在构建的时候会被转化为：

`
    React.createElement("div",{ className: "shopping-list",},
        React.createElement("h1",...),
        React.createElement("ul",...)
    )

`

你可以在JSX中的括号中书写任何JS表达式，每一个React元素都是一个可以存储在一个变量或者在应用中传递的真实对象

ShoppingList组件只能渲染内置的DOM组件，但是你通过书写例如<ShoppingList>来构建自定义React组件。
每个组件都是封装好的可以独立操作，所以可以通过组件系统来构建复杂的UI。


React组件可以通过在constructor中通过设置this.state,从而拥有状态
this.state为组件的private成员，可以保存组件的当前状态

在组件中明确声明的constructor方法(其实也是是派生类的构造过程)中，必须明确调用super函数(基类构造函数)

