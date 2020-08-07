<template class="hola"> 
     <v-container >
         <comp-titulo msg="Generador de Codigos QR"></comp-titulo>
         <v-row>
          <v-col cols="12" md="8" >
         <v-form v-model="valid">
          <v-container >
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Apellidos"
                  required
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
           <v-btn class="mr-4" @click="submit=true">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-row>
          </v-container>
        </v-form>
        </v-col>
        <v-col  cols="8" md="4" >
          <p v-if="email!=''">Nombre: {{firstname}} {{lastname}} Correo: {{email}}</p>          
         <h2 v-if="submit==true">Codigo generado</h2>
         <!--Generar codigo QR-->
           <qrcode v-if="submit==true" :value="calculadora()" :options="{ width: 200 }"></qrcode>
        </v-col>
        </v-row>
     </v-container>
     
</template>
<script>
import Titulos from "@/components/Titulos.vue"
  export default {
    components:{
      'comp-titulo': Titulos
    },
    data: () => ({
      submit: false,
      cadena: '',
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name es requerido',
        v => v.length >2 && v.length <= 10 || 'Nombre invalido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      clear(){
        this.firstname=''
        this.email=''
        this.lastname=''
        this.submit=false
      },
      calculadora(){
        let cadena;
        if(this.firstname=='' && this.lastname=='' && this.lastname==''){
          cadena="Codigo de prueba";
        }else if(this.submit==true){
        cadena=(
          this.firstname+" "+
          this.email+ " "+
          this.lastname);
        }
        return cadena;
      }
    },
    
  }
</script>
<style>
 
</style>