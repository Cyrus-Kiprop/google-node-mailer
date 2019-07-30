const dotenv = require('dotenv');
dotenv.config();
module.exports={
    port: process.env.PORT,
    user: process.env.USER,
    pass: process.env.PASS,
}