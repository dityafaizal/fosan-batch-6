<template>
    <div>
        <div>ini profile</div>
        <div v-if="getStateApi == null">no data</div>
        <div v-else>data dari state API {{ getStateApi.data.latitude }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    computed: {
        getStateApi() {
            return this.$store.state.stateApi
        }
    }
}
</script>

<style>

</style>