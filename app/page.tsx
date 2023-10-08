
import Image from "next/image";
import SearchBar from './components/searchBar';
import Sidebar from "./lib/components/Sidebar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="">
        {/* Sidebar */}
        <h1 className="text-blue-500 text-xl mb-4">Where's Religion?</h1>
        <SearchBar />
      </div>
    </RootLayout>
  );
}
