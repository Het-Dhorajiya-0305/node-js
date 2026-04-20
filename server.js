import e from "express";

const server=e();

server.get("/",(req,res)=>{
    res.send("hello world")
})

server.listen(8080, () => {
    console.log("server is running on port 8080")
})