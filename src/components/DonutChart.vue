<template>
  <div
    class="donut-chart"
    :style="{ background: conicGradient }"
    :percentage="percentage"
  ></div>
</template>

<script>
export default {
  name: "DonutChart",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    conicGradient() {
      return `conic-gradient(#ff9900 0% ${this.percentage}%, #e6e6e6 ${this.percentage}% 100%)`;
    },
  },
};
</script>

<style>
.donut-chart {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
}

.donut-chart::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.donut-chart::after {
  content: attr(percentage) "%";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
