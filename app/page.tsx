import Image from "next/image";
import { IntroComponent } from "@/components/intro-component";
import Link from "next/link";
import { TempAlert } from "@/components/ui/temp-alert";

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
          My name is Collin Williams. I&apos;m an up-and-coming developer and I love
          to learn.
        </p>
      </section>
      <section id="projects-section">
        <a id="projects" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">My Work</h2>
        <div className="mt-4">
          <h4>dcwilljrlab.org</h4>
          Info site I built for my father. He runs a research lab at UNC.{" "}
          <Link
            href="https://www.dcwilljrlab.org"
            target="blank"
            className="underline hover:text-accent-foreground"
          >
            Learn more.
          </Link>
        </div>
      </section>
      <TempAlert />
    </main>
  );
}
