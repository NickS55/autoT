import './App.css';
import React, {useState} from 'react';
import CardRenderer from './components/CardRenderer';
import { Button } from 'react-bootstrap';
import data from './UIE-InterviewProject.json'





function App() {
  let CardData = data

  const [sortType, setSortType] = useState("Price")

  function sortPrice(items, sub){
    let data = items

    if (sub === "Price"){
      data = items.sort(function (a, b) {
        return a.Price - b.Price;
      });
    }
    else { //if sorting by words
      var A
      var B
      data = items.sort(function(a, b) {
        if (sub === "Heading"){
          // heading - ignore upper and lowercase
          A = a.Heading.toUpperCase(); 
          B = b.Heading.toUpperCase(); 
        } else {
          // SubHeading - ignore upper and lowercase
          A = a.Subheading.toUpperCase(); 
          B = b.Subheading.toUpperCase(); 
        }
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    }
  return data
  }


  
  return(
    <div>
      <Button onClick={() => setSortType("Price")}>Sort By Price</Button>
      <Button onClick={() => setSortType("Heading")}>Sort By Heading</Button>
      <Button onClick={() => setSortType("Subheading")}>Sort By Subheading</Button>
      <div className = "container">
        <CardRenderer Data = {sortPrice(CardData, sortType)} />
      </div>
    </div>
  )
}

export default App;
