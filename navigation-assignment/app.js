const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/index');

const app = express();

app.use(mainRoutes);

// In admin.js, modules.exports = router;
// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);