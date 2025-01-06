import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom"
import { getSalaryHistory } from "../../../../../services/operations/SalaryApis";

const SalaryHistory = () => {

    const { employeeId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const [salaryHistory, setSalaryHistory] = useState([]);

    useEffect(() => {

        const fetchSalaryHistory = async () => {

            const result = await getSalaryHistory(token, employeeId);

            if (result) {

                setSalaryHistory(result);
            }
        }

        fetchSalaryHistory();

    }, [employeeId, token])

    return (
        <div className="px-8 py-6 w-full h-full bg-gray-200">
            <div>
                <h1 className="text-3xl text-center font-semibold">Salary History</h1>
            </div>
            <div className="mt-4 flex justify-end">
                <input
                    type="text"
                    className="border bg-white p-2" placeholder="Search"
                />
               
            </div>

            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-200">
                                <th>SNO</th>
                                <th>EMP ID</th>
                                <th>SALARY</th>
                                <th>ALLOWANCE</th>
                                <th>DEDUCTION</th>
                                <th>TOTAL</th>
                                <th>PAYDATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salaryHistory.map((salary, index) => (
                                <tr key={index} className="">
                                    <th>{index + 1}</th>
                                    <td>{ salary?.employeeId?.employeeId }</td>
                                    <td>{ salary?.basicSalary }</td>
                                    <td>{ salary?.allowances }</td>
                                    <td>{ salary?.deduction }</td>
                                    <td>{ salary?.netSalary }</td>
                                    <td>{salary?.payDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalaryHistory