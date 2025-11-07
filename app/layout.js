import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParallaxBlobs from "@/components/ParallaxBlobs";

export const metadata = {
  title: "Rahul Sugumar — Portfolio",
  description:
    "Framer-quality portfolio by Rahul Sugumar — Full-Stack Developer & AI/ML Engineer.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-fg relative overflow-x-hidden">

        {/* ✅ Main dark background layer */}
        <div className="fixed inset-0 bg-bg -z-50"></div>

        {/* ✅ Floating particles (behind blobs) */}
        <AnimatedBackground />

        {/* ✅ Parallax blobs (middle layer) */}
        <ParallaxBlobs />

        {/* ✅ Radial glows (top of background but under content) */}
        <div
          className="pointer-events-none fixed -top-40 right-0 w-[720px] h-[720px] blur-[220px] opacity-25 -z-10"
          style={{
            background:
              "radial-gradient(closest-side, rgba(110,168,254,0.25), transparent)",
          }}
        />

        <div
          className="pointer-events-none fixed bottom-0 left-0 w-[620px] h-[620px] blur-[200px] opacity-15 -z-10"
          style={{
            background:
              "radial-gradient(closest-side, rgba(110,168,254,0.18), transparent)",
          }}
        />

        {/* ✅ Page content on top */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
