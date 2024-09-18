const express=require('express');
const app = express();
const bcrypt=require('bcrypt');
const session = require('express-session');
const mongoose =require('mongoose');
const UserModel = require('./models/userModel');
const Expense=require('./models/expenseModel')
const cors = require('cors');
const Meeting = require('./models/MeetingModel')


mongoose.connect('mongodb://localhost:27017/shriniketan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(
  session({
    secret: "shriniketan",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/api/login', async (req, res) => {
  const { name, password } = req.body;

  try {
   
    const existingUser = await UserModel.findOne({ username: name });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username: name,
      password: hashedPassword,
    });

    await newUser.save();

    req.session.user = {
      username:name
    };

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


app.post('/api/expenses', async (req, res) => {
  const { name, amount } = req.body;
  const newExpense = new Expense({ name, amount });

  try {
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save expense' });
  }
});
 

app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});


app.get('/api/expenses/total', async (req, res) => {
  try {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const expenses = await Expense.find();
    const monthlyTotal = expenses
      .filter(
        (expense) =>
          new Date(expense.date).getMonth() === currentMonth &&
          new Date(expense.date).getFullYear() === currentYear
      )
      .reduce((acc, expense) => acc + expense.amount, 0);

    res.json({ total: monthlyTotal });
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate total expenses' });
  }
});

app.get('/api/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch meetings' });
  }
});

app.post('/api/meetings', async (req, res) => {
  const { heading, description } = req.body;

  try {
    const meeting = new Meeting({
      heading,
      description,
    });

    const savedMeeting = await meeting.save();
    res.status(201).json(savedMeeting);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save meeting' });
  }
});

app.listen(4000,()=>
{
    console.log('server is running');
})