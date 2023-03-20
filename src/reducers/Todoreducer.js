const initialData = {
    list: []
}

const todoreducer = (state = initialData, action) => {
    switch (action.type) {
        case 'Add_TODO':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case 'Delete_ToDo':
            const newlist = state.list.filter((value) => value.id != action.id)
            // state.list.push(newlist);
            console.log('newlist',newlist)
            return {
                ...state,
                list: newlist
            }

        case 'Remove_All':
            return{
                ...state,
                list:[]
            }

        default:
            return state;
    }
}
export default todoreducer;