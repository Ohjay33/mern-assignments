// const express = require("express");
// const app = express();
// const port = 8000;

// const faker = require("faker");


// class User {
//     constructor(){
//         this.id = faker.random.number();
//         this.firstName = faker.name.firstName();
//         this.lastName = faker.name.lastName();
//     this.phoneNumber = faker.phone.phoneNumber();
//     this.email = faker.internet.email();
//     this.password = faker.internet.password();
//   }
// }

// console.log(new User);

// class Company {
//   constructor(){
//     this.id = faker.random.number();
//     this.name = faker.company.companyName();
//     this.address = {
//       street: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.state(),
//       zipCode: faker.address.zipCode(),
//       country: faker.address.country()
//     }
// }
// }

// console.log(new Company)

// app.get("/api/users/new", (req, res) => {
//     let user = new User();
//     res.json({ results: user });
// });

// app.get("/api/companies/new", (req, res) => {
//     let company = new Company();
//     res.json({ results: company });
// });

// app.get("/api/user/company", (req, res) => {
//     let user = new User();
//     let company = new Company();
//     res.json({
//         user: user,
//         company: company,
//     });
// });

// app.listen(port, () => console.log(`Listening on port: ${port}`));





const express = require("express");
const app = express();
var faker = require('faker');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            "street" : faker.address.streetName(),
            "city" : faker.address.city(),
            "state" : faker.address.state(),
            "zipCode" : faker.address.zipCode(),
            "country" : faker.address.country()
        }
    }
}

var user = new User();
var company = new Company();

//1.
app.get("/api/users/new", (req, res) => {
    res.json(user);
});

//2.
app.get('/api/companies/new', (req, res) => {
    res.json(company);
});

//3.
var userCompany={
    "new User" : new User(),
    "new Company" : new Company()
}
app.get('/api/user/company', (req, res) => {
    res.json(userCompany);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)