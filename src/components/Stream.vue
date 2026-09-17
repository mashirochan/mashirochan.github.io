<template>
  <div class="stream-container">
    <iframe
      :src="streamUrl"
      title="infiniti's Live Stream"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script setup lang="ts">
const streamUrl =
  "https://customer-1wzvrkdfrll0akye.cloudflarestream.com/db8f3fa8b0989dbc723f83f100b4be62/iframe";
</script>

<style scoped>
.stream-container {
  width: 80%;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
}

.stream-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
</style>