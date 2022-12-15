<script setup lang="ts">
import IconTrash from "@/components/icons/IconTrash.vue";
import PlayerService from "@/services/playerService";

const props = defineProps<{
  id: number;
  name: string;
}>();

const playerService = new PlayerService();

const deletePlayer = function () {
  playerService.deletePlayer(props.id);
};
</script>

<template>
  <li>
    <IconTrash @click="deletePlayer()" />
    <span>{{ name }}</span>
  </li>
</template>

<style scoped>
li {
  border-color: var(--colour-1);
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  margin: 5px auto 5px auto;
  padding: 5px 0 5px 0;
  width: 269px;
}

svg {
  padding-left: 10px;
}

span {
  padding: 0 10px 0 10px;
}
</style>
