import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import dbConnect from "@/shared/lib/database";

export async function loginUser(email: string, password: string) {
  await dbConnect();

  const user = await User.findOne({ email }).select("+password").lean();

  if (!user) {
    return null;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return null;
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}