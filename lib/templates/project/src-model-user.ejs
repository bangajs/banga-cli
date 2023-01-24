const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    image: {
      type: String,
      default: "/uploads/default.jpeg",
    },
    role: {
      type: String,
      trim: true,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
    status: {
      type: String,
      trim: true,
      enum: ["ACTIVE", "DEACTIVATED"],
      default: "ACTIVE"
    },
    has_verified_email: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next()
  const passwordHash = await bcrypt.hash(this.password, 10);
  this.password = passwordHash;

  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  if (!this._update.$set.password) return next()
  const hash = await bcrypt.hash(this._update.$set.password, 10);
  this._update.$set.password = hash;

  next();
});


module.exports = mongoose.model('user', userSchema)