import { getList } from '@/services/list.js'
export default {
    namespace:'list',
    state:{
        list:[],
    },
    effects:{
        *getlist(_,{put,call}){
            const res = yield call(getList,{name:'zsd',age:'14'})
            console.log('res',res)
        }
    },
    reducers:{
        save(state,{payload}){

        },
    }

}