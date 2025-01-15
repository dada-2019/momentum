const loginForm = document.querySelector("#login-form");   
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

//const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();　// 이벤트의 기본 동작을 막는다. 
    //브라우저는 submit 이벤트를 발생시키면 기본적으로 form을 제출하고 브라우저를 새로고침 한다.
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);  //form을 숨긴다.
    
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //greeting을 보여준다.

    

}
loginForm.addEventListener("submit", onLoginSubmit);



//link.addEventListener("click",handleLinkClick);

// link.addEventListener("click", (event) => {
//     event.preventDefault();　// a 태그의 기본 동작을 막는다. 
//     console.log(event);
// });
