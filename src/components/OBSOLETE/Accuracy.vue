<template>
    <div>
        <p>Programs Worked: {{ programsWorked }}</p>
        <h2>Accuracy!</h2>
        <label>SNAP Reviewed:</label><br>
        <input type="number" v-model="snapReviewed"><br>
        <label>SNAP Errors:</label><br>
        <input type="number" v-model="snapErrors"><br>
        <p>SNAP Accuracy: {{ snapAccuracy() }}%</p>
        <label>Medicaid Reviewed:</label><br>
        <input type="number" v-model="medicaidReviewed"><br>
        <label>Medicaid Errors:</label><br>
        <input type="number" v-model="medicaidErrors"><br>
        <p>Medicaid Accuracy: {{ medicaidAccuracy() }}%</p>
        <label>TEA Reviewed:</label><br>
        <input type="number" v-model="teaReviewed"><br>
        <label>TEA Errors:</label><br>
        <input type="number" v-model="teaErrors"><br>
        <p>TEA Accuracy: {{ teaAccuracy() }}%</p>
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                type: String
            },
            programsWorked: Array
        },
        data() {
            return {
                snapReviewed: 0,
                snapErrors: 0,
                snapRate: -1,
                medicaidReviewed: 0,
                medicaidErrors: 0,
                medicaidRate: -1,
                teaReviewed: 0,
                teaErrors: 0,
                teaRate: -1,
            }
        },
        methods: {
            snapAccuracy: function () {
                this.outcome = ((1 - (this.snapErrors / this.snapReviewed)) * 100).toFixed(2);
                if (this.outcome >= 0) {
                    return this.outcome;
                } else {
                    return 0;
                }
            },
            medicaidAccuracy: function () {
                this.outcome = ((1 - (this.medicaidErrors / this.medicaidReviewed)) * 100).toFixed(2);
                if (this.outcome >= 0) {
                    return this.outcome;
                } else {
                    return 0;
                }
            },
            teaAccuracy: function () {
                this.outcome = ((1 - (this.teaErrors / this.teaReviewed)) * 100).toFixed(2);
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
