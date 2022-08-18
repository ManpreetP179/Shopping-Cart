const userService = require('../service/user');
const bcrypt = require('bcryptjs');
class UserController {
    //user user information
    //url http://localhost:9900/user/:id
    //grab parms from url and look for a user
    //this function should be only allowed for admin
  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async signIn(req,res,next){
    try{
        res.json({msg:"will work on later"})
        if(!!req.body.email === false|| !!req.body.password === false){
            return res.status(422).json({
                email:"email is required",
                password:"password is required"
            })
        }
       
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(req.body.password, salt, (_, hash) => {
        //       req.body.password = hash;
        //     });
        //   });
        // const user = userService.signIn(req.body)
        // res.json(user)
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }



  }

  async signUp(req,res,next){
    res.json({msg:"will work on later"})
  }

  async signOut(req,res,next){
    res.json({msg:"will work on later"})
  }
}

module.exports = new UserController();
