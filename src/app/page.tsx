export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-between px-32 text-gray-300">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-5xl font-bold text-gray-200">gio!</h1>
        <p className="text-gray-500">(prcttyworld)</p>

        <p className="mt-4 whitespace-nowrap text-gray-400">
          im like sushi, im on a roll
        </p>

        <a
          href="/exp"
          className="underline mt-4 inline-block text-gray-400 hover:text-white"
        >
          experiences
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-center">
        <h2 className="mb-6 text-gray-400">socials</h2>

        <div className="flex gap-4 justify-center">
          <a
            href="https://discord.com"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-[#0b1a35] hover:bg-[#12244d] transition"
          >
            discord
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-[#0b1a35] hover:bg-[#12244d] transition"
          >
            instagram
          </a>

          <a
            href="https://roblox.com"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-[#0b1a35] hover:bg-[#12244d] transition"
          >
            roblox
          </a>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <a
            href="https://tiktok.com"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-[#0b1a35] hover:bg-[#12244d] transition"
          >
            tiktok
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-[#0b1a35] hover:bg-[#12244d] transition"
          >
            youtube
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-600 text-center">
        <p>for business inquiries: gio@gio8l.online</p>
        <p>rip gio8l.lol</p>
      </div>

    </main>
  );
}
