import About from "./About";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-gray-900 text-white">

      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Hi, I'm Aniket Shukla
      </h1>

      <h2 className="text-lg md:text-2xl text-gray-300 mb-6">
        Software Developer
      </h2>

      <p className="max-w-xl text-gray-400 mb-6">
        I build scalable web apps and love solving problems using modern tech.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
          GitHub
        </a>
        <a className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
          LinkedIn
        </a>
      </div>
      <About></About>

    </section>
  );
}