const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('PORT', process.env.PORT || 4000);
app.set('json spaces', 4);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/products', require('./Routes/productsRoutes'));
//Ruta para consumir api externa desde nuestra api
app.use('/usersJSONplaceHolder', require('./Routes/users'));


//start server 
app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`);
});