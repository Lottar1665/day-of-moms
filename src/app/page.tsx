import Image from 'next/image'
import React from 'react'
import Carlos from '@/app/assets/image/78254203_Rio-de-Janeiro-RJ05-09-1984Carlos-Drummond-de-Andrade-EscritorFoto-de-Alberto.jpg'
import Quintana from '@/app/assets/image/quintana.jpg'
import Vinicius from '@/app/assets/image/Vinicius.jpg'

function page() {
  return (
    <>
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='text-center mt-10 text-lg font-bold mb-5 text-black'>💕FELIZ DIA DAS MÃES💕</div>
      <h1 className='font-bold text-sm mb-10'>Um pequeno gesto meu para todas as mães do Brasil e do mundo.</h1>
      <div className='flex flex-col justify-center items-center'>
        <div>
      <Image alt='' src={Carlos}/>
      </div>
      <div className='text-center p-5'>
      <h1 className='font-bold mb-5'>Para Sempre, Carlos Drummond de Andrade</h1>
        <h2 className='font-medium text-sm'>
          Por que Deus permite
          Que as mães vão-se embora?

          Mãe não tem limite
          É tempo sem hora
          Luz que não apaga
          Quando sopra o vento
          E chuva desaba

          Veludo escondido
          Na pele enrugada
          Água pura, ar puro
          Puro pensamento

          Morrer acontece
          Com o que é breve e passa
          Sem deixar vestígio
          Mãe, na sua graça
          É eternidade

          Por que Deus se lembra
          De tirá-la um dia?

          Fosse eu Rei do Mundo
          Baixava uma lei
          Mãe não morre nunca
          Mãe ficará sempre
          Junto de seu filho
          E ele, velho embora
          Será pequenino
          Feito grão de milho
        </h2>
        <div className='flex justify-center items-center'>
      <Image alt='' src={Quintana} className='mt-5'/>
      </div>
      <h1 className='font-bold mb-5 mt-5'>Mãe, Mario Quintana</h1>
      <h2 className='font-medium text-sm'>
      Mãe

      Mãe... São três letras apenas
      As desse nome bendito;
      Também o céu tem três letras
      E nelas cabe o infinito.

      Para louvar nossa mãe,
      Todo o bem que se disser
      Nunca há de ser tão grande
      Como o bem que ela nos quer.

      Palavra tão pequenina,
      Bem sabem os lábios meus
      Que és do tamanho do céu
      E apenas menor que Deus!
      </h2>
      <div className='flex justify-center items-center'>
      <Image alt='' src={Vinicius} className='mt-5'/>
      </div>
      <h1 className='font-bold mb-5 mt-5'>Minha mãe, Vinicius de Moraes</h1>
      <h2 className='font-medium text-sm'>
      Minha Mãe

        Minha mãe, minha mãe, eu tenho medo
        Tenho medo da vida, minha mãe.
        Canta a doce cantiga que cantavas
        Quando eu corria doido ao teu regaço
        Com medo dos fantasmas do telhado.
        Nina o meu sono cheio de inquietude
        Batendo de levinho no meu braço
        Que estou com muito medo, minha mãe.
        Repousa a luz amiga dos teus olhos
        Nos meus olhos sem luz e sem repouso
        Dize à dor que me espera eternamente
        Para ir embora. Expulsa a angústia imensa
        Do meu ser que não quer e que não pode
        Dá-me um beijo na fronte dolorida
        Que ela arde de febre, minha mãe.

        Aninha-me em teu colo como outrora
        Dize-me bem baixo assim: - Filho, não temas
        Dorme em sossego, que tua mãe não dorme.
        Dorme. Os que de há muito te esperavam
        Cansados já se foram para longe.
        Perto de ti está tua mãezinha
        Teu irmão, que o estudo adormeceu
        Tuas irmãs pisando de levinho
        Para não despertar o sono teu.
        Dorme, meu filho, dorme no meu peito
        Sonha a felicidade. Velo eu.

        Minha mãe, minha mãe, eu tenho medo
        Me apavora a renúncia. Dize que eu fique
        Dize que eu parta, ó mãe, para a saudade.
        Afugenta este espaço que me prende
        Afugenta o infinito que me chama
        Que eu estou com muito medo, minha mãe.
      </h2>
      </div>
      </div>
      
    </div>
    <div className='bg-gray-500 text-sm text-center'>Create by Lottar Matheus Silva</div>
    </>
  )
}

export default page