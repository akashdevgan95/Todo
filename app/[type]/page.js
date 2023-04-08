import Sidebar from "@/components/Sidebar";
import NotesContainer from "@/components/NotesContainer";

export default function Home({ params: { type } }) {
  return (
    <main className="flex w-full">
      <Sidebar />
      <NotesContainer type={type} />
    </main>
  );
}
