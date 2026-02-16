export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-6xl flex justify-between items-center">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-100">gio!</h1>

          <p className="text-gray-400">(prctyworld)</p>

          <p className="text-gray-300 whitespace-nowrap">
            im like sushi, im on a roll
          </p>

          <a
            href="/exp"
            className="underline text-gray-400 hover:text-gray-200"
          >
            experiences
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-gray-300 text-xl">socials</h2>

          <div className="flex gap-4 flex-wrap justify-center max-w-sm">
            <a
              href="https://discord.com"
              className="px-6 py-2 rounded-xl bg-[#0b1a35] text-gray-300 hover:bg-[#12244a] transition"
            >
              discord
            </a>

            <a
              href="https://instagram.com"
              className="px-6 py-2 rounded-xl bg-[#0b1a35] text-gray-300 hover:bg-[#12244a] transition"
            >
              instagram
            </a>

            <a
              href="https://roblox.com"
              className="px-6 py-2 rounded-xl bg-[#0b1a35] text-gray-300 hover:bg-[#12244a] transition"
            >
              roblox
            </a>

            <a
              href="https://tiktok.com"
              className="px-6 py-2 rounded-xl bg-[#0b1a35] text-gray-300 hover:bg-[#12244a] transition"
            >
              tiktok
            </a>

            <a
              href="https://youtube.com"
              className="px-6 py-2 rounded-xl bg-[#0b1a35] text-gray-300 hover:bg-[#12244a] transition"
            >
              youtube
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-8 text-center text-sm text-gray-500">
        <p>for business inquiries: gio@gio8l.online</p>
        <p>rip gio8l.lol</p>
      </div>
    </main>
  );
}
