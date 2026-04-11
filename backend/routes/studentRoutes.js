const express = require("express");
const router = express.Router();

const {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent,
} = require("../controllers/studentController");


const auth = require("../middleware/authMiddleware");

router.post("/", addStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

router.post("/", auth, addStudent);
router.get("/", auth, getStudents);
router.put("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);

module.exports = router;