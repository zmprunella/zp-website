<!-- Contact.svelte -->
<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { sections } from "./store.js";

  let contact;

  onMount(() => {
    sections.update((values) => {
      values.contact = contact;
      return values;
    });
  });
</script>

<div id="contact" bind:this={contact}>
  <h1 class="glow">Zane Prunella</h1>
  <p>💻 Front-end Developer 🎨</p>
  <p>JavaScript - React | Vue | Svelte | WordPress</p>
  <!-- <p>& Music Producer 🎧</p> -->
  <p>zane.prunella@gmail.com</p>

  <div class="social-links">
    <a href="https://github.com/zmprunella" target="_blank" class="btn">
      <i class="fab fa-github" />
    </a>
    <a
      href="https://www.linkedin.com/in/zprunella/"
      target="_blank"
      class="btn"
    >
      <i class="fab fa-linkedin-in" />
    </a>
    <!-- <a
      href="https://distrokid.com/hyperfollow/enbrayer/horizon"
      target="_blank"
      class="btn"
    >
      🎧</a
    > -->
  </div>
</div>

<style>
  #contact {
    color: #fff; /* adjust the color as per your need */
    text-align: center;
    margin-top: 25vh; /* This pushes the contact info down to the middle of the viewport */
    font-family: "Lora", serif;
    background-color: rgba(0, 179, 255, 0.17);
    border: 1px solid white;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 3rem;
    padding-top: 1rem;
    border-radius: 25px;
    font-size: 24px;
  }

  .btn {
    display: inline-block;
    margin-top: 1em;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 1rem;
    text-decoration: none;
    color: #fcfcff;
    background-color: #0096870e;
    border: 1px solid white;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    font-size: 26px;
  }

  .btn:hover {
    background-color: #ffffff6c;
  }

  @media (max-width: 600px) {
    #contact {
      margin-top: 20vh;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 16px;
    }

    .btn {
      padding: 0.5rem;
      margin: 0.5rem;
      font-size: 20px;
    }
  }
</style>
