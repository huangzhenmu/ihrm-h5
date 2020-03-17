<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <el-table :data="dataList" fit style="width: 100%;" border>
          <el-table-column type="index" :index="1" label="序号" width="150"></el-table-column>
          <el-table-column sortable prop="username" label="姓名" width="150"></el-table-column>
          <el-table-column sortable prop="mobile" label="手机号" width="150"></el-tablecolumn>
          <el-table-column sortable prop="workNumber" label="工号" width="120"></eltable-column>
          <el-table-column sortable prop="formOfEmployment" label="聘用形势" width="200"></el-table-column>
          <el-table-column sortable prop="departmentName" label="部门" width="200"></eltable-column>
          <el-table-column sortable prop="timeOfEntry" label="入职时间" width="150"> </el-table-column>
          <el-table-column sortable label="状态" width="120">
            <template slot-scope="scope">
              <el-switch 
              v-model="scope.row.accountStatus" 
              active-color="#13ce66" 
              inactive-color="#ff4949"
              @change="handleStatus(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" align="center" width="220">
            <template slot-scope="scope">
              <router-link :to="{'path':'/employees/details/' + scope.row.id}" class="el-button el-button--text el-button--small">
                查看
              </router-link>
              <el-button @click="handleDelete(scope.row)" type="text" size="small">删除 </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
          <PageTool :paginationPage="requestParameters.page" 
                    :paginationPagesize="requestParameters.pagesize" 
                    :total="counts" 
                    @pageChange="handleCurrentChange" 
                    @pageSizeChange="handleSizeChange">          
                    </PageTool>        
        </div>
      </el-card>
     </div>
  </div>
</template>

<script>
import constantApi from '@/api/constant/employees'
import {list,remove} from "@/api/base/users"
import PageTool from './../../components/page/page-tool'
import employeesAdd from './../components/add'
var _this = null
export default {  
  name: 'employeesList',
  components: {    
    PageTool,employeesAdd
  },  
  data() {    
    return {      
      employeesAdd: 'employeesAdd',      
      baseData: constantApi,      
      dataList: [],      
      counts: '',
      requestParameters:{        
        page: 1,        
        pagesize: 10,      
      }        
    }  
  },  
  methods: {    
    // 业务方法    
    doQuery(params) {        
      list(this.requestParameters).then(res => {          
        this.dataList = res.data.data.rows          
        this.counts = res.data.data.total        
      })    
    }  
  },  
  // 创建完毕状态  
  created: function() {    
    this.doQuery()  
  }, 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
