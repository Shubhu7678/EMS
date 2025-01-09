import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getLeaveDataById, changeLeaveStatus } from '../../../../../services/operations/LeaveApis';
import { setLeave, setLeaveList } from "../../../../../slices/leaveSlice";

const LeaveProfile = () => {

    const { leaveId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { leave,leaveList } = useSelector((state) => state.leave);

    const BASE_URL = import.meta.env.VITE_BASE_URI;

    const handleLeaveStatus = async(leaveStatus) => { 

        try {

            const formData = {};
            formData.leaveStatus = leaveStatus;
            formData.leaveId = leave._id;
            const result = await changeLeaveStatus(token, formData);
            if (result) { 

                console.log(result);
                dispatch(setLeave(result));
                dispatch(setLeaveList(leaveList.map((le) => le._id === result._id ? result : le)));
            }

        } catch (error) { 

            console.log("Error occured in handleLeaveType", error);
        }
    }

    useEffect(() => {

        const fetchLeaveData = async () => {

            try {

                const result = await getLeaveDataById(token, leaveId);
                if (result) {

                    console.log(result);
                    dispatch(setLeave(result));
                }

            } catch (error) {

                console.log("Error occured in fetchLeaveData", error);
            }

        }

        fetchLeaveData();
    }, [leaveId, token, dispatch])

    return (
        <div className="w-full h-[calc(100vh-64px)] overflow-y-auto bg-gray-200">
            <div className="px-6 py-3">
                <div className="bg-white pb-12">
                    <h1 className="font-semibold text-3xl pt-8 pb-4 text-center">My Profile</h1>
                    <div className="w-full flex items-center gap-8 mt-4 justify-center ">
                        <div className="w-full flex justify-end pl-8">
                            <img
                                src={BASE_URL + `/${leave?.employeeId?.userId?.profileImage}`}
                                className="w-96 h-96 aspect-square rounded-full object-cover"
                                alt="" />
                        </div>
                        <div className="w-full">
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <span className="font-bold text-base">Name : </span>
                                    <span className="font-mono text-lg">{ leave?.employeeId?.userId?.name }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">Employee Id : </span>
                                    <span className="font-mono text-lg">{ leave?.employeeId?.employeeId }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">Leave Type : </span>
                                    <span className="font-mono text-lg">{leave?.leaveType }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">Reason : </span>
                                    <span className="font-mono text-lg">{leave?.reason }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">Department : </span>
                                    <span className="font-mono text-lg">{leave?.employeeId?.departmentId?.name }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">Start Date : </span>
                                    <span className="font-mono text-lg">{ leave?.startDate }</span>
                                </li>
                                <li>
                                    <span className="font-bold text-base">End Date : </span>
                                    <span className="font-mono text-lg">{leave?.endDate}</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <span className="font-bold text-base">Action </span>
                                    <span className="font-mono text-lg">
                                        { 
                                            leave?.status === "pending" ? (
                                                <>
                                                    <div className="flex gap-2">

                                            <button onClick={() => (handleLeaveStatus('approved'))} className="bg-green-600 text-white px-3 py-1 rounded-md">Approve</button>
                                            <button onClick={() => (handleLeaveStatus('rejected'))} className="bg-red-600 text-white px-3 py-1 rounded-md">Reject</button>
                                                    </div>
                                                </>
                                            ) :
                                            leave?.status 
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeaveProfile