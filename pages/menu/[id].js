import DetailsPage from "@/components/templates/DetailsPage"
import { useRouter } from "next/router"


function FoodDetails({ data }) {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <h2>Loading</h2>
        )
    }
    return (
        <div>
            <DetailsPage {...data} />
        </div>
    )
}

export default FoodDetails

export async function getStaticPaths() {
    const res = await fetch("https://foodrecipe-woad.vercel.app/data")
    const json = await res.json()
    const data = json.slice(0, 10)
    const paths = data.map((food) => ({
        params: { id: food.id.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { params: { id } } = context;

    try {
        const res = await fetch(`https://foodrecipe-woad.vercel.app/data/${id.toString()}`);
        if (!res.ok) {
            return {
                notFound: true, // Handles 404 and other response errors
            };
        }
        const data = await res.json();

        if (!data.id) {
            return {
                notFound: true, // If the data is invalid or missing
            };
        }

        return {
            props: { data },
            revalidate: 3600,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            notFound: true, // Fallback in case of any fetch failure
        };
    }
}