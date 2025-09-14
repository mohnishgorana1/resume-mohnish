#!/usr/bin/env node


import chalk from "chalk";

const divider = chalk.gray(
  "_________________________________________________________________________________________________________________________________________"
);

// HEADER
console.log(
  chalk.bold.blue(
    "====================================================================="
  )
);
console.log(chalk.bold.green("                 🚀 Resume - Mohnish Gorana"));
console.log(
  chalk.bold.blue(
    "=====================================================================\n"
  )
);

// CONTACT INFO
console.log(chalk.bold.yellow("👤 Name: ") + "Mohnish Gorana");
console.log(chalk.bold.yellow("📞 Contact: ") + "+91 7999517181");
console.log(chalk.bold.yellow("📧 Email: ") + "mohnishgorana1@gmail.com");
console.log(
  chalk.bold.yellow("💻 GitHub: ") +
    chalk.underline("https://github.com/mohnishgorana1")
);
console.log(
  chalk.bold.yellow("🔗 LinkedIn: ") +
    chalk.underline("https://www.linkedin.com/in/mohnish-gorana/")
);
console.log(
  chalk.bold.yellow("🌐 Portfolio: ") +
    chalk.underline("https://mohnish-gorana-portfolio.vercel.app")
);
console.log(chalk.bold.yellow("🎂 D.O.B: ") + "2 May 2001\n");

console.log(divider);

// PROFILE
console.log(chalk.bold.cyan("\n💡 Profile:"));
console.log(
  chalk.white(
    "Proficient in JavaScript and skilled in React JS front-end development, with hands-on experience in the MERN stack and Next.js.\n" +
      "Adept at building responsive, user-friendly interfaces with a strong focus on performance and results."
  ) + "\n"
);

console.log(divider);

// SKILLS
console.log(chalk.bold.cyan("\n⚡ Technical Skills:"));
console.log(chalk.bold.white("• Languages & Frameworks: ") + "JavaScript, React.js, Node.js, TypeScript, Next.js, Express.js, Tailwind CSS"
);
console.log(chalk.bold.white("• Libraries & Tools: ") + "Redux, RTK, React-Redux, Express, MongoDB, Mongoose, Git, GitHub");
console.log(chalk.bold.white("• Third-Party Services: ") + "Cloudinary, Appwrite, Supabase\n");

console.log(divider);

// EDUCATION
console.log(chalk.bold.cyan("\n🎓 Education:"));

console.log(
  chalk.bold.white("• Master of Computer Applications (MCA)") +
    "\n   Gyanodaya Institute of Professional Studies, Neemuch" +
    "\n   (RGPV Bhopal, 2022-2024)" +
    "\n   CGPA: 8.07\n"
);

console.log(
  chalk.bold.white("• Bachelor of Science (B.Sc) in Computer Science") +
    "\n   Balkavi Bairagee Mahavidhyalaya, Neemuch" +
    "\n   (Vikram University, 2018-2021)" +
    "\n   Percentage: 78.97%\n"
);

console.log(divider);

// PROJECTS

console.log(chalk.bold.cyan("\n📂 Projects:\n"));

console.log(
  chalk.bold("• Examify") +
    " - " +
    chalk.underline.blueBright("https://examify-online.vercel.app")
);
console.log(
  "   A full-stack online examination platform with microservices architecture and role-based access control."
);
console.log("   Tech: Next.js, Node.js, Express, MongoDB, TailwindCSS, Kafka");
console.log("   Features:");
console.log(
  "     • Student: Enroll, take timed exams with live tracking, instant results"
);
console.log(
  "     • Instructor: Manage exams, monitor participants, review performance\n"
);

console.log(
  chalk.bold("• CareerHub") +
    " - " +
    chalk.underline.blueBright("https://career-hub-sooty.vercel.app")
);
console.log("   Job portal with backend & frontend, Clerk authentication.");
console.log(
  "   Tech: Next.js, Node.js, TypeScript, MongoDB, Mongoose, ShadcnUI, Cloudinary, TailwindCSS, Clerk"
);
console.log("   Features:");
console.log(
  "     • Recruiter: Post/manage jobs, review applicants, download resumes"
);
console.log(
  "     • Job Seeker: Create profile, upload resume, job search, save jobs, track applications\n"
);

console.log(
  chalk.bold("• DocStream") +
    " - " +
    chalk.underline.blueBright("https://docstream.vercel.app")
);
console.log(
  "   Cloud-based file management solution with real-time collaboration."
);
console.log(
  "   Tech: Next.js, Appwrite, Lexical Editor, LiveBlocks, ShadcnUI, TailwindCSS"
);
console.log("   Features:");
console.log(
  "     • Upload, organize, and collaborate on documents in real-time"
);
console.log(
  "     • Version control, secure sharing, accessible from any device\n"
);

console.log(divider);

// FOOTER + DRIVE RESUME
console.log(chalk.greenBright("👉 Thank you for checking out my resume! 🙌"));
console.log(
  chalk.bold.blue("\n📄 Full Resume (PDF): ") +
    chalk.underline("https://drive.google.com/file/d/12oBFs2RA19N4HajZU4Qu0PlTkDCEN9DY/view?usp=sharing")
);
console.log(
  chalk.bold.blue(
    "\n=====================================================================\n"
  )
);
