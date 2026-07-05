"use client";

import {
    Modal,
    Button,
    Surface,
    TextField,
    Input,
    Label,
    TextArea,
    Select,
    ListBox,
} from "@heroui/react";

import {
    CloudArrowUpIn,
} from "@gravity-ui/icons";



import Image from "next/image";
import { useState } from "react";
import { ImageUpload } from "@/lib/ImageUplode/UplodeImage";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { RegisterNewCompany } from "@/lib/actions/RecruterAction/RegisterNewCompany";



const industries = [
    { value: "Technology", label: "Technology" },
    { value: "Software Development", label: "Software Development" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Data Science", label: "Data Science" },
    { value: "IT Services", label: "IT Services" },
];

const employees = [
    { value: "1-10", label: "1-10 Employees" },
    { value: "11-50", label: "11-50 Employees" },
    { value: "51-200", label: "51-200 Employees" },
    { value: "201-500", label: "201-500 Employees" },
    { value: "500-plus", label: "500+ Employees" },
];

export default function CompanyRegisterModal() {
    const [thumbnail, setThumbnail] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setThumbnail(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    // User Session for the Company
    const UserSession = authClient.useSession();
    const UserID = UserSession?.data?.user?.id
    const UserEmail = UserSession?.data?.user?.email
    // console.log(UserID, UserEmail)

    const FromSubmitForCompany = async (e) => {
        e.preventDefault()
        const Companydata = new FormData(e.target);
        const data = Object.fromEntries(Companydata.entries());
        // console.log(data)

        // Image Uploading
        const image = data.thumbnailImage
        const UplodeImage = await ImageUpload(image)

        //    Main Data Sent DATABASE
        const MainDataSent = {
            UserID: UserID,
            UserEmail: UserEmail,
            CompanyName: data.CompanyName,
            Description: data.Description,
            Employees: data.Employees,
            Industry: data.Industry,
            Website: data.website,
            Location: data.location,
            ThumbnailImage: UplodeImage.url
        }

        // Api call for the company
        const Newcompanies = await RegisterNewCompany(MainDataSent)

        toast.success("Company Registered Successfully")
        // console.log(MainDataSent)

        // This is Refreshing the form
        setThumbnail(null);
        setPreviewUrl("");
        e.target.reset();
    }
    return (
        <Modal>
            {/* Open Button */}
            <Button
                className="bg-white text-[#2F3131] font-medium px-16 py-6 rounded-lg"
            >
                Register your company
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#1B1B1C] overflow-auto">
                        <Modal.CloseTrigger />
                        {/* Header */}
                        <Modal.Header className="pb-5">
                            <div className="">
                                <h1 className="font-semibold text-2xl mb-1"> Register New Company</h1>
                                <p className="text-sm  text-[#FFFFFF60] ">
                                    Enter your business details to start hiring on HireLoop.
                                </p>
                            </div>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="p-8 bg-[#131314] rounded-2xl">

                            <Surface
                                variant="default"
                                className="bg-transparent shadow-none"
                            >
                                <form className="" onSubmit={FromSubmitForCompany}>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        {/* Company Name */}
                                        <TextField
                                            name="CompanyName"
                                            className="w-full"
                                            variant="secondary"
                                        >
                                            <Label className="font-normal">Company Name</Label>
                                            <Input required className={"rounded-lg px-6 bg-[#1F1F1F] py-3 placeholder:text-[#6B7280] mt-2"} placeholder="e.g. Acme Corp" />
                                        </TextField>

                                        {/* Industry */}
                                        <Select className="w-full" name="Industry" >
                                            <Label className="mb-2 font-normal">Industry / Category</Label>

                                            <Select.Trigger className={"px-6 py-3 bg-[#1F1F1F]"} >
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>

                                            <Select.Popover >
                                                <ListBox>
                                                    {industries.map((item, index) => (
                                                        <ListBox.Item
                                                            key={index}
                                                            id={item.value}
                                                            textValue={item.label}
                                                        >
                                                            {item.label}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Website */}
                                        <TextField
                                            name="website"
                                            className="w-full"
                                            variant="secondary"
                                        >
                                            <Label className="font-normal">Website URL</Label>
                                            <Input required className={"rounded-lg px-6 bg-[#1F1F1F] py-3 placeholder:text-[#6B7280] mt-2"} placeholder="https://www.company.com" />
                                        </TextField>

                                        {/* Location */}
                                        <TextField
                                            name="location"
                                            className="w-full"
                                            variant="secondary"
                                        >
                                            <Label className="font-normal">Location</Label>

                                            <Input required
                                                className={"rounded-lg px-6 bg-[#1F1F1F] py-3 placeholder:text-[#6B7280] mt-2"}
                                                placeholder="City, Country"
                                            />
                                        </TextField>

                                        {/* Employees */}
                                        <Select className="w-full" name="Employees">
                                            <Label className="font-normal mb-2">Employee Count Range</Label>

                                            <Select.Trigger className={"px-6 py-3 bg-[#1F1F1F]"}>
                                                <Select.Value placeholder="Select Employees" />
                                                <Select.Indicator />
                                            </Select.Trigger>

                                            <Select.Popover>
                                                <ListBox>
                                                    {employees.map((item, index) => (
                                                        <ListBox.Item
                                                            key={index}
                                                            id={item.value}
                                                            textValue={item.label}
                                                        >
                                                            {item.label}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Logo Upload */}
                                        <div>
                                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                                Thumbnail Image
                                            </label>
                                            <div className="flex items-center gap-6">
                                                <div className="relative h-12 w-12 bg-[#2D2D2D]  border-2 border-dashed border-zinc-700 rounded-lg mt-3 transition-all duration-150 flex flex-col items-center justify-center cursor-pointer group">
                                                    <input required
                                                        type="file"
                                                        name="thumbnailImage"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                    />
                                                    {previewUrl ? (
                                                        <div className="pointer-events-none">
                                                            <Image width={100} height={100} src={previewUrl} alt="Preview" className="max-h-24 mx-auto rounded object-cover" />
                                                        </div>
                                                    ) : (
                                                        <div className="text-center space-y-1 pointer-events-none">
                                                            <CloudArrowUpIn className="mr-2 h-5 w-5 text-zinc-400" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="">
                                                    {
                                                        previewUrl ?
                                                            <p className=" font-medium wrap-break-word max-w-57">{thumbnail?.name}</p>
                                                            :
                                                            <>
                                                                <h1 className="text-sm font-medium">Upload image</h1>
                                                                <p className="text-xs text-white/60 mt-1">PNG, JPG up to 5MB</p>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="w-full mt-8" >
                                        <Label className="mb-2 block font-normal">
                                            Brief Description
                                        </Label>

                                        <TextArea
                                            className={"w-full bg-[#1F1F1F] py-3 px-6"}
                                            name="Description"
                                            placeholder="Tell us about your company's mission and culture..."
                                        />
                                    </div>

                                    <Modal.Footer className="mt-10 p-8 rounded-2xl flex items-center gap-6 bg-[#201F20]">

                                        <Button
                                            variant="outline"
                                            slot="close"
                                            className=" rounded-lg bg-none border-2 cursor-pointer font-medium"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="bg-white text-black rounded-lg cursor-pointer"
                                        >
                                            Register Company
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>

                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}