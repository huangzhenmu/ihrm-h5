<template>  
    <div class="dashboard-container">    
        <div class="app-container">      
            <el-card  :style="{minHeight:boxHeight}">          
                <el-tabs v-model="activeName" class="infoPosin">            
                    <el-tab-pane name="first" class="rInfo">              
                        <span slot="label">登录账户设置</span>              
                        <component v-bind:is="accountInfo" :objId='objId' ref="user"></component>            
                    </el-tab-pane>            
                    <el-tab-pane name="two" class="rInfo">                
                        <span slot="label">个人详情</span>            
                    </el-tab-pane>            
                    <el-tab-pane name="third" class="rInfo">                
                        <span slot="label">岗位信息</span>            
                    </el-tab-pane>
                </el-tabs>      
            </el-card>    
        </div>  
    </div> 
</template>
 
<script> 
import accountInfo from './../components/details-account-info' 
export default {  
    name: 'employeesDetails',  
    components: { 
        accountInfo
    },  
    data() {    
        return {     
            accountInfo:'accountInfo',      
            activeName: 'first',      
            objId: this.$route.params.id,      
            dataList: []    
        }  
    } 
} 
</script>
