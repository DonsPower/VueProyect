<template>
    <v-container>
        <comp-titulo msg="Información Covid-19"></comp-titulo>
                   
            <v-row mx-auto pa-6>
                <v-col xs="12" md="4" >
                    <v-card shaped  class="mx-auto" color="#FF5252" elevation="15">
                        <v-card-text align="center">
                            <div class="white--text">Casos activos</div>
                            <p class="display-2 white--text" align="center">
                                {{totalinfected}}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="4" xs="12">
                    <v-card shaped  class="mx-auto" color="#4CAF50" elevation="15">
                        <v-card-text align="center">
                            <div class="white--text">Total curados</div>
                            <p class="display-2 white--text" align="center">
                                {{totalheald}}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col  md="4">
                    <v-card shaped  class="mx-auto" color='#424242' elevation="15">
                        <v-card-text align="center">
                            <div class="white--text " sd="6">Total muertos</div>
                            <p class="display-2 white--text" align="center">
                                {{totaldeadth}}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>  
            </v-row>
            <br>    
            <v-container class="m-5">
                <p class="display-1 grey--text " align="center">Tabla de incremento de casos de covid-19 en Mexico.</p>
                <v-row  v-if="arrray_inicioFin.length > 0">
                    <v-col md="2" class="mt-5">
                        <P align="center">Total de infectados, dia: {{dia}}/{{mes}}/{{anio}}</P>
                        <v-timeline align="center" dense reverse>
                            <v-timeline-item class="text-right">Total: {{mexicototal}}</v-timeline-item>
                            <v-timeline-item class="text-right" >Recuperados: {{mexicorecuperados}}</v-timeline-item>
                            <v-timeline-item class="text-right" >Muertos: {{mexicomuertos}}</v-timeline-item>
                        </v-timeline>
                    </v-col>
                    <v-col md="10">
                         <line-chart
                        :chartData="arrray_inicioFin"
                        :options="chartOptions"
                        :chartColors="positiveChartColors"
                        label="Total de casos por dia"
                        />
                    </v-col>
                </v-row>
            </v-container>
    </v-container>
</template>

<script>
import Titulos from "@/components/Titulos.vue"
import  axios  from "axios";
import moment from "moment";
import LineChart from "@/components/LineChart";
export default {
    name: 'Faceapi',
     components:{
        'comp-titulo': Titulos,
        LineChart
    },
    
    data(){
        return{
            //fechaactual
            dia: null,
            mes: null,
            anio:null,
            //Variables utilizadas en total de casos confirmados en el mundo.
            totalinfected: null,
            totaldeadth: null,
            totalheald: null,
            //datemexico.
            mexicototal: null,
            mexicomuertos: null,
            mexicorecuperados: null,
            //inicio fin casos mexico
            arrray_inicioFin: [],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
            positiveChartColors: {
                borderColor: "#077187",
                pointBorderColor: "#077187",
                pointBackgroundColor: "#0E1428",
                backgroundColor: "#D0C3BD"
            }

        }
    },
    async created(){
        this.obtenerDia();
        this.getcovid();
            const { data } = await axios.get("https://api.covid19api.com/dayone/country/mexico/status/confirmed");
            
            data.forEach(d => {
                const date = moment(d.Date).format("MM/DD");
                const { Cases }=d;    
                this.arrray_inicioFin.push({date, total: Cases})
            });
            
        },
    methods: {
        async getcovid(){
            let total= await axios.get('https://api.covid19api.com/summary');
            //console.log(total.data.Countries[dia].Country);
            this.totalinfected= await total.data.Global.TotalConfirmed;
            this.totalheald= await total.data.Global.TotalRecovered;
            this.totaldeadth= await total.data.Global.TotalDeaths;
            this.mexicototal = await total.data.Countries[109].TotalConfirmed;
            this.mexicomuertos = await total.data.Countries[109].TotalDeaths;
            this.mexicorecuperados = await total.data.Countries[109].TotalRecovered;
            
        },
        obtenerDia(){
            var f = new Date();
            this.dia=f.getDate()
            this.mes=f.getMonth() +1
            this.anio=f.getFullYear()
            
        }
    },
}
</script>

