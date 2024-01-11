type buttonProps = {
   name: string
   onClick?: any
}

export default function Button({ name, onClick }: buttonProps) {
   return (
      <div className="max-w-[584px]">
         <button
            onClick={onClick}
            className="
            bg-color6 
            border-color5 
            rounded-full 
            h-[56px]
            px-16
            max-w-[187px]
            hover:bg-color3
            transition-all
            text-[18px]
            font-[700]
            text-color1 
            capitalize
            "
         >
            {name}
         </button>
      </div>
   )
}
