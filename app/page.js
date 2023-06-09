import Sidebar from "@/components/Sidebar";
import NotesContainer from "@/components/NotesContainer";

export default function Home() {
  return (
    <main className="flex w-full">
      <Sidebar />
      <NotesContainer />
    </main>
  );
}
