import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";

export default function Header() {
   return (
      <div className="flex justify-between fixed w-full px-8 bg-color1 h-[72px]">
         <div className="flex items-center gap-4">
            <CgMenuLeftAlt size='24' color='white' />
            <Image
               width={126}
               height={20}
               src='/images/SUA LOGO.svg'
               alt='logo'
            />
         </div>

         <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-color2 text-white font-[600]">N</div>
            <span className="text-xs text-white font-[600] hidden sm:flex">Nome do Usuário Aqui</span>
            <FaChevronDown size='16' color='white' />
         </div>
      </div>
   )
}