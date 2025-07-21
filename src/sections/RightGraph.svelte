<script>
  import { Chart } from "@highcharts/svelte";
  import * as Highcharts from "highcharts";
  import "highcharts/modules/exporting";
  import ArticleText from "../lib/ArticleText.svelte";
  import Scroller from "../lib/Scroller.svelte";

  let options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "An Example Pie Chart",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Group",
        data: [
          {
            name: "Group 1",
            y: 151,
          },
          {
            name: "Group 2",
            sliced: true,
            selected: true,
            y: 180,
          },
          {
            name: "Group 3",
            y: 32,
          },
          {
            name: "Group 4",
            y: 103,
          },
          {
            name: "Group 5",
            y: 77,
          },
        ],
      },
    ],
  };
</script>

<div>
  <Scroller layout="right">
    {#snippet sticky()}
      <div class="chart">
        <img
          src="src/assets/Percent-Unbanked.png"
          alt="Black Wealth Data Center calculations from Federal Deposit
        Insurance Corporation, Survey of Unbanked and Underbanked Households,
        2017-2023."
          height="500px"
          width="400px"
          class="border-1"
        />
      </div>
      <p class="text-sm text-blue-950">
        Data source: Black Wealth Data Center calculations from Federal Deposit
        Insurance Corporation, Survey of Unbanked and Underbanked Households,
        2017-2023.
      </p>
    {/snippet}

    {#snippet scrolly()}
      <ArticleText>
        In 2023,<strong>4.2%</strong> of U.S. households were still <strong>unbanked</strong> according to data from
        the Black Wealth Data Center.
        
      </ArticleText>

      <ArticleText>
        The <strong>distrust in banks</strong> was one of the top reasons.
      </ArticleText>
    {/snippet}
  </Scroller>
</div>

<style>
  .chart {
    width: 90%;
    margin: 0px auto;
  }
</style>
