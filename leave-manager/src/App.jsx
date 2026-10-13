import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import DashbBoard from './DashBoard'
import ApplyLeave from './ApplyLeave'
import ManageStaff from './ManageStaff'
import Auth from './Auth'

export default function App(){
  return(
    <BrowserRouter>
    <div className='flex justify-center gap-8 bg-gray-900 p-4 shadow-md mb-6'>
       <Link className="text-white font-semibold hover:text-blue-400 transition-colors" to='/auth'>Login</Link>
    <Link className="text-white font-semibold hover:text-blue-400 transition-colors" to='/'>DashBoard</Link>
    <Link className="text-white font-semibold hover:text-blue-400 transition-colors" to='/applyleave'>Apply Leave</Link>
    <Link className="text-white font-semibold hover:text-blue-400 transition-colors" to='/managestaff'>Manage Staff</Link>
   
    </div>
    <Routes>
      <Route path='/' element={<DashbBoard/>}/>
       <Route path='/applyleave' element={<ApplyLeave/>}/>
        <Route path='/managestaff' element={<ManageStaff/>}/>
         <Route path='/auth' element={<Auth/>}/>
    </Routes>
  </BrowserRouter>
  )
}