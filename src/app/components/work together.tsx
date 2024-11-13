import Image from "next/image"
import work from '@/app/assets/worktogether.png'
export default function Work() {
    return(
        <div className=" w-[1600px] h-[700px] bg-white py-[140px] px-[220px] top-[92px] left-[1px] flex flex-row-reverse">
            <div className="w-[656px] h-[361px] ml-60 ">
                <div className="w-[656px] h-[238px] ">
                <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-2%]">Work together</h2>
                <p className="mt-2 text-[18px] font-normal leading-7 ">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <div className="w-[210px] h-[636px] mt-6 relative bottom-20">
                <button className="w-[150px] p-[20px] rounded-lg bg-[#4F9CF9] text-[18px] font-medium text-white">Try it Now</button>
                </div>
            </div>
                <div className="w-[710px] h-[661px]">
                    <Image src={work} alt="image"/>
                </div>
        </div>
    )
}