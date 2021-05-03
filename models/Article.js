const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    //maxlength: [40, "Title cannot be more than 40 characters"],
  },
  body: {
    type: Object,
    required: [true, "Please add a body"],
  },
});

module.exports =
  mongoose.model.Article || mongoose.model("Article", ArticleSchema);
