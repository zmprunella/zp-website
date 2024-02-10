<!-- Projects.svelte -->
<script>
  import Project from "./Project.svelte";
  import { onMount } from "svelte";
  import { sections } from "./store.js";

  let projects;

  onMount(() => {
    sections.update((values) => {
      values.projects = projects;
      return values;
    });
  });
</script>

<div id="projects" bind:this={projects}>
  <h1 class="glow">Projects</h1>
  <div class="projects-container">
    <Project
      title="Lead WordPress Developer"
      imgSrc="/images/anch.png"
      appUrl="https://ancherz.com/"
    />
    <Project
      title="WordPress Developer"
      imgSrc="/images/ynk.png"
      appUrl="https://ynkconstructions.com/"
    />
    <Project
      title="Vue Synth"
      imgSrc="/images/synth.png"
      githubUrl="https://github.com/zmprunella/vue-typescript-synth"
      appUrl="https://zesty-moxie-b93139.netlify.app/"
    />
    <Project
      title="React Pokedex"
      imgSrc="/images/poke1.png"
      githubUrl="https://github.com/zmprunella/vue-typescript-synth"
      appUrl="https://zippy-praline-5fe3c6.netlify.app/"
    />
  </div>
  <div bind:this={projects} />
</div>

<style>
  #projects {
    margin-top: 5vh;
    margin-bottom: 20vh;
    text-align: center;
    border: 1px solid whitesmoke;
    border-radius: 20px;
    background-color: rgba(0, 179, 255, 0.12);
  }
  .projects-container {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    #projects {
      margin-bottom: 10vh;
    }
    .projects-container {
      flex-direction: column; /* Stack project items vertically on small screens */
      padding: 20px;
      font-size: 10px;
    }
  }
</style>
