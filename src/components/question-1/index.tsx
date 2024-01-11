import { useState } from "react";
import { TiStar } from "react-icons/ti";

type q1Props = {
   content: string
   answerValue: number
}

export default function Question1({content, answerValue}: q1Props) {
   const [stars, setStars] = useState(answerValue);

   function starNumber(n: number) {
      setStars(n)
   }

   return (
      <div className="max-w-[584px] mb-10">
         <span className="text-2xl font-[600] text-color1">
            Título da pergunta deve ficar aqui
         </span>

         <p className="text-[14px] mt-[9px] text-color2">
            {content}
         </p>

         <div className="flex flex-wrap gap-4 mt-4" >
            <a onClick={() => starNumber(1)}>
               <TiStar size={'64'} color={stars >= 1 ?'#FFAE00' : '#ACB1BA'}/>
            </a>

            <a onClick={() => starNumber(2)}>
               <TiStar size={'64'} color={stars >= 2 ?'#FFAE00' : '#ACB1BA'}/>
            </a>

            <a onClick={() => starNumber(3)}>
               <TiStar size={'64'} color={stars >= 3 ?'#FFAE00' : '#ACB1BA'}/>
            </a>

            <a onClick={() => starNumber(4)}>
               <TiStar size={'64'} color={stars >= 4 ?'#FFAE00' : '#ACB1BA'}/>
            </a>

            <a onClick={() => starNumber(5)}>
               <TiStar size={'64'} color={stars >= 5 ?'#FFAE00' : '#ACB1BA'}/>
            </a>
         </div>
      </div>
   )
}