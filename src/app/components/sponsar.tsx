import Image from "next/image"
export default function Sponsar(){
    return(
        <div className=" w-[1600px] h-[504px]  top-[4080px] py-[140px] px-[220px]">
            <h2 className="text-center font-bold text-[72px]">Our sponsors</h2>
            <div className="w-[1202px] h-[71px] flex justify-between items-center mt-24">
                <div><img  src="https://tse3.mm.bing.net/th?id=OIP.cCkt-lMjHsMIqfVx8xeg9gHaKe&pid=Api&P=0&h=220" alt="logo" width={90} height={80} /></div>
                <div><img src="https://tse4.mm.bing.net/th?id=OIP.YYcTdYCZDM5Csa_zUiOD3AHaDt&pid=Api&P=0&h=220" alt="logo"  width={200} height={190}/></div>
                <div><img src="https://tse2.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogAAAA&pid=Api&P=0&h=220" alt="logo"  width={200} height={190}/></div>
                <div><img src="https://tse4.mm.bing.net/th?id=OIP.uHrDUCEbFVxRTdSSRjC5_gHaCu&pid=Api&P=0&h=220" alt="logo"  width={200} height={190}/></div>
            </div>
        </div>
    )
}