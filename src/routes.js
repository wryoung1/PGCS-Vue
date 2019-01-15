import Home from './components/Home.vue';
import WorkerData from './components/workerdata/WorkerData.vue';
import Accuracy from './components/inputs/Accuracy.vue';
import Timeliness from './components/inputs/Timeliness.vue';
import Production from './components/inputs/Production.vue';
import Summary from './components/report/Summary.vue';
import PGCS from './components/report/PGCSPage.vue';


export const routes = [
    {path: '/', component: Home},
    {path: '/workerdata', component: WorkerData},
    {path: '/Accuracy', component: Accuracy},
    {path: '/Timeliness', component: Timeliness},
    {path: '/Production', component: Production},
    {path: '/Summary', component: Summary},
    {path: '/PGCS', component: PGCS},
];