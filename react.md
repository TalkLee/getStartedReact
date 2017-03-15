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


React元素不可变，一旦创建该元素，就不能更改其子元素或者属性
一个React元素相当于电影里的一个独立帧：表示一个特定时间的UI层

当需要更新React元素时，唯一的方法就是创建一个新的React元素，并且传递个ReactDOM.render方法

react只对有必要更新的内容进行更新


#### 组件Component和属性Prop

组件使得开发者将整个UI层分割为多个可重用的彼此之间独立的组件。
从概念来讲，组件类似JavaScript中的函数。接受任意输入(props)并返回React元素用于描述渲染到屏幕上的DOM结构

#### 函数式和类式组件

最简单的定义组件的方式是定义一个接受属性参数(props),返回一个表示DOM结构的React元素的函数
除此之外，你还可以使用ES6的class特性定义组件.

渲染组件:
React元素除了可以表示DOM结构外，还可以表示用户自定义组件。
当React观察到React元素表示用户自定义组件时，jsx属性将被看作一个独立对象传递到到该组件，称之为props
其中，jsx语法中标签上的属性整合为一个props对象，该对象中包含所有和标签上属性同名的键值对。

##### 组件构成

组件可以引用其他组件，从而构成组件系统直至整个应用

组件函数/类的render方法中返回的根节点只能是1个

##### 组件拆分

鼓励将组件分割为更小粒度的组件
组件的props命名时应该站在组件自己的观点，而不是上下文的角度来命名该属性
当UI层中的一个部分多次使用或者自身逻辑足够复杂时，就应该设计为一个可重用的组件

##### props(属性)只读

纯函数：不改变输入数据的函数

__所有React组件都表现为类似纯函数，不对其props产生影响__



#### 状态和生命周期

ReactDOM.render(reactElement,container ) 修改渲染输出

状态和props类似，但是状态为private，完全由组件本身控制。

class式声明组件的另一个好处就是实现本地状态(private state)
除此之外另一个特性就是生命周期挂钩

##### 函数式声明组件 => 类式声明组件:

1. 创建ES6 类 (类名与函数名、React组件名相同) 继承自 React.Component
2. 添加一个单独的空方法叫做render
3. 将函数中函数体移到render方法中
4. 在render方法中用this.props替换函数中的props
5. 删除之前的函数声明


##### 给React组件类添加本地状态

1. 在render方法中将props对象中属性用state对象的同名属性代替
2. 添加一个类构造函数(传入参数props)来初始化this.state对象(该构造函数还需要调用基类React.Component的构造函数)


##### 给React组件类添加生命周期方法




















