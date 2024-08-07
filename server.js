const express=require('express');

const server=express();

server.get('/password',  async (req, res) => {
    try {
        const length = parseInt(req.query.length) || 8; 
        const number = req.query.number === 'true'; 
        const special = req.query.special === 'true'; 
        const capital = req.query.capital === 'true';
        const response = generatePassword(number,capital,special,length);     //eg:localhost:8080/password?length=12&number=true&special=true&capital=true
        res.status(200).json({password:response});
      } catch (error) {
        res.status(500).json({ Error: 'Internal Server Error' });
      }
    

});

function generatePassword(includeNumber,capital,specialCharacters,length){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    const upper = lower.toUpperCase();
    
    let available = lower;
  
    if (includeNumber) available += number;
    if (specialCharacters) available += special;
    if (capital) available += upper;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * available.length);
      password += available[index];
    }
  
    return password;
}




server.listen(8080,()=>{
   console.log("Server started");
});
