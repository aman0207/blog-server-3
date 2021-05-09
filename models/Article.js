const mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    //maxlength: [40, "Title cannot be more than 40 characters"],
  },
  titleImage: {
    type: String,
  },
  body: {
    type: String, // The output of CKEditor is of type string
    required: [true, "Please add a body"],
    unique: true, // The content of two or more article must not be same.
  },
  category: {
    type: String,
    required: [true, "Article must be categorized"],
  },
  author: {
    type: String,
    required: [true, "Article must have its author name"],
  },
  tags: {
    type: Array,
  },
  createdOn: {
    type: Date,
    //required: [true, "Article must have date of creation"],
  },
  updatedOn: {
    type: Date,
  },
  status: {
    type: String, // BEING_REVIWED, REVIEWED, IN_REVISION, ACCEPTED, PUBLISHED, REJECTED.
    required: [true, "Status is required for each article"],
  },
});

module.exports =
  mongoose.model.Article || mongoose.model("Article", ArticleSchema);
