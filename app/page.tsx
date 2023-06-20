import Image from "next/image";
import { IntroComponent } from "@/components/intro-component";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div id="intro">
        <IntroComponent />
      </div>
      <section id="about-me-section">
        <a id="about-me" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">Who am I?</h2>
        <p>
          My name is Collin Williams. I am an upcoming developer and I love to
          learn.
        </p>
      </section>
      <section id="projects-section">
        <a id="projects" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">My Work</h2>
        <p>
          <h4>dcwilljrlab.org</h4>
          Info site I built for my father. He runs a research lab at UNC. <Link href="https://www.dcwilljrlab.org" target="blank" className="underline">Learn more.</Link>
        </p>
      </section>
    </main>
  );
}
