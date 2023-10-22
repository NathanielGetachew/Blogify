const mongoose = require("mongoose");

// schema

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    claps: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shares: {
      type: Number,
      default: 0,
    },
    postViews: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    schuduledPublished: {
      type: Date,
      default: null,
    },
    postViews: {
      type: Number,
      default: 0,
    },
    likes: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "User",
    },
    dislikes: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Comments",
    },

    accountLevel: {
      type: String,
      enum: ["bronze", "silver", "gold"],
      default: "bronze",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    notificationPreferences: {
      email: { type: String, default: true },
      // other notification types, sms ...
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    profileViewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    Posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    passwordResetToken: {
      type: String,
    },
    passwordRestExpires: {
      type: Date,
    },
    accountVerificationToken: {
      type: String,
    },
    accountVerificationExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// compile the model

const User = mongoose.model("User", userSchema);

module.exports = User;
