const passport= require("passport");
const {Strategy: GoogleStrategy} = require('passport-google-oauth20');
require("dotenv").config()
const pool = require("./db")

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  }, 
  async(_,__, profile, done) =>{
    const account = profile._json;
    console.log(account);
    try{
      await pool.query("SELECT * FROM users WHERE google_id = $1", [])
    }catch(error){
        done(err)
    }


  })

);