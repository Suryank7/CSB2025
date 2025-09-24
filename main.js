// console.log("Hello JavaScript");
// let a = 6;
// console.log("a=" + a);




// const myname = "Suryank";
// const data = `Hello....${myname}`;
// console.log(data);


// const data = function msg(name) {
//     return name + " Welcome to Js Training";
// }
// // const result = msg("suryank");
// const msg = data("Suryank");
// console.log(msg);

// const data = (my_name) => {
//     console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii "+my_name);
// }
// const result = data("Suryank");
// console.log(result);


// const data = msg => msg;
// // console.log(data("Greetings......"));

// ( ()=>{
//     console.log("Hello");
// })();


// setTimeout(() => {
//     console.log("Hii... to Timeout from me");
// }, 1000);

// setInterval(() => {
//     console.log("Hello... to Timeout from me");
// }, 1000);


// function greetings(msg = "Welcome") {
//     console.log("Hii "+msg);
    
// }
// greetings("Suryank");


function selectLanguage(Lang) {
    let data;
    if (Lang == 'Java') {
        function JavaCompiler() {
            return "Java Compiler selected"
        }
        data = JavaCompiler();
    }
    else if (Lang == 'c') {
        function cCompiler() {
            return "C compiler selected"
        }
        data = cCompiler();
    }
    else {
        data = "No Such compiler Available"
    }
   selectLanguage();
   console.log(selectLanguage);
     
}
selectLanguage();
 console.log(selectLanguage);

