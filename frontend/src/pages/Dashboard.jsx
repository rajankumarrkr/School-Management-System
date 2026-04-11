import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [name, setName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [age, setAge] = useState("");

    const [taskTitle, setTaskTitle] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    const fetchStudents = async () => {
        const res = await API.get("/students");
        setStudents(res.data);
    };

    const fetchTasks = async () => {
        const res = await API.get("/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        fetchStudents();
        fetchTasks();
    }, []);

    const addStudent = async (e) => {
        e.preventDefault();

        await API.post("/students", {
            name,
            class: studentClass,
            age,
        });

        setName("");
        setStudentClass("");
        setAge("");
        fetchStudents();
    };

    const deleteStudent = async (id) => {
        await API.delete(`/students/${id}`);
        fetchStudents();
    };

    const addTask = async (e) => {
        e.preventDefault();

        await API.post("/tasks", {
            title: taskTitle,
            student: selectedStudent,
        });

        setTaskTitle("");
        setSelectedStudent("");
        fetchTasks();
    };

    const completeTask = async (id) => {
        await API.put(`/tasks/${id}`, {
            status: "completed",
        });

        fetchTasks();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-6">

            {/* 🔝 Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
                <h1 className="text-2xl font-bold">School Dashboard</h1>

                <button
                    onClick={logout}
                    className="bg-black text-white px-4 py-2 rounded w-full md:w-auto"
                >
                    Logout
                </button>
            </div>

            {/* 🔲 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 👨‍🎓 STUDENT SECTION */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Students</h2>

                    {/* Form */}
                    <form onSubmit={addStudent} className="flex flex-col gap-3 mb-4">
                        <input
                            placeholder="Name"
                            className="border p-2 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            placeholder="Class"
                            className="border p-2 rounded"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                        />

                        <input
                            placeholder="Age"
                            type="number"
                            className="border p-2 rounded"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />

                        <button className="bg-green-500 text-white py-2 rounded">
                            Add Student
                        </button>
                    </form>

                    {/* Student List */}
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {students.map((s) => (
                            <div
                                key={s._id}
                                className="flex justify-between items-center bg-gray-100 p-2 rounded"
                            >
                                <span className="text-sm">
                                    {s.name} (Class {s.class})
                                </span>

                                <button
                                    onClick={() => deleteStudent(s._id)}
                                    className="bg-red-500 text-white px-2 py-1 text-sm rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 📚 TASK SECTION */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Tasks</h2>

                    {/* Form */}
                    <form onSubmit={addTask} className="flex flex-col gap-3 mb-4">
                        <input
                            placeholder="Task Title"
                            className="border p-2 rounded"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />

                        <select
                            className="border p-2 rounded"
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                        >
                            <option value="">Select Student</option>
                            {students.map((s) => (
                                <option key={s._id} value={s._id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>

                        <button className="bg-blue-500 text-white py-2 rounded">
                            Assign Task
                        </button>
                    </form>

                    {/* Task List */}
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {tasks.map((t) => (
                            <div
                                key={t._id}
                                className="flex justify-between items-center bg-gray-200 p-2 rounded"
                            >
                                <span className="text-sm">
                                    {t.title} → {t.student?.name}
                                    <span className="ml-2 text-xs">
                                        ({t.status})
                                    </span>
                                </span>

                                {t.status === "pending" && (
                                    <button
                                        onClick={() => completeTask(t._id)}
                                        className="bg-green-600 text-white px-2 py-1 text-sm rounded"
                                    >
                                        Done
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;