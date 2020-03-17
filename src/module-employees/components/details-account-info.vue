<template>  
    <div class="boxInfo">    
        <!-- 表单内容 -->    
        <div class="formInfo">      
            <div>        
                <!-- 头部信息  -->        
                <div class="userInfo">             
                    <div class="headInfo clearfix">               
                        <div class="headText">                 
                            <el-form ref="formData" :model="formData" label-width="215px">                     
                                <el-form-item label="姓名：">                       
                                    <el-input v-model="formData.username" placeholder="请输入" class="inputW"></el-input>                     
                                </el-form-item>                     
                                <el-form-item label="密码：">                       
                                    <el-input v-model="formData.password" placeholder="请输入" class="inputW"></el-input>                    
                                </el-form-item>                    
                                <el-form-item label="部门：">                        
                                    <el-input placeholder="请选择" v-model="formData.departmentName" icon="caret-bottom" class="inputW" @click.native="isShowSelect = !isShowSelect"></el-input>
                                    <input v-model="formData.departmentId" type="hidden" >
                                        <el-tree v-if="isShowSelect" 
                                            :expand-on-click-node="false" 
                                            :props="{label:'name'}" 
                                            default-expand-all 
                                            :filter-node-method="filterNode" 
                                            @node-click="handleNodeClick"
                                            class="objectTree"
                                            ref="tree2">
                                        </el-tree>                    
                                </el-form-item>
                                <el-form-item>                        
                                    <el-button type="primary" @click="saveData">更新</el-button>                        
                                    <router-link :to="{'path':'/employees/index'}" class="el-button el-button--text el-button--small">取消</router-link>
                                </el-form-item>                 
                            </el-form>               
                        </div>             
                    </div>        
                </div>      
            </div>    
        </div>    
    </div> 
</template>
 
<script> 
import constantApi from '@/api/constant/employees' 
import {detail,update} from "@/api/base/users" 
import { organList } from '@/api/base/departments' 
export default {  
    name: 'accountInfo',  
    props: ['objId'],  
    data() {    
        return {      
            baseData: constantApi,      
            inspectionObjectOptions: [],      
            isShowSelect:false,      
            formData: {        
                id: this.objId,      
            }    
        }  
    },  
    methods: {    
        handleNodeClick(data) {      
            this.formData.departmentName = data.name      
            this.formData.departmentId = data.id      
            this.isShowSelect = false    
        },    
        // 获取详情    
        getObjInfo() {      
            detail({ id: this.objId }).then(res => {          
                this.formData = res.data.data      
            })
        },    
        saveData(obj) {      
            update(this.formData).then(res => {          
                this.formData = res.data          
                this.$message.success('保存成功！')          
                this.getObjInfo()      
            })    
        },  
    },  
    // 创建完毕状态  
    created: function() {    
        this.getObjInfo()    
        organList().then(ret => {      
            this.inspectionObjectOptions.push(ret.data.data)    
        })  
    } 
} 
</script>
