export default function logger(reducer)
{
    return (preState,action, args) =>{
      
       console.group(action)
       console.log('Pre' + preState)
       console.log('Argument '+ args)
       const nextState= reducer(preState,action,args)
       console.log('Next State' , nextState)   
       console.groupEnd()
       return nextState
    }
}