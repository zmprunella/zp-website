<!-- <script>
  import { onMount } from "svelte";
  import { sections } from "./store.js";

  let about;

  onMount(() => {
    sections.update((values) => {
      values.about = about;
      return values;
    });
  });
</script>

About.svelte
<div class="about-section" bind:this={about}>
  <h1 class="glow">About</h1>
  Hi, I'm a software developer 💻 and audio producer 🎧 who is curious about how
  technology connects our world. I'm always seeking new ways to contribute my skills
  to interesting projects ⚙️
  <h3 class="h3">Background</h3>
  I bring several years of professional experience across diverse industries, including,
  software development, audio/music production 🎧, sales 🚗, and aviation 🛩. This
  unique background shapes my approach to software development, providing me with
  a broad perspective and a deep understanding of different user needs.
  <h3 class="h3">Skills</h3>
  JavaScript - React / Vue / Svelte - This site was built with Svelte - / HTML /
  CSS / UIUX / WordPress / Customer Support / Hubspot / Salesforce / Ableton
  <h3 class="h3">Goal</h3>
  I'm eager to find opportunities where I can contribute creatively and collaboratively
  to projects that value cutting-edge technology. Feel free to reach out anytime
  ☀️
</div>

<style>
  .about-section {
    text-align: center;
    margin-top: 10vh;
    width: 40%;
    font-size: 18px;
    color: aliceblue;
    border: 1px solid white;
    border-radius: 20px;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 40px;
    font-family: "Lora", serif;

    background-color: rgba(0, 179, 255, 0.15);
  }
  .h3 {
    margin: 10px;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .about-section {
      width: 70%; /* Increase width to take more space in mobile view */
      padding-left: 15px;
      padding-right: 15px;
      font-size: 14px; /* Decrease font size to better fit mobile screens */
    }
  }
</style> -->
