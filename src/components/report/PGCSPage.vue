<template>
    <div class="container-fluid">
        <h1>PGCS Report - {{ workerData }} - (#{{ workerDataNum }})</h1>
        <p><strong>Please make sure you print this page before you leave, you will have to recreate your report if you
            forget to print!</strong></p>
        <div class="container">
            <div class="row">
                <div class="col-xl-6">
                    <div class="card bg-light">
                        <div class="card-header">
                            <h5 class="card-title">Report</h5></div>
                        <div class="card-body">
                            <p class="card-text">Report Month : {{ reviewMonth }}</p>
                            <p class="card-text">Completed By : {{ superName }}</p>
                            <p class="card-text">Completed Date : {{ dateFiller() }}</p>

                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card bg-light">
                        <div class="card-header">
                            <h5 class="card-title">Accuracy</h5></div>
                        <div class="card-body">
                            <p class="card-text">SNAP : {{ counted }}% - {{ snapAccStars }}*</p>
                            <p class="card-text">Medicaid : {{ mcCounted }}% - {{ mcAccStars }}*</p>
                            <p class="card-text">TEA : {{ teaCounted }}% - {{ teaAccStars }}*</p>
                            <hr>
                            <h6>Overall Accuracy:</h6>
                            <h5>
                                <div v-if="(allAccStars >= 3)">
                                    &#9733; &#9733; &#9733; - Satisfactory
                                </div>

                                <div v-else-if="(allAccStars >= 2 && allAccStars < 3)">
                                    &#9733; &#9733; - Needs Improvement
                                </div>
                                <div v-else-if="(allAccStars >=1 && allAccStars < 2)">
                                    &#9733; - Unsatisfactory
                                </div>
                                <div v-else>
                                    No data keyed
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <hr>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card bg-light">
                                <div class="card-header">
                                    <h5 class="card-title">Timeliness</h5></div>
                                <div class="card-body">
                                    <p class="card-text">SNAP : {{ snapTime }}% - {{ snapTimeStars }}*</p>
                                    <p class="card-text">Medicaid : {{ mcTime }}% - {{ mcTimeStars }}*</p>
                                    <p class="card-text">TEA : {{ teaTime }}% - {{ teaTimeStars }}*</p>
                                    <p class="card-text">SR/Ch/MP/MSP : {{ sarTime }}% - {{ sarTimeStars }}*</p>
                                    <p class="card-text">Expedites : {{ expTime }}% - {{ expTimeStars }}*</p>
                                    <p class="card-text">MAGI : {{ magiTime }}% - {{ magiTimeStars }}*</p>
                                    <hr>
                                    <h6>Overall Timeliness:</h6>
                                    <h5>
                                        <div v-if="(allTimeStars >= 3)">
                                            &#9733; &#9733; &#9733; - Satisfactory
                                        </div>

                                        <div v-else-if="(allTimeStars >= 2 && allTimeStars < 3)">
                                            &#9733; &#9733; - Needs Improvement
                                        </div>
                                        <div v-else-if="(allTimeStars >=1 && allTimeStars < 2)">
                                            &#9733; - Unsatisfactory
                                        </div>
                                        <div v-else>
                                            No data keyed
                                        </div>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card bg-light">
                                <div class="card-header">
                                    <h5 class="card-title">Production</h5></div>
                                <div class="card-body">
                                    <p class="card-text">Applications : {{ this.$store.state.applicationsWorkedDaily
                                        }}/day</p>
                                    <p class="card-text">Expedites : {{ this.$store.state.expWorkedDaily }}/day</p>
                                    <p class="card-text">SR/Ch/MP/MSP : {{ this.$store.state.sarsWorkedDaily }}/day</p>
                                    <p class="card-text">MAGI Tasks : {{ this.$store.state.magiWorkedDaily }}/day</p>
                                    <p class="card-text">Percentage of Work : </p>
                                    <p class="card-text">Apps: {{ this.$store.state.appRatio }}%, Exp: {{
                                        this.$store.state.expRatio }}%, SR/Ch/MP/MSP: {{ this.$store.state.sarRatio }}%, MAGI {{
                                        this.$store.state.magiRatio }}%</p>
                                    <hr>
                                    <h6>Overall Production:</h6>
                                    <h5>
                                        <div v-if="(overallProdScore >= 3)">
                                            &#9733; &#9733; &#9733; - Satisfactory
                                        </div>

                                        <div v-else-if="(overallProdScore >= 2 && overallProdScore < 3)">
                                            &#9733; &#9733; - Needs Improvement
                                        </div>
                                        <div v-else-if="(overallProdScore >=1 && overallProdScore < 2)">
                                            &#9733; - Unsatisfactory
                                        </div>
                                        <div v-else>
                                            No data keyed
                                        </div>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <br>
                    </div>
                    <div class="container">
                        <div class="row">
                            <hr>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="card bg-light" style="min-width: 100%; min-height: 200px">
                                <div class="card-header">
                                    <h5 class="card-title">Comments</h5></div>
                                <div class="card-body">
                                    <p class="card-text">{{ wkrCommentary }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <hr>
                        </div>
                    </div>
                    <p style="page-break-after: always">&nbsp;</p>
                    <div class="container">
                        <div class="row">
                            <div class="card bg-light" style="min-width: 100%; min-height: 200px">
                                <div class="card-header">
                                    <h5 class="card-title">Areas for Improvement</h5></div>
                                <div class="card-body">
                                    <p class="card-text">{{ wkrImprovements }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br>
            <div class="container">
                <h3>Signatures:</h3>
                <h4>Worker:</h4>
                <br>
                <hr>
                <h4>Supervisor:</h4>
                <br>
                <hr>
            </div>
        </div>
        <!--
                <p>Worker Name: {{ workerData }}</p>
                <P>accuracy ratings</P>
                <P>SNAP: {{ counted }}</P>
                <P>Medicaid: {{ mcCounted }}</P>
                <P>TEA: {{ teaCounted }}</P>
                <p>accuracy * scores</p>
                <p>overall accuracy</p>
                <p>TODO: all scores meet goal = 3; 1 - 3 scores 20 below goal = 2; 1 - 3 scores >=40 below goal = 1</p>
                <P>timeliness ratings</P>
                <P>SNAP: {{ snapTime }}</P>
                <P>Medicaid: {{ mcTime }}</P>
                <P>TEA: {{ teaTime }}</P>
                <P>SARs: {{ sarTime }}</P>
                <P>Exp: {{ expTime }}</P>
                <P>MAGI: {{ magiTime }}</P>
                <p>timeliness * scores</p>
                <p>overall timeliness</p>
                <P>production ratings</P>
                <p>TODO: show totaly monthly output figures not individual daily rates</p>
                <p>production * scores</p>
                <p>overall production</p>

        -->
        <div class="float-right">
            <button class="btn btn-outline-danger" @click="close">Exit PGCS System</button>
            <button class="btn btn-success" @click="print">Print Report</button>
        </div>
<br><br>
        <div style="text-align:center">PGCS - V2 (2.0.1) April 2019</div>
    </div>

</template>

<script>
    export default {
        data() {
            return {


                reviewMonth: this.$store.state.reviewMonth,
                superName: this.$store.state.supervisorCompleting,

                // ACCURACY
                snapAccGoal: 95,
                mcAccGoal: 90,
                teaAccGoal: 95,

                // TIMELINESS
                snapGoal: 95,
                expGoal: 97,
                mcGoal: 90,
                teaGoal: 97,
                magiGoal: 90,
                sarGoal: 95,

                //PRODUCTION
            }
        },
        computed: {
            workerData() {
                return this.$store.state.workerName;
            },
            workerDataNum() {
                return this.$store.state.workerNumber;
            },
            getDate() {
                return this.$store.state.reviewDate;
            },
            counted() {
                return this.$store.state.snapAccuracyFinal;
            },
            mcCounted() {
                return this.$store.state.mcAccuracyFinal;
            },
            teaCounted() {
                return this.$store.state.teaAccuracyFinal;
            },
            snapTime() {
                return this.$store.state.snapTimelinessFinal;
            },
            mcTime() {
                return this.$store.state.mcTimelinessFinal;
            },
            teaTime() {
                return this.$store.state.teaTimelinessFinal;
            },
            sarTime() {
                return this.$store.state.sarTimelinessFinal;
            },
            expTime() {
                return this.$store.state.expTimelinessFinal;
            },
            magiTime() {
                return this.$store.state.magiTimelinessFinal;
            },
            wkrCommentary() {
                return this.$store.state.wkrCommentary;
            },
            wkrImprovements() {
                return this.$store.state.wkrImprovements;
            },
            overallProdScore() {
                return Math.ceil(this.$store.state.prodScore);
            },
            allProdComment() {
                let a = Math.ceil(this.$store.state.prodScore);
                let b = 'No Result';
                switch (a) {
                    case 3:
                        b = 'Satisfactory';
                        break;
                    case 2:
                        b = 'Needs Improvement';
                        break;
                    case 1:
                        b = 'Unsatisfactory';
                        break;
                    default:
                }
                return b;
            },
            snapAccStars() {
                let a = 0;
                if (this.counted >= this.snapAccGoal) {
                    a = 3;
                } else if (this.counted < this.snapAccGoal && this.counted > this.snapAccGoal - 50) {
                    a = 2;
                } else if (this.counted <= this.snapAccGoal - 50 && this.counted > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            mcAccStars() {
                let a = 0;
                if (this.mcCounted >= this.mcAccGoal) {
                    a = 3;
                } else if (this.mcCounted < this.mcAccGoal && this.mcCounted > this.mcAccGoal - 50) {
                    a = 2;
                } else if (this.mcCounted <= this.mcAccGoal - 50 && this.mcCounted > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            teaAccStars() {
                let a = 0;
                if (this.teaCounted >= this.teaAccGoal) {
                    a = 3;
                } else if (this.teaCounted < this.teaAccGoal && this.teaCounted > this.teaAccGoal - 50) {
                    a = 2;
                } else if (this.teaCounted <= this.teaAccGoal - 50 && this.teaCounted > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            allAccStars() {
                // need to perform a count operation so 0 doesnt adversely affect the average.
                let a = this.snapAccStars;
                let b = this.mcAccStars;
                let c = this.teaAccStars;
                let d = 0;
                let e = 0;
                let f = 0;
                //count
                if (a > 0) {
                    d = 1;
                } else {
                    d = 0;
                }

                if (b > 0) {
                    e = 1;
                } else {
                    e = 0;
                }

                if (c > 0) {
                    f = 1;
                } else {
                    f = 0;
                }

                let g = d + e + f;
                let h = Math.round((a + b + c) / g);
                return h;
            },
            allAccComment() {
                let a = this.allAccStars;
                let b = 'No Result';
                switch (a) {
                    case 3:
                        b = 'Satisfactory';
                        break;
                    case 2:
                        b = 'Needs Improvement';
                        break;
                    case 1:
                        b = 'Unsatisfactory';
                        break;
                    default:
                }
                return b;
            },
            snapTimeStars() {
                let a = 0;
                if (this.snapTime >= this.snapGoal) {
                    a = 3;
                } else if (this.snapTime < this.snapGoal && this.snapTime > this.snapGoal - 50) {
                    a = 2;
                } else if (this.snapTime <= this.snapGoal - 50 && this.snapTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            mcTimeStars() {
                let a = 0;
                if (this.mcTime >= this.mcGoal) {
                    a = 3;
                } else if (this.mcTime < this.mcGoal && this.mcTime > this.mcGoal - 50) {
                    a = 2;
                } else if (this.mcTime <= this.mcGoal - 50 && this.mcTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            teaTimeStars() {

                let a = 0;
                if (this.teaTime >= this.teaGoal) {
                    a = 3;
                } else if (this.teaTime < this.teaGoal && this.teaTime > this.teaGoal - 50) {
                    a = 2;
                } else if (this.teaTime <= this.teaGoal - 50 && this.teaTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            expTimeStars() {

                let a = 0;
                if (this.expTime >= this.expGoal) {
                    a = 3;
                } else if (this.expTime < this.expGoal && this.expTime > this.expGoal - 50) {
                    a = 2;
                } else if (this.expTime <= this.expGoal - 50 && this.expTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            sarTimeStars() {

                let a = 0;
                if (this.sarTime >= this.sarGoal) {
                    a = 3;
                } else if (this.sarTime < this.sarGoal && this.sarTime > this.sarGoal - 50) {
                    a = 2;
                } else if (this.sarTime <= this.sarGoal - 50 && this.sarTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            magiTimeStars() {

                let a = 0;
                if (this.magiTime >= this.magiGoal) {
                    a = 3;
                } else if (this.magiTime < this.magiGoal && this.magiTime > this.magiGoal - 50) {
                    a = 2;
                } else if (this.magiTime <= this.magiGoal - 50 && this.magiTime > 0) {
                    a = 1;
                } else {
                    a = 0;
                }
                return a;
            },
            allTimeStars() {
                // need to perform a count operation so 0 doesnt adversely affect the average.
                let a = this.snapTimeStars;
                let b = this.mcTimeStars;
                let c = this.teaTimeStars;
                let d = this.expTimeStars;
                let e = this.sarTimeStars;
                let f = this.magiTimeStars;
                let g = 0;
                let h = 0;
                let i = 0;
                let j = 0;
                let k = 0;
                let l = 0;

                //count
                if (a > 0) {
                    g = 1;
                } else {
                    g = 0;
                }

                if (b > 0) {
                    h = 1;
                } else {
                    h = 0;
                }

                if (c > 0) {
                    i = 1;
                } else {
                    i = 0;
                }
                if (d > 0) {
                    j = 1;
                } else {
                    j = 0;
                }
                if (e > 0) {
                    k = 1;
                } else {
                    k = 0;
                }
                if (f > 0) {
                    l = 1;
                } else {
                    l = 0;
                }

                let m = g + h + i + j + k + l;
                let n = Math.round((a + b + c + d + e + f) / m);
                return n;
            },

            allTimeComment() {
                let a = this.allTimeStars;
                let b = 'No Result';
                switch (a) {
                    case 3:
                        b = 'Satisfactory';
                        break;
                    case 2:
                        b = 'Needs Improvement';
                        break;
                    case 1:
                        b = 'Unsatisfactory';
                        break;
                    default:
                }
                return b;
            },
        },
        methods: {
            close() {
                alert('Exiting System');
                location.reload(true);
                location.href = "/"
                // TODO are you sure warning
            },
            print() {
                window.print()
                alert('Report Printing!');
                // TODO print call
            },
            dateFiller() {
                let tD = new Date();
                let datestr = (tD.getMonth() + 1) + "/" + tD.getDate() + "/" + tD.getFullYear();
                this.$store.state.reviewDate = datestr;
                return datestr;
            },

        }
    }
</script>

<style>

</style>
<!--need a page printed indicator that if its not set it will warn the user before they leave the page to print before they leave.-->