<template>
    <div class="container-fluid">
        <h1>Performance Report</h1>
        <p><strong>Please check your data carefully here before you finalize your report!
            Once you finalise your report, the data will be submitted to Mr. Williams and your monthly report will be
            generated</strong></p>
        <p><strong style="background-color: yellow">CAUTION:</strong> If you think your data isn't accurate enough for
            Mr. Williams, your report probably isnt ready for the worker either.</p>
        <div class="container">
            <h4>Accuracy</h4>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 16rem;">
                        <div class="card-header"><h5>SNAP Accuracy</h5></div>
                        <div class="card-body">
                            <h4>{{ counted }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 10rem;">
                        <div class="card-header"><h5>Medicaid Accuracy</h5></div>
                        <div class="card-body">
                            <h4>{{ mcCounted }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 16rem;">
                        <div class="card-header"><h5>TEA Accuracy</h5></div>
                        <div class="card-body">
                            <h4>{{ teaCounted }}%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h4>Timeliness</h4>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>SNAP - Non Exp</h5></div>
                        <div class="card-body">
                            <h4>{{ snapTime }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>SNAP - Expedited</h5></div>
                        <div class="card-body">
                            <h4>{{ expTime }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>SNAP - SAR</h5></div>
                        <div class="card-body">
                            <h4>{{ sarTime }}%</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>TEA</h5></div>
                        <div class="card-body">
                            <h4>{{ teaTime }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>Traditional Medicaid</h5></div>
                        <div class="card-body">
                            <h4>{{ mcTime }}%</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15rem;">
                        <div class="card-header"><h5>MAGI Medicaid</h5></div>
                        <div class="card-body">
                            <h4>{{ magiTime }}%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h4>Production</h4>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15.5rem;">
                        <div class="card-header"><h5>Working Days in <br>
                            {{ this.$store.state.reviewMonth }}</h5></div>
                        <div class="card-body">
                            <h4>{{ workDays }}/days</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 15.5rem;">
                        <div class="card-header"><h5>Leave Time Taken In<br>
                            {{ this.$store.state.reviewMonth }}</h5></div>
                        <div class="card-body">
                            <h4>{{ leaveTime }}/hours</h4>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 10rem;">
                        <div class="card-header"><h5>Available Work Time<br>
                            Remaining </h5></div>
                        <div class="card-body">
                            <h4>{{ workTime }}/days</h4>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 23.33rem; min-height: 21rem;">
                        <div class="card-header"><h5>Applications Worked</h5></div>
                        <div class="card-body">
                            <h4>Total: {{ appsWorked }}</h4>
                            <h5>SNAP: {{ snapWorked }}</h5>
                            <h5>Medicaid: {{ mcWorked }}</h5>
                            <h5>TEA: {{ teaWorked }}</h5>
                            <hr>
                            <h5>Apps Daily: {{ appsWorkedDaily }}</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light mb-3" style="min-width: 23.33rem; max-height: 400px;">
                        <div class="card-header"><h5>Other Worked</h5></div>
                        <div class="card-body">
                            <h6>Expedites: {{ expWorked }}</h6>
                            <p>{{ expWorkedDaily }}/day</p>
                            <hr>
                            <h6>SARs/Changes/MP: {{ sarsWorked }}</h6>
                            <p>{{ sarsWorkedDaily }}/day</p>
                            <hr>
                            <h6>MAGI Tasks: {{ magiWorked }}</h6>
                            <p>{{ magiWorkedDaily }}/day</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="float-right">
                <router-link to="/workerdata">
                    <button class="btn btn-outline-danger" @click="goBack">WAIT! - Something's Not Right</button>
                </router-link>
                <router-link to="/PGCS">
                    <button class="btn btn-success" @click="submit">Everything Looks Great!</button>
                </router-link>
            </div>
        </div>
        <br><br><br>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                snapAccuracyGoal: 95,
                expediteAccuracyGoal: 95,
                medicaidAccuracyGoal: 90,
                teaAccuracyGoal: 90,
                snapTimelinessGoal: 95,
                expediteTimelinessGoal: 97,
                medicaidTimelinessGoal: 90,
                teaTimelinessGoal: 97,
                unadjustedSnapProduction: 6,
                unadjustedExpediteProduction: 12,
                unadjustedMagiProduction: 16,
                unadjustedSarChangeProduction: 10,

            }
        },
        computed: {
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
            workDays() {
                return this.$store.state.availableWorkDays;
            },
            leaveTime() {
                return this.$store.state.leaveTimeHours;
            },
            workTime() {
                return this.$store.state.availableWorkTime;
            },
            snapWorked() {
                return this.$store.state.snapWorked;
            },
            mcWorked() {
                return this.$store.state.mcWorked;
            },
            teaWorked() {
                return this.$store.state.teaWorked;
            },
            expWorked() {
                return this.$store.state.expWorked;
            },
            magiWorked() {
                return this.$store.state.magiWorked;
            },
            sarsWorked() {
                return this.$store.state.sarWorked;
            },
            appsWorked() {
                let a = parseInt(this.$store.state.snapWorked) + parseInt(this.$store.state.mcWorked) + parseInt(this.$store.state.teaWorked);
                this.$store.state.applicationsWorked = a;
                return a;
            },
            appsWorkedDaily() {
                return this.$store.state.applicationsWorkedDaily;
            },
            sarsWorkedDaily() {
                return this.$store.state.sarsWorkedDaily;
            },
            expWorkedDaily() {
                return this.$store.state.expWorkedDaily;
            },
            magiWorkedDaily() {
                return this.$store.state.magiWorkedDaily;
            },
        },
        methods: {
            goBack() {
                alert('Taking You Back To The Start!')
            },
            submit() {
                this.$http.post('', this.$store.state)
                    .then(response => {
                        console.log(response)
                    }, error => {
                        console.log(error)
                    });
                alert('Report Submitted!')
            },

            /*            fetchData() {
                            this.$http.get('')
                                .then(response => {
                                    return response.json();
                                })
                                .then (data => {
                                    const resultArray = [];
                                    for (let key in data) {
                                        resultArray.push(data[key]);
                                    }
                                    this.state = resultArray;
                                });
                        },*/
        }
    }
</script>

<style>

</style>
