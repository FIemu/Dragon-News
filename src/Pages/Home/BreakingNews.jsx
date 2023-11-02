import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex shadow-xl rounded-xl py-2 px-4 mt-4 bg-[#F3F3F3]">
            <button className="btn btn-secondary  font-bold">Breaking news</button>
            <Marquee pauseOnHover={true} className="text-black text-center">
            Match Highlights : Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;