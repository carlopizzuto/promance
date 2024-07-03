import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-4">What&apos;s your idea?</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your idea here"
          className="px-4 py-2 border rounded-md text-black"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

