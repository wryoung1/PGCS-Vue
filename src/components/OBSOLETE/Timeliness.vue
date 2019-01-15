<template>
    <div>
        <h2>Timeliness Here!</h2>
        <label>SNAP Worked:</label><br>
        <input type="number" v-model="snapWorked"><br>
        <label>SNAP Late:</label><br>
        <input type="number" v-model="snapLate"><br>
        <p>SNAP Timeliness: {{ snapAccuracy() }}%</p>
        <label>Medicaid Worked:</label><br>
        <input type="number" v-model="mcWorked"><br>
        <label>Medicaid Late:</label><br>
        <input type="number" v-model="mcLate"><br>
        <p>Medicaid Timeliness: {{ medicaidAccuracy() }}%</p>
        <label>TEA Worked:</label><br>
        <input type="number" v-model="teaWorked"><br>
        <label>TEA Late:</label><br>
        <input type="number" v-model="teaLate"><br>
        <p>TEA Timeliness: {{ teaAccuracy() }}%</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                snapWorked: this.$store.state.snapWorked,
                snapLate: this.$store.state.snapLate,
                snapRate: this.$store.state.snapTimelinessFinal,
                mcWorked: this.$store.state.mcWorked,
                mcLate: this.$store.state.mcLate,
                medicaidRate: this.$store.state.mcTimelinessFinal,
                teaWorked: this.$store.state.teaWorked,
                teaLate: this.$store.state.teaLate,
                teaRate: this.$store.state.teaTimelinessFinal,
                sarWorked: 0,
                sarLate: 0,
                sarTimelinessFinal: 0,
                expWorked: 0,
                expLate: 0,
                expTimelinessFinal: 0,
                magiWorked: 0,
                magiLate: 0,
                magiTimelinessFinal: 0,
            }
        },
        methods: {
            snapAccuracy: function () {
                this.outcome = ((1 - (this.snapLate / this.snapWorked)) * 100).toFixed(2);
                if (this.outcome >= 0) {
                    return this.outcome;
                } else {
                    return 0;
                }
            },
            medicaidAccuracy: function () {
                this.outcome = ((1 - (this.mcLate / this.mcWorked)) * 100).toFixed(2);
                if (this.outcome >= 0) {
                    return this.outcome;
                } else {
                    return 0;
                }
            },
            teaAccuracy: function () {
                this.outcome = ((1 - (this.teaLate / this.teaWorked)) * 100).toFixed(2);
                if (this.outcome >= 0) {
                    return this.outcome;
                } else {
                    return 0;
                }
            },

        }
    }
</script>

<style>

</style>
