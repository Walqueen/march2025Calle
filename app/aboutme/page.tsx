"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function AboutMe() {
  let facts : string[] = ["Machu Picchu is one of the wonders of the world.", "2 Hydrogen atoms and an oxygen atom make H2O.", "Tennis was originally played with bare hands.", "Peru is the origin of the potato", "Peru has the best food in the world", "Lago Titicaca is the highest lake in the world", "Peru has the best gold in the world", "Tokyo was once called Edo", "Singapore is the home to the world's first night zoo", "Singapore founded the World Toilet Organization"]
  const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      < br/>
        <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)])}} className = "bg-red-500 text-white">
          Press 4 Fact
        </Button>
        <p>{fact}</p>
        <div>   
      <div className="flex flex-wrap text-2xl m-2  justify-center">
        <p className="m-6 b border-2 border-black"><img width="200" height="200" className="h-auto max-w-full" src= "IMG_3960.jpeg" alt="This is a picture of me. "></img>
        <h1>This is a picture of me wearing Balenciaga.</h1></p>
        <h1>----------------------------------------------------------------------------------------------</h1>
        <p className="m-6 b border-2 border-black"><img width="300" height="250" src= "https://sammamishindependent.com/wp-content/uploads/2022/08/Tennis-Court.jpg"></img>        <img width="300" height="250" src= "https://hips.hearstapps.com/hmg-prod/images/carlos-alcaraz-of-spain-celebrates-during-the-mens-singles-news-photo-1692717328.jpg?crop=0.66659xw:1xh;center,top&resize=1200:*"></img>
        <h1>Tennis is one of my favorite hobbies.</h1> <a className="bg-lime-800 text-white" href="https://www.atptour.com/en/players/carlos-alcaraz/a0e2/overview" target="_blank">CarlosAlcaraz.com</a> <Button as={link} className="bg-blue-500" href="https://www.atptour.com/en/players/carlos-alcaraz/a0e2/overview">Carlos.alcaraz</Button> </p> 
        <h1>----------------------------------------------------------------------------------------------</h1>
        <p className="m-6 b border-2 border-black">        <img width="300" height="250" className="h-auto max-w-full" src= "IMG_1276.jpeg" alt="This is a picture of me. "></img> <img width="300" height="250" className="h-auto max-w-full" src= "IMG_3966.jpeg" alt="This is a picture of me. "></img> <img width="300" height="250" className="h-auto max-w-full" src= "IMG_9263.jpeg" alt="This is a picture of me. "></img>
        <h1>These are cool picutres I took at Honolulu, Japan, and Singapore.</h1>  <Button as={link} className="bg-blue-400" href="https://en.wikipedia.org/wiki/Honolulu?scrlybrkr=a3a0abff">Honolulu</Button> <Button as={link} className="bg-blue-500" href="https://taogroup.com/venues/lavo-italian-restaurant-singapore/">Lavo Singapore</Button>
        <Button as={link} className="bg-blue-300" href="https://www.shokoku-ji.jp/en/kinkakuji/">Kinkaku-ji</Button> </p>
        <h1>----------------------------------------------------------------------------------------------</h1>
        <p className="m-6 b border-2 border-black">        <img width="300" height="200" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaHUlMjBwaWNjaHV8ZW58MHx8MHx8fDA%3D"></img>
        <h1>Peru is something that is very important to me.</h1></p>
        
        </div>
      </div>
    </div>
    
  );
}