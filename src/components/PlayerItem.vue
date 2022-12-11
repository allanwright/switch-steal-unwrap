<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import IconTrash from "@/components/icons/IconTrash.vue";

const props = defineProps<{
  id: number;
  name: string;
}>();

const gameStore = useGameStore();

const deletePlayer = function () {
  gameStore.deletePlayer(props.id);
};
</script>

<template>
  <li>{{ name }}<IconTrash @click="deletePlayer()" /></li>
</template>
