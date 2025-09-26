// // // console.log("Hello World");

// // const div = document.getElementsByTagName('div');
// // console.log(div);
// // div[0].innerHTML = "ABES ENGINEERING COLLEGE"
// // div[0].style.color ="red"
// // div[0].style.background = "cyan";

// const div = document.getElementsByClassName('container');
// div[0].innerHTML = `<h2 style = color:cyan > Hello I am using DOM</h2>`;
// console.dir(div);

// const h2 = document.createElement('h2');
// h2.innerText = "CS B Student";
// h2.style.backgroundColor = 'BLUE';
// console.log(h2);
// div[0].appendChild(h2);

// const img = document.createElement('img');

//     function displayData() {
//         const h2 = document.
//     }



// console.log("hello world");

// const div = document.getElementsByTagName('div');
// console.log(div);

// div[0].innerHTML = "ABES Engineering College";
// div[0].style.color = "Blue";
// div[0].style.backgroundColor = "Yellow";
// console.log(div);


const button = document.getElementById('btn');
console.log(button);
const loading = document.getElementById('disp');
function displayData(){
    loading.innerHTML = "<h2>Data is loading...</h2>";
    // console.log("hiii...inside function");
    setTimeout(() => {
               
                const h2 = document.createElement('h2');
                h2.innerText = "This is created using createElement";
                h2.style.color = 'white';
                h2.style.background = 'green';
                div[0].appendChild(h2);

              
                const img = document.createElement('img');
                img.src = 'data:image/jpeg;base64,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'; 
                img.setAttribute('height', 400);
                img.setAttribute('width', 500);
                div[0].appendChild(img);

                loading.innerHTML = "";
            }, 2000);
        }
    
const div= document.getElementsByClassName('container');
div[0].innerHTML = "<h2 style='color:cadetblue'>Hii, I am using DOM</h2>";
console.dir(div);



button.addEventListener('click', displayData);