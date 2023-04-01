import Head from "next/head";
import Restorer from "../components/Restorer";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto flex-col items-center justify-center min-h-screens py-6">
      <Head>
        <title>PhotoMagic</title>
      </Head>
      <h2 className="text-center text-lg">
        Welcome to <span className="font-bold text-[#3290EE]">PhotoMagic</span>
      </h2>
      <h2 className="text-center mt-4 font-display text-4xl font-bold text-slate-900 sm:text-16xl">
        Restore any blurry or old images <span className="text-[#3290EE]">using AI</span>
      </h2>
      <Restorer />
    </div>
  );
}
