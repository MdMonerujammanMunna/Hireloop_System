import { Bookmark, OfficeBadge } from "@gravity-ui/icons";


export default function JobCard(HeaderData) {
    const { title, company, type, profileImage } = HeaderData.HeaderData;
    return (
        <section className="w-full">
            <div className="w-full rounded-2xl border border-[#2d2d2d] bg-[#1E1E1E] px-5 py-6 sm:px-7 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 h-full">
                    {/* Left */}
                    <div className="flex items-start gap-5">
                        {/* Logo */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-[#333] bg-[#111] flex items-center justify-center shrink-0">
                            <img
                                src={profileImage}
                                alt="Company Logo"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 mt-3">
                                <span className="text-gray-300 text-base sm:text-lg">
                                    {company}
                                </span>

                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>

                                <div className="flex items-center gap-1 text-green-500">
                                    <OfficeBadge size={18} fill="currentColor" />
                                    <span className="text-sm sm:text-base font-medium">
                                        {type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-end gap-4 w-full lg:w-auto">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#2b2b2b] transition">
                            <Bookmark size={20} />
                        </button>

                        <button className="h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition whitespace-nowrap">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}