"use client";

import { useGlobalContext } from "../Context/AppContext";
import Model from "../UI/Model/Model";
import MiniProfile from "./MiniProfile/MiniProfile";
import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";
import Suggestion from "./Suggestion/Suggestion";
import { useSession } from "next-auth/react";

export default function Main() {
  const { data: session } = useSession();
  const { imgModelIsOpen } = useGlobalContext();

  return (
    <>
      <main
        className={`mt-8 grid grid-cols-1 mx-auto gap-12 ${
          session
            ? "md:grid-cols-3 md:max-w-6xl"
            : "md:grid-cols-2 md:max-w-5xl"
        }`}
      >
        {/* LEFT SIDE */}
        <section className="md:col-span-2">
          <Stories />

          <Posts />
        </section>

        {/* RIGHT SIDE */}
        <section className="hidden md:flex md:col-span-1">
          <div className="fixed w-[340px] flex flex-col">
            {/* MINI PROFILE */}
            <MiniProfile />

            {/* SUGGESTIONS */}
            <Suggestion />
          </div>
        </section>
      </main>

      {/* ADD NEW PICTURE MODEL */}
      {imgModelIsOpen && <Model />}
    </>
  );
}
