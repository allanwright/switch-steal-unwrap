<script setup lang="ts">
import TurnButton from "@/components/TurnButton.vue";
import TurnAction from "@/components/TurnAction.vue";
import ActionSelectionButton from "@/components/ActionSelectionButton.vue";
import IconHouse from "@/components/icons/IconHouse.vue";
</script>

<template>
  <div>
    <RouterLink to="/" class="home">
      <IconHouse />
    </RouterLink>
    <ActionSelectionButton />
    <TurnButton />
    <TurnAction />
  </div>
</template>

<style>
.home {
  display: block;
  margin: 10px 10px 10px 10px;
}
</style>
