// import Image from "next/image";
// import WalletOptions from "../components/wallet-options"
// import Owner from "../components/owner"

// export default function Home() {
//   return (
//     <div className="">
      
//          <WalletOptions/>
//         <Owner/>
//     </div>
//   );
// }


import { DecentralizedPayroll } from "@/components/decentralized-payroll"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <DecentralizedPayroll />
    </main>
  )
}