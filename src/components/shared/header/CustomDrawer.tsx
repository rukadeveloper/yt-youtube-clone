import React, { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import LogoButton from "../sidebar/LogoButton";
import Navigator from "../sidebar/navigator/Navigator";
import NewPlayList from "../sidebar/navigator/NewPlayList";
import PlayList from "../sidebar/navigator/PlayList";
import { clickClose } from "@/types/types";

export default function CustomDrawer({
  children,
  clickClose,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  clickClose: clickClose;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="flex lg:hidden items-center flex-row-reverse absolute top-1/2 -translate-y-1/2 left-0">
        {children}
      </DrawerTrigger>
      <DrawerContent className="!w-[240px] h-full">
        <LogoButton isInDrawer clickClose={clickClose} />
        <Navigator />
        <NewPlayList />
        <PlayList />
      </DrawerContent>
    </Drawer>
  );
}
