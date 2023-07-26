import Posts from "@/components/Home/Posts/Posts";
import Stories from "@/components/Home/Stories/Stories";

export default function Home() {
  return (
    <main className="mt-8 grid grid-cols-1 md:grid-cols-2 md:max-w-5xl mx-auto">
      {/* LEFT SIDE */}
      <section className="md:col-span-2">
        <Stories />

        <Posts />
      </section>

      {/* RIGHT SIDE */}
      <section className="md:col-span-1">
        {/* MINI PROFILE */}
        <p>MINI PROFILE</p>

        {/* SUGGESTIONS */}
        <h4>SUGGESTIONS</h4>
      </section>
    </main>
  );
}
