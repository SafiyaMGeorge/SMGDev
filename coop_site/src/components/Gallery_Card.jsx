import React, {useState} from 'react'
import'../pages/Gallery.css'
import plantOne from '../media/plantImg/N_Aristolochioides.jpg'
import plantTwo from '../media/plantImg/N.Diabolica.png'
import plantThree from '../media/plantImg/N.Platychila.png'
import plantFour from '../media/plantImg/N.Ampullaria.png'
import plantFive from '../media/plantImg/N.Northiana.png'
import plantSix from '../media/plantImg/Nepenthes_Villosa.jpg'
import plantSeven from '../media/plantImg/Nepenthes_Rafflesiana.png'
import plantEight from '../media/plantImg/Nepenthes_Jamban.png'
import plantNine from '../media/plantImg/Nepenthes_Edwardsian.png'
import plantTen from '../media/plantImg/Nepenthes_Robcantleyi.png'
import plantEleven from '../media/plantImg/Cephalotus_Follicularis.png'
import plantTwelve from '../media/plantImg/Heliamphora_Macdonaldae.png'
export default function Gallery_Display() {
  const [plants] = useState([
    {
      id: 1,
      name:"N Aristolochioides",
      pic: plantOne,
      description: "Image of N Aristolochioides sculpture. Nepenthes aristolochioides is a climbing, carnivorous plant with unusual pitchers that are domed and have a vertical opening. It's native to Sumatra, Indonesia and is endangered in the wild"
    },
    {
      id: 2,
      name: "N Diabolica",
      pic: plantTwo,
      description: "Image of N Diabolica sculpture. Nepenthes diabolica is a tropical pitcher plant with a toothed peristome and woolly pitchers. It's native to a single mountain in Indonesia's Central Sulawesi. "
    },
    {
      id: 3,
      name: "N Platychila",
      pic: plantThree,
      description: "Image of N Platychila sculpture. Nepenthes platychila is a tropical pitcher plant with funnel-shaped upper pitchers and a smooth peristome. It's native to the Hose Mountains in Sarawak, Borneo. "
    },
    {
      id: 4,
      name: "N Ampullaria",
      pic: plantFour,
      description: "Image of N Ampullaria sculpture. Nepenthes ampullaria also known as the ampullaria pitcher plant, is a tropical carnivorous plant with small, pot-shaped pitchers. It's native to Southeast Asia and is known for its ground-hugging growth habit."
    },
    {
      id: 5,
      name: "N Northiana",
      pic: plantFive,
      description: "Image of N Northiana sculpture. Nepenthes northiana is a tropical pitcher plant with large, bulbous pitchers that are known for their striking colors and patterns. It's native to the limestone cliffs of Borneo and is one of the most famous species in the Nepenthes genus."
    },
    {
      id: 6,
      name: "Nepenthes Villosa",
      pic: plantSix,
      description: "Image of Nepenthes Villosa sculpture. Nepenthes villosa is a tropical pitcher plant with distinctive pitchers and a highly developed peristome. It's native to the Kinabalu and Tambuyukon mountains in Borneo"
    },
    {
      id: 7,
      name: "Nepenthes Rafflesiana",
      pic: plantSeven,
      description: "Image of Nepenthes Rafflesiana sculpture. Nepenthes rafflesiana is a tropical, carnivorous, climbing plant with pitchers that trap and digest insects. It has glossy, leathery leaves that are modified into pitchers at the tips."
    },
    {
      id: 8,
      name: "Nepenthes Jamban",
      pic: plantEight,
      description: "Image of Nepenthes Jamban sculpture. Nepenthes jamban is a tropical, carnivorous plant with pitchers that resemble toilet bowls. It's native to the Barisan Mountains of Sumatra, Indonesia."
    },
    {
      id: 9,
      name: "Nepenthes Edwardsiana",
      pic: plantNine,
      description: "Image of Nepenthes Edwardsiana sculpture. Nepenthes edwardsiana is a tropical climbing plant with large pitchers and a highly developed peristome. It's native to Mount Kinabalu and Mount Tambuyukon in Borneo."
    },
    {
      id: 10,
      name:"Nepenthes Robcantleyi",
      pic: plantTen,
      description: "Image of Nepenthes Robcantleyi sculpture. Nepenthes robcantleyi is  a carnivorous shrub with large pitchers and flowering stalks. It's native to Mindanao, Philippines, and grows best in high humidity."
    },
    {
      id: 11,
      name:"Cephalotus Follicularis",
      pic: plantEleven,
      description: "Image of Cephalotus follicularis sculpture. THe Cephalotus Follicularis, also known as the Australian pitcher plant, is a compact plant with colorful, bristly traps. It's native to a narrow coastal strip in southwestern Australia. "
    },
    {
      id: 12,
      name:"Heliamphora Macdonaldae",
      pic: plantTwelve,
      description: "Image of Heliamphora Macdonaldae sculpture. Heliamphora macdonaldae is a carnivorous plant that grows in the Venezuelan rainforest. It has modified leaves that form a trap for insects."
    }
  ])
  return (
    <div className='cardContainer'>
        {plants.map((plant) => (
          <div className='card'>
            <img src={plant.pic} alt={plant.name} />
            <h2 key={plant.id}>{plant.name}</h2>
          </div>

        ))}
    </div>
  )
}
