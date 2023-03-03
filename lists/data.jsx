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
    id: "3",
    title: "Checkolate Mousse",
    description: "Unexplored flavor",
    image: "https://picsum.photos/200/300/?random",
    price: "$7.00",
  },
];

const topDesserts = data.map((dessert) => {
  // return dessert
  return {
    content: `${dessert.title} - ${dessert.description}`,
    content: `${dessert.id}`,
    price: dessert.price,
  };
});

function App() {
  console.log(topDesserts);
  return (
    <div>
      <h1>Examine the console</h1>
    </div>
  );
}

export default App;
