'use client'

import { useState, useEffect } from "react";
import axios from 'axios';
import Question1 from "../question-1"
import Question2 from "../question-2";
import Question3 from "../question-3";
import Question4 from "../question-4";
import Question5 from "../question-5";
import Question6 from "../question-6";
import Button from "../button";
import Footer from "../footer";

export default function Main() {
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      getQuestions()
   }, [])

   async function getQuestions() {
      try {
         const response = await axios.get("https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json");
         setQuestions(response.data.itens)
         console.log('sucesso', response.data.itens)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="flex flex-col items-center">
         <div className="w-full pt-[90px] pl-16 h-[316px] bg-color1 text-xs text-color3 font-[500]">
            Pesquisa de Satisfação
         </div>

         <div className="flex flex-col mt-[-188px] gap-[23.58px] px-8">
            <span className="text-[40px] text-white font-[600] leading-10">Pesquisa de Satisfação</span>
            <div className=" max-w-[648px] p-8 mb-8 rounded-2xl bg-white">
               {questions.map((item: any, i) => (
                  item.typeQuestion === 1 ?
                  <Question1 key={i} content={item.content} answerValue={item.answerValue} />
                  :
                  item.typeQuestion === 2 ?
                  <Question2 key={i} content={item.content} answerValue={item.answerValue} />
                  :
                  item.typeQuestion === 3 ?
                  <Question3 key={i} content={item.content} mandatory={item.mandatory} />
                  :
                  item.typeQuestion === 4 ?
                  <Question4 key={i} content={item.content} itens={item.itens} />
                  :
                  item.typeQuestion === 5 ?
                  <Question5 key={i} content={item.content} answerValue={item.answerValue} itens={item.itens} />
                  :
                  item.typeQuestion === 6 ?
                  <Question6 key={i} content={item.content} horizontal={item.horizontal} itens={item.itens} />
                  :
                  null
               ))}

               <Button name='enviar'/>
            </div>
         </div>

         <Footer />
      </div>
   )
}