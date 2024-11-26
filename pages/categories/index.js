import CategoriesPage from "@/components/templates/CategoriesPage"

function Categories({data}) {
  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  )
}

export default Categories

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.some(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.some((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "more" && timeDetail > 30) {
        return true;
      } else if (time === "less" && timeDetail <= 30) {
        return true;
      }
      return false;
    });

    if (time && difficulty && timeResult && difficultyResult) {
      return true;
    } else if (!time && difficulty && difficultyResult) {
      return true;
    } else if (!difficulty && time && timeResult) {
      return true;
    }

    return false;
  });

  return {
    props: { data: filteredData },
  };
}
