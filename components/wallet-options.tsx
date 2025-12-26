
"use client"
import {Connecor , useAccount , useDisconnect, useConnect , useConnectors , useConnection} from 'wagmi'
import { Button } from "@/components/ui/button"

export default function WalletOptions() {
    const {connect} = useConnect()
    const { isConnected , address} = useConnection()
    const {disconnect} = useDisconnect()
    const connectors = useConnectors().filter(c => c.name == "Injected")

    if (isConnected) {
        return (
            <div>
                
                <Button 
                onClick = {() => disconnect()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 font-medium"> 
                    Disconnect {address.slice(0,4)}..
                </Button>

                {/* <button }></button> */}
            </div>
        )
    }

    return connectors.map((connector)=> {
        console.log(connector)
        return (
            <Button 
                onClick = {() => connect({connector})}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 font-medium"> 
                Connect
                </Button>
      
        )
        }
    )
}