import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="w-full  bg-gradient-to-b from-[#000000] to-[#444444] text-white py-10 px-16">
        <div data-aos="fade-down" className="w-full h-[1px] bg-slate-400"></div>
        <div className="flex flex-col justify-between items-center my-20 ">
            <div data-aos="fade-up">
                <Image src="/logo-white.png" alt="logo" width={100} height={50} />
            </div>
            <div>
                <nav>
                    <ul className='flex md:flex-row sm:flex-col justify-between items-center gap-4 text-{16px]'>
                        <li data-aos="fade-up" ><Link href="#Services">Services</Link></li>
                        <li data-aos="fade-up" ><Link href="#Process">Process</Link></li>
                        <li data-aos="fade-up" ><Link href="#Portfolio">Portfolio</Link></li>
                        <li data-aos="fade-up" ><Link href="#Testemonial">Testemonial</Link></li>
                        <li data-aos="fade-up" ><Link href="#Pricingl">Pricing</Link></li>           
                    </ul>
                </nav>             
            </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="50" className="flex md:flex-row flex-col sm:gap-8 w-full justify-between items-center text-sm sm:text-center">
                <p  className="md:order-1 sm:order-2">© 2024 WebDev Agency. All rights reserved.</p>
                <nav className="md:order-2 sm:order-1" >
                    <ul  className="flex md:flex-row flex-col md:gap-2 lg:gap-4 underline font-light">
                        <li> <Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li> <Link href="/terms-and-conditions">Terms and conditions</Link></li>   
                        <li> <Link href="/cookie-policy"> Cookie Policy </Link></li>
                    </ul>
                </nav>
        </div>
    </footer>
  )
}

export default Footer