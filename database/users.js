const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "sameehataha",
            password: "st12345",
            emailId: "st@gmail.com",
        },
        {
            id: uuid(),
            username: "onepiece",
            password: "rz12345",
            emailId: "rz@gmail.com",
        },
    ]
}

module.exports = userdata;