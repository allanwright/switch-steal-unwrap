<template>
  <div>
    <div>Add Player</div>
    <input type="text" title="Name" placeholder="Name" v-model="name" />
    <IconPlus @click="addPlayer()" />
  </div>
</template>

<script lang="ts">
import IconPlus from "@/components/icons/IconPlus.vue";
import { useGameStore } from "@/stores/game";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const gameStore = useGameStore();

    return {
      gameStore,
    };
  },
  components: {
    IconPlus,
  },
  data() {
    return {
      name: "" as string,
    };
  },
  methods: {
    addPlayer: function () {
      this.gameStore.addPlayer(this.name);
      this.name = "";
    },
  },
});
</script>
