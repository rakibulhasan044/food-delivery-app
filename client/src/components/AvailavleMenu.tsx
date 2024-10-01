import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailavleMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
            alt=""
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tandori Biriyani
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#d19254]">৳100</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="bg-orange hover:bg-hoverOrange w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailavleMenu;
