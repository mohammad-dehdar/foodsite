import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import Image from "next/image";

export default function CategoriesPage({ data = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });

  useEffect(() => {
    const difficulty = searchParams.get("difficulty") || "";
    const time = searchParams.get("time") || "";
    setQuery({ difficulty, time });
  }, [searchParams]);

  const changeHandler = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
          className="w-full sm:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          value={query.time}
          name="time"
          onChange={changeHandler}
          className="w-full sm:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Time</option>
          <option value="less">Less than 30 min</option>
          <option value="more">More than 30 min</option>
        </select>
        <button
          onClick={searchHandler}
          className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
        >
          Search
        </button>
      </div>
      <div
        className={
          data?.length
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex justify-center items-center w-[400px] h-full mx-auto mt-16"
        }
      >
        {!data?.length ? (
          <Image
            src="/images/search.png"
            alt="Delicious food spread"
            width={600}
            height={400}
            priority={true}
            className="object-cover w-full h-full mx-auto"
          />
        ) : (
          data.map((item) => <Card key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}
