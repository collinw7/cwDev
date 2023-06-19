import Image from "next/image";
import { IntroComponent } from "@/components/intro-component";

export default function Home() {
  return (
    <main className="container">
      <div id="intro">
        <IntroComponent />
      </div>
      <section id="about-me-section">
        <a id="about-me" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">Who am I?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil impedit non necessitatibus maxime, cumque numquam. Ut deserunt suscipit eaque! Atque velit tempore facere repudiandae corrupti labore voluptatibus suscipit eaque, exercitationem mollitia quidem quasi, ab earum, unde consequatur sapiente voluptatum id doloremque vero fugiat laborum adipisci animi dolores? Asperiores illo, nam officia provident ut voluptate amet iusto distinctio facere, natus, iure voluptatibus necessitatibus aspernatur maiores doloribus qui adipisci inventore magnam quidem corporis suscipit omnis mollitia. Cumque aperiam optio molestias obcaecati rem, eum magni iusto dolorem eaque, eveniet inventore suscipit modi, commodi quis esse voluptatem provident sed nobis cupiditate exercitationem eligendi eius!</p>
      </section>
      <section id="projects-section">
        <a id="projects" className="top-[-2rem] hidden relative"></a>
        <h2 className="inline">My Work</h2>
        <p></p>
      </section>

    </main>
  );
}
