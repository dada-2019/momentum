const loginForm = document.querySelector("#login-form");   
const loginInput = document.querySelector("#login-form input");



function onLoginSubmit(event) {
    event.preventDefault();　// 이벤트의 기본 동작을 막는다. 
    //브라우저는 submit 이벤트를 발생시키면 기본적으로 form을 제출하고 브라우저를 새로고침 한다.
    console.log(event);
    
}

loginForm.addEventListener("submit", onLoginSubmit);

