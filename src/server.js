const app = require("./app");
const connectDB =require("./config/db");


const port = 8080;

connectDB();

app.listen(port, ()=>{
    console.log(`App is listenning on http://localhost:${port}`);
})