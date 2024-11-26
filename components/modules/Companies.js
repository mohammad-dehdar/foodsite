import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

function Companies() {
  const companies = [
    { Icon: Apple, name: "Apple" },
    { Icon: SpaceX, name: "SpaceX" },
    { Icon: Binance, name: "Binance" },
    { Icon: Tesla, name: "Tesla" },
  ];

  return (
    <section className="py-16 container">
      <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-center text-green-700 mb-12">Companies</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {companies.map(({ Icon, name }) => (
            <div key={name} className="flex justify-center">
              <div className="flex items-center justify-center  rounded-full  transition-all duration-300">
                <Icon className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;