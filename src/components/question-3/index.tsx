type q3Props = {
   content: string
   mandatory: boolean
}

export default function Question3({content, mandatory}: q3Props) {
   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-[16px] mt-[9px] text-color1">
            {content}
            {mandatory === false && <span className="text-color4 text-[14px]"> (opcional)</span>}
         </span>

         <textarea 
            className="w-full h-[104px] rounded-lg p-4 mt-2 border-2 border-color3 text-[16px] resize-none placeholder:text-color4" 
            placeholder="Digite aqui..." 
         />
      </div>
   )
}