const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//-------------------------
const User = require("./Models/UserSchema");
const Feedback = require("./Models/FeedbackSchema");
const Dish = require("./Models/DishesSchema");
const Comments = require("./Models/CommentSchema");
//-------------------------
const { response } = require("express");
mongoose.connect("mongodb://localhost:27017/SCD");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    user.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const result = await User.findOne({
    full_name: req.body.full_name,
    password: req.body.password,
  })
    .then((obj) => {
      if (obj) {
        res.json({ found: true, object: obj });
      } else {
        res.json({ found: false, object: obj });
      }
    })
    .catch(res.send({ found: false }));
});

app.post("/api/getfeedbacks", async (req, res) => {
  const result = await Feedback.find({}, { user_email: 1, feedback: 1, _id: 0 })
    .then((response) => {
      // console.log("////////////////////////", response);
      res.send(response);
    })
    .catch({ message: "error" });

  // console.log("<<<<<<<<<<<<<<<<<<<<<<", result);

  // .then((response) => {
  //   res.send({ found: true });
  //   console.log("------------------", response);
  // })
  // .catch(res.send({ found: false }));
});

app.post("/api/givefeedbacks", async (req, res) => {
  try {
    const feed = await new Feedback(req.body);
    feed.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.post("/api/delete", async (req, res) => {
//   const result = await User.deleteOne({
//     full_name: req.body.full_name,
//     password: req.body.password,
//   });
//   if (result.deletedCount == 1) {
//     console.log("deleted");
//   } else {
//     console.log("not found");
//   }
//   res.send({ status: result });
// });
