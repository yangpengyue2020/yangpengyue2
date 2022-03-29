<template>
  <div>
    <el-button @click="dialogFormVisible = true">编辑添加</el-button>
    <el-button @click="clearFilter">导出本地数据</el-button>
    <el-table
    :data="tableData"
    show-header
    
    style="width: 100%">
    <el-table-column
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="作者"
      prop="author">
    </el-table-column>
    <el-table-column
      label="浏览量"
      prop="nun">
    </el-table-column>
    <el-table-column
      label="回复"
      prop="returnInfo">
    </el-table-column>
    <el-table-column align="right" label = '操作'>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="添加" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="标题" >
        <el-input v-model="form.title" ></el-input>
      </el-form-item>
      <el-form-item label="作者" >
        <el-input v-model="form.author" ></el-input>
      </el-form-item>
      <el-form-item label="浏览量" >
        <el-input v-model="form.nun" ></el-input>
      </el-form-item>
      <el-form-item label="回复量" >
        <el-input v-model="form.returnInfo" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import request from '@/api'
export default {
  name: 'WorkspaceJsonList',

  data() {
    return {
      tableData: "",
       dialogFormVisible: false,
       form: {
          returnInfo: '',
          nun: '',
          title: '',
          author: '',
        },

    }
  },

  mounted() {
    
  },

  methods: {
    async getData(){
      const {data} = await request.get('/list');
      console.log(data)
      this.tableData = data
    },
    //删除行为
    handleDelete(index, row) {
      console.log(index, row);
      this.deleteData(index)
      this.getData()
     
    },
    //删除业务
    async deleteData(id){
      const {data} = await request.delete('/list/delete/'+id)
      console.log(data)
      
    }
  },
  created(){
    this.getData()
  }
};
</script>

<style  scoped>

</style>