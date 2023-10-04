import React from "react";
import useUser from "@/libs/client/useUser";
import SideBar from "@/components/SideBar/SideBar";
import CardTable from "@/components/CardTable/CardTable";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="grid grid-cols-[300px_1fr] ">
      <SideBar user={user} listType="todo" />
      <CardTable />
    </div>
  );
}
