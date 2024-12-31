import DepartmentForm from "./DepartmentForm";

const AddDepartment = () => {


  return (
    <div className="w-full h-full bg-gray-200 px-8 py-6" >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[400px] mt-4 mx-auto p-6 shadow rounded-md bg-white">
          <h1 className="text-2xl text-center mb-5 font-semibold">Add Department</h1>
          <DepartmentForm />
        </div>
      </div>
    </div>
  )
}

export default AddDepartment