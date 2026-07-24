import mongoose, { Document, Schema } from "mongoose";
import { Role } from "../types/user.types";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  lastLogin: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      select: false, // Don't return password by default
    },

    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.ADMIN,
      required: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
