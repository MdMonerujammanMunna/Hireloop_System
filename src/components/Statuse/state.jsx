import { BriefcaseFill, ChartColumn, PersonMagnifier, SparklesFill } from '@gravity-ui/icons';

export default function JobPortalHero() {
    return (
        <div className="min-h-screen py-20 bg-black relative overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat h-200"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                    opacity: 0.85,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black/90" />

            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Main Heading */}
                <h1 className="text-white text-3xl md:text-[40px] font-bold leading-tight mb-8">
                    Assisting over <span className="text-blue-400">15,000</span> job seekers
                    <br />
                    find their dream positions.
                </h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 justify-items-center">
                    {/* Stat 1 */}
                    <div className="bg-linear-to-b from-[#010102] to-[#31313190] rounded-2xl w-[250px] border border-white hover:scale-105 transition-transform duration-300">
                        <div className="p-8">
                            <BriefcaseFill className="h-8 w-8 mb-8" />
                            <div className="flex flex-col items-start">
                                <h3 className="text-[56px] font-semibold text-white mb-4">
                                    50K
                                </h3>
                                <p className="text-[18px]">Active Jobs</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-linear-to-b from-[#010102] to-[#31313190] rounded-2xl w-[250px] border border-white hover:scale-105 transition-transform duration-300">
                        <div className="p-8">
                            <ChartColumn className="h-8 w-8 mb-8" />
                            <div className="flex flex-col items-start">
                                <h3 className="text-[56px] font-semibold text-white mb-4">
                                    12K
                                </h3>
                                <p className="text-[18px]">Companies</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-linear-to-b from-[#010102] to-[#31313190] rounded-2xl w-[250px] border border-white hover:scale-105 transition-transform duration-300">
                        <div className="p-8">
                            <PersonMagnifier className="h-8 w-8 mb-8" />
                            <div className="flex flex-col items-start">
                                <h3 className="text-[56px] font-semibold text-white mb-4">
                                    2M+
                                </h3>
                                <p className="text-[18px]">Job Seekers</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-linear-to-b from-[#010102] to-[#31313190] rounded-2xl w-[250px] border border-white hover:scale-105 transition-transform duration-300">
                        <div className="p-8">
                            <SparklesFill className="h-8 w-8 mb-8" />
                            <div className="flex flex-col items-start">
                                <h3 className="text-[56px] font-semibold text-white mb-4">
                                    97%
                                </h3>
                                <p className="text-[18px]">Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional subtle stars overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(white_0.5px,transparent_1px)] bg-[length:50px_50px] opacity-30 pointer-events-none" />
        </div>
    );
}