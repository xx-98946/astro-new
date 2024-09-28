# Astro and Others

astro 能集成其他框架的内容，这样就可以分工合作，astro用作纯静态网页，而其他框架则用于提供动态交互效果。

但是其中有不得不注意的一点，那就是渲染模式的区别。static、server或者hybrid模式，以下是三种模式的区别：

- static：SSG模式，生成纯预渲染的页面，所有用户会看到相同的页面内容，无需适配器
- server: SSR模式，按需渲染，可生成动态内容，需要适配器，但是动态的内容比静态内容多（可配置部分页面为静态）
- hybrid: SSR模式，按需渲染，可生成动态内容，需要适配器，但是静态内容比动态内容多（可配置部分页面为动态）

开发服务器就是`server`模式，因此如果你使用了其他模式进行开发，那么打包部署后的内容可能不会正确显示。因此最好将模式配置为server模式或者hybrid模式，前端开发者优先选择`hybrid`模式，在api接口页面配置`export const prerender = false;`，这样就能和开发时保持一致了。

## 路由

该路由模式和vue或者react等前端路由（SPA）并不相同，而是和nuxt、next相同的路由模式。

- SPA 表示单页应用，无论请求哪个网址，都统一返回了同一个html文件，而后浏览器中加载的js脚本则充当路由的角色，将根据网址中的信息进行匹配，而后渲染出对应的页面。

- static模式，是MPA的一种，表示多页应用，每个网址都对应不同的html或者其他类型的文件，不需要js脚本担当路由的功能。

- hybrid、server模式：两者其实都是后端服务器，和单纯的静态资源服务器不相同的是，这并不是简单的SPA或者MPA模式，因为所有内容都是后端通过代码渲染出来的。但是后端服务器是可以提供静态资源服务器的所有功能的。

## 前端框架

vue、react等前端框架流行的关键因素之一就是MVVM，MVVM是一种设计模式，也就是开始使用设计模式来对前端页面进行开发。在理解这个概念之前，我们先来看看传统开发：

[链接](http://localhost:4321/html)

传统开发以DOM为中心，但是复杂的页面通常需要同步多个DOM节点的数据。但是以DOM为中心的模式在同步方面存在极大的劣势，每个DOM节点的数据都是独立维护的。（DOM其实就是视图，操作过程分为以下几种）

- js初始化 -> 操作 DOM
- 

视图 -> 事件 -> 视图

对于上述链接中的代码，我们看到因为没有统一的数据来源，DOM节点数据各自维护，同步三个输入框中的内容需要对每个操作进行同步。

- 如何通过JS对DOM进行操作，包括DOM节点的插入、删除和属性修改等
- 如何处理DOM触发的事件？包括传递数据，或者操作其他DOM等
