import { useState } from "react";

type q6Props = {
   content: string
   horizontal: boolean
   itens: any
}

export default function Question6({ content, horizontal, itens }: q6Props) {
   const [i1, setI1] = useState(false);
   const [i2, setI2] = useState(false);
   const [i3, setI3] = useState(false);
   const [i4, setI4] = useState(false);

   function setItem(item: number) {
      if (item === 1) {
         setI1(i1 === true ? false : true)
      } else if (item === 2) {
         setI2(i2 === true ? false : true)
      } else if (item === 3) {
         setI3(i3 === true ? false : true)
      } else if (item === 4) {
         setI4(i4 === true ? false : true)
      }
   }

   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-[16px] mt-[9px] text-color1">
            {content}
         </span>

         <div className={`flex flex-wrap ${horizontal === false && 'flex-col'} gap-4 mt-2`} >
            {horizontal === true ?
               itens.map((item: any) =>(
                  <button 
                     key={item.value} 
                     className={`
                        ${
                           i1 && item.value + 1 === 1 && 'bg-color3' || 
                           i2 && item.value + 1 === 2 && 'bg-color3' || 
                           i3 && item.value + 1 === 3 && 'bg-color3' || 
                           i4 && item.value + 1 === 4 && 'bg-color3'
                        } 
                        border-2 border-color5 rounded-full py-2 px-4 text-color2 uppercase transition-all
                     `}
                     onClick={() => setItem(item.value + 1)}
                  >
                     {item.description}
                  </button>
               ))
               :
               itens.map((item: any) =>(
                  <div key={item.value} className="flex items-center gap-2">
                     <input type="checkbox" className="m-1 w-4 h-4"/>
                     <span className="uppercase text-color2">{item.description}</span>
                  </div>
               ))
            }
         </div>
      </div>
   )
}
