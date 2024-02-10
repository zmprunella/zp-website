<!-- Sidebar.svelte -->
<script>
  import { sections, activeSection } from "./store.js"; // Make sure to adjust the path

  let sectionValues;

  // Subscribe to the store to get the latest values
  sections.subscribe((values) => {
    sectionValues = values;
  });

  function scrollTo(sectionName) {
    const section = sectionValues[sectionName];
    if (section && section.scrollIntoView) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // Adjust the alignment as needed ("start", "center", "end")
      });
    }
  }
</script>

<aside>
  <button
    class:active={$activeSection === "contact"}
    on:click={() => scrollTo("contact")}
  >
    Contact
  </button>

  <button
    class:active={$activeSection === "projects"}
    on:click={() => scrollTo("projects")}
  >
    Projects
  </button>
  <button
    class:active={$activeSection === "about"}
    on:click={() => scrollTo("about")}
  >
    About
  </button>
</aside>

<style>
  .active {
    animation: glow 5s ease-in-out infinite alternate;
    text-decoration: underline;
  }

  @keyframes active {
    0% {
      color: white;
      text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000,
        0 0 20px #ff0000;
    }

    25% {
      color: rgb(255, 255, 255);
      text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00,
        0 0 20px #00ff00;
    }

    50% {
      color: cyan;
      text-shadow: 0 0 5px #0000ff, 0 0 10px #0000ff, 0 0 15px #0000ff,
        0 0 20px #0000ff;
    }

    75% {
      color: rgb(255, 255, 255);
      text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff,
        0 0 20px #ff00ff;
    }

    100% {
      color: rgb(255, 255, 255);
      text-shadow: 0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 15px #ffa500,
        0 0 20px #ffa500;
    }
  }
  aside {
    position: fixed;
    right: 3%; /* Adjust this percentage to move the sidebar horizontally */
    top: 50%; /* Centers the sidebar vertically */
    transform: translateY(
      -50%
    ); /* Ensures the centering is based on the middle of the sidebar, not its top */
    padding: 1em;
    display: flex;
    flex-direction: column;
    z-index: 100; /* Ensure it's above other elements */
    background-color: transparent; /* Clear background */
    border: 1px solid white; /* White outline */
    border-radius: 10px; /* Rounded corners */
  }

  button {
    margin: 1em;
    color: white; /* White text */
    background-color: transparent; /* Clear background */
    border: none; /* Removes default button styling */
    cursor: pointer; /* Makes it clear that the button is interactive */
    font-family: "Orbitron", sans-serif;
    letter-spacing: 4px;
    font-size: 16px;
  }

  button:hover {
    color: #12c8ff; /* Lightens the text color slightly when hovered */
  }

  @media (max-width: 600px) {
    aside {
      right: 0; /* Align sidebar with the right edge of the screen */
      top: auto; /* Remove vertical positioning */
      bottom: 0; /* Move the sidebar to the bottom of the screen */
      transform: none; /* Remove the vertical offset */
      flex-direction: row; /* Align the buttons horizontally */
      justify-content: space-around; /* Evenly distribute horizontal space */
    }

    button {
      margin: 0.5em; /* Increase spacing around buttons for easier tapping */
      font-size: 15px; /* Increase font size for readability */
    }
  }
</style>
