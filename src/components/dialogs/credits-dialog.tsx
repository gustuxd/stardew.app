import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconLink,
} from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";
import { Card } from "../ui/card";

const listOfPeopleWeNeedToThank = [
  "Brandon Saldan",
  "Leah Lundqvist",
  "Ian Mitchell",
  "MouseyPounds",
  "ConcernedApe",
  "SDV Wiki",
];

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CreditsDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="flex justify-center">
          <Image
            src="https://stardewvalleywiki.com/mediawiki/images/c/c8/Emojis043.png"
            alt={"Heart icon"}
            width={48}
            height={48}
          />
        </div>
        <DialogHeader>
          <DialogTitle className="text-center">Credits</DialogTitle>
        </DialogHeader>
        {/* <DialogDescription>
          stardew.app was developed, designed, and created by{" "}
          <a href="https://jack.bio" className="underline">
            Jack LaFond
          </a>{" "}
          and{" "}
          <a href="https://solorio.dev" className="underline">
            Clemente Solorio
          </a>
          .
        </DialogDescription>
        <DialogDescription>
          However, it wouldn&apos;t be possible without the help of the{" "}
          <a href="https://solorio.dev" className="underline">
            Leah Lundqvist
          </a>{" "}
          (backend),{" "}
          <a href="https://solorio.dev" className="underline">
            Brandon Saldan
          </a>{" "}
          (frontend), and our countless contributors on{" "}
          <a href="https://stardew.app/github" className="underline">
            GitHub
          </a>
          .
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className="text-sm">Notable Mentions</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <li>Stardew Valley Wiki</li>
          <li>Stardew Valley&apos;s Discord #seasoned-farmers</li>
          <li>ConcernedApe</li>
          <li>You, the user - thank you!</li>
        </DialogDescription> */}
        <DialogDescription className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Card className="p-4">
            <div className="flex gap-2">
              <Image
                src="https://github.com/jacc.png"
                alt={"Heart icon"}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div className="mr-1">
                <h1 className=" text-md font-bold">Jack LaFond</h1>
                <div className="flex">
                  <Link href="https://jack.bio">
                    <IconLink className="w-5" />
                  </Link>
                  <Link href="https://jack.link/linkedin">
                    <IconBrandLinkedin className="w-5" />
                  </Link>
                  <Link href="https://jack.link/github">
                    <IconBrandGithub className="w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex gap-2">
              <Image
                src="https://github.com/clxmente.png"
                alt={"Heart icon"}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div className="mr-1">
                <h1 className="text-md font-bold">Clemente Solorio</h1>
                <div className="flex">
                  <Link href="https://www.solorio.dev/">
                    <IconLink className="w-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/clementesolorio">
                    <IconBrandLinkedin className="w-5" />
                  </Link>
                  <Link href="https://github.com/clxmente">
                    <IconBrandGithub className="w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </DialogDescription>
        <DialogDescription className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {listOfPeopleWeNeedToThank.map((person) => (
            <Card className="p-2" key={person}>
              <h1 className="text-md text-center text-gray-400">{person}</h1>
            </Card>
          ))}
        </DialogDescription>
        <Card
          className="p-2"
          onClick={() => toast.info("Seriously, we love you!")}
        >
          <h1 className="text-center text-sm text-gray-400 hover:cursor-pointer">
            You, the user - thank you!
          </h1>
        </Card>
        <DialogDescription className="flex items-center justify-center">
          <Image
            src={"/dance.gif"}
            alt={"Dancing emoji"}
            className="items-center justify-center"
            width={250}
            height={100}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
