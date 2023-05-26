<script>
  import { onMount, onDestroy } from "svelte";
  import * as THREE from "three";

  let scene, camera, renderer;
  let starGeo, stars;
  let container; // Reference to the div that will contain the canvas

  onMount(() => {
    // Create scene, camera and renderer
    scene = new THREE.Scene();

    let colors = [];
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    // Append renderer.domElement to container instead of document.body
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create stars
    starGeo = new THREE.BufferGeometry();
    let positions = [];

    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      positions.push(star.x, star.y, star.z);

      // generate a random color for each star
      let color = new THREE.Color(0xffffff);
      color.setHSL(Math.random(), 1.0, 0.4);
      colors.push(color.r, color.g, color.b);
    }

    let float32Positions = Float32Array.from(positions);
    starGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(float32Positions, 3)
    );

    // add colors attribute to the geometry
    let float32Colors = Float32Array.from(colors);
    starGeo.setAttribute("color", new THREE.BufferAttribute(float32Colors, 3));

    let sprite = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );

    let starMaterial = new THREE.PointsMaterial({
      size: 0.6,
      // map: sprite,
      vertexColors: true, // indicate that the material will use vertex colors
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // Resize handler
    window.addEventListener("resize", onWindowResize, false);

    // Animation loop
    animate();
  });

  // Window resize handler
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onDestroy(() => {
    // cleanup if component is destroyed
    renderer.dispose();
    scene.dispose();
  });

  function animate() {
    let positions = starGeo.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += 0.4; // move each star along the z-axis

      if (positions[i + 2] > 200) {
        positions[i] = Math.random() * 600 - 300; // randomly reposition x
        positions[i + 1] = Math.random() * 600 - 300; // randomly reposition y
        positions[i + 2] = -200; // reset z position
      }
    }

    starGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
</script>

<div bind:this={container} class="background-scene" />
<!-- Bind the div to the container variable -->

<div class="content">
  <slot />
</div>

<style>
  .background-scene {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }
</style>
