import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type FilterOptions = {
  id: string;
  label: string;
}[];

const filterOptions: FilterOptions = [
  { id: "burger", label: "Burger" },
  { id: "momo", label: "Momo" },
  { id: "soup", label: "Soup" },
  { id: "biryani", label: "Biryani" },
];

const FilterPage = () => {
  const appliedFilterHandler = (value: string) => {
    // alert(value)
  };
  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by cuisine</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            onClick={() => appliedFilterHandler(option.label)}
          />
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
