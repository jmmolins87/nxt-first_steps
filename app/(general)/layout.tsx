



import { Navbar } from "@/components";


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10">
        <span className="text-lg">Hola Mundo</span>
        { children }
      </main>
    </>
  );
}