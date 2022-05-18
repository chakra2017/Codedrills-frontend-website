<template>
 <v-app >
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      :align="center"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>

    </v-data-table>
  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data(){
        return {
            items:[
            
            {
                rank:'1',
                name:'sutanu',
                score:'10',
                a:'2',
                b:'2',
                c:'2',
                d:'2',
                e:'2',
            },
            {
                name:'chakra',
                rank:'2',
                score:'6',
                a:'2',
                b:'0',
                c:'0',
                d:'2',
                e:'2',
            },
            {
                name:'dipanjan',
                rank:'3',
                score:'4',
                a:'2',
                b:'0',
                c:'0',
                d:'0',
                e:'2',
            },
        ]
    }
},
    computed :{
    headers(){
      return [
        {
            text: 'Rank',
            align: 'start',
            sortable: false,
            value: 'rank',
          },
        {text:"Name",value:"name"},
        {text:"Score",value:"score"},
        {text:"A",value:"a"},
        {text:"B",value:"b"},
        {text:"C",value:"c"},
        {text:"D",value:"d"},
        {text:"E",value:"e"},

        ]
      },
    
    }
  }
</script>
