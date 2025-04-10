import React, { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import LogoButtonCopy from "../sidebar/LogoButtonCopy";
import NavigatorCopy from "../sidebar/navigator/NavigatorCopy";
import NewPlayListCopy from "../sidebar/navigator/NewPlayListCopy";
import PlayListCopy from "../sidebar/navigator/PlayListCopy";
import { click } from "@/types/types";

export default function CustomDrawer({
  children,
  clickClose,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  clickClose: click;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="flex gap-3 p-3 mlg:hidden items-center flex-row-reverse absolute top-1/2 -translate-y-1/2 left-0">
        {children}
      </DrawerTrigger>
      <DrawerContent className="!w-[240px] h-full z-[400]">
        <DialogTitle className="hidden">Drawer</DialogTitle>
        <LogoButtonCopy isInDrawer clickClose={clickClose} />
        <NavigatorCopy />
        <NewPlayListCopy />
        <PlayListCopy />
      </DrawerContent>
    </Drawer>
  );
}
