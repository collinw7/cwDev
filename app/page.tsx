import Image from "next/image";
import { IntroComponent } from "@/components/intro-component";

export default function Home() {
  return (
    <main>
      <div className="intro">
        <IntroComponent />
      </div>
      <section id="about-me-section">
        <a id="about-me" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">Who am I?</h2>
        <p></p>
      </section>
    </main>
  );
}
