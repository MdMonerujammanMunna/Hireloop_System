"use client"
import { authClient } from "@/lib/auth-client";
import { LayoutSideContentLeft, Briefcase, Envelope, Gear, Circles4Diamond, SquareBarsVertical, PencilToSquare } from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function DashboardSideBar() {
    // Get User Data:-
    const UserSession = authClient.useSession()
    const UserData = UserSession?.data?.user
    // console.log(UserData)
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


    const DefaultImage = "https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
    return (
        <>
            <div className="border-default border-r hidden lg:block shrink-0 w-70 px-6">
                <div className="font-black text-4xl my-8">
                    <Link href="/" >HireLoop</Link>
                </div>
                <div className="flex items-center gap-3">
                    <Avatar size="lg">
                        <Avatar.Image alt="John Doe" src={UserData?.image || DefaultImage} />
                        <Avatar.Fallback>{UserData?.name?.[0] || "U"}</Avatar.Fallback>
                    </Avatar>
                    <div className="">
                        <h6 className="text-white mb-0.5 font-bold">{UserData?.name || "Unknown"}</h6>
                        <p className="text-xs text-[#E5E2E3] font-semibold tracking-[1px]">{UserData?.role || "Recruiter"}</p>
                    </div>
                </div>
                <div className="mt-5 px-1 py-1 rounded-2xl text-xs font-bold uppercase border-4 border-[#FFFFFF20] flex justify-center items-center bg-[#E2E2E210]">{UserData?.plan || "free"} ACCOUNT</div>
                <aside className="mt-15">{NavBarcontent}</aside>
            </div>
            <Drawer>
                <Button className={"lg:hidden ml-4 mt-4"} variant="secondary">
                    <LayoutSideContentLeft className="text-white" />
                    {/* Side Bar */}
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