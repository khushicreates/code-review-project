

require('dotenv').config();
console.log(process.env.GOOGLE_GEMINI_KEY);

const app = require('./src/app');



app.listen(3000, () => { 
    console.log('server is running on http://localhost:3000')
});