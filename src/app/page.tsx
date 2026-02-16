import Link from "next/link";

function SocialButton({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0a1124] hover:bg-[#11204a] hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl text-center shadow-lg min-w-[170px] text-lg"
    >
      {name}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#0b1d3a] text-gray-300 flex flex-col">
      
      <div className="flex-1 flex justify-center pt-20">
        <div className="w-full max-w-6xl px-8">
          <div className="flex justify-between items-start">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between h-[500px]">
              <div>
                <h1 className="text-7xl font-bold text-gray-400">
                  gio<span className="text-gray-500">!</span>
                </h1>

                <p className="text-lg text-gray-500 mt-2">
                  (prcttyworld)
                </p>

                <p className="mt-6 text-2xl text-gray-400">
                  im like sushi, im on a roll
                </p>
              </div>

              <Link
                href="/exp"
                className="text-2xl font-semibold text-gray-400 underline hover:text-white transition"
              >
                experiences
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center mt-48">

              <h2 className="text-4xl font-semibold mb-8 text-gray-400">
                socials
              </h2>

              <div className="flex gap-6 mb-6">
                <SocialButton
                  name="discord"
                  link="https://discord.gg/PRMYACwh7a"
                />
                <SocialButton
                  name="instagram"
                  link="https://instagram.com/gio8l_"
                />
                <SocialButton
                  name="roblox"
                  link="https://roblox.com/users/12216555/profile"
                />
              </div>

              <div className="flex gap-6 justify-center">
                <SocialButton
                  name="tiktok"
                  link="https://tiktok.com/@gio8l"
                />
                <SocialButton
                  name="youtube"
                  link="https://youtube.com/@gio8l.online"
                />
              </div>

            </div>

          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm pb-6">
        <p>for business inquiries: gio@gio8l.online</p>
        <p className="mt-2">rip gio8l.lol</p>
      </footer>

    </main>
  );
}
