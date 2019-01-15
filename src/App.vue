<template>
    <div id="container">
        <app-header></app-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!--    <p>SNAP being reviewed? {{ snapChecked }}</p>
            <p>ACCURACY:</p>
            <p>SNAP: {{ counted }} / MC: {{ mcCounted }} / TEA: {{ teaCounted }}</p>
            <p>TIMELINESS: </p>
            <p>SNAP: {{ snapTime }} / MC: {{ mcTime }} / TEA: {{ teaTime }}</p>
            <p>SAR: {{ sarTime }} / EXP: {{expTime }} / MAGI: {{ magiTime }}</p>
            <p>Available Work Days: {{ workDays }} / Leave Time: {{ leaveTime }}/hours / Available Work Time: {{ workTime }}</p>
            <p>Apps Worked {{ appsWorked }} / SNAP Worked {{ snapWorked }} / Medicaid Worked {{ mcWorked }} / TEA Worked {{ teaWorked }}</p>
            <p>Expedites Worked {{ expWorked }}</p>
            <p>MAGI Worked {{ magiWorked }}</p>
            <p>SAR's Worked {{ sarsWorked }}</p>
            <p>Apps per day {{ appsWorkedDaily }}</p>-->

        <!--   <div class="container">
             <h1>PGCS Tool v2 - Monthly Report</h1>
             <app-worker-details
                     :countableDays="outcome"
                     @workTimeWasEdited="outcome = $event"
                     :snapMarker="snapChecked"
                     @snapMarkerWasEdited="snapChecked = $event"
             ></app-worker-details>
           </div>
           <div class="container">
             <div class="row">
               <div class="col-sm">
                 <app-accuracy></app-accuracy>
               </div>
               <div class="col-sm">
                 <app-timeliness></app-timeliness>
               </div>
             </div>
             <hr>
           </div>
           <div class="container">
             <div class="row">
               <div class="col-sm">
                 <app-production
                         :countableDays="outcome"
                         :programsWorked="snapChecked"></app-production>
               </div>
             </div>
           </div>-->

  </div>
</template>
<!-- 1. worker info, 2. programs worked info, 3. accuracy, 4. timeliness, 5. production, 6. ratings !-->

<script>
    import Header from './components/Header.vue'
    import workerDetails from './components/OBSOLETE/worker-details.vue'
    import accuracy from './components/OBSOLETE/Accuracy.vue'
    import timeliness from './components/OBSOLETE/Timeliness.vue'
    import production from './components/OBSOLETE/Production.vue'

    export default {
        name: 'app',
        mounted() {
            let a = this.getDate()
            this.$store.state.reviewDate = a;
        },
        data() {
            return {
                snapChecked: [],
            }
        },
        computed: {
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
                this.$store.state.applicationsWorked + a;
                return a;
            },
            appsWorkedDaily() {
                return this.$store.state.applicationsWorkedDaily;
            },
            getDate() {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let today = new Date();
                let year = today.getFullYear();
                let month = toTwoDigits(today.getMonth() + 1);
                let day = toTwoDigits(today.getDate());
                return `${year}-${month}-${day}`;
            }
        },
        methods: {},
        components: {
            appHeader: Header,
            appWorkerDetails: workerDetails,
            appAccuracy: accuracy,
            appTimeliness: timeliness,
            appProduction: production,
        }
    }
</script>

<style>
    /*
      .fade-enter {
        opacity: 0;

      }

      .fade-enter-active {
        transition: opacity 2s;
      }

      .fade-leave {

      }

      .fade-leave-active {
        transition: opacity 2s;
        opacity: 0;
      }

      .slide-enter {
        opacity: 0;
      }

      .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: .5s;
      }

      .slide-leave {

      }

      .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
      }

      @keyframes: slide-in {
        from {
          transform: translateY(20px);
        }
        to {
          transform: translateY(0);
        }
      }

      @keyframes: slide-out {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(20px);
        }
      }
    */


</style>
