<template>
  <section>
    <EDTable :tableData="tableData" :dropCol="dropCol" :colList="colList">
      <template #setting>
        <el-button type="text" icon="el-icon-sort" size="small">拖拽</el-button>
      </template>
    </EDTable>
    <pre style="text-align: left">
      {{ tableData }}
    </pre>
  </section>
</template>

<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝表格拖拽
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import EDTable from "./EDTable";
import Sortable from "sortablejs";
import { colList, dropCol, TableList } from "./data.js"; //数据来源
export default {
  components: {
    EDTable,
  },
  data() {
    return {
      colList: colList,
      dropCol: dropCol,
      tableData: TableList,
    };
  },
  mounted() {
    this.rowDrop();
    // this.columnDrop();
  },
  methods: {
    /** 行拖拽 */
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        multiDrag: true,
        selectedClass: "selected",
        animation: 180,
        delay: 0,
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },

    /** 列拖拽 */
    // columnDrop() {
    //   const tHeader = document.querySelector('.el-table__header-wrapper tr');
    //   this.sortable = Sortable.create(tHeader, {
    //     animation: 180,
    //     /** 延迟 */
    //     // delay: 1,
    //     filter: '.disabled',
    //     onEnd: (evt) => {
    //       const oldItem = this.dropCol[evt.oldIndex];
    //       this.dropCol.splice(evt.oldIndex, 1);
    //       this.dropCol.splice(evt.newIndex, 0, oldItem);
    //     },
    //   });
    // },
  },
};
</script>
<style scoped>
.selected {
  background-color: #f9c7c8 !important;
  border: solid red 1px !important;
  z-index: 1 !important;
}
</style>
