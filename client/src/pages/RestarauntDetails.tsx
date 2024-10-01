import AvailavleMenu from "@/components/AvailavleMenu";
import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";

const RestarauntDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="w-full relative h-32 md:h-64 lg:-72">
          <img
            src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Tandori Dhaka</h1>
            <div className="flex gap-2 my-2">
              {["Biriyani", "Momos"].map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="size-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time:{" "}
                  <span className="text-[#d19254]"> 35 mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailavleMenu />
      </div>
    </div>
  );
};

export default RestarauntDetails;
