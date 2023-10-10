import "./App.css";
import resumePicture from "./assets/yo.jpeg";

function App() {
  return (
    <div className="container">
      <div className="my-5 text-center flex flex-col items-center">
        <h1 className="font-bold text-3xl my-2">Resume</h1>
        <p className="italic text-md">
          "Never give up, never back down!" - Jean Roqua
        </p>
        <img
          className="w-52 object-contain mt-4 shadow-md"
          src={resumePicture}
          alt="Imagen Carlos Morales"
        />
      </div>

      <div>
        <div className="mx-4">
          <h2 className="font-bold text-2xl">Summary</h2>
          <div className="">
            <h3 className="my-2 font-semibold">Carlos Morales</h3>
            <p className="my-2">
              <em>
                Quick and hardworking Frontend Engineer with 1+ year of
                experience developing web applications. Always willing to learn
                new things about technology and keep myself updated.
              </em>
            </p>
            <ul className="my-2">
              <li className="my-2">Mérida, Yucatán</li>
              <li className="my-2">(999) 263-1679</li>
              <li className="my-2">carlangetas007@hotmail.com</li>
            </ul>
          </div>

          <h2 className="font-bold text-2xl">Education</h2>
          <div className="my-4">
            <h3 className="font-semibold">
              Bachelor Degree in Software Engineering
            </h3>
            <h4 className="font-light">2019 - 2024</h4>
            <p>
              <em>Universidad Autónoma de Yucatán (UADY), Yucatán</em>
            </p>
            <p>
              Currently in the last semester of the bachelor's degree in
              Software Engineering, planning to graduate by 2024.
            </p>
          </div>
          <div className="my-4">
            <h4 className="font-semibold">HighSchool Certificate</h4>
            <h5 className="font-light">2016 - 2019</h5>
            <p>
              <em>Centro de Estudios de las Américas (CELA), Yucatán</em>
            </p>
            <p>
              Graduated highschool with a high GPA, in one of the best bilingual
              schools from my state, earning a high English level (C1).
            </p>
          </div>
        </div>
        <div className="mx-4">
          <h2 className="font-bold text-2xl">Professional Experience</h2>
          <div className="my-4">
            <h3 className="font-semibold">Spanish Interpreter</h3>
            <h4 className="font-light">April 2023 - Present</h4>
            <p>
              <em>Propio Language Services, Overland Park, Kansas (Remote) </em>
            </p>
            <p>
              Currently working as a Contract Spanish Interpreter for Propio
              Language Services, as part time, as I am currently focused in
              finishing my school studies.
            </p>
          </div>
          <div className="my-4">
            <h3 className="font-semibold">FrontEnd Engineer</h3>
            <h4 className="font-light">May 2022 - January 2023</h4>
            <p>
              <em>DealerGeek, Mérida, Yucatán</em>
            </p>
            <p>
              Developed numerous web applications using modern technologies such
              as Angular, Tailwind CSS, BootStrap. Improved my knowledge in
              agile methodologies like SCRUM, and programming languages like
              Python.
            </p>
          </div>
        </div>
        <div className="mx-4">
          <h2 className="font-bold text-2xl">Projects</h2>
          <div className="my-4">
            <h3 className="font-semibold"> Digital Financial Manager</h3>
            <p>
              <em> DevOps & Continous Integration </em>
            </p>
            <p>
              Worked with a team building a web application that allows users to
              manage their financial needs, with the managing of cards, budgets,
              and such. Used technologies like Next.js 13, TailwindCSS ,
              PostgreSQL, ElephantSQL, Prisma, and much more.
            </p>
          </div>
          <div className="my-4">
            <h3 className="font-semibold"> AudioStories</h3>
            <p>
              <em> Social Service </em>
            </p>
            <p>
              Worked with a partner developing a web application that was part
              of a bigger project that has the intention of generating
              consciousness in young children to prevent sexual abuse in infants
              in the state of Yucatan. Was part of the two people that developed
              the audiostory module, using technologies such as Figma, React,
              Tailwind CSS, and other libraries.
            </p>
          </div>
          <div className="my-4">
            <h3 className="font-semibold"> Adogtame</h3>
            <p>
              <em> Web Applications Development </em>
            </p>
            <p>
              Worked with a team building a web application that allows users to
              browse through a catalogue of cats & dogs to see if they wish to
              adopt one. Also allows users to add their own pets if they wish to
              put them into adoption. Used technologies such as Javascript,
              Vanilla CSS, BootStrap.
            </p>
          </div>
          <div className="my-4">
            <h3 className="font-semibold"> More ...</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
