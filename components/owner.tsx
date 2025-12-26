

"use client"

import {useReadContract} from "wagmi"

import {PAYROLL_ADDRESS , PAYROLL_ABI} from "@/lib/contract"

export default function Owner (){
    const {data , isPending} = useReadContract({
        address : PAYROLL_ADDRESS, 
        abi : PAYROLL_ABI, 
        functionName : "owner"
    })

   

    if (isPending) return <p>Loading...</p>

    return <p> Owner : {data as string} </p>
}