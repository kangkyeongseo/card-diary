import { Dispatch, SetStateAction } from "react";
import AddList from "./AddList";
import EditList from "./EditList";
import DeleteList from "./DeleteList";

interface PopupProp {
  id?: number;
  kind: string;
  listType: string;
  title?: string;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({
  id,
  kind,
  listType,
  title,
  setIsPopup,
}: PopupProp) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      {kind === "add" && (
        <AddList listType={listType} setIsPopup={setIsPopup} />
      )}
      {kind === "edit" && (
        <EditList
          id={id!}
          listType={listType}
          title={title!}
          setIsPopup={setIsPopup}
        />
      )}
      {kind === "delete" && (
        <DeleteList
          id={id!}
          listType={listType}
          title={title!}
          setIsPopup={setIsPopup}
        />
      )}
    </div>
  );
}
