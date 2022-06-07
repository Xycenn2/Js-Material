const users = [
    {
    name:'Mehmet',
    age:'10'
},{
    name:'Mehmet',
    age:'30'
}, {
    name:'Sevilay',
    age: '40'
}
];

/*

    push
    map
    find
    filter
    some
    every
    includes
*/

// PUSH  Kullanımı
    // users.push('Ayşe');
    // users.push('Fatma');
    // console.log(users);



// MAP kullanımı / array içinde tek tek dönmek

    // for (let i = 0; i < users.length; i++) { for kullanımı
    //     console.log(users[i]);
    // }

    // users.map((item) => {
    //     console.log(item.name);
    // })

// Find Kullanımı ilk elemanı bulduğunda döner

    // const result = users.find((item) => item.name === "Mehmet" && item.age > 20 );
    // console.log(result);

// Filter Kullanımı Filtreleme yapar

        // const filtered = users.filter(({name, age}) => name === "Mehmet" && age < 20 );
    // console.log(filtered);

// Some kullanışı / Herhangi biri uyuyorsa true döner uymazsa false döner

    // const some = users.some(item => item.age === 11 );
    // console.log(some);

// every kullanışı Arrayin bütün elemanlarının şarta uyması

    // const every = users.every(item => item.age > 5);
     // console.log(every);

//İncludes Kullanımı array içinde var mı yok mu kontrol etmemizi sağlayan ifade

    const meyveler = [ 'elma', 'armut', 'muz'];

    const isIncluded = meyveler.includes('portakal');
    console.log(isIncluded);  