// setTimeout(() => {
//     console.log("Merhaba");
// }, 5000)

// setInterval(()=> {
//     console.log("Merhaba ben her saniye çalışacağım");

// }, 1000);

// const sayHi = (cb) => {
//     cb();
// };

// sayHi() => {
//     console.log("Hello")
// }


// data çekmek için kullanılan daha kolay yol

import fetch from 'node-fetch';
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log("Post Yüklendi", post)

//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then((data) => data.json())
//                     .then((data) => console.log("Post2 Yüklendi", data));
//             });
//     });


//ASYNC FONKSİYON CALISMA

// async function getData() { 
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users ", users);
//     console.log("post1 ", post1);
//     console.log("post2 ", post2)
// }

// getData();

// (async () => { // anonim function
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users ", users);
//     console.log("post1 ", post1);
//     console.log("post2 ", post2);

// })();

// const getComments = (number) => {  //Promise Oluşturma
//     return new Promise((resolve, reject) => {

//     if (number === 1) {
//         resolve({text: "Selam"});
//     }

//     reject('Bir Problem Oluştu!');
//     });
// };

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/users");
        resolve(data);
        // reject('Bir sorun oluştu.');
    });

};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
        // reject('Bir sorun daha oluştu.')
    });

};

// (async () => { //hata yakalama catch and try 

//     try{
//         const users = await getUsers();

//     const post = await getPost(1);
    
//     console.log(users);
//     console.log(post);

//     }catch(e){
//         console.log(e);
//     }
    

// })();

// (async () => { // anonim function kendi yaptığım async
//         const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users");
    
//         const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    
        
    
//         console.log("users ", getUser);
//         console.log("post ", getPost);
//     })();


Promise.all([getUsers(), getPost(1)]) // birden fazla calıstırılmak istenen promise dizi yöntemi
.then(console.log)
.catch(console.log);