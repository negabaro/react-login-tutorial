# ReactBlogApp-SignIn

package.json안의 

https://github.com/royagasthyan/ReactBlogApp-SignIn/blob/master/package.json#L15

```
"devDependencies": {
    "babel-cli": "^6.24.0",
    "babel-plugin-transform-react-jsx": "^6.23.0",
    "babel-preset-env": "^1.2.2"
  }
```

이부분 없어도 잘움직이는걸로 봐서 필요없다고 판단하고 삭제


### onChange -> 메소드 -> setState

```
<input type="email" onChange={this.handleEmailChange}
```

↓

```
handleEmailChange(e){
      console.log("handleEmailChange");
      this.setState({email:e.target.value})
    }
```




### binding설정


```
//this.handleEmailChange = this.handleEmailChange.bind(this);
//this.handlePasswordChange = this.handlePasswordChange.bind(this);
```

를 지워보면

```
uncaught TypeError: Cannot read property 'setState' of undefined
    at handleEmailChange (eval at n.run (browser.min.js:3), <anonymous>:50:12)
```

handleEmailChange안에서 쓰던 this.setState가 안먹힘


```
 handleEmailChange(e){
      console.log("handleEmailChange");
      this.setState({email:e.target.value})
    }
```


state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다. ES6 class에선 auto binding이 되지 않으므로, 
setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다. (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)

by　velopert様