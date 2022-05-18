<template>
<div id="app">
  <v-app id="inspire">
    <v-card >
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="id"
        v-model="selectedRows"
        class="elevation-1">
          <template v-slot:item="{ item }" >
            <router-link tag="tr" :to="{name:item.link}" :class="selectedRows.indexOf(item.id)>-1?'cyan':''"  @click="rowClicked(item)">
                <td>{{item.problem}}</td>
                <td>{{item.Number_Of_Submission}}</td>
                <td>{{item.Accuracy}}</td>
            </router-link >
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</div>
</template>
<script>
export default {
  data(){
        return {
      selectedRows: [],
      headers: [
        {
          text: "Problem",
          align: "left",
          sortable: false,
          value: "problem-name"
        },
        { text: "Number_Of_Submission", value: "nsubmission" },
        { text: "Accuracy", value: "accy" },
      ],
      desserts: [
        {
          id: 1,
          problem: "first problem",
          Number_Of_Submission: 159,
          Accuracy: 87,
          link:'first'
        },
        {
          id: 2,
          problem: "second problem",
          Number_Of_Submission: 250,
          Accuracy: 20,
          link:'second'
        },
        {
          id: 3,
          problem: "third problem",
          Number_Of_Submission: 130,
          Accuracy: 30,
          link:'third'
        },
        {
          id: 4,
          problem: "fourth problem",
          Number_Of_Submission: 187,
          Accuracy: 40,
          link:'fourth'
        },
        {
          id: 5,
          problem: "fifth problem",
          Number_Of_Submission: 159,
          Accuracy: 55,
          link:'fifth'
        },
      ]
    }
  },
  methods: {
    rowClicked(row) {
      this.toggleSelection(row.id);
      console.log(row);
    },
    toggleSelection(keyID) {
      if (this.selectedRows.includes(keyID)) {
        this.selectedRows = this.selectedRows.filter(
          selectedKeyID => selectedKeyID !== keyID
        );
      } else {
        this.selectedRows.push(keyID);
      }
    },
    }
}
</script>