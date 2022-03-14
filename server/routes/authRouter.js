const express = require('express');
const router = express.Router();
const passport= require("passport")

router.get('/', (req, res) => {
  res.send('Hi auth')
});

router.get(
    "/google", 
    passport.authenticate("google",{
    scope:"profile",

}))

router.get("/google/callback", passport.authenticate("google",{
    session:true
}));

module.exports= router;