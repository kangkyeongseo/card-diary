import { Dispatch, SetStateAction } from "react";
import AddList from "./AddList";

interface PopupProp {
  kind: string;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ kind, setIsPopup }: PopupProp) {
  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      {kind === "add" && <AddList setIsPopup={setIsPopup} />}
    </div>
  );
}
