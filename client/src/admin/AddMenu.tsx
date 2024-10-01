import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import EditMenu from "./EditMenu";

const menus = [
    {
        name: "biriyani",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 100,
        image: "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
    },
    {
        name: "Kacchi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 100,
        image: "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
    }
] 

const AddMenu = () => {

    const [input, setInput] = useState<any>({
        name: "",
        description: "",
        price: 0,
        image: undefined

    })
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const loading = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target;
    setInput({...input, [name]: type === "number" ? Number(value) : value})
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menu
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <div className=" flex p-2 rounded-lg bg-orange hover:bg-hoverOrange">
              <Plus className="mr-2" />
              Add Menu
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Creat a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input 
                type="text" 
                name="name" 
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter item name" />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter item description"
                />
              </div>
              <div>
                <Label>Price in (TK)</Label>
                <Input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter item price"
                />
              </div>
              <div>
                <Label>upload Image</Label>
                <Input
                type="file" 
                name="image" 
                // value={input.image}
                onChange={(e) => setInput({...input, image: e.target.files?.[0] || undefined})}/>
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {
        menus.map((menu: any, idx:number) => (
            <div key={idx} className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
          <img
            src={menu.image}
            alt=""
            className="md:size-24 h-20 w-full object-cover rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">{menu.name}</h1>
            <p className="text-sm text-gray-600 mt-1">
             {menu.description}
            </p>
            <h2 className="text-md font-semibold mt-2">
              Price:
              <span className="text-[#d19254] ml-1">{menu.price}</span>
            </h2>
          </div>
          <Button onClick={() => setSelectedMenu(menu)} className="bg-orange hover:bg-hoverOrange mt-2" size={"sm"}>
            Edit
          </Button>
        </div>
      </div>
        ))
      }
      
      <EditMenu selectedMenu = {selectedMenu} />
    </div>
  );
};

export default AddMenu;
