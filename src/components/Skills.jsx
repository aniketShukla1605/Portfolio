export default function Skills() {
  const skills = ["C", "C++", "Python", "React", "JavaScript", "Git"];

  return (
    <section id="skills" className="px-6 py-20 text-center bg-gray-900">

      <h2 className="text-white text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>

    </section>
  );
}