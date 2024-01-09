import Button from "../button";
import axios from 'axios';
import Modal from "../modal";
import { useState } from "react";

export default function Footer() {
   const [isOpen, setIsOpen] = useState(false);
   const [info, setInfo] = useState('');

   async function fakePost() {
      try {
         const response = await axios.post("https://jsonplaceholder.typicode.com/posts/",
            {
               userId: 11,
               title: "laboriosam dolor voluptates",
               body: "quo deleniti praesentium dicta non quodaut est molestias"
            }
         );
         console.log('sucesso', response)
         setIsOpen(true)
         setInfo('sucesso em enviar o fake post')
      } catch (error) {
         console.log(error)
         setIsOpen(true)
         setInfo('erro')
      }
   }

   async function errorPost() {
      try {
         const response = await axios.get("https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json");
         console.log('sucesso', response)
         setIsOpen(true)
         setInfo(response.data.error)
      } catch (error) {
         console.log(error)
         setIsOpen(true)
         setInfo('erro')
      }
   }

   async function sucessPost() {
      try {
         const response = await axios.get("https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json");
         console.log('sucesso', response)
         setIsOpen(true)
         setInfo('sucesso')
      } catch (error) {
         console.log(error)
         setIsOpen(true)
         setInfo('erro')
      }
   }

   function closeModal() {
      setIsOpen(false)
      setInfo('')
   }

   return (
      <>
         <div className="flex flex-wrap justify-center items-center gap-8 w-full px-8 py-10 bg-color1">
            <Button name='Enviar Fake Post' onClick={fakePost} />
            <Button name='Enviar Erro' onClick={errorPost}/>
            <Button name='Enviar Sucesso' onClick={sucessPost} />
         </div>

         <Modal
            info={info}
            isOpen={isOpen}
            onClick={closeModal}
         />
      </>
   )
}