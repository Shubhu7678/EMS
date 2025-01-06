import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { FcLeave } from "react-icons/fc";
import { BsCashCoin } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
export const data = [
    {
        title: 'Dashboard',
        role: 'admin',
        icon: (
            <MdOutlineDashboardCustomize />
        ),
        path: '/dashboard/admin-dashboard',
    },
    {
        title: 'Employee',
        role: 'admin',
        icon: (
            <FaUserTie />
        ),
        path: '/dashboard/employee',
    },
    {
        title: 'Department',
        role: 'admin',
        icon: (
            <FcDepartment />
        ),
        path: '/dashboard/department',
    },
    {
        title: 'Leave',
        role: 'admin',
        icon: (
            <FcLeave />
        ),
        path: '/dashboard/leave',
    },
    {
        title: 'Salary',
        role: 'admin',
        icon: (
            <BsCashCoin />
        ),
        path: '/dashboard/salary',
    },
    {
        title: 'Settings',
        role: 'admin',
        icon: (
            <IoSettingsOutline />
        ),
        path: '/dashboard/settings',
    },
  
    // Employee data 
    {
        title: 'Dashboard',
        role: 'employee',
        icon: (
            <MdOutlineDashboardCustomize />
        ),
        path: '/employee-dashboard/my-dashboard',
    },
    {
        title: 'My Profile',
        role: 'employee',
        icon: (
            <CgProfile />
        ),
        path: '/employee-dashboard/my-profile',
    },
    {
        title: 'Leave',
        role: 'employee',
        icon: (
            <FcLeave />
        ),
        path: '/employee-dashboard/leave',
    },
    {
        title: 'Salary',
        role: 'employee',
        icon: (
            <BsCashCoin />
        ),
        path: '/employee-dashboard/salary',
    },
    {
        title: 'Settings',
        role: 'employee',
        icon: (
            <IoSettingsOutline />
        ),
        path: '/employee-dashboard/settings',
    },
]