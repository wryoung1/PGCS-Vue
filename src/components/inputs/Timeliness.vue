<template>
    <div class="container-fluid">
        <h2>Timeliness Information</h2>
        <div class="container">
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>SNAP Timeliness</h5></div>
                        <div class="card-body">
                            <label>SNAP Worked:</label><br>
                            <input type="number" class="form-control" v-model="snapWorked"><br>
                            <label>SNAP Late:</label><br>
                            <input type="number" class="form-control" v-model="snapLate"><br>
                            <p>SNAP Timeliness: <br> {{ snapAccuracy() }}%</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>Medicaid Timeliness</h5></div>
                        <div class="card-body">
                            <label>Medicaid Worked:</label><br>
                            <input type="number" class="form-control" v-model="medicaidWorked"><br>
                            <label>Medicaid Late:</label><br>
                            <input type="number" class="form-control" v-model="mcLate"><br>
                            <p>Medicaid Timeliness: <br> {{ medicaidAccuracy() }}%</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>TEA Timeliness</h5></div>
                        <div class="card-body">
                            <label>TEA Worked:</label><br>
                            <input type="number" class="form-control" v-model="teaWorked"><br>
                            <label>TEA Late:</label><br>
                            <input type="number" class="form-control" v-model="teaLate"><br>
                            <p>TEA Timeliness: <br> {{ teaAccuracy() }}%</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>SAR Timeliness</h5></div>
                        <div class="card-body">
                            <label>SAR's Worked:</label><br>
                            <input type="number" class="form-control" v-model="sarWorked"><br>
                            <label>SAR's Late:</label><br>
                            <input type="number" class="form-control" v-model="sarLate"><br>
                            <p>SAR Timeliness: <br> {{ sarTimeliness() }}%</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>Expedite Timeliness</h5></div>
                        <div class="card-body">
                            <label>Expedite's Worked:</label><br>
                            <input type="number" class="form-control" v-model="expWorked"><br>
                            <label>Expedite's Late:</label><br>
                            <input type="number" class="form-control" v-model="expLate"><br>
                            <p>Expedite Timeliness: <br> {{ expTimeliness() }}%</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"><h5>MAGI Timeliness</h5></div>
                        <div class="card-body">
                            <label>MAGI Tasks Cleared:</label><br>
                            <input type="number" class="form-control" v-model="magiWorked"><br>
                            <label>MAGI Tasks Late:</label><br>
                            <input type="number" class="form-control" v-model="magiLate"><br>
                            <p>MAGI Timeliness: <br> {{ magiTimeliness() }}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="float-right">
            <router-link to="/Accuracy">
                <button class="btn btn-secondary">Back</button>
            </router-link>
            <router-link to="/Production">
                <button class="btn btn-primary">Next</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //SNAP NUMBERS
                snapWorked: this.$store.state.snapWorked,
                snapLate: this.$store.state.snapLate,
                snapRate: this.$store.state.snapTimelinessFinal,

                sarWorked: this.$store.state.sarWorked,
                sarLate: this.$store.state.sarLate,
                sarRate: this.$store.state.sarTimelinessFinal,

                expWorked: this.$store.state.expWorked,
                expLate: this.$store.state.expLate,
                expReassigned: this.$store.state.expTimelinessFinal,

                //MEDICAID NUMBERS
                medicaidWorked: this.$store.state.mcWorked,
                mcLate: this.$store.state.mcLate,
                medicaidRate: this.$store.state.mcTimelinessFinal,

                magiWorked: this.$store.state.magiWorked,
                magiLate: this.$store.state.magiLate,
                magiReassigned: this.$store.state.magiTimelinessFinal,

                //TEA NUMBERS
                teaWorked: this.$store.state.teaWorked,
                teaLate: this.$store.state.teaLate,
                teaRate: this.$store.state.teaTimelinessFinal,

                //PRODUCTION MATH
                applicationsWorked: this.$store.state.appsWorked,
            }
        },
        methods: {
            snapAccuracy: function () {
                let a = ((1 - (this.snapLate / this.snapWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.snapTimelinessFinal = a;
                    this.$store.state.snapTimelinessFinal + a;
                    this.$store.state.snapWorked = this.snapWorked;
                    this.$store.state.snapLate = this.snapLate;
                    return a;
                } else {
                    return 0;
                }
            },
            sarTimeliness: function () {
                let a = ((1 - (this.sarLate / this.sarWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.sarTimelinessFinal = a;
                    this.$store.state.sarTimelinessFinal + a;
                    this.$store.state.sarWorked = this.sarWorked;
                    this.$store.state.sarLate = this.sarLate;
                    return a;
                } else {
                    return 0;
                }
            },
            expTimeliness: function () {
                let a = ((1 - (this.expLate / this.expWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.expTimelinessFinal = a;
                    this.$store.state.expTimelinessFinal + a;
                    this.$store.state.expWorked = this.expWorked;
                    this.$store.state.expLate = this.expLate;
                    return a;
                } else {
                    return 0;
                }
            },
            medicaidAccuracy: function () {
                let a = ((1 - (this.mcLate / this.medicaidWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.mcTimelinessFinal = a;
                    this.$store.state.mcTimelinessFinal + a;
                    this.$store.state.mcWorked = this.medicaidWorked;
                    this.$store.state.mcLate = this.mcLate;
                    return a;
                } else {
                    return 0;
                }
            },
            magiTimeliness: function () {
                let a = ((1 - (this.magiLate / this.magiWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.magiTimelinessFinal = a;
                    this.$store.state.magiTimelinessFinal + a;
                    this.$store.state.magiWorked = this.magiWorked;
                    this.$store.state.magiLate = this.magiLate;
                    return a;
                } else {
                    return 0;
                }
            },
            teaAccuracy: function () {
                let a = ((1 - (this.teaLate / this.teaWorked)) * 100).toFixed(2);
                if (a >= 0) {
                    this.$store.state.teaTimelinessFinal = a;
                    this.$store.state.teaTimelinessFinal + a;
                    this.$store.state.teaWorked = this.teaWorked;
                    this.$store.state.teaLate = this.teaLate;
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
