import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { changePassword } from "../../../services/operations/SettingApis";

const EmployeeSettings = () => {

  const { handleSubmit, register,reset,formState: { errors } } = useForm();
  const { token } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    console.log(data);

    if (data.oldPassword === data.newPassword) {

      toast.error("New password cannot be same as old password");
      return;
    }
    if (data.newPassword !== data.confirmPassword) {

      toast.error("New password and confirm password does not match");
      return;
    }

    try {

      const result = await changePassword(token, data);
      if (result) { 

        reset();
      }

    } catch (error) {

      console.log("Error in changing password", error);

    }
  }
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gray-200 overflow-y-auto">
      <div className="w-full h-full flex items-center justify-center">

        <div className="w-96 bg-white p-4">
          <h1 className="font-semibold text-2xl">Change Password</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mt-4">
              <label htmlFor="oldPassword" className="font-sans text-gray-500">Old Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                name="oldPassword"
                placeholder="Old Password"
                {...register('oldPassword', { required: true })}
              />
              {errors.oldPassword && <span className="text-red-500">Old Password is required</span>}
            </div>
            <div className="mt-2">
              <label htmlFor="newPassword" className="font-sans text-gray-500">New Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                name="newPassword"
                placeholder="New Password"
                {...register('newPassword', { required: true })}
              />
              {errors.newPassword && <span className="text-red-500">New Password is required</span>}
            </div>
            <div className="mt-2">
              <label htmlFor="confirmPassword" className="font-sans text-gray-500">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword && <span className="text-red-500">Confirm Password is required</span>}
            </div>
            <div className="mt-4">
                <button className="w-full p-2 bg-teal-600 text-white rounded-md" type="submit">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeSettings