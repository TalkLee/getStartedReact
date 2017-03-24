#### 深入JSX

JSX提供React.createElement(component,props,...children)函数的语法糖。

JSX：

<Test shadowSize={2}>
 Test
</Test>

编译为:

React.createElement(
    Test,
    {shadowSize: 2},
    'Test'
);

除了使用__开始标签和结束标签搭配__的方式，还可以采用__自闭合__方式

JSX:

<div className="sidebar" />

编译为:

React.createElement(
    'div',
    {className: 'sidebar'},
    null
)

##### 指定React元素类型

JSX标签大写表明该标签为React组件。这些标签被编译为相同名称变量的引用。
所以，如果JSX标签为<Foo />，则Foo变量必定在该块中(函数块？)。

##### React必须在该块中

因为JSX标签的编译需要调用React.createElement
所以，React库必须总是可以在JSX代码的作用域中调用。

如果不使用打包工具并且将React作为一个脚本标签(script)添加到html中，则React存在于全局作用域中

##### 点操作符

也可以通过点操作符在JSX中引用React组件。
这种方法一个模块export多个React组件时使用时非常方便。

##### 用户自定义组件命名时必须首字母大写

在JSX语法中，
当元素命名以小写字母开头时，表示对内置元素的引用，并且会使得相同命名的字符串传入React.createElement方法。
当元素命名以大写字母开头时，表示对自定义元素的引用。

在JSX语法中，React会将小写字母开头的元素看作内置元素

所以,__命名组件以大写字母开头__

若存在组件以小写字母开头，则在JSX中使用之前__必须__将其赋值给一个大写字母开头的变量方可使用，否则会报错

##### 在运行时选择类型


在React中可以使用表达式来表示React元素类型

若想要使用表达式表明元素类型，可以将表达式赋值给首字母大写的对象。

例如:

const components = {
    photo: PhotoStory, // 其他模块中export的组件
    video: VideoStory
};

function Story(props) {
    
    const SpecialStory = component[props.storyType];
    return <SpecialStory story={props.story} />;  // 识别为React自定义组件,不能直接用表达式表示，React会识别为内置组件，即React并不会进行预处理，转化为实际组件名

}

##### JSX中的props(属性)

JSX中的props可以是多种形式

1. JS表达式
    可以将任何表达式作为prop传递，需要用大括号包裹
    例: 
    <MyComponent foo={1 + 2 + 3 + 4} />

由于if和for不是表达式，所以不能直接作为prop传递，但是可以通过if和for语句生成DOM结构保存在变量里面，然后将该变量作为表达式传递到父组件的DOM结构中
例:
    <div>{description}</div> //其中description为 类似<span>123</span>由于if和for不是表达式，所以不能直接作为prop传递，但是可以通过if和for语句生成DOM结构保存在变量里面，然后将该变量作为表达式传递到父组件的DOM结构中

2. 字符串常量
作为props传递的字符串常量是经过HTML转义的。
例:

    <MyComponent message={'<3'} />

    等价于

    <MyComponent message="&lt;3" />

3. props值默认为true

如果一个prop未被传递值，则默认为true

4. 扩展属性

如果希望在JSX中传递props对象，可以使用 ... 作为扩展操作符传递整个props对象。

写法如下：

<MyComponent {...props} />

##### JSX中的props.children

JSX表达式既包含开始标签，也包含结束标签。在中间的内容作为props.children传递。
以下是集中不同的方式传递children:

1. 字符串常量
可以传递字符串给children，常用于HTML内置元素的内容表示(HTML转义的)
例:

<MyComponent>Hello world!</MyComponent>

JSX会对开始标签和结束标签之间传递的字符串进行trim操作，
同时对于多行内容会合并为一行，空白会转化为一个空格

2. 多个JSX形式的自定义元素

传递多个React组件到children，用于展示嵌套组件

props.children可以包含多种形式，比如字符串常量和自定义元素的组合


一个React组件不能返回多个React元素，但是一个JSX表达式可以有多个children，
所以如果希望一个组件去渲染多种元素(字符串，React元素)可以通过包裹返回的组件来通过jsx传递多种数据。

3. JS表达式
可以传递任何JS表达式到children，通过用大括号包裹。

通常用于渲染任意长度JSX表达式的列表。常使用map迭代方法生成渲染React元素列表。

4. 函数

通常，js表达式插入到JSX中会执行为字符串，React元素或者以上两者的数组。
其实props.children可以像其他prop一样传递任何类型的数据，并不只是React可以识别的用于渲染的类型。

props.children属性传递给自定义组件的可以是任何东西。
只要组件咋渲染之前可以将其转化为React可以识别的东西。

5. boolean，null，undefined会被忽略

false，null，undefined和true是有效的children属性值，通常这些值不会被渲染。

利用这些值可以对有些React元素进行条件渲染。

但是在React中，一些可以转化为false的值(比如0)会被渲染。
所以通常需要确保表达式的值为布尔，而不是隐式转化为布尔


如果需要让true，false，null，undefined在渲染结果中显示，需要手动转化为字符串(String(variable))





