import { Link } from "@remix-run/react";
import { BookIllustration } from "./illustration/book-illustration";
import { CATEGORIES_DATA } from "./utils";

export default function BookStore() {
    return (
        <div className="w-full h-screen flex items-center font-poppins bg-[#FBF8F6]">
            <Sidebar />
            <div className="flex-1 w-full h-full py-8 px-4">
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-2xl text-[#917F74] font-bold">Unkai</span>{" "}
                        <span className="text-base font-light text-[#917F74]">book</span>
                    </p>
                    <div className="relative max-w-[558px] w-full">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_5_135)">
                                <path
                                    d="M5.13854 11.2915L0.442898 15.9871C0.0111904 16.4189 0.0111904 17.1254 0.442898 17.5571C0.874607 17.9888 1.58115 17.9888 2.01285 17.5571L6.7085 12.8615C6.65298 12.0271 6.12327 11.5079 5.13854 11.2915Z"
                                    fill="#E5563A"
                                />
                                <path
                                    d="M5.13853 11.2915L5.88083 10.5492C4.04276 7.96407 4.28124 4.3559 6.59902 2.03811C9.18453 -0.547599 13.3765 -0.547401 15.9621 2.03791C18.5476 4.62322 18.5476 8.81523 15.9621 11.4007C13.6443 13.7185 10.0361 13.9568 7.45098 12.1189L6.70868 12.8612L5.13853 11.2915Z"
                                    fill="#3A5066"
                                />
                                <path
                                    d="M11.2795 11.5817C8.5947 11.5817 6.41826 9.40524 6.41826 6.72046C6.41826 4.03569 8.5947 1.85925 11.2795 1.85925C13.9642 1.85925 16.1407 4.03569 16.1407 6.72046C16.1407 9.40524 13.9642 11.5817 11.2795 11.5817Z"
                                    fill="#CEE2F2"
                                />
                                <path
                                    d="M13.5603 9.37058C13.6615 9.37058 13.7626 9.33205 13.8397 9.2548C15.2356 7.85891 15.2356 5.58735 13.8397 4.19166C13.6856 4.03735 13.435 4.03735 13.2809 4.19166C13.1266 4.34597 13.1266 4.5961 13.2809 4.75041C14.3686 5.83828 14.3686 7.60818 13.2809 8.69605C13.1266 8.85035 13.1266 9.10049 13.2809 9.25499C13.358 9.33185 13.4593 9.37058 13.5603 9.37058Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.36595 8.34001C8.41633 8.34001 8.4677 8.33033 8.51729 8.30978C8.71882 8.22621 8.81445 7.99504 8.73087 7.79351C8.4675 7.15849 8.44715 6.45097 8.67417 5.80133C8.74609 5.59526 8.63742 5.36982 8.43134 5.2979C8.22586 5.22578 7.99983 5.33465 7.92811 5.54072C7.63688 6.37411 7.66276 7.28178 8.00062 8.0964C8.06385 8.24833 8.21104 8.34001 8.36595 8.34001Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_135">
                                    <rect
                                        width="18"
                                        height="18"
                                        fill="white"
                                        transform="matrix(-1 0 0 1 18 0)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <input
                            type="search"
                            placeholder="find a book"
                            className="appearance-none w-full h-12 pl-11 pr-4 rounded-full bg-[#E6DBCD] text-[#917F74] outline-none focus-within:ring-1 focus-within:ring-[#917F74] placeholder:text-[#917F74] placeholder:font-bold"
                        />
                    </div>
                    <button className="max-w-[130px] w-full h-12 text-xs font-bold px-4 text-center text-white lowercase rounded-full bg-[linear-gradient(85deg,_#7D83A3_6.04%,_#819E88_17.57%,_#ACBE78_27.71%,_#D6CA76_38.32%,_#F7BC71_49.39%,_#F2A86B_60%,_#EF7563_77.06%,_#EE6861_90.43%)]">Search</button>
                </div>

                {/* content */}
                <div className="flex items-center gap-x-4 mt-11">
                    {
                       CATEGORIES_DATA.map(category => (
                       <div key={category.id} className="sapce-y-4">
                               <BookIllustration {...category.bookColors}/> 
                                <p className="text-[8px] text-center text-[#917F74] font-meduium">{category.name}</p>
                            </div>
                       )) 
                    }
                    <BookIllustration />
                </div>
            </div>
            <div className="w-[320px] h-full bg-[#EEE5DA]"></div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="w-14 h-screen  bg-[#E6DBCD]">
            <div className="h-full flex flex-col justify-between py-8 px-2">
                <img
                    src="/avatar.png"
                    alt="Portait"
                    loading="lazy"
                    width={32}
                    height={32}
                    className="object-cover mx-auto"
                />
                <div className="flex flex-col gap-y-3">
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center w-full bg-[#FBF8F6] p-1 aspect-square rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                            />
                        </svg>
                    </Link>
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center w-full bg-[#FBF8F6] p-1 aspect-square rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>
                    </Link>
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center w-full bg-[#FBF8F6] p-1 aspect-square rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                            />
                        </svg>
                    </Link>
                </div>
                <button className="writing-vertical-lr flex items-center justify-between py-2.5 text-white h-[144px] rounded-full text-sm bg-[linear-gradient(0deg,_#679287_0%,_#9BBC74_100%)]">
                    <span className="inline-block p-1 mb-1 rounded-full bg-[#679287]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                    </span>
                    <span>Subscribe</span>
                </button>
            </div>
        </div>
    );
}
