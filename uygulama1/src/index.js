import React  from "react";
import  ReactDOM  from "react-dom";
import Card from "./componets/Card";



const App=()=>{
  
    return(
     <div>
       <div className="card-group">
        
        <Card 
          cardTitle="Card Title I " 
          cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
          updatedTime="Last updated 3 mins ago"
          image="https://picsum.photos/id/1/200/300"/>
        
        
        <Card 
          cardTitle="Card Title II" 
          cardText="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          updatedTime="Last updated 1 mins ago"
          image="https://picsum.photos/id/10/200/300"/>
        
        
        
        <Card 
          cardTitle="Card Title III" 
          cardText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." 
          updatedTime="Last updated 5 mins ago"
          image="https://picsum.photos/id/100/200/300"/>
        

      </div>
      </div>
    );
}





ReactDOM.render(
    <App/>,
    document.getElementById('root')
) 