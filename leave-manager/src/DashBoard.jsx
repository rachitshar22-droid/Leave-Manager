import { useState,useEffect } from "react"
export default function DashbBoard(){
    const[allData,setAllData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const response=await fetch('http://localhost:3000/api/leave')
            const data=await response.json()
            setAllData(data)
        }catch(error){
            console.log("chud gya bhai",error)
        }
    }
      const handleDelete=async(id)=>{
        try{
            await fetch(`http://localhost:3000/api/leave/${id}`,{
                method:"DELETE"
            })
            setAllData(allData.filter((employe)=>employe._id!==id))
        }catch(error){
            console.log("Chud gya bhai",error)
        }
    }

    const handleUpdate=async(id,newStatus)=>{
        try{
            const respone=await fetch(`http://localhost:3000/api/leave/${id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({status: newStatus})
            })
            setAllData(allData.map((employe)=>employe._id==id?{...employe,status:newStatus}:employe))
        }catch(error){
            console.log("Chud gya bhai",error)
        }
    }

    return(
        <div className="grid grid-cols-3 gap-6 ">
            {allData?.map((employe)=>(
                <div key={employe._id} className="p-5 bg-white border-2 border-gray-400 shadow-md rounded-xl flex flex-col gap-2 hover:shadow-lg">
                    <h2>Name: {employe.name}</h2>
                    <p>Department: {employe.department}</p>
                    <p>Start Date: {employe.startDate}</p>
                    <p>End Date: {employe.endDate}</p>
                    <p>Status: {employe.status||"Pending"}</p>
                    <div className="flex gap-2 mt-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={()=>handleUpdate(employe._id,"Approved")}>Approve</button><br/>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={()=>handleUpdate(employe._id,"Rejected")}>Reject</button><br/>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"onClick={()=>handleDelete(employe._id)}>Delete</button>
                    </div>
                    </div>
            ))}
        </div>
    )
}