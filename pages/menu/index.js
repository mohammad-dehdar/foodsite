import MenuPage from "@/components/templates/MenuPage"

function Menu({data}) {
  return (
    <div>
        <MenuPage data={data}/>
    </div>
  )
}

export default Menu

export async function getStaticProps() {
    const res = await fetch("https://foodrecipe-woad.vercel.app/data")
    const data = await res.json()

    return {
        props : {data},
        revalidate : 3600,
    }
}