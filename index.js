require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const app = express();

mongoose.connect( process.env.MONGO_URL ).then(() => {
    console.log('Connected to MongoDB');
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SECERT || akashsabe , resave: true, saveUninitialized: true }));

// Set Cache-Control header to prevent browser caching
app.use((req, res, next) => {
    res.header(
        'Cache-Control',
        'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
    );
    next();
});

app.use('/', authRoutes);
app.use('/', urlRoutes);

app.listen(process.env.PORT || 5000);
