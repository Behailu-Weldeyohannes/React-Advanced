



const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
  {
    id: "2",
    title: "Lemon ice cream",
    description: "Mind blowing test",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    
    title: "Checkolate Mousse",
    description: "Unexplored flavor",
    image: "https://picsum.photos/200/300/?random",
    price: "$7.00",
  },
];

const topDesserts = data.map((dessert) => {
  
  return {
    content: `${dessert.title} - ${dessert.description}`,
    // content: `${dessert.title} - ${dessert.description}`,
   
    price: dessert.price,
  };
});


function App(){
  // console.log((topDesserts));
  const listItems = topDesserts.map((dessert, index) => {
    
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
  return(
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default App;