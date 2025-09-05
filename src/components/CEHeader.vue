<script setup>
import {
  BButton,
  BCollapse,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
} from 'bootstrap-vue-next'
</script>

<template>
  <b-navbar variant="dark-subtle" toggleable="md">
    <b-navbar-brand tag="h1" class="mb-0"> Crypto Exchange </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-auto mb-2 mb-lg-0">
        <b-button variant="outline-secondary"> Exchange history </b-button>
        <!--    TODO: history modal should be opened here    -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
