import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkoutHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="font-bold">Review Your Order</DialogTitle>
        <DialogDescription className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          temporibus expedita iusto doloremque sequi quas atque omnis quam
          pariatur ex?
        </DialogDescription>
        <form onSubmit={checkoutHandler} className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
          <div className="">
            <Label>Fullname</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
            />
          </div>
          <div className="">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>
          <div className="">
            <Label>Contact</Label>
            <Input
              type="text"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
            />
          </div>
          <div className="">
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={input.address}
              onChange={changeEventHandler}
            />
          </div>
          <div className="">
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
            />
          </div>

          <div className="">
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              value={input.country}
              onChange={changeEventHandler}
            />
          </div>
          <DialogFooter className="col-span-2 pt-5 ">
            <Button className="bg-orange hover:bg-hoverOrange">Continue to Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
