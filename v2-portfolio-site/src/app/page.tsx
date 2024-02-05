import Image from "next/image";

export default function Home() {
  return (
    <main className="font-mono">
      <div className="flex">
        <div className="w-1/2">
          <h1>Richard Ma</h1>
          <h2>Web Developer</h2>
          <h3>HBSC Computer Science</h3>
        </div>
        <div className="w-1/2">
          <div>
            Hello, my name is Richard! <br/>
            As a software engineer, I am fueled by my passion for technology and my love 
            for learning and solving new challenges. I have professional experience 
            building responsive React webpages, and in depth back-end knowledge on data 
            structures, algorithms, and databases gained during my undergraduate studies. 
            I am constantly seeking out new opportunities to grow my skills and knowledge, 
            and I approach each challenge with enthusiasm and curiosity.
          </div>
          <div>
            Experience
          </div>
          <div>
            Skills
          </div>
          <div>
            Projects
          </div>
        </div>
      </div>
    </main>
  );
}
