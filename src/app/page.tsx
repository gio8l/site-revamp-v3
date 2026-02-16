export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8 relative">
      <div className="w-full max-w-6xl flex justify-between items-center">

        {/* LEFT SIDE */}
        <div className="space-y-4 -mt-100"> {/* moved up */}
          <h1 className="text-7xl font-bold text-gray-100">
            gio!
          </h1>

          <p className="text-gray-400 text-lg">
            (prcttyworld)
          </p>

          <p className="text-gray-300 whitespace-nowrap text-lg">
            im like sushi, im on a roll
          </p>

          <a
            href="/exp"
            className="underline text-gray-400 hover:text-gray-200 text-lg"
          >
            experiences
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center space-y-8 scale-110"> {/* bigger */}
          <h2 className="text-gray-200 text-2xl">
            socials
          </h2>

          <div className="flex gap-5 flex-wrap justify-center max-w-md">
            <a
              href="#"
              className="px-8 py-3 rounded-2xl bg-[#0b1a35] text-gray-200 hover:bg-[#12244a] transition text-lg"
            >
              discord
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-2xl bg-[#0b1a35] text-gray-200 hover:bg-[#12244a] transition text-lg"
            >
              instagram
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-2xl bg-[#0b1a35] text-gray-200 hover:bg-[#12244a] transition text-lg"
            >
              roblox
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-2xl bg-[#0b1a35] text-gray-200 hover:bg-[#12244a] transition text-lg"
            >
              tiktok
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-2xl bg-[#0b1a35] text-gray-200 hover:bg-[#12244a] transition text-lg"
            >
              youtube
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500">
        <p>for business inquiries: gio@gio8l.online</p>
        <p>rip gio8l.lol</p>
      </div>
    </main>
  );
}
