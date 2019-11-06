<template>
  <div class="listbox">
    <div v-for="item in movieList" :key="item.id" class="lis">
      <h4>{{item.name}}</h4>
      <p>{{item.actor}}</p>
      <p>{{item.describe}}</p>
    </div>

    <el-pagination
      background
      layout="sizes,prev, pager, next"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="this.pagecount"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getmovieList } from "../../api/movie";

export default {
  data() {
    return {
      movieList: [],
      pagesize: 1,
      pagecount: 5,
      total: null
    };
  },
  created() {
    this._getmovieList();
  },
  methods: {
    async _getmovieList() {
      const result = await getmovieList({
        pagesize: (this.pagesize - 1) * this.pagecount,
        pagecount: this.pagecount
      });

      this.movieList = result.data.result;
      this.total = result.data.total[0].total;
    },
    currentChange() {
      this.pagesize++;
      this._getmovieList();
    },
    sizeChange(val) {
      this.pagecount = val;
    }
  }
};
</script>

<style>
.listbox {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.lis {
  width: 100%;
  height: auto;
}
.img {
  margin: 0 10px;
}
</style>
