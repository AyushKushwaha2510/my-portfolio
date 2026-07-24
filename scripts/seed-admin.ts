import { User } from "@/app/features/auth/models/user.model";
import { Role } from "@/app/features/auth/types/user.types";
import dbConnect from "@/shared/lib/database";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

async function seedAdmin() {
  try {
    console.log("DB URI",process.env.MONGODB_URI);
    await dbConnect();
    const existingUser = await User.findOne({
      email: "admin@gmail.com",
    });

    if (existingUser) {
      console.log("Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin*ayush*123", 12);

    await User.create({
      name: "Ayush Kushwaha",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: Role.ADMIN,
    });

    console.log("Admin created successfully.");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
}

seedAdmin();