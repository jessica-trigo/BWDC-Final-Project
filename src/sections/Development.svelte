<script>
  import ArticleText from "../lib/ArticleText.svelte";
  import Scroller from "../lib/Scroller.svelte";
</script>

<main>
  <div class="py-28">
    <h1>Where does the lack of trust originate from?</h1>
  </div>
  <div class="border-5 border-red-400 bg-red-100">
    <h2 class="py-10">1. Socioeconomic Factors</h2>
    <p class="text-xl text-blue-950 p-5">
      Lower income, inconsistent wages, restricted access to technology, and
      unstable jobs are all linked to mistrust of banks.
    </p>
    <h2 class="py-10">2. Historical and Racial Context</h2>
    <p class="text-xl text-blue-950 p-5">
      Although Black and Latino people make up just 32% of the U.S. population,
      they represent 64% of the unbanked, according to the FDIC (BCG Global).
      The Black Wealth Data Center reports that 25.5% of Black households
      without bank accounts cite “don’t trust banks” as the reason.
    </p>
    <p class="text-xl text-blue-950 p-5 pb-32">
      These feelings have their roots in a long history of racial
      discrimination, which damaged trust over many years through discriminatory
      lending policies and redlining.
    </p>
  </div>
</main>

<style>
  h1 {
    font-family: "National 2 Web";
    font-feature-settings:
      "kern",
      "onum" 0,
      "liga" 0,
      "tnum";
    color: #db222a;
    font-size: 40px;
    line-height: 0.8em;
    font-weight: 700;
  }
</style>
