import { useSelector } from "react-redux"

const EmployeeDashboard = () => {

    const { user } = useSelector((state) => state.profile);

  return (
    <div>EmployeeDashboard {user.name}</div>
  )
}

export default EmployeeDashboard