<template>
    <div class="container-fluid">
        <h2>Accuracy Information</h2>
        <div class="container">
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>SNAP Reviews</h5></div>
                        <div class="card-body">
                            <label>SNAP Reviewed:</label><br>
                            <input type="number" class="form-control" v-model="snapReviewed"><br>
                            <label>SNAP Errors:</label><br>
                            <input type="number" class="form-control" v-model="snapErrors"><br>
                            <p>SNAP Accuracy: <br> {{ snapAccuracy() }}%</p>
                            <h4>
                                <div v-if="(snapAccuracy() >= 95.00 && snapAccuracy() <= 100.00)">
                                    &#9733; &#9733; &#9733;
                                </div>

                                <div v-else-if="(snapAccuracy() >= 80.00 && snapAccuracy() < 95.00)">
                                    &#9733; &#9733;
                                </div>
                                <div v-else-if="(snapAccuracy() > 0.00 && snapAccuracy() < 80.00)">
                                    &#9733;
                                </div>
                                <div v-else>
                                    No data keyed
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>Medicaid Reviews</h5></div>
                        <div class="card-body">
                            <label>Medicaid Reviewed:</label><br>
                            <input type="number" class="form-control" v-model="medicaidReviewed"><br>
                            <label>Medicaid Errors:</label><br>
                            <input type="number" class="form-control" v-model="medicaidErrors"><br>
                            <p>Medicaid Accuracy: <br> {{ medicaidAccuracy() }}%</p>
                            <h4>
                                <div v-if="(medicaidAccuracy() >= 90.00 && medicaidAccuracy() <= 100.00)">
                                    &#9733; &#9733; &#9733;
                                </div>

                                <div v-else-if="(medicaidAccuracy() >= 75.00 && medicaidAccuracy() < 90.00)">
                                    &#9733; &#9733;
                                </div>
                                <div v-else-if="(medicaidAccuracy() > 0.00 && medicaidAccuracy() < 75.00)">
                                    &#9733;
                                </div>
                                <div v-else>
                                    No data keyed
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>TEA Reviews</h5></div>
                        <div class="card-body">
                            <label>TEA Reviewed:</label><br>
                            <input type="number" class="form-control" v-model="teaReviewed"><br>
                            <label>TEA Errors:</label><br>
                            <input type="number" class="form-control" v-model="teaErrors"><br>
                            <p>TEA Accuracy: <br> {{ teaAccuracy() }}%</p>
                            <h4>
                                <div v-if="(teaAccuracy() >= 95.00 && teaAccuracy() <= 100.00)">
                                    &#9733; &#9733; &#9733;
                                </div>

                                <div v-else-if="(teaAccuracy() >= 80.00 && teaAccuracy() < 95.00)">
                                    &#9733; &#9733;
                                </div>
                                <div v-else-if="(teaAccuracy() > 0.00 && teaAccuracy() < 80.00)">
                                    &#9733;
                                </div>
                                <div v-else>
                                    No data keyed
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="float-right">
                <router-link to="/workerdata">
                    <button class="btn btn-secondary">Back</button>
                </router-link>
                <router-link to="/Timeliness">
                    <button class="btn btn-primary">Next</button>
                </router-link>
            </div>
        </div>
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
                snapReviewed: this.$store.state.snapReviewed,
                snapErrors: this.$store.state.snapErrors,
                snapRate: this.$store.state.snapAccuracyFinal,
                medicaidReviewed: this.$store.state.mcReviewed,
                medicaidErrors: this.$store.state.mcErrors,
                medicaidRate: this.$store.state.mcAccuracyFinal,
                teaReviewed: this.$store.state.teaReviewed,
                teaErrors: this.$store.state.teaErrors,
                teaRate: this.$store.state.teaAccuracyFinal,
            }
        },
        methods: {
            snapAccuracy: function () {
                let a = ((1 - (this.snapErrors / this.snapReviewed)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.snapAccuracyFinal = a;
                    this.$store.state.snapAccuracyFinal + a;
                    this.$store.state.snapReviewed = this.snapReviewed;
                    this.$store.state.snapErrors = this.snapErrors;
                    return a;
                } else {
                    return 0;
                }
            },
            medicaidAccuracy: function () {
                let a = ((1 - (this.medicaidErrors / this.medicaidReviewed)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.mcAccuracyFinal = a;
                    this.$store.state.mcAccuracyFinal + a;
                    this.$store.state.mcReviewed = this.medicaidReviewed;
                    this.$store.state.mcErrors = this.medicaidErrors;
                    return a;
                } else {
                    return 0;
                }
            },
            teaAccuracy: function () {
                let a = ((1 - (this.teaErrors / this.teaReviewed)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.teaAccuracyFinal = a;
                    this.$store.state.teaAccuracyFinal + a;
                    this.$store.state.teaReviewed = this.teaReviewed;
                    this.$store.state.teaErrors = this.teaErrors;
                    return a;
                } else {
                    return 0;
                }
            },
        }
    }
</script>

<style>

</style>
