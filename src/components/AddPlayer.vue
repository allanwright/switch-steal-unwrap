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

    const testMe = (name: string) => {
      gameStore.addPlayer(name);
    };

    return {
      playerStore: gameStore,
      testMe,
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
      this.testMe(this.name);
    },
  },
});
</script>
