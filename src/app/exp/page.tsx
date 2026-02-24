import Link from "next/link";

export default function Experiences() {
  return (
    <main className="min-h-screen w-full text-gray-300 px-6 py-16 max-w-6xl mx-auto">
      
      <Link href="/" className="underline text-gray-400 hover:text-white">
        ← back
      </Link>

      <h1 className="text-4xl font-bold mt-10 underline text-gray-200">
        Experience
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-2xl mb-6 text-gray-200">active</h2>
          <ul className="space-y-4 text-gray-400">
            <li>City Airways (300k) - Moderator</li>
            <li>Popeyes Louisiana Kitchen (57k) - Moderator</li>
            <li>In-N-Out (46) - Junior Executive (Recruitment)</li>
            <li>FlyCheap (37) - Airport Supervisor (Management)</li>
            <li>Chipotle Mexican Grill (36) - Senior Executive</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl mb-6 text-gray-200">inactive</h2>
          <ul className="space-y-4 text-gray-400">
            <li>FlyCheap - Former Vice President</li>
          </ul>
        </div>

      </div>

    </main>
  );
}
