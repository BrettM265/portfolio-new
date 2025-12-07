import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "SEO Website Developer",
      company: "Logical Postion",
      time: "2021 — Present",
      description:
        `• Completed Technical SEO audits and implemented on page optimizations that increases organic traffic.
        • Developed and maintained responsive, high performance web applications using React.js, Next.js, and TypeScript, ensuring seamless cross browser compatibility and accessibility (WCAG standards).
• Translated design mockups into mobile first interfaces using HTML5, CSS3, Sass, TailwindCSS, and Bootstrap.
• Collaborated closely with designers to refine user experience, improve usability, and implement consistently user friendly UI/UX.
`},
    {
      role: "Website Developer & AI Specialist",
      company: "Freelance",
      time: "2023 — present",
      description:
        `• Designed, built, and optimized responsive websites and web applications using React.js, Node.js, and modern CSS frameworks such as Tailwind and Bootstrap.
•  Integrated AI powered features including chatbots, content generation tools, and LLM driven workflows using OpenAI.
• Collaborated with clients to define project requirements, deliver scalable solutions, and improve site performance, accessibility, and SEO visibility.
`
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      time: "2024 — present",
      description:
        `• Develop and maintain responsive web applications using a variety of frontend and backend technologies, including Next.js, Node.js, and SQL, ensuring high performance and scalability.
• Collaborate with clients to define project requirements, implement features, and provide technical guidance throughout the development lifecycle.
• Implement end to end solutions, from user interface design and server side logic to database management and API integration, ensuring seamless user experiences.`
    },
    {
      role: "Retail Jobs",
      company: "Various Companies",
      time: "2015 — 2021",
      description:
        `• Managing a team of employees to ensure excellent customer service and efficient gym operations.
• Various tasks working in a grocery store including stocking shelves, cashiering, and assisting customers.`
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-extrabold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#b7e4c0]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p className="text-gray-700 font-semibold">{job.company}</p>
            <p className="text-sm text-gray-500 mb-3">{job.time}</p>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;