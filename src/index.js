
import configureStore from './store'
import * as actions from './actions'

console.log("Welcome");

configureStore.dispatch(actions.addUser(
                {
                id:2,
                name:"Test2",
                age:21,
                email: "k.sankarg9@gmail.com",
                phone:"9715023102"
                }
));

configureStore.dispatch(actions.addUser(
                {
                id:3,
                name:"Test3",
                age:21,
                email: "k.sankarg9@gmail.com",
                phone:"9715023102"
                }
));

configureStore.dispatch(actions.addUser(
                {
                id:4,
                name:"Test4",
                age:21,
                email: "k.sankarg9@gmail.com",
                phone:"9715023102"
                }
));

//configureStore.dispatch(actions.deleteUser(2));

