<template>
  <div class="dashboard-container">
    <div class="app-container">      
      <el-card shadow="never">            
        <div class='organization-index'>              
          <div class='organization-index-top'>                
            <div class='main-top-title'>                  
              <el-tabs v-model="activeName">                    
                <el-tab-pane label="组织结构" name="first"></el-tab-pane>                    
                <div class="el-tabs-report">                      
                  <a class="el-button el-button--primary el-button--mini" title="导 出" >导入</a>                      
                  <a class="el-button el-button--primary el-button--mini" title="导 出" >导出</a>                    
                </div>                  
              </el-tabs>                
            </div>              
          </div>             
          <div style="overflow: scroll;white-space:nowrap"  class="treBox">                
            <div class="treeCon clearfix">                    
              <span>                      
                <i class="fa fa-university" aria-hidden="true"></i>                      
                <span ><strong>{{departData.name}}</strong></span>
              </span>                    
              <div class="fr">                        
                <div class="treeRinfo">
                  <span>负责人</span>                          
                  <span>在职  
                    <em class="colGreen" title="在职人数">--</em>&nbsp;&nbsp;(<em class="colGreen" title="正式员工">---</em>&nbsp;/&nbsp;<em class="colRed" title="非正式员工">---</em>)
                  </span>                        
                </div>                        
                <div class="treeRinfo">                          
                  <el-dropdown class="item">                            
                    <span class="el-dropdown-link">
                      操作<i class="el-icon-arrow-down el-icon--right"></i>                            
                    </span>                            
                    <el-dropdown-menu slot="dropdown">                                
                      <el-dropdown-item>                                  
                        <el-button type="text" @click="handlAdd('')">添加子部门 </el-button>                                
                      </el-dropdown-item>                              
                      <el-dropdown-item>                                
                        <el-button type="text" @click="handleList(organizationTree,0)">查看待分配员工</el-button>                              
                      </el-dropdown-item>                            
                    </el-dropdown-menu>                          
                  </el-dropdown>                        
                </div>                      
              </div>                  
            </div>
              <!--构造树形列表-->              
          </div>            
        </div>          
      </el-card>    
    </div> 
  </div> 
</template>
 

<script>
//引入api
import {list} from '@/api/base/departments'
export default {
  name: 'departments-table-index',
  //数据绑定模型  
  data() {    
    return {      
      activeName: 'first',  //激活pane的名称      
      dialogFormVisible:false,//是否显示弹出层标识      
      parentId:'',          //父id      
      departData:{},        //部门列表      
      formData:{}           //表单提交数据    
    }  
  },  
  //自定义方法  
  methods: {    
    getObject(params) {      
      organList().then(res => {        
        this.departData = res.data.data      
      })    
    } 
  },  
  //钩子函数  
  created: function() {    
    this.getObject()  
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
