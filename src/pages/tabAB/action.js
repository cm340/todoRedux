import store from '../../store/index';

/**
 * @description 获取完整的数据列表
 * @date 2020-06-23
 * @export
 * @param {*} dispatch
 * @returns
 */
export function getTodoList(dispatch){
    return ()=>{
        fetch('/mock.json')
        .then(res=>{ return res.json()})
        .then(data=>{
            const todoList=data.todoList
            const { pageIndex, pageSize }=store.getState().todoReducer
            const currentList=getCurrentList('',todoList,pageIndex,pageSize)
            const action={
                type:'GET_LIST',
                value: data.todoList,
                currentList:currentList
            }
           dispatch(action)
         })
        .catch((e)=>console.log(e.mesage))
    }
};
/**
 * @description 获取当前列表
 * @date 2020-06-23
 * @param {*} searchName 搜索框的值
 * @param {*} todoList 数据列表
 * @param {*} pageIndex 页码
 * @param {*} pageSize 一页几条数据
 * @returns
 */
function getCurrentList (searchName,todoList,pageIndex,pageSize){
    const searchResult=todoList.filter(item=>item.content.indexOf(searchName)>-1).slice((pageIndex-1)*pageSize,pageSize*pageIndex)
    return searchResult
}

/**
 * @description 点击完成触发
 * @date 2020-06-23
 * @export
 * @param {*} id 被点击的对象id
 * @returns
 */
export function onFinish(id){
    const { pageIndex, pageSize, todoList }=store.getState().todoReducer
    todoList.some(item=>{
        if(item.id===id){
            item.finish=1
            return true
        }
        return false
    })
 
    const currentList=getCurrentList('',todoList,pageIndex,pageSize)
    const action={
        type:'UPDATE_FINISH',
        value: currentList,
    }
    return action
};

/**
 * @description 获取被点击编辑的对象
 * @date 2020-06-23
 * @export
 * @param {*} item 该对象
 * @returns
 */
export function updateItem(item){
    const action={
        type:'UPDATE_ITEM',
        value: item,
    }
    return action
};

/**
 * @description 修改input输入框的内容
 * @date 2020-06-23
 * @export
 * @param {*} e
 * @returns
 */
export function updateItemHander(e){
    const { item } =store.getState().todoReducer;
    const obj=Object.assign({},item)
    obj.content=e.target.value;
    const action={
        type:'UPDATE_INPUT_ITEM',
        value: obj,
    }
    return action
};

/**
 * @description 点击模态框的确定触发
 * @date 2020-06-23
 * @export
 * @returns
 */
export function handleOk(){
    const { todoList, item, pageIndex, pageSize, } =store.getState().todoReducer;
    todoList.some(ele=>{
        if(ele.id===item.id){
            ele.content=item.content
            return true
        }
        return false
    })
    const currentList=getCurrentList('',todoList,pageIndex,pageSize)
    console.log(currentList)
    const action={
        type:'UPDATE_CONTENT',
        value:currentList
    }
    return action
};
/**
 * @description 点击模态框的取消触发
 * @date 2020-06-23
 * @export
 * @returns
 */
export function handleCancel(){
    const action={
        type:'CLOSE_MODAL',
    }
    return action
};

/**
 * @description 修改下拉框的页数
 * @date 2020-06-23
 * @export
 * @param {*} current 当前页码
 * @param {*} pageSize 页数
 * @returns
 */
export function onShowSizeChange(current,pageSize){
    const { todoList } =store.getState().todoReducer;
    const currentList=getCurrentList('',todoList,current,pageSize)
    const action={
        type:'CHANGE_PAGESIZE',
        value:currentList,
        pageSize,
        pageIndex:current
    }
    return action
}

/**
 * @description 删除一项
 * @date 2020-06-23
 * @export
 * @param {*} index 待删除的索引
 * @returns
 */
export function delItem(id){
    const { todoList, pageIndex, pageSize, } =store.getState().todoReducer;
    const result = todoList.filter(item =>{
        return item.id !== id
    })
    const currentList=getCurrentList('',result,pageIndex,pageSize)
    const action={
        type:'DEL_ITEM',
        value:currentList,
        todoList:result
    }
    return action
}
/**
 * @description 页码发生改变
 * @date 2020-06-23
 * @export
 * @param {*} pageIndex 新页码
 * @returns
 */
export function onChange(pageIndex){
    const { todoList, pageSize } =store.getState().todoReducer;
    const currentList=getCurrentList('',todoList,pageIndex,pageSize)
    const action={
        type:'CHANGE_PAGEINDEX',
        value:currentList,
        pageIndex
    }
    return action
}
/**
 * @description 修改搜索框的内容
 * @date 2020-06-23
 * @export
 * @param {*} e
 * @returns
 */
export function searchHander(e){
    const action={
        type:'SEARCH_INPUT',
        value:e.target.value
    }
    return action
}

/**
 * @description 搜索
 * @date 2020-06-23
 * @export
 * @returns
 */
export function search(){
    const { todoList, searchName, pageIndex, pageSize, } =store.getState().todoReducer;  
    const currentList=getCurrentList(searchName,todoList,pageIndex,pageSize);
    const action={
        type:'SEARCH_ITEM',
        value:currentList
    }
    return action
}
/**
 * @description 修改添加Input输入框的内容
 * @date 2020-06-23
 * @export
 * @param {*} e
 * @returns
 */
export function addItemHander(e){
    const action={
        type:'ADD_INPUT',
        value:e.target.value
    }
    return action
}
/**
 * @description 添加
 * @date 2020-06-23
 * @export
 * @returns
 */
export function addItem(){
    const { todoList, addName, pageIndex, pageSize, } =store.getState().todoReducer;  
    let id=todoList[todoList.length - 1].id
    todoList.push({
            id: String(++id),
            content: addName,
            finish:0
        })
   
    console.log(todoList)
    const currentList=getCurrentList('',todoList,pageIndex,pageSize);
    const action={
        type:'ADD_ITEM',
        value:currentList,
        todoList
    }
    return action
}