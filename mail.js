
const nodeMailer = require("nodemailer");
const app = require("express")();
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({extended:false}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("mail")
})
app.listen(3000);

let transport = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:"parasuramanadckap@gmail.com",
        pass:"qybljyzlsjajhgpz"
    }
})



app.post("/send-mail",(req,res)=>{
    const emailId = req.body.emailId;
    const subject = req.body.subject;
    const description = req.body.description;


    const mailOption = {
        from:"parasuramanadckap@gmail.com",
        to:emailId,
        subject:subject,
        text: description,

    }

    transport.sendMail(mailOption,(err,info)=>{
        if(err) {
            throw err;
        }
           
        console.log("info"+info.response);
    })


    res.redirect("/");
})





