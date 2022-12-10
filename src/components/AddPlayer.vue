<template>
  <div>
    <div>Add Player</div>
    <input type="text" title="Name" placeholder="Name" v-model="name" />
    <IconPlus @click="addPlayer()" />
  </div>
</template>

<script lang="ts">
import IconPlus from "@/components/icons/IconPlus.vue";
import { usePlayerStore } from "@/stores/players";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const playerStore = usePlayerStore();

    const testMe = (name: string) => {
      playerStore.addPlayer(name);
    };

    return {
      playerStore,
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
