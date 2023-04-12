import {UsersInitialStateType} from "../redux/users-reducer";


export const updateObjectInArray = (items: UsersInitialStateType[], itemId: number, objPropName: any, newObjProps: Object)=>{
   // @ts-ignore
   return items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}