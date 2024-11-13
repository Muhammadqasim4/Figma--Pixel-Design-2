import Image from "next/image"
import logo from "@/app/assets/logo.png"
export default function Footer() {
    return(
        <div className=" w-[1600px] h-[461px] top-[5195px] py-[140px] px-[220px] bg-[#043873]">
              <div className="text-white flex justify-evenly">
                <ul>
                    <Image src={logo} alt="logo"/>
                    <p className="font-bold text-[20px]">Get to know you</p>
                    <a>Careers</a>
                    <a className="block">Blog</a>
                    <a>About</a>
                    <a className="block">Investor Relations</a>
                    <a className="block"> Devices</a>
                    <a>Overview</a>
                </ul>
                <ul>
                    <p className="font-bold text-[20px]">Pricing</p>
                    <a>Careers</a>
                    <a className="block">Blog</a>
                    <a>About</a>
                    <a className="block">Investor Relations</a>
                    <a className="block">Devices</a>
                    <a>Overview</a>
                </ul>
                <ul>
                    <p className="font-bold text-[20px]">Products</p>
                    <a>Careers</a>
                    <a className="block">Blog</a>
                    <a>About </a>
                    <a className="block">Investor Relations</a>
                    <a className="block"> Devices</a>
                    <a>Overview</a>
                </ul>
                <ul>
                    <p className="font-bold text-[20px]">Company</p>
                    <a>Careers</a>
                    <a className="block">Blog</a>
                    <a>About </a>
                    <a className="block">Investor Relations</a>
                    <a className="block">Devices</a>
                    <a>Overview</a>
                </ul>
            </div>
            <br />
            <br />
            <br />
            <div className="text-center">
            <span className="text-white font-normal text-[16px] ">©2021 Whitepace LLC.</span>
            </div>
        </div>
    )
}