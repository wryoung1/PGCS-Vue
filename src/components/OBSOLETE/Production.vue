<template>
    <div>
        <h2>Production!</h2>
        <p>Countable Work Days: {{ countableDays }}</p>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div id="snapProduction">
                        <h3>SNAP Production</h3>

                        <hr>
                        <label>Worked:</label><br>
                        <input type="number" v-model.number="snapWorked"><br>
                        <label>Reassigned:</label><br>
                        <input type="number" v-model.number="snapReassigned"><br>
                        <p></p>
                        <h3>Production Rating</h3>

                        <p>{{ mathSnapFunction() }}/day</p>
                        <h4>
                            <div v-if="mathSnapFunction() >= '6' < '1000'">
                                &#9733; &#9733; &#9733;
                            </div>

                            <div v-else-if="(mathSnapFunction() < '6' && mathSnapFunction() >= '3')">
                                &#9733; &#9733;
                            </div>

                            <div v-else-if="(mathSnapFunction() < '3' && mathSnapFunction() > '0')">
                                &#9733;
                            </div>
                            <div v-else>
                                No data keyed
                            </div>
                        </h4>
                    </div>
                </div>
                <div class="col-sm">
                    <div id="sarProduction">
                        <h3>SAR Production</h3>
                        <hr>
                        <label>Worked:</label><br>
                        <input type="number" v-model.number="sarWorked"><br>
                        <label>Reassigned:</label><br>
                        <input type="number" v-model.number="sarReassigned"><br>
                        <p></p>
                        <h3>Production Rating</h3>

                        <p>{{ mathSarFunction() }}/day</p>
                        <h4>
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
                        </h4>
                    </div>
                </div>
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
                snapWorked: 0,
                snapReassigned: 0,
                snapOutcome: -1,
                sarWorked: 0,
                sarReassigned: 0,
                sarOutcome: -1,
                calculatedWorkDays: 0,
            }

        },
        methods: {
            mathSnapFunction: function () {
                this.snapOutcome = ((this.snapWorked - this.snapReassigned) / this.countableDays).toFixed(2);
                if (this.snapOutcome > 0) {
                    return this.snapOutcome;
                } else {
                    return 0;
                }
            },
            mathSarFunction: function () {
                this.sarOutcome = ((this.sarWorked - this.sarReassigned) / this.countableDays).toFixed(2);
                if (this.sarOutcome > 0) {
                    return this.sarOutcome;
                } else {
                    return 0;
                }
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
