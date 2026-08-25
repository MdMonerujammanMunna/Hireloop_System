import { FaMoneyBillWave } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";

const SortCard = ({ SortData }) => {
    const { maxSalary, minSalary, category, type, location, isRemote } = SortData;
    return (
        <>
            <div className="grid justify-between items-center md:grid-cols-2 gap-5">
                <div className="rounded-md bg-[#1E1E1E] px-5 py-2 ">
                    <FaMoneyBillWave className="text-xl mb-1" />
                    <span className="text-[14px] font-semibold mb-2">SALARY RANGE</span>
                    <p className="font-semibold text-[16px]">${minSalary.toLocaleString()} - ${maxSalary.toLocaleString()}</p>
                </div>
                <div className="rounded-md bg-[#1E1E1E] px-5 py-2 ">
                    <FaLocationArrow className="text-xl mb-1" />
                    <span className="text-[14px] font-semibold mb-2">LOCATION</span>
                    <p className="font-semibold text-[16px]">{isRemote == true ? "Remote" : location}</p>
                </div>
                <div className="rounded-md bg-[#1E1E1E] px-5 py-2 ">
                    <GiSandsOfTime className="text-xl mb-1" />
                    <span className="text-[14px] font-semibold mb-2">JOB TYPE</span>
                    <p className="font-semibold text-[16px]">{type}</p>
                </div>
                <div className="rounded-md bg-[#1E1E1E] px-5 py-2 ">
                    <FaUserGroup className="text-xl mb-1" />
                    <span className="text-[14px] font-semibold mb-2">CATEGORY</span>
                    <p className="font-semibold text-[16px]">{category}</p>
                </div>
            </div>
        </>
    );
};

export default SortCard;