const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const userData=require('../data').users;
router
  .route('/')
  .get(async (req, res) => {
    //code here for GET
    if(req.session.user){
      res.redirect('/protected');
    }
    else{
      res.render('userLogin',{});
    }

  })

router
  .route('/register')
  .get(async (req, res) => {
    //code here for GET
    if(req.session.user){
      res.redirect('/protected');
    }
    else{
      res.render('userRegister',{});
    }
  })
  .post(async (req, res) => {
    //code here for POST
    try{
    if(!req.body.usernameInput){
      throw "Error no username";
    }
    if(!req.body.passwordInput){
      throw "Error: no password";
    }
    if(req.body.usernameInput!=req.body.usernameInput.replaceAll(' ','')){
      throw "Error: no spaces allowed in username";
    }
    //there is more error checking, need to check email input
  }
  catch(e){
    res.status(400).render('userRegister',{error:e});
  }
  try{
    if(req.body.passwordInput!=req.body.confirmPassword){
        throw "Error: passwords must be equal";
    }
  let inserted = await userData.createUser(req.body.usernameInput,req.body.passwordInput);
  if(!inserted){
    res.status(500).json({error:'Internal Server Error'});
    return;
  }
    res.redirect('/');
    return;
  }
  catch(e){
    res.status(400).render('userRegister',{error:e});
    return;
  }
  })
 
router
  .route('/login')
  .post(async (req, res) => {
    //code here for POST
    try{
    if(!req.body.usernameInput){
      throw "Error: no username input";
    }
    if(!req.body.passwordInput){
      throw "Error: no password input";
    }
   // console.log(req.body);
    let valid=await userData.checkUser(req.body.usernameInput,req.body.passwordInput);
    req.session.user=req.body.usernameInput;
    res.redirect("/protected");
  }
  catch(e){
    //go back to login screen with error 
    res.status(400).render('userLogin',{error:e});
    //console.log(e);
    //console.log(req.body);
    return;
  }
  })

router
  .route('/protected')
  .get(async (req, res) => {
    //code here for GET
    res.redirect('/logout');
 //   let username=req.session.user;
   // const d= new Date();
  //  res.render('private',{username:username,date:d});
  })

router
  .route('/logout')
  .get(async (req, res) => {
    req.session.destroy();
    res.redirect('/');
   // res.render('logout',{});
    //code here for GET
  })
module.exports=router;