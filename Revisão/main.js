// console.log("A");

// setTimeout(() => {
//     console.log("B")
// }, 3000);


// console.log("C");

// const minhaPromise = new Promise((resolve, reject) => {
//     let sucesso = true;
//     if (sucesso){ 
//         resolve("Deu certo!")
//     } else {
//         reject("Deu errado!")
//     }
// });

// minhaPromise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         log.console(error)
//     });


fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

const button = document.getElementById("btn")
const img = document.getElementById("catImage")
console.log(button);
console.log(img);

button.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => res.json())
        .then(data => {
            img.src = data[0].url;
        })
        .catch(error => {
            console.error(error);
        });

})