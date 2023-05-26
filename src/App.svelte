<script>
  import { onMount } from "svelte";
  import { sections, activeSection } from "./store.js";
  import Sidebar from "./Sidebar.svelte";
  import SpaceBackground from "./SpaceBackground.svelte";
  import Contact from "./Contact.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";

  let elements = [];
  let sectionValues;

  sections.subscribe((values) => {
    sectionValues = values;
    elements = Object.values(values);
  });

  function handleComponentLoaded({ detail }) {
    elements.push(detail.node);
    sections.update((values) => ({ ...values, [detail.name]: detail.node }));
  }

  onMount(() => {
    function adjustOpacityAndActiveSection() {
      let visibleSectionName = "";

      elements.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const middle = (rect.top + rect.bottom) / 2;

          // calculate the opacity
          const opacity =
            1 -
            Math.abs(window.innerHeight / 2 - middle) /
              (window.innerHeight / 2);
          section.style.opacity = opacity;

          // determine if the section is in view
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            visibleSectionName = Object.keys(sectionValues)[index];
          }
        }
      });

      activeSection.set(visibleSectionName);
    }

    window.addEventListener("scroll", adjustOpacityAndActiveSection);
    adjustOpacityAndActiveSection();

    return () => {
      window.removeEventListener("scroll", adjustOpacityAndActiveSection);
    };
  });
</script>

<SpaceBackground />
<Sidebar />

<div id="content">
  <Contact on:loaded={handleComponentLoaded} />
  <About on:loaded={handleComponentLoaded} />
  <Projects on:loaded={handleComponentLoaded} />
</div>

<style>
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    position: relative;
  }
</style>
