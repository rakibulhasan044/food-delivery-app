import AvailavleMenu from "@/components/AvailavleMenu";
import { Badge } from "@/components/ui/badge";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Timer } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestarauntDetails = () => {
  const params = useParams()
  const {singleRestaurant, getSingleRestaurant} = useRestaurantStore();
  

  useEffect(() => {
    getSingleRestaurant(params.id!)
  },[params.id])

  // console.log(singleRestaurant);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="w-full relative h-32 md:h-64 lg:-72">
          <img
            src={singleRestaurant?.imageUrl}
            alt=""
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">{singleRestaurant?.restaurantName}</h1>
            <div className="flex gap-2 my-2">
              {singleRestaurant?.cuisines.map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="size-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time:{" "}
                  <span className="text-[#d19254]">{singleRestaurant?.deliveryTime}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailavleMenu menus = {singleRestaurant?.menus!} />
      </div>
    </div>
  );
};

export default RestarauntDetails;
