import Sidebar from "./sidebar";
import TableForm from "./tableForm";


export default function DashboardComponent(){
  return(
    <div className="flex">
      <Sidebar />
      <TableForm />
    </div>
  )
}