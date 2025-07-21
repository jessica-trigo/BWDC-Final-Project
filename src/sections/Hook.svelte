<script>
  let hook = "What are some of the most random spots where you’ve found money?";
  let text = "I'll go first!";
  let context =
    "Although these practices were more common during the Great Depression (1929-1939), they remain prevalent in many communities today due to factors ranging from socioeconomic to cultural reasons.";

  /*const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("Observed:", entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const spots = document.querySelectorAll(".spot");

  spots.forEach((el) => observer.observe(el)); */

  //TRY TO DEBUG LATER

  /*
  import { onMount } from "svelte";

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("Observed:", entry.target); // Debug log

        if (entry.isIntersecting) {
          console.log("Revealing:", entry.target); // Debug log
          entry.target.classList.add("show");
        }
      });
    });

    const spots = document.querySelectorAll(".spot");
    console.log("Found", spots.length, "spots"); // Debug log

    spots.forEach((el) => observer.observe(el));
  });*/
</script>

<main class="border-5 border-red-400 bg-red-100">
  <div class="section">
    <h2 class="pt-60 px-30">{hook}</h2>
    <p class="p-12 pimg">{text}</p>

    <div class="grid grid-cols-3 pt-36">
      <div class="spot col-span-1">
        <img
          src="src/assets/1.svg"
          alt="Flower Vase"
          height="500px"
          width="400px"
        />
        <p class="pimg bg-amber-50">Under a vase</p>
      </div>

      <div class="spot col-span-1">
        <img src="src/assets/2.svg" alt="Drawer" height="500px" width="400px" />
        <p class="pimg bg-amber-50">In a drawer</p>
      </div>

      <div class="spot col-span-1">
        <img
          src="src/assets/3.svg"
          alt="Book"
          height="500px"
          width="400px"
        />
        <p class="pimg bg-amber-50">In a book</p>
      </div>
    </div>

    <div>
      <img
        src="src/assets/4.svg"
        alt="Mattress"
        height="500px"
        width="400px"
      />
      <p class="pimg bg-amber-50">And of course… under the mattress</p>
    </div>
    <p class=" p-40 pimg">{context}</p>
  </div>
</main>

<style>
</style>
