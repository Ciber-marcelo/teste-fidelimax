type modalProps = {
   info: string
   isOpen: boolean
   onClick: any
}

export default function Modal({ isOpen, onClick, info }: modalProps) {
   return (
      <>
         {isOpen &&
            <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 transition-all">
               <div className="flex justify-start items-center relative w-[500px] h-[100px] p-8 rounded-2xl bg-white">
                  <div>
                     {info}
                  </div>

                  <button className="text-[24px] bg-color6 rounded-full p-4 absolute top-4 right-4 hover:bg-color3" onClick={onClick}>
                     X
                  </button>
               </div>
            </div>
         }
      </>
   )
}