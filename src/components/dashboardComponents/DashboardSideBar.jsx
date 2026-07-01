"use client"
import { LayoutSideContentLeft, Briefcase, Envelope, Gear, Circles4Diamond, SquareBarsVertical, PencilToSquare } from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function DashboardSideBar() {
    // const [activeTab, setActiveTab] = useState("Dashboard");
    const pathName = usePathname();
    const activeTab = pathName;

    const navItems = [
        { icon: Circles4Diamond, href: "/Dashboard/Recruiter", label: "Dashboard" },
        { icon: SquareBarsVertical, href: "/Dashboard/Recruiter/company", label: "My Company" },
        { icon: Briefcase, href: "/Dashboard/Recruiter/Jobs", label: "Manage Jobs" },
        { icon: PencilToSquare, href: "/Dashboard/Recruiter/Jobs/New", label: "Create Jobs" },
        { icon: Envelope, href: "", label: "Applications" },
        { icon: Gear, href: "", label: "Settings" },
    ];

    const NavBarcontent = <>
        <nav className="flex flex-col gap-1 flex-1 ">
            {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                    <button
                        className={`flex items-center gap-4 rounded-l-sm rounded-none px-5 w-full py-4 font-semibold transition-all border-l-4 border-[#131314] ${activeTab === item.href
                            ? "bg-[#2A2A2B] text-white border-l-white font-semibold"
                            : "text-foreground border-l-transparent hover:bg-default"
                            }`}
                        type="button"
                    >
                        <item.icon className="size-5" />
                        {item.label}
                    </button>
                </Link>
            ))}
        </nav>
    </>
    return (
        <>
            <div className="border-default border-r hidden lg:block shrink-0 w-70 px-6">
                <div className="font-black text-4xl my-8">
                    <Link href="/" >HireLoop</Link>
                </div>
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