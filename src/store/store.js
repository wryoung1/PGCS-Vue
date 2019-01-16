import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        //EMPLOYEE INFO

        workerName: '',
        workerNumber: 0,
        supervisorCompleting: '',
        reviewMonth: 'Select One...',
        reviewDate: 11 / 11 / 1900,

        //SUPPLEMENTAL DATA FIELDS
        wkrCalls: 0,
        wkrCallTime: 0,
        scanningCount: 0,
        wkrAssistance: 0,
        wkrMentoring: 0,
        legQuestions: 0,
        coQuestions: 0,
        numVisits: 0,
        timeVisits: 0,
        wkrHearings: 0,
        wkrCommentary: '',

        // SNAP NUMBERS
        snapReviewed: 0,
        snapErrors: 0,
        snapAccuracyFinal: 0,
        snapWorked: 0,
        snapLate: 0,
        snapReassigned: 0,
        snapActual: 0,
        snapTimelinessFinal: 0,

        sarWorked: 0,
        sarLate: 0,
        sarReassigned: 0,
        sarTimelinessFinal: 0,
        sarActual: 0,

        expWorked: 0,
        expLate: 0,
        expReassigned: 0,
        expTimelinessFinal: 0,
        expActual: 0,

        //MEDICAID NUMBERS

        mcReviewed: 0,
        mcErrors: 0,
        mcAccuracyFinal: 0,
        mcWorked: 0,
        mcLate: 0,
        mcReassigned: 0,
        mcTimelinessFinal: 0,

        magiWorked: 0,
        magiLate: 0,
        magiReassigned: 0,
        magiTimelinessFinal: 0,

        //TEA NUMBERS

        teaReviewed: 0,
        teaErrors: 0,
        teaAccuracyFinal: 0,
        teaWorked: 0,
        teaLate: 0,
        teaReassigned: 0,
        teaTimelinessFinal: 0,

        //WORK TIME & PRODUCTION NUMBERS

        availableWorkDays: 0,
        leaveTimeHours: 0,
        availableWorkTime: 0,
        applicationsWorked: 0,
        applicationsWorkedDaily: 0,
        sarsWorkedDaily: 0,
        expWorkedDaily: 0,
        magiWorkedDaily: 0,
        magiActual: 0,
        appRatio: 0,
        expRatio: 0,
        sarRatio: 0,
        magiRatio: 0,

        //Did a production area get rated?
        appRated: 0,
        expRated: 0,
        magiRated: 0,
        sarRated: 0,
        prodScore: 0,



    },
    computed: {
        appsWorked() {
            return (this.$store.state.mcWorked + this.$store.state.snapWorked).toFixed(0);
        }
    }
});
