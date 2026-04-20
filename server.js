import e from "express";

const server=e();

server.get("/",(req,res)=>{
    res.send("hello world")
})

server.listen(3000, () => {
    console.log("server is running on port 3000")
})