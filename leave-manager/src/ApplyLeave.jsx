import { useState } from "react";
export default function ApplyLeave() {
    const [department, setDepartment] = useState("")
    const [name, setName] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const[reason,setReason]=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formattedStart=startDate.split('-').reverse().join('-')
        const formattedEnd=endDate.split('-').reverse().join('-')
        // if(new Date(endDate)>new Date(startDate)){
        //     alert("End Date cannot be Befor Start date,bhai")
        //     return
        // }

        const newData = {employeeId:1, category:department, name, startDate, endDate,reason}
        try {
            const respone = await fetch('http://localhost:3000/api/leave', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            const result = await respone.json()
            console.log("Hogya Bhai", result)
        } catch (error) {
            console.log("Chud gya Bhai", error)
        }
        setDepartment("")
        setName("")
        setStartDate("")
        setEndDate("")
        setReason("")
    }



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border-2 border-gray-500 shadow-lg rounded-xl flex flex-col gap-4" >
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Apply Leave</h1>
            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={department} onChange={(e) => setDepartment(e.target.value)}> Select Department:
                <option value="">Select Category</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Techinical">Technical</option>
                <option value="Food">Food</option>
            </select>
            
            <input className="p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="flex flex-col gap-1">
                <label className="text-sm text-black font-semibold ml-1">Start Date</label>
                <input className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"  type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-black font-semibold ml-1">End Date</label>
                <input className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"  type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-black font-semibold ml-1">Reason for Leave</label>
                <textarea className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none" rows="3" placeholder="Briefly explain your reason..." type='text' value={reason} onChange={(e)=>setReason(e.target.value)}></textarea>
            </div>
            
            <button className="bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-all mt-2" onClick={handleSubmit}>Submit Request</button>
            
        </div>
    )

} 