export const initialState=null

export const reducer=(state,action)=>{
	if(action.type==="USER"){
		// console.log(action.payload) //remove this after test
		return action.payload
	}
	if(action.type==="CLEAR"){
		return null
	}

	return state
}