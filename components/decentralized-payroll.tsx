"use client"

import type * as React from "react"
import {
  Wallet,
  Users,
  Banknote,
  Settings,
  Search,
  Plus,
  Trash2,
  Bell,
  LayoutDashboard,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  ExternalLink,
  MoreVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import FundPayrollButton from "@/components/fundPayrollButton"
import {useState} from "react"

import WalletOptions from "../components/wallet-options"

export function DecentralizedPayroll() {
  const [openFunding , setOpenFunding] = useState(false)
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - Inspired by DAO DAO design */}
      <aside className="w-64 border-r border-border flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <ShieldCheck size={20} />
          </div>
          <span className="font-bold tracking-tight text-xl">PAYROLL.ETH</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<Users size={18} />} label="Employees" />
          <NavItem icon={<Banknote size={18} />} label="Payroll" />
          <NavItem icon={<Settings size={18} />} label="Governance" />
        </nav>

        <div className="p-4 mt-auto border-t border-border">
          <div className="rounded-xl bg-muted/50 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              <span>Network Status</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="text-sm font-medium">Connected</div>
            <Button variant="outline" size="sm" className="w-full text-xs h-8 bg-transparent">
              <ExternalLink size={12} className="mr-2" /> View Contract
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header - Inspired by Vercel design */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search employees or transactions..."
                className="pl-10 bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary h-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="md" className="text-muted-foreground relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 font-medium"> */}
              <WalletOptions/>
              
            {/* </Button> */}
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Organization Overview</h1>
              <p className="text-muted-foreground mt-1">Manage your decentralized payroll and employee compensation</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Export Data</Button>
              <Button className="bg-primary text-primary-foreground">
                <Plus size={18} className="mr-2" /> Add Employee
              </Button>
            </div>
          </div>

          {/* Stats Grid - Inspired by Supabase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total Employees"
              value="24"
              change="+2 this month"
              icon={<Users className="text-primary" size={20} />}
            />
            <StatCard
              label="Monthly Payroll"
              value="48.5 ETH"
              change="+4.2% from last month"
              icon={<Banknote className="text-primary" size={20} />}
            />
            <StatCard
              label="Contract Balance"
              value="152.0 ETH"
              change="Stable"
              icon={<Wallet className="text-primary" size={20} />}
            />
            <StatCard
              label="Next Payout"
              value="In 4 Days"
              change="Jan 30, 2024"
              icon={<Clock className="text-primary" size={20} />}
            />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Employee List - Inspired by Vercel list view */}
            <Card className="lg:col-span-2 bg-card/50 border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">Recent Employees</CardTitle>
                  <CardDescription>Management of active payroll recipients</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-primary font-medium hover:bg-primary/10">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <EmployeeItem
                    name="Alex Rivera"
                    address="0x160...98f2"
                    salary="4.5 ETH"
                    status="Active"
                    lastClaim="2 days ago"
                  />
                  <EmployeeItem
                    name="Jordan Smith"
                    address="0x234...567g"
                    salary="3.8 ETH"
                    status="Active"
                    lastClaim="12 days ago"
                  />
                  <EmployeeItem
                    name="Taylor Chen"
                    address="0x789...012h"
                    salary="5.2 ETH"
                    status="Paused"
                    lastClaim="1 month ago"
                  />
                  <EmployeeItem
                    name="Morgan Lee"
                    address="0x456...789i"
                    salary="4.0 ETH"
                    status="Active"
                    lastClaim="Today"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions / Governance - Inspired by Supabase sidebar modules */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Admin Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">

                  {
                    openFunding && <FundPayrollButton 
                    cancelFunding = {() => setOpenFunding(false)}
                    />
                  }
                  {
                  !openFunding && <Button 
                  onClick = {() => setOpenFunding(true)}
                  variant="secondary" className="w-full justify-start text-sm">
                    <ArrowUpRight size={16} className="mr-3 text-primary" /> Fund Payroll Contract
                  </Button>

                  }
                  <Button variant="secondary" className="w-full justify-start text-sm">
                    <Users size={16} className="mr-3 text-primary" /> Update HR/Accountant
                  </Button>
                  <Button
                    variant="destructive"
                    variant="outline"
                    className="w-full justify-start text-sm border-destructive/30 hover:bg-destructive/10 text-destructive bg-transparent"
                  >
                    <ShieldCheck size={16} className="mr-3" /> Emergency Freeze
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Banknote size={20} />
                    </div>
                    <h3 className="font-semibold">Claim Your Salary</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    As an employee, you can claim your earned balance directly from the smart contract.
                  </p>
                  <div className="p-3 rounded-lg bg-background/50 border border-border mb-4">
                    <div className="text-xs text-muted-foreground uppercase mb-1 font-medium">Available to claim</div>
                    <div className="text-xl font-bold">1.25 ETH</div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20">
                    Claim 1.25 ETH
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </div>
  )
}

function StatCard({
  label,
  value,
  change,
  icon,
}: { label: string; value: string; change: string; icon: React.ReactNode }) {
  return (
    <Card className="bg-card/30 border-border hover:border-primary/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground font-medium">{label}</span>
          <div className="p-2 rounded-lg bg-muted/50">{icon}</div>
        </div>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div className="text-xs text-primary mt-1 font-medium">{change}</div>
      </CardContent>
    </Card>
  )
}

function EmployeeItem({
  name,
  address,
  salary,
  status,
  lastClaim,
}: { name: string; address: string; salary: string; status: "Active" | "Paused"; lastClaim: string }) {
  return (
    <div className="group flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-all border border-transparent hover:border-border">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground border border-border">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-muted-foreground font-mono">{address}</div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden sm:block text-right">
          <div className="text-sm font-medium">{salary} / mo</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Salary</div>
        </div>

        <div className="hidden md:block text-right">
          <div className="text-sm font-medium">{lastClaim}</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Last Claim</div>
        </div>

        <Badge
          variant={status === "Active" ? "default" : "secondary"}
          className={
            status === "Active"
              ? "bg-primary/20 text-primary border-none hover:bg-primary/30"
              : "bg-muted text-muted-foreground border-none"
          }
        >
          {status}
        </Badge>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-border">
            <DropdownMenuItem className="cursor-pointer">Edit Salary</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">View Transactions</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
              <Trash2 size={14} className="mr-2" /> Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
