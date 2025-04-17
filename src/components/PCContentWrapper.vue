<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.wrapper {
  margin: 0 auto;
  padding: 0;
  max-width: 100%;

  @media (min-width: 768px) {
    padding: 0 40px;
    max-width: 1200px;
  }
}
</style>
