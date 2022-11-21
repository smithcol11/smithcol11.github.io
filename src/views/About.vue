<script setup>
import FavGridItem from "../components/FavGridItem.vue";
</script>

<template>
  <div class="pageView">
    <img
      src="../assets/images/me1.jpg"
      alt="A photo of me, smiling in a coffee shop."
      class="h-96 w-64 shadow-2xl rounded-3xl mx-auto"
    />
    <p class="w-5/6 max-w-2xl mx-auto pt-5">
      Hey! My name is Colin, thank you for taking the time to checkout my page:)
    </p>
    <p class="w-5/6 max-w-2xl mx-auto pt-5">
      I suppose an about page should be insightful as to who I am. I guess I am
      just like everyone else; I exist (maybe?), have pointless interests that
      no one should care about, am hurling through space on this rock waiting
      for the inevitable heat death of the universe, while constantly trying to
      avoid nihilistic thoughts about my own pointlessness, pain in the world,
      and those who would subvert humanity for personal gain.
    </p>
    <p class="w-5/6 max-w-2xl mx-auto pt-5">
      On a more reasonable and upbeat note, I enjoy rollerblading, video games,
      and computers, both hardware as well as software. I have very few
      favorites in life, but I have identified some to share here. Click on the
      images below to check them out!
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-5 mx-auto pt-10">
      <FavGridItem
        link="https://open.spotify.com/artist/4Y3ctZWgKkurt1T1D7RYyv"
        img-src="assets/images/downy1.png"
        alt-text="Image of Downy album cover, 第一作品集『無題』."
      />
      <FavGridItem
        link="https://open.spotify.com/artist/4Y3ctZWgKkurt1T1D7RYyv"
        img-src="assets/images/downy2.png"
        alt-text="Image of Downy album cover, 第三作品集『無題』."
      />
      <FavGridItem
        link="https://open.spotify.com/artist/4Y3ctZWgKkurt1T1D7RYyv"
        img-src="assets/images/downy3.png"
        alt-text="Image of a Downy album cover, 第六作品集『無題』."
      />
      <FavGridItem
        link="https://www.youtube.com/watch?v=-xwoGzZVk7w"
        img-src="assets/images/bloodborne.png"
        alt-text="Image of Bloodborne game cover"
      />
      <FavGridItem
        link="https://jetsetradio.fandom.com/wiki/Jet_Set_Radio_Future"
        img-src="assets/images/jsrfCover.png"
        alt-text="Image of JSRF game cover."
      />
      <FavGridItem
        link="https://www.youtube.com/watch?v=fs8ZveNZQ8g"
        img-src="assets/images/orca.png"
        alt-text="Image of an Orca jumping out of the water."
      />
    </div>
  </div>
</template>

<style>
.w-128 {
  width: 32rem;
}
</style>
