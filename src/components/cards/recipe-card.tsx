import Image from "next/image";

import objects from "@/data/objects.json";

import { Dispatch, SetStateAction } from "react";

import { CookingRecipe } from "@/types/recipe";

import { cn } from "@/lib/utils";

interface Props {
  recipe: CookingRecipe; // TODO: update as we add more types
  status: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setObject: Dispatch<SetStateAction<CookingRecipe | null>>; // TODO: update as we add more types
}

export const RecipeCard = ({ recipe, status, setIsOpen, setObject }: Props) => {
  let colorClass = "";
  switch (status) {
    case 1:
      colorClass =
        "border-yellow-900 bg-yellow-500/20 hover:bg-yellow-500/30 dark:bg-yellow-500/10 hover:dark:bg-yellow-500/20";
      break;
    case 2:
      colorClass =
        "border-green-900 bg-green-500/20 hover:bg-green-500/30 dark:bg-green-500/10 hover:dark:bg-green-500/20";
      break;
    default:
      colorClass =
        "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-800";
      break;
  }

  const iconURL =
    objects[recipe.itemID.toString() as keyof typeof objects].iconURL;

  const name = objects[recipe.itemID.toString() as keyof typeof objects].name;

  const description =
    objects[recipe.itemID.toString() as keyof typeof objects].description;

  return (
    <button
      className={cn(
        "flex select-none items-center text-left space-x-3 rounded-lg border py-4 px-5  text-neutral-950 dark:text-neutral-50 shadow-sm hover:cursor-pointer",
        colorClass
      )}
      onClick={() => {
        setObject(recipe);
        setIsOpen(true);
      }}
    >
      <Image
        src={iconURL}
        alt={name}
        className="rounded-sm"
        width={32}
        height={32}
      />
      <div className="min-w-0 flex-1">
        <p className="font-medium truncate">{name}</p>
        <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </button>
  );
};
