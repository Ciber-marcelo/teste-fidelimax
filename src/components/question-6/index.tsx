type q6Props = {
   content: string
   horizontal: boolean
   itens: any
}

export default function Question6({ content, horizontal, itens }: q6Props) {
   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-[16px] mt-[9px] text-color1">
            {content}
         </span>

         <div className={`flex flex-wrap ${horizontal === false && 'flex-col'} gap-4 mt-2`} >
            {horizontal === true ?
               itens.map((item: any) =>(
                  <button key={item.value} className="border-2 border-color5 rounded-full py-2 px-4 text-color2 uppercase hover:bg-color3 transition-all">
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
