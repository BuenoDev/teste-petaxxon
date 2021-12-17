<template>
    <div>
        <app-navbar></app-navbar>

        <router-view></router-view>
    </div>
</template>
<script>

import AppNavbar from './AppNavbar.vue'


export default {
    components: {
        AppNavbar
    }

}
</script>
