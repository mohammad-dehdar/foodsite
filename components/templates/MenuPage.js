import Card from "../modules/Card"

function MenuPage({ data }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((food) => <Card key={food.id} {...food} />)}
      </div>
    </div>
  )
}

export default MenuPage