import { TiStar } from "react-icons/ti";

type q1Props = {
   content: string
   answerValue: number
}

export default function Question1({content, answerValue}: q1Props) {
   return (
      <div className="max-w-[584px]">
         <span className="text-2xl font-[600]">
            Título da pergunta deve ficar aqui
         </span>

         <p className="text-[14px] mt-[9px]">
            {/* Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário */}
            {content}
         </p>

         <div className="flex gap-4 mt-4" >
            <TiStar size={'64'} color={answerValue >= 1 ?'#FFAE00' : '#ACB1BA'}/>
            <TiStar size={'64'} color={answerValue >= 2 ?'#FFAE00' : '#ACB1BA'}/>
            <TiStar size={'64'} color={answerValue >= 3 ?'#FFAE00' : '#ACB1BA'}/>
            <TiStar size={'64'} color={answerValue >= 4 ?'#FFAE00' : '#ACB1BA'}/>
            <TiStar size={'64'} color={answerValue >= 5 ?'#FFAE00' : '#ACB1BA'}/>
         </div>
      </div>
   )
}