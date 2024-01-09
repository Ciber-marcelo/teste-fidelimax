type q5Props = {
   content: string
   answerValue: number
   itens: any
}

export default function Question5({ content, answerValue, itens }: q5Props) {
   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-[16px] mt-[9px] text-color1">
            {content}
         </span>

         <div className="flex gap-4 mt-4" >
            {itens.map((item: any) =>(
               <div className="flex items-center gap-2" key={item.value}> 
                  <input 
                     className="m-1 w-4 h-4 border-4"
                     type="radio" 
                     defaultChecked={answerValue === item.value ? true : false} 
                  /> 
                  <span className="text-[14px] text-color2">{item.description}</span>
               </div>
            ))}
         </div>
      </div>
   )
}