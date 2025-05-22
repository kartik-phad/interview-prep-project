// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const path = require('path');
// const User = require('./models/User');

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Serve static files 
// app.use(express.static(path.join(__dirname)));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/userDB', {
 
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // ✅ Registration route (with bcrypt hashing)
// app.post('/register', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ error: 'Email already registered' });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error during registration:', error);
//         res.status(500).json({ error: 'Server error during registration' });
//     }
// });

// // ✅ Login route (with bcrypt.compare)
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ error: 'User not found' });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });

//         res.status(200).json({ message: 'Login successful!' });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ error: 'Server error during login' });
//     }
// });

// // Start server
// app.listen(3000, () => {
//     console.log('✅ Server running on http://localhost:3000');
// });


const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for frontend)
app.use(express.static(path.join(__dirname)));

// ✅ Use environment variable for MongoDB URI (Render or local)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/userDB';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Registration route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Email already registered' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('❌ Error during registration:', error);
        res.status(500).json({ error: 'Server error during registration' });
    }
});

// ✅ Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });

        res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

// ✅ Use dynamic port (Render uses process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
