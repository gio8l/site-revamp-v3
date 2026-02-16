import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-gray-300 px-6 py-16 max-w-6xl mx-auto">
      
      {/* GPS */}
      <div className="mb-24">
        <h1 className="text-5xl font-bold text-gray-200">gio!</h1>
        <p className="text-lg text-gray-400 mt-1">(prcttyworld)</p>
        <p className="mt-6 text-xl text-gray-300">
          im like sushi, <br /> im on a roll
        </p>

        <Link
          href="/exp"
          className="inline-block mt-10 text-lg underline hover:text-white transition"
        >
          experiences
        </Link>
      </div>

      {/* Socials */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-10 text-gray-200">
          socials
        </h2>

        <div className="flex flex-col items-center gap-4">
          
          {/* Top Row */}
          <div className="flex gap-6">
            <SocialButton name="discord" link="#" />
            <SocialButton name="instagram" link="#" />
            <SocialButton name="roblox" link="#" />
          </div>

          {/* Bottom Row */}
          <div className="flex gap-6">
            <SocialButton name="tiktok" link="#" />
            <SocialButton name="youtube" link="#" />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-40 text-center text-sm text-gray-500">
        <p>for business inquiries: gio@gio8l.online</p>
        <p className="mt-1">rip gio8l.lol</p>
      </div>

    </main>
  );
}

function SocialButton({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      className="px-8 py-4 bg-[#0f172a] rounded-xl text-gray-200 hover:bg-[#1e293b] transition shadow-lg"
    >
      {name}
    </a>
  );
}
