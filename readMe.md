echo nul>.babelrc 
将nul(空)输出到.babelrc文件中，当该文件不存在时创建该文件


jsx中 React DOM的属性命名为js的驼峰命名而不是HTML的中横线命名
jsx可以防止XSS注入攻击,因为ReactDOM在渲染之前会编码(escape)任何插入到jsx中的值.
会被escape的字符:<http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html>
[会被escape的字符][http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html]

babel将jsx中的DOM编译为 React.createElement()

react构建的应用一般只有一个DOM根节点。但是当整合React到已经存在的应用中时，可以设置多个分离的DOM根节点。

react组件的命名以大写字母开头

