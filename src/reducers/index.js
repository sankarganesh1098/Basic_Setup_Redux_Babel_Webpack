import {ADD_USER,EDIT_USER,UPDATE_USER,DELETE_USER} from '../constants/ActionTypes';


const initialState = {
  users:[
                {
                id:1,
                name:"Test1",
                age:21,
                email: "k.sankarg9@gmail.com",
                phone:"9715023102"
                }
  ]
}

export default function registration(state=initialState.users,action){

    switch(action.type){

    case ADD_USER:
            return [
                {
                id: action.user.id,
                name:action.user.name,
                age:action.user.age,
                email: action.user.email,
                phone:action.user.phone
                }, 
                ...state
            ]

    case DELETE_USER:
            return state.filter(user=>user.id!==action.user.id);
    case EDIT_USER:
            return state.filter(user=>user.id===action.id);
    case UPDATE_USER:
            return state.map(user =>
                user.id === action.user.id ?
                Object.assign({}, user, { name:action.user.name,
                age:action.user.age,
                email: action.user.email,
                phone:action.user.phone }):
          user
        )

    default:
            return state.users;
    }

}