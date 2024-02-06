import Image from "next/image";

export default function Home() {
  return (
    <main className="font-mono h-full bg-slate-900 text-slate-200">
      <div className="px-20 h-full">
        <div className="flex h-full">
          <div className="w-1/2 flex flex-col justify-around py-10 sticky top-0 h-screen">
            <div>
              <h1 className="text-6xl">Richard Ma</h1>
              <h2 className="text-2xl">Web Developer</h2>
              <h3>HBSC Computer Science</h3>
            </div>
            <div>
              List
            </div>
            <div>
              Icons Icons Icons
            </div>
          </div>
          <div className="w-1/2 text-slate-400 py-24 flex flex-col space-y-4">
            <div>
              <h2 className="text-slate-200 text-2xl">About Me</h2>
              Hello, my name is Richard! <br/>
              As a software engineer, I am fueled by my passion for technology and my love 
              for learning and solving new challenges. I have professional experience 
              building responsive React webpages, and in depth back-end knowledge on data 
              structures, algorithms, and databases gained during my undergraduate studies. 
              I am constantly seeking out new opportunities to grow my skills and knowledge, 
              and I approach each challenge with enthusiasm and curiosity.
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-slate-200 text-2xl">Experience</h2>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="basis-1/4 font-mono text-sm">Aug 2022-May 2023</div>
                  <div className="basis-3/4">
                    Intermediate Front End Developer - DeckerMed
                    <div>
                      • Responsible for rebuilding 35% of total company web pages and applications using React, utilized by over 25k
                      unique monthly users from medical programs at top universities and institutions.
                      <br/>
                      • Optimized content-heavy components’ rendering speeds to be 90% faster using memoization.
                      <br/>
                      • Created and delivered reusable marketing HTML email templates to an estimated 50k current and past clients,
                      resulting in seasonal increases of returning clients and client retention. Utilized HTML, CSS2 and Django.
                      <br/>
                      • Developed API Requests in both front-end and back-end, ensuring efficient data transfer between, using Express.JS,
                      Python, and PostgreSQL.
                      <br/>
                      • Development primarily done using React, Redux, Material-UI, CSS, and Python.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="basis-1/4 font-mono text-sm">Jun 2022-Aug 2022</div>
                <div className="basis-3/4">
                    Junior Full Stack Developer - DeckerMed
                    <div>
                      • Contributed to large-scale critical email template sent out to users weekly using CSS, HTML, and Django.
                      <br/>
                      • Modernized design and reduced bugs on many React Widgets.
                      <br/>
                      • Created a new React page to replace outdated vanilla JavaScript page in production.
                      <br/>
                      • Implemented API routes with Django.
                    </div>
                  </div>
              </div>
            </div>
            <div>
              Skills
            </div>
            <div>
              Projects
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
