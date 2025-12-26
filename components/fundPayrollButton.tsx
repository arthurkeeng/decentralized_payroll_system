
"use client"
import  {useState} from "react"
import  {parseEther}  from "viem"
import  {useWriteContract , useConnection} from "wagmi"

import {PAYROLL_ADDRESS , PAYROLL_ABI} from "@/lib/contract"
import {Button} from "@/components/ui/button"

interface FundPayrollButtonProps {
  cancelFunding :() => void
}
export default function FundPayrollButton({cancelFunding} : FundPayrollButtonProps){
    const {isConnected} = useConnection()
    const [amount , setAmount]  = useState("0")

    const {data , writeContract, isPending , isSuccess, error} = useWriteContract()

    const handleFund = () => {
        if (parseInt(amount) == 0) return ; 

        writeContract({
            address : PAYROLL_ADDRESS, 
            abi : PAYROLL_ABI , 
            functionName : "fund", 
            value : parseEther(amount)
        })
        if (isSuccess){

          alert("Funding successful")
          cancelFunding()
        }
        if (error){

          alert("Funding unsuccessful")
          cancelFunding()
        }
    }


  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      />

      <Button
        onClick={handleFund}
        disabled={!isConnected || isPending}
        className="w-full"
      >
        {isPending ? "Funding..." : "Fund Payroll Contract"}
      </Button>
      <Button
        onClick={cancelFunding}
        
        className="w-full"
      >
        Cancel
      </Button>

      {isSuccess && (
        <p className="text-xs text-primary">
          Funding successful 🎉
        </p>
      )}

      {error && (
        <p className="text-xs text-destructive">
          {error.message}
        </p>
      )}
    </div>
  )
}