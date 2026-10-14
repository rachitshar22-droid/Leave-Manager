import { useState } from "react";
export default function ManageStaff() {
    const [department, setDepartment] = useState("")
    const [staffName, setStaffName] = useState("")
    const [totalLeave, setTotalLeave] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newData = { department:department,name: staffName, total_leaves:parseInt(totalLeave),email:"rachit@latest.com",password_hash:"123456"}
            const response = await fetch('http://localhost:3000/api/staff', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            const result = await response.json()
            console.log("Hogya Bhai", result)
        }catch(error){
            console.log("Chud gya Bhai",error)
        }
        setDepartment("")
        setStaffName("")
        setTotalLeave("")
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border-2 border-gray-500 shadow-lg rounded-xl flex flex-col gap-4">
            <h1 className="text-2x font-bold text-gray-800 text-center mb-4">Add New Staff</h1>
            <select className="p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={department} onChange={(e) => setDepartment(e.target.value)}> Select Department:
                <option value="">Select Category</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Techinical">Technical</option>
                <option value="Food">Food</option>
            </select><br />
            <input className="p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Name" value={staffName} onChange={(e) => setStaffName(e.target.value)} /><br />
            <input className="p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Total Leave" value={totalLeave} onChange={(e) => setTotalLeave(e.target.value)} /><br />
            <button className="bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-all mt-2" onClick={handleSubmit}>Add Staff</button>
        </div>
    )
}