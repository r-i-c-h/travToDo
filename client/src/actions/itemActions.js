// export const EDIT_ITEM = 'EDIT_ITEM';
export const getItems = () => ({ type: 'GET_ITEMS' }); 

export const deleteItem = (id) => ({ type: 'DELETE_ITEM', id }); 

export const addItem = (name) => ({ type: 'ADD_ITEM', name }); 