



import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <span className="text-5xl">Hola Mundo!!</span>
      <Link href={"/about"} className="mt-4">Go to About Page</Link>
    </main>
  );
}
