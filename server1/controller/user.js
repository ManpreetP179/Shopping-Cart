const userService = require('../service/user');
const bcrypt = require("bcrypt");
const User = require('../model/users');
class UserController {
    //user user information
    //url http://localhost:9900/user/:id
    //grab parms from url and look for a user
    //this function should be only allowed for admin
  async getUser(req, res, next) {

    try {
        const user = await userService.getUser(req.params.id);
        res.json(user );
  
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async signIn(req,res,next){
    const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;
    const body = req.body;

    const foundUser =  await userService.findByEmail({ email: body.email });

    if(foundUser){
      console.log(foundUser)
      const validPassword = await bcrypt.compare(body.password, foundUser.password)
      if (validPassword) {
        res.cookie("email", foundUser.email, {maxAge: COOKIE_MAX_AGE});
        const isSignIn = "eamil" in req.cookies
        res.status(200).json({data:foundUser})

      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  }
  async signUp(req,res,next){
    const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;
    try{   
        if(!!req.body.email === false|| !!req.body.password === false){
            return res.status(422).json({
                email:"email is required",
                password:"password is required"
            })
        }
        console.log("sing Up")
        req.body.password = await bcrypt.hash(req.body.password, 10);
        //set this stuff in to cookies
        const user = await userService.signUp(req.body)
        console.log("sing Up")
        if(!!user === true){
          res.cookie("email", user.email, {maxAge: COOKIE_MAX_AGE});
          const isSignIn = "email" in req.cookies
          if(isSignIn) res.json({user:user,msg:"you have signed up successfully"})
          else  res.json({msg:"failed to insert"})
        }else{
          res.json({msg:"can not find the user"})
        }
  
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }



  }

  async signOut(req,res,next){
    res.clearCookie("email");
    res.json({cookie:"email" in req.cookies})
  }
}

module.exports = new UserController();
