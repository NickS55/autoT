import '../card.css'
import React from "react";
import { Card } from "react-bootstrap";

const CardRenderer = (props) => {
  const Data = props.Data

  
  function loadImage(image){
      if (image){
        return("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg")
      }
      return ("https://wallpaperaccess.com/full/1750672.jpg")
  }

  const renderCard = (card, index) => {
    return (
      <Card key={index} className="card">
        <Card.Img className = "card-image" variant="top" src={loadImage(card.showBridge)} alt= "No Image" />
        <Card.Body classname="card-body">
          <Card.Title className = "card-title">{card.Heading}</Card.Title>
          <Card.Text className = "card-text">{card.Subheading}</Card.Text>
          <div className="card-footer">
            <hr className = "card-line"/>
            <Card.Text className = "card-price">${card.Price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{Data.map(renderCard)}</div>;
};

export default CardRenderer;