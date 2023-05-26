<!-- Project.svelte -->
<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let imgSrc;
  export let githubUrl;
  export let appUrl;
  export let title;

  const dispatch = createEventDispatcher();
  let ref;

  onMount(() => {
    dispatch("loaded", { node: ref });
  });
</script>

<div class="project" bind:this={ref}>
  <h2 class="title">{title}</h2>
  <div class="image-container">
    <img src={imgSrc} alt="" />
  </div>

  <div class="buttons">
    <a href={githubUrl} target="_blank" rel="noopener" class="btn">GitHub</a>
    <a href={appUrl} target="_blank" rel="noopener" class="btn">View App</a>
  </div>
</div>

<style>
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .project .image-container {
    width: 250px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* To ensure the image doesn't overflow the div */
  }

  .project .image-container img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
  }

  .buttons {
    margin: 1rem;
    width: 100%;
  }

  .btn {
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    background-color: #09090900;
    color: white;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    border: 2px solid #fefefe;
  }

  .btn:hover {
    background-color: #ffffff92;
  }
  :global(.project) {
    flex: 1 0 calc(50% - 1em);
  }
  .title {
    color: white;
    font-family: "Lora", serif;
  }
</style>
