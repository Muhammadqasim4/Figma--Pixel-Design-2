import Image from "next/image"
import logo from '@/app/assets/logo.png'
export default function Navbar() {
    return(
        <>
        <div className="w-[1600px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
            {/* logo design */}
            <div className="w-[191px] h-[34px] ">
                <Image src={logo} alt="logo-image"/>
            </div>
            {/* frame design */}
            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px">
                    <ul className="text-white flex justify-between">
                        <li>Products</li>
                        <li>Solutios</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="w-[126px] h-[60px] ">
                    <button className=" py-4 px-10 bg-[#FFE492]  text-[#043873] rounded-lg">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}