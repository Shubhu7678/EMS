import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { addNewDepartment} from '../../../../../services/operations/DepartmentApis';

const AddDepartment = () => {

    const { token } = useSelector((state) => state.auth);
    const { handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => { 

        // console.log(data); 
        try {

            const result = await addNewDepartment(token, data);
            if (result) { 

                reset();
                console.log(result);
            }

        } catch (error) { 

            console.log("Error occured in add department", error);

        }
    }

  return (
      <div className="w-full h-full bg-gray-200 px-8 py-6" >
          <div className="w-full h-full flex items-center justify-center">
              <div className="w-[400px] mt-4 mx-auto p-6 shadow rounded-md bg-white">
              <h1 className="text-2xl text-center mb-5 font-semibold">Add Department</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex mb-2 flex-col gap-0">
                          <label htmlFor="department_name" className="text-base">Department Name</label>
                          <input
                              type="text"
                              name="department_name"
                              className="w-full  border-gray-400 border-[0.5px] px-2 py-2 rounded-sd "
                              placeholder="Enter Department Name"
                              {...register("department_name", { required: true })}
                          />
                          {errors.department_name && (
                              <span className="text-red-500 text-sm">
                                  Department Name is required
                              </span>
                          )}
                      </div>
                      <div className="flex mb-4 flex-col gap-0">
                          <label htmlFor="department_description">Description</label>
                          <textarea
                              type="text"
                              name="department_description"
                              className="w-full border-[0.5px] border-gray-400 px-2 py-2 rounded-sd "
                              rows={5}
                              placeholder="Enter Description"
                              {...register("department_description")}
                          />
                          {errors.department_description && (
                              <span className="text-red-500 text-sm">
                                  Description is required
                              </span>
                          )}
                      </div>
                      <div className="">
                          <button className="bg-teal-600 text-white w-full px-2 py-2 rounded-sm" >Submit</button>
                      </div>
                 </form>
              </div> 

          </div>
    </div>
  )
}

export default AddDepartment