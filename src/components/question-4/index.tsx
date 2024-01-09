type q4Props = {
   content: string
   itens: any
}

export default function Question4({ content, itens }: q4Props) {
   return (
      <div className="max-w-[584px] mb-10">
         <select defaultValue="placeholder" className=" p-4 w-full border-2 border-color3 rounded-lg text-color4">
            <option className="text-blue-500" value="placeholder" hidden>{content}</option>
            {itens.map((item: any) => (
               <option key={item.value} value="">{item.description}</option>
            ))}
         </select>
      </div>
   )
}