// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
// first user favorite color and favoriteRestaurant


const firstUser = {
    name:"Gurobah",
    gender:"Male",
    age:25,
    email:"Gurobah@gmail.com",
    favoriteColor:["Blue","White"],
    isHavePet:"No",
    education:{
        dataEdu:[
            { name: "SD Pagi Sore", city: "Lampung", graduate: "2009" },
            { name: "SMP Pagi Sore", city: "Lampung", graduate: "2012" },
            { name: "SMA Pagi Sore", city: "Lampung", graduate: "2015" },
            { name: "Universitas Jakarta", city: "Jakarta", graduate: "2019" }
        ]
    },
    favoriteRestaurant:["Martabak", "Sate"]
};

const secondUser = {
    name:"Salsa",
    gender:"Female",
    age:24,
    email:"Salsa@gmail.com",
    favoriteColor:["Red","Yellow","Green"],
    isHavePet:"Yes",
    education:{
        dataEdu:[
            { name: "SD Pagi", city: "Bogor", graduate: "2010" },
            { name: "SMP Siang", city: "Bogor", graduate: "2013" },
            { name: "SMA Sore", city: "Bogor", graduate: "2016" },
            { name: "Universitas Bogor", city: "Bogor", graduate: "2020" }
        ]
    },
    favoriteRestaurant:["Soto", "Nasi Goreng", "Bakso"]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};