const defaultState={
    todoList:[],//将要做的事列表
    currentList:[],//页面展示的列表
    visible:false,//模态框的显示隐藏
    item:{},//被选中修改的待办事项
    searchName:'',//搜索款输入的值
    addName:'',//添加输入框的值
    pageIndex:1,//当前页码
    pageSize:5,//一页显示几条数据
    total:20,//总数据条数
}

export default (state=defaultState,action) => {
    switch(action.type) {
        //获取数据列表
        case 'GET_LIST':
            return {
                ...state, 
                todoList:action.value,
                currentList:action.currentList
            }
        //修改成已完成
        case 'UPDATE_FINISH':
            return {
                ...state,
                currentList:action.value
            }
        //点击编辑按钮触发
        case 'UPDATE_ITEM':
            return {
                ...state,
                visible:true,
                item:action.value
            }
        //修改input输入框的内容
        case 'UPDATE_INPUT_ITEM':
            return {
                ...state,
                item:action.value
            }
        //关闭模态框
        case 'CLOSE_MODAL':
            return {
                ...state,
                visible:false
            }
        //修改内容
        case 'UPDATE_CONTENT':
            return {
                ...state,
                visible:false,
                currentList:action.value
            }
        //改变页数
        case 'CHANGE_PAGESIZE':
            return {
                ...state,
                pageSize:action.pageSize,
                pageIndex:action.current,
                currentList:action.value
            }
        //删除
        case 'DEL_ITEM':
            return {
                ...state,
                currentList:action.value,
                todoList:action.todoList,
                total:action.todoList.length
            }
        //页码改变
        case 'CHANGE_PAGEINDEX':
            return {
                ...state,
                pageIndex:action.pageIndex,
                currentList:action.value
            }
        //搜索框内容改变
        case 'SEARCH_INPUT':
            return {
                ...state,
                searchName:action.value
            }
        //搜索
        case 'SEARCH_ITEM':
            return {
                ...state,
                currentList:action.value
            }
        //添加输入框内容改变
        case 'ADD_INPUT':
            return {
                ...state,
                addName:action.value
            }
        //添加
        case 'ADD_ITEM':
            return {
                ...state,
                currentList:action.value,
                todoList:action.todoList,
                total:action.todoList.length
            }
        default:
            return state
    }
}