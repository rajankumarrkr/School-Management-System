const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

const createAdmin = async () => {
    try {
        // ✅ Connect DB FIRST
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected ✅");

        // ✅ Hash password
        const hashedPassword = await bcrypt.hash("123456", 10);

        // ✅ Check if admin already exists
        const existing = await Admin.findOne({ email: "admin@gmail.com" });
        if (existing) {
            console.log("Admin already exists ⚠️");
            process.exit();
        }

        // ✅ Create admin
        await Admin.create({
            email: "admin@gmail.com",
            password: hashedPassword,
        });

        console.log("Admin Created ✅");
        process.exit();

    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
};

createAdmin();