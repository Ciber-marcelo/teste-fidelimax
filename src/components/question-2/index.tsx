type q2Props = {
   content: string
   answerValue: number
}

export default function Question2({content, answerValue}: q2Props) {
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-2xl font-[600] text-color1">
            Título da pergunta deve ficar aqui
         </span>

         <p className="text-[14px] mt-[9px] text-color2">
            {content}
         </p>

         <div className="flex justify-between mt-4" >
            {numbers.map((item, i) =>(
               <div className="flex flex-col items-center gap-2" key={item}> 
                  <input 
                     className="mx-1 w-4 h-4 border-4"
                     type="radio" 
                     defaultChecked={answerValue >= i+1 ? true : false} 
                  /> 
                  <span className="text-[14px] text-color2">{item}</span>
               </div>
            ))}
         </div>
      </div>
   )
}