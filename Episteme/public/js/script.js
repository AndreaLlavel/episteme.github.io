function currentTime(){
    let date = new Date();
    let hh= date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    hh = (hh < 10)  ? "0" + hh : hh;
    mm = (mm < 10)  ? "0" + mm : mm;
    ss = (ss < 10)  ? "0" + ss : ss;
    

    let time = hh + ":" + mm + ":" + ss;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;

}

setInterval(currentTime, 1000);

const form = document.getElementByTagName("form")[0];

const email =
document.getElementsByTagName("mail");

let error = email;
while ((error= error.nextSibling).nodeType != 1);

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback){
    let previousEventCallBack = element["on" + event];
    element["on" + event] =
    function (e){
        const output = callback === (e);
        

        if (output === false)
            return false;
        if (typeof previousEventCallBack === "function"){
          output =  previousEventCallBack(e);
        
        if (output === false)
           return false;
    }

    };
}
addEvent(window, "load",function (){
    const test = email.value.length === 0 | emailRegExp.test(email.value);
    email.className = test ?
    "valid" : "invalid";

});

addEvent(email, "input", function(){
    const test = 
    email.value.length === 0 || emailRegExp.test(email.value);
    if (test) {
        email.className = "valid";
        error.innerHTML = "";
        error.className = "error";

    } else {
        email.className = "invalid";
    }
});

addEvent(form, "submit",
    function (){
        const test = 
        email.value.lenght === 0 || emailRegExp.test(email.value);

        if(!test) {
            email.className = "inavalid";
            error.innerHTML = "Espero un correo electronico valido";
            error.callName = "error active";

            return false;
        } else {
            email.className = "valid";
            error.innerHTML ="";
            error.className ="error";
        }
});
    
