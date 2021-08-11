import './App.css';
import React, {useState} from 'react';
import CardRenderer from './components/CardRenderer';
import { Button } from 'react-bootstrap';





function App() {
  let CardData =
  [
      {
          "Heading": "tempor do tempor",
          "Subheading": "ipsum et",
          "Price": 22000
      },
      {
          "Heading": "lorem",
          "Subheading": "do incididunt",
          "Price": 33000
      },
      {
          "Heading": "ut magna ipsum",
          "Subheading": "labore sed",
          "Price": 14000
      },
      {
          "Heading": "lorem incididunt elit",
          "Subheading": "aliqua ipsum",
          "Price": 43000,
          "showBridge": true
      },
      {
          "Heading": "adipiscing ipsum do et do elit eiusmod",
          "Subheading": "et dolor",
          "Price": 27000
      },
      {
          "Heading": "magna lorem",
          "Subheading": "eisumod do",
          "Price": 15000
      },
      {
          "Heading": "ipsum",
          "Subheading": "elit elit",
          "Price": 43000
      },
      {
          "Heading": "sed eiusmod",
          "Subheading": "consectetur dolor",
          "Price": 25000
      },
      {
          "Heading": "labore eiusmod elit ipsum aliqua sit lore ipsum",
          "Subheading": "aliqua sed",
          "Price": 37000,
          "showBridge": true
      },
      {
          "Heading": "aliqua ipsum sed ut elit",
          "Subheading": "tempor aliqua",
          "Price": 1000
      },
      {
          "Heading": "aliqua",
          "Subheading": "elit ut",
          "Price": 4000
      },
      {
          "Heading": "amet adipiscing",
          "Subheading": "eisumod sit",
          "Price": 23000
      },]

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
