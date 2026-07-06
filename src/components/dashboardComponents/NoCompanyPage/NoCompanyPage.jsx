import { BucketPaint } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Link from "next/link";


const NoCompanyPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Card className="mx-auto max-w-2xl border border-white/10 bg-[#1E1E20] shadow-none">
                    <Card.Content className="flex flex-col items-center px-8 py-14 text-center">
                        {/* Icon */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20">
                            <BucketPaint className="h-10 w-10 text-indigo-400" />
                        </div>

                        {/* Title */}
                        <h2 className="mt-6 text-3xl font-semibold text-white">
                            Create Your Company First
                        </h2>

                        {/* Description */}
                        <p className="mt-3 max-w-lg text-zinc-400">
                            You are almost there! Create your company profile to unlock job
                            posting, manage applications, and start hiring top talent.
                        </p>

                        {/* Button */}
                        <Link href={"/Dashboard/Recruiter/company"}>
                            <Button
                                color="primary"
                                endContent={<BucketPaint size={18} />}
                                className="mt-8 px-8"
                            >
                                Create Company
                            </Button>
                        </Link>
                    </Card.Content>
                </Card>
            </div>
        </>
    );
};

export default NoCompanyPage;