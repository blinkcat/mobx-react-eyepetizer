# mobx-react-eyepetizer
[![Build Status](https://travis-ci.org/blinkcat/mobx-react-eyepetizer.svg?branch=next)](https://travis-ci.org/blinkcat/mobx-react-eyepetizer)   
inspired by [React-Eyepetizer](https://github.com/w11p3333/React-Eyepetizer) and thanks to the [official](http://www.kaiyanapp.com/) offer of the api.
## tools
next.js + axios + typescript + react-lazyload + jest - mobx
## demo
![screenshot-a](./qr.png)   
[https://blinkcat.github.io/mobx-react-eyepetizer/](https://blinkcat.github.io/mobx-react-eyepetizer/)
## develop
```sh
#开发模式
yarn dev
```
## sum
-  [next.js](https://github.com/zeit/next.js)总体很好，开箱即用的ssr，支持dynamic import，内置的[styled-jsx](https://github.com/zeit/styled-jsx)也能最大限度的保留css/sass/less的灵活性。当然也自带了路由功能。它还可以让你通过`<HEAD></HEAD>`组件添加元素到head中。也能自定义页面layout。最后还能输出渲染过的静态页面。
```jsx
<Head>
	<title>My page title</title>
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
```
-  同构加大了开发的难度
-  对typescript不太友好，需要做很多额外的配置。如果使用ts，测试时也是个麻烦事情。
