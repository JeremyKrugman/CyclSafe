const express=require('express');
const app=express();
const session=require('express-session');
const configRoutes=require('./routes');
const exphbs=require('express-handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use(session({
    name:'AuthCookie',
    secret:'some secret string!',
    resave: false,
    saveUninitialized: true
}));
app.use(async (req,res,next)=>{
    let s=new Date().toUTCString()+' ';
    s=s+req.method+' ';
    s=s+req.originalUrl+' ';
    if(!req.session.user){
        s=s+'(Non-Authenticated User)';
    }
    else{
        s=s+'(Authenticated User)'
    }
    console.log(s);
    next();
})
configRoutes(app);
app.listen(3000,()=>{
    console.log("SERVER ACTIVE");
})