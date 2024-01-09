'use client'

import { useState, useEffect } from "react";
import axios from 'axios';
import Question1 from "../question-1"

export default function Main() {
   const [questions, setQuestions] = useState(['ss']);

   useEffect(() => {
      getQuestions()
   }, [])

   // async function getQuestions() {
   const getQuestions = async () => {
      try {
         const response = await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json');
         const { itens } = response.data;
         setQuestions(itens)
         console.log(itens)
      } catch (error) {
         console.log('DEU RUIM')
      }
   }

   return (
      <div className="flex flex-col items-center">
         <div className="w-full pt-[90px] pl-16 h-[316px] bg-color1 text-xs text-color3 font-[500]">
            Pesquisa de Satisfação
         </div>

         <div className="flex flex-col mt-[-188px] gap-[23.58px] px-8 bg-red-500">
            <span className="text-[40px] text-white font-[600] leading-10">Pesquisa de Satisfação</span>
            <div className=" max-w-[648px] p-8 mb-8 rounded-2xl bg-white">
               {questions.map((item) => (
                  <Question1 key='' content="eee" answerValue={4} />
                  // <div key='1'>sssss</div>
               ))}
            </div>
         </div>
      </div>
   )
}