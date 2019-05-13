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

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div id="sarProduction">
                        <div class="card bg-light mb-3" style="max-width: 18rem;">
                            <div class="card-header"><h5>Other Production</h5></div>
                            <div class="card-body">
                                <label>Worked:</label><br>
                                <input type="number" class="form-control" v-model.number="sarWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="sarReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathSarFunction() }}/day</p>

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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-auto">
                    <div id="magiProduction">
                        <div class="card bg-light md4" style="max-width: 18rem; min-height: 28.2rem;">
                            <div class="card-header"><h5>MAGI Production</h5></div>
                            <div class="card-body">
                                <label>Tasks Cleared:</label><br>
                                <input type="number" class="form-control" v-model.number="magiWorked" disabled><br>
                                <label>Reassigned:</label><br>
                                <input type="number" class="form-control" v-model.number="magiReassigned"><br>
                                <p>Daily Output: <br>
                                    {{ mathMagiFunction() }}/day</p>
                            </div>
                        </div>
                    </div>
                </div>


              <div class="col col-md-8">
                    <div id="dataOutput">
                        <div class="card bg-light" style="min-width: 28rem;">
                            <div class="card-header"><h5>Summary</h5></div>
                            <div class="card-body">
                                <label>Applications:
                                    <div>Percentage of Work: {{ appWorkPercentage() }}%</div>
                                </label>
                                <h5>
                                    <div v-if="(appWorkScore() >= 3)">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(appWorkScore() >= 2 && appWorkScore() < 3)">
                                        &#9733; &#9733;
                                    </div>
                                    <div v-else-if="(appWorkScore() >= 1 && appWorkScore() < 2)">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h5>
                                NOT IN USE if app work score = 3 then &#9733;&#9733;&#9733; ???
                                <label>SARs:
                                    <div>Percentage of Work: {{ sarWorkPercentage() }}%</div>
                                </label>
                                <h5> <!-- TODO: need to find out why this isnt calculating correctly with multiple values in the production range. -->
                                    <div v-if="(sarWorkScore() >= 3)">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(sarWorkScore() >= 2 && sarWorkScore() < 3)">
                                        &#9733; &#9733;
                                    </div>
                                    <div v-else-if="(sarWorkScore() < 2)">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h5>

                                <label>Expedites:
                                    <div>Percentage of Work: {{ expWorkPercentage() }}%</div>
                                </label>
                                <h5>
                                    <div v-if="(expWorkScore() >= 3)">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(expWorkScore() >= 2 && expWorkScore() < 3)">
                                        &#9733; &#9733;
                                    </div>
                                    <div v-else-if="(expWorkScore() >= 1 && expWorkScore() < 2)">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h5>

                                <label>MAGI:
                                    <div>Percentage of Work: {{ magiWorkPercentage() }}%</div>
                                </label>
                                <h5>
                                    <div v-if="(magiWorkScore() >= 3)">
                                        &#9733; &#9733; &#9733;
                                    </div>

                                    <div v-else-if="(magiWorkScore() >= 2 && magiWorkScore() < 3)">
                                        &#9733; &#9733;
                                    </div>
                                    <div v-else-if="(magiWorkScore() >= 1 && magiWorkScore() < 2)">
                                        &#9733;
                                    </div>
                                    <div v-else>
                                        No data keyed
                                    </div>
                                </h5>

                                <p style="display: none">counted prods{{ prodScoreTotal() }} - {{prodScoreTotal()}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br>
            <div class="float-right">
                <router-link to="/Timeliness">
                    <button class="btn btn-secondary">Back</button>
                </router-link>
                <router-link to="/Summary">
                    <button class="btn btn-primary">Next</button>
                </router-link>
            </div> {{ appWorkScore() }}{{ sarWorkScore() }}{{ expWorkScore() }}{{ magiWorkScore() }}{{ prodScoreTotal() }}
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

                let totalWork = ((this.snapWorked - this.snapReassigned) / 0.75) + ((this.sarWorked - this.sarReassigned) / 1.75) + ((this.expWorked - this.expReassigned) / 1.25) + ((this.magiWorked - this.magiReassigned) / 2);
                let appRatio = ((((this.snapWorked - this.snapReassigned) / 0.75) / totalWork) * 100).toFixed(2);
                this.$store.state.appRatio = appRatio;
                return appRatio;
            },
            appWorkScore() {
                let appRating = 0;
                let unSat = 3;
                let sat = 6;
                let appsDaily = this.$store.state.applicationsWorkedDaily;
                let modifiedUnSat = (((this.appWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.appWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 0;
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 3;
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = 2;
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = 1;
                        break;
                    default:
                        appRating = 0;
                }
                if (appRating > 0) {
                    this.$store.state.appRated = 1;
                } else {
                    this.$store.state.appRated = 0;
                }
                return appRating;
            },
            sarWorkPercentage() {

                let totalWork = ((this.snapWorked - this.snapReassigned) / 0.75) + ((this.sarWorked - this.sarReassigned) / 1.75) + ((this.expWorked - this.expReassigned) / 1.25) + ((this.magiWorked - this.magiReassigned) / 2);
                let sarRatio = ((((this.sarWorked - this.sarReassigned) / 1.75) / totalWork) * 100).toFixed(2);
                this.$store.state.sarRatio = sarRatio;
                return sarRatio;
            },
            sarWorkScore() {
                let appRating = 0;
                let unSat = 6.99;
                let sat = 10;
                let appsDaily = this.$store.state.sarsWorkedDaily;
                let modifiedUnSat = (((this.sarWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.sarWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 0;
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 3;
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = 2;
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = 1;
                        break;
                    default:
                        appRating = 0;
                }
                if (appRating > 0) {
                    this.$store.state.sarRated = 1;
                } else {
                    this.$store.state.sarRated = 0;
                }
                return appRating;
            },
            expWorkPercentage() {

                let totalWork = ((this.snapWorked - this.snapReassigned) / 0.75) + ((this.sarWorked - this.sarReassigned) / 1.75) + ((this.expWorked - this.expReassigned) / 1.25) + ((this.magiWorked - this.magiReassigned) / 2);
                let expRatio = ((((this.expWorked - this.expReassigned) / 1.25) / totalWork) * 100).toFixed(2);
                this.$store.state.expRatio = expRatio;
                return expRatio;
            },
            expWorkScore() {
                let appRating = 0;
                let unSat = 7.99;
                let sat = 12;
                let appsDaily = this.$store.state.expWorkedDaily;
                let modifiedUnSat = (((this.expWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.expWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 0;
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 3;
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = 2;
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = 1;
                        break;
                    default:
                        appRating = 0;
                }
                if (appRating > 0) {
                    this.$store.state.expRated = 1;
                } else {
                    this.$store.state.expRated = 0;
                }
                return appRating;
            },
            magiWorkPercentage() {

                let totalWork = ((this.snapWorked - this.snapReassigned) / 0.75) + ((this.sarWorked - this.sarReassigned) / 1.75) + ((this.expWorked - this.expReassigned) / 1.25) + ((this.magiWorked - this.magiReassigned) / 2);
                let magiRatio = ((((this.magiWorked - this.magiReassigned) / 2) / totalWork) * 100).toFixed(2);
                this.$store.state.magiRatio = magiRatio;
                return magiRatio;
            },
            magiWorkScore() {
                let appRating = 0;
                let unSat = 12.99;
                let sat = 16;
                let appsDaily = this.$store.state.magiWorkedDaily;
                let modifiedUnSat = (((this.magiWorkPercentage()) / 100) * unSat).toFixed(2);
                let modifiedSat = (((this.magiWorkPercentage()) / 100) * sat).toFixed(2);
                switch (true) {
                    case appsDaily <= 0:
                        appRating = 0;
                        break;
                    case appsDaily >= modifiedSat:
                        appRating = 3;
                        break;
                    case appsDaily < modifiedSat && appsDaily > modifiedUnSat:
                        appRating = 2;
                        break;
                    case appsDaily > 0 && appsDaily <= modifiedUnSat:
                        appRating = 1;
                        break;
                    default:
                        appRating = 0;
                }
                if (appRating > 0) {
                    this.$store.state.magiRated = 1;
                } else {
                    this.$store.state.magiRated = 0;
                }
                return appRating;
            },
            prodScoreTotal() {


                let a = this.$store.state.appRated;
                let b = this.$store.state.sarRated;
                let c = this.$store.state.expRated;
                let d = this.$store.state.magiRated;
                let e = this.appWorkScore() + this.sarWorkScore() + this.expWorkScore() + this.magiWorkScore()
                let count = a + b + c + d;

                let prodScore = (e / count).toFixed(2);
                if (prodScore > 0) {
                    this.$store.state.prodScore = prodScore;
                } else {
                    this.$store.state.prodScore = 0;
                }
                return prodScore;

                //DIVIDE SUM OF PROD SCORES BY THE COUNT TO GIVE OVERALL PROD RATING,
                //FEED PROD RATING BACK TO THE STORE
                //FISH THE PROD RATING FROM THE STOR FOR THE FINAL PGCS PAGE


            },
        },
    }
</script>

<style>

</style>
