<template>
    <div class="container-fluid">
        <h2>Production Information</h2>
        <div class="container">
            <div class="row">
                <div class="col col-lg-auto">
                    <div id="snapProduction">
                        <div class="card bg-light mb-3" style="max-width: 18rem;">
                            <div class="card-header"><h5>Application Production</h5></div>
                            <div class="card-body">
                                <label>Worked:</label><br>
                                <input type="number" class="form-control" v-model.number="snapWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="snapReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathAppFunction() }}/day</p>
                                <!--                                <h4>
                                                                    <div v-if="this.$store.state.applicationsWorkedDaily >= '6' && this.$store.state.applicationsWorkedDaily < '1000'">
                                                                        &#9733; &#9733; &#9733;
                                                                    </div>

                                                                    <div v-else-if="(this.$store.state.applicationsWorkedDaily < '6' && this.$store.state.applicationsWorkedDaily >= '3')">
                                                                        &#9733; &#9733;
                                                                    </div>

                                                                    <div v-else-if="(this.$store.state.applicationsWorkedDaily < '3' && this.$store.state.applicationsWorkedDaily > '0')">
                                                                        &#9733;
                                                                    </div>
                                                                    <div v-else>
                                                                        No data keyed
                                                                    </div>
                                                                </h4>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div id="sarProduction">
                        <div class="card bg-light mb-3" style="max-width: 18rem;">
                            <div class="card-header"><h5>SAR Production</h5></div>
                            <div class="card-body">
                                <label>Worked:</label><br>
                                <input type="number" class="form-control" v-model.number="sarWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="sarReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathSarFunction() }}/day</p>
                                <!--<h4>
                                    <div v-if="mathSarFunction() >= '10'">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathSarFunction() < '10' && mathSarFunction() >= '7')">
                                        &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathSarFunction() < '7' && mathSarFunction() > '0')">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h4>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div id="expProduction">
                        <div class="card bg-light mb-3" style="max-width: 18rem;">
                            <div class="card-header"><h5>Expedite Production</h5></div>
                            <div class="card-body">
                                <label>Worked:</label><br>
                                <input type="number" class="form-control" v-model.number="expWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="expReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathExpFunction() }}/day</p>
                                <!--<h4>
                                    <div v-if="mathExpFunction() >= '10'">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathExpFunction() < '10' && mathExpFunction() >= '7')">
                                        &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathExpFunction() < '7' && mathExpFunction() > '0')">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h4>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-auto">
                    <div id="magiProduction">
                        <div class="card bg-light md4" style="max-width: 18rem;">
                            <div class="card-header"><h5>MAGI Production</h5></div>
                            <div class="card-body">
                                <label>Tasks Cleared:</label><br>
                                <input type="number" class="form-control" v-model.number="magiWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="magiReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathMagiFunction() }}/day</p>
                                <!--<h4>
                                    <div v-if="mathExpFunction() >= '10'">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathExpFunction() < '10' && mathExpFunction() >= '7')">
                                        &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(mathExpFunction() < '7' && mathExpFunction() > '0')">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h4>-->

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-md-8">
                    <div id="dataOutput">
                        <div class="card bg-light" style="max-width: 28rem;">
                            <div class="card-header"><h5>Summary</h5></div>
                            <div class="card-body">
                                <label>Applications:</label> {{ appWorkScore() }}<br>
                                <p>Percentage of Work: {{ appWorkPercentage() }}%</p>
                                <label>SARs:</label> {{ sarWorkScore() }}<br>
                                <p>Percentage of Work: {{ sarWorkPercentage() }}%</p>
                                <label>Expedites:</label> {{ expWorkScore() }}<br>
                                <p>Percentage of Work: {{ expWorkPercentage() }}%</p>
                                <label>MAGI:</label> {{ magiWorkScore() }}<br>
                                <p>Percentage of Work: {{ magiWorkPercentage() }}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="float-right">
                <router-link to="/Timeliness">
                    <button class="btn btn-secondary">Back</button>
                </router-link>
                <router-link to="/Summary">
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
            countableDays: Number
        },
        data() {
            return {
                snapWorked: parseInt(this.$store.state.snapWorked) + parseInt(this.$store.state.mcWorked) + parseInt(this.$store.state.teaWorked),
                snapReassigned: this.$store.state.snapReassigned,
                snapOutcome: this.$store.state.snapActual,
                sarWorked: this.$store.state.sarWorked,
                sarReassigned: this.$store.state.sarReassigned,
                sarOutcome: this.$store.state.sarActual,
                expWorked: this.$store.state.expWorked,
                expReassigned: this.$store.state.expReassigned,
                expOutcome: this.$store.state.expActual,
                magiWorked: this.$store.state.magiWorked,
                magiReassigned: this.$store.state.magiReassigned,
                magiOutcome: this.$store.state.magiActual,
            }

        },
        methods: {
            mathAppFunction: function () {
                let countableDays = this.$store.state.availableWorkTime;
                let a = (((parseInt(this.$store.state.snapWorked) + parseInt(this.$store.state.mcWorked) + parseInt(this.$store.state.teaWorked)) - this.snapReassigned) / countableDays).toFixed(2);
                if (a > 0) {
                    this.snapOutcome = a;
                    this.$store.state.applicationsWorkedDaily = a;
                    return a;
                } else {
                    return 0;
                }
            },
            mathSarFunction: function () {
                let countableDays = this.$store.state.availableWorkTime;
                let a = ((this.sarWorked - this.sarReassigned) / countableDays).toFixed(2);
                if (a > 0) {
                    this.sarOutcome = a;
                    this.$store.state.sarsWorkedDaily = a;
                    return a;
                } else {
                    return 0;
                }
            },
            mathExpFunction: function () {
                let countableDays = this.$store.state.availableWorkTime;
                let a = ((this.expWorked - this.expReassigned) / countableDays).toFixed(2);
                if (a > 0) {
                    this.expOutcome = a;
                    this.$store.state.expWorkedDaily = a;
                    return a;
                } else {
                    return 0;
                }
            },
            mathMagiFunction: function () {
                let countableDays = this.$store.state.availableWorkTime;
                let a = ((this.magiWorked - this.magiReassigned) / countableDays).toFixed(2);
                if (a > 0) {
                    this.magiOutcome = a;
                    this.$store.state.magiWorkedDaily = a;
                    return a;
                } else {
                    return 0;
                }
            },
            appWorkPercentage() {

                let totalWork = (this.snapWorked - this.snapReassigned) + (this.sarWorked - this.sarReassigned) + (this.expWorked - this.expReassigned) + (this.magiWorked - this.magiReassigned);
                let appRatio = (((this.snapWorked - this.snapReassigned) / totalWork) * 100).toFixed(2);
                this.$store.state.appRatio = appRatio;
                return appRatio;
            },
            appWorkScore() {
                let appRating = 'No Rating';
                let unSat = 3;
                let sat = 6;
                let appsDaily = this.$store.state.applicationsWorkedDaily;
                let modifiedUnSat = (((this.appWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.appWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 'Not Rated';
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 'App 3*';
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = '2*';
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = '1*';
                        break;
                    default:
                        appRating = 'Error';
                }
                return appRating;
            },
            sarWorkPercentage() {

                let totalWork = (this.snapWorked - this.snapReassigned) + (this.sarWorked - this.sarReassigned) + (this.expWorked - this.expReassigned) + (this.magiWorked - this.magiReassigned);
                let sarRatio = (((this.sarWorked - this.sarReassigned) / totalWork) * 100).toFixed(2);
                this.$store.state.sarRatio = sarRatio;
                return sarRatio;
            },
            sarWorkScore() {
                let appRating = 'No Rating';
                let unSat = 6.99;
                let sat = 10;
                let appsDaily = this.$store.state.sarsWorkedDaily;
                let modifiedUnSat = (((this.sarWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.sarWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 'Not Rated';
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 'SAR 3*';
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = '2*';
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = '1*';
                        break;
                    default:
                        appRating = 'Error';
                }
                return appRating;
            },
            expWorkPercentage() {

                let totalWork = (this.snapWorked - this.snapReassigned) + (this.sarWorked - this.sarReassigned) + (this.expWorked - this.expReassigned) + (this.magiWorked - this.magiReassigned);
                let expRatio = (((this.expWorked - this.expReassigned) / totalWork) * 100).toFixed(2);
                this.$store.state.expRatio = expRatio;
                return expRatio;
            },
            expWorkScore() {
                let appRating = 'No Rating';
                let unSat = 7.99;
                let sat = 12;
                let appsDaily = this.$store.state.expWorkedDaily;
                let modifiedUnSat = (((this.expWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.expWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 'Not Rated';
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 'EXP 3*';
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = '2*';
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = '1*';
                        break;
                    default:
                        appRating = 'Error';
                }
                return appRating;
            },
            magiWorkPercentage() {

                let totalWork = (this.snapWorked - this.snapReassigned) + (this.sarWorked - this.sarReassigned) + (this.expWorked - this.expReassigned) + (this.magiWorked - this.magiReassigned);
                let magiRatio = (((this.magiWorked - this.magiReassigned) / totalWork) * 100).toFixed(2);
                this.$store.state.magiRatio = magiRatio;
                return magiRatio;
            },
            magiWorkScore() {
                let appRating = 'No Rating';
                let unSat = 12.99;
                let sat = 16;
                let appsDaily = this.$store.state.magiWorkedDaily;
                let modifiedUnSat = (((this.magiWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.magiWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 'Not Rated';
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 'MAGI 3*';
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = '2*';
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = '1*';
                        break;
                    default:
                        appRating = 'Error';
                }
                return appRating;
            },
            // created: function() {
            //     eventBus.$on('workDays', (outcome) => {
            //         this.calculatedWorkDays = outcome;
            //     });
            // }
        }
    }
</script>

<style>

</style>
