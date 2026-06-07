"use client"
import { LayoutSideContentLeft, Briefcase, Envelope, Gear, Circles4Diamond, SquareBarsVertical, Person } from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import { useState } from "react";

export function DashboardSideBar() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const navItems = [
        { icon: Circles4Diamond, label: "Dashboard" },
        { icon: SquareBarsVertical, label: "My Company" },
        { icon: Briefcase, label: "Manage Jobs" },
        { icon: Envelope, label: "Applications" },
        { icon: Gear, label: "Settings" },
    ];

    const NavBarcontent = <>
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`flex items-center gap-4 rounded-l-sm rounded-none px-5 py-4 font-semibold transition-all border-r-4 border-[#131314] ${activeTab === item.label
                        ? "bg-[#2A2A2B] text-white border-r-white font-semibold"
                        : "text-foreground border-l-transparent hover:bg-default"
                        }`}
                    type="button"
                >
                    <item.icon className="size-5" />
                    {item.label}
                </button>
            ))}
        </nav>
    </>
    return (
        <>
            <div className="border-default border-r hidden lg:block shrink-0 w-70 px-6">
                <h1 className="font-black text-4xl mb-8">HireLoop</h1>
                <div className="flex items-center gap-3">
                    <Avatar size="lg">
                        <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <div className="">
                        <h6 className="text-white mb-0.5 font-bold">Munna Islam</h6>
                        <p className="text-xs text-[#E5E2E3] font-semibold tracking-[1px]">Recruiter</p>
                    </div>
                </div>
                <aside className="mt-15">{NavBarcontent}</aside>
            </div>
            <Drawer>
                <Button className={"lg:hidden"} variant="secondary">
                    <LayoutSideContentLeft />
                    Side Bar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {NavBarcontent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}