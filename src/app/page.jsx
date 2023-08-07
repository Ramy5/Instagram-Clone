import MiniProfile from "@/components/Home/MiniProfile/MiniProfile";
import Posts from "@/components/Home/Posts/Posts";
import Stories from "@/components/Home/Stories/Stories";

export default function Home() {
  return (
    <main className="mt-8 grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto gap-12">
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
          <h4>SUGGESTIONS</h4>
        </div>
      </section>
    </main>
  );
}
