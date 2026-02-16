import Link from "next/link";

export default function Experiences() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#0b1d3a] text-gray-300 flex justify-center pt-24">

      
      <div className="w-full max-w-4xl px-8">

        <Link href="/" className="text-gray-400 underline hover:text-white transition">
          ← back
        </Link>

        <h1 className="text-5xl font-semibold text-gray-400 underline mt-12 mb-16">
          experience
        </h1>

        <div className="grid md:grid-cols-2 gap-20">

          <div>
            <h2 className="text-3xl text-gray-400 mb-6">active</h2>
            <ul className="space-y-3 text-lg text-gray-400">
              <li>City Airways - Moderator</li>
              <li>Popeyes Roblox - Moderator</li>
              <li>FlyCheap - Airport Supervisor (Management)</li>
              <li>In-N-Out - Junior Executive (Recruitment)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-gray-400 mb-6">inactive</h2>
            <ul className="space-y-3 text-lg text-gray-400">
              <li>FlyCheap - Former Vice President</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}
