const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./db.js")
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

connectDB()
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())



app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// Connect to SQLite database
// const db = new sqlite3.Database('./school.db', (err) => {
//     if (err) {
//         console.error('Error connecting to database', err);
//     } else {
//         console.log('Connected to the SQLite database.');
//     }
// });

// // Import routes
// const userRoutes = require('./routes/userRoutes');
// const studentRoutes = require('./routes/studentRoutes');
// const teacherRoutes = require('./routes/teacherRoutes');

// // Use routes
// app.use('/api/users', userRoutes);
// app.use('/api/students', studentRoutes);
// app.use('/api/teachers', teacherRoutes);

app.listen(5001, () => {
    console.log(`Server is running on port 5001`);
});
