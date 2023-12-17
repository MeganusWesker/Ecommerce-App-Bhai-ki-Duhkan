import Toast from 'react-native-toast-message';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';


export const useMessageAndErrorUser=(navigation,dispatch,navigationTo)=>{
    const {loading,error,message} =useSelector(state=>state.user);

    useEffect(()=>{

        if(error){
      
            Toast.show({
              type: 'error',
              text1: error,
            });
      
            dispatch({
              type:"clearError"
            })
        }
      
        if(message){
      
          Toast.show({
            type: 'success',
            text1: message,
          });
      
          navigation.reset({
            index:0,
            routes: [{ name: navigationTo }],
          });
      
          dispatch({
            type:"clearMessage"
          })
        }
      
      },[error,message,dispatch]);

      return loading;
}


export const useMessageAndErrorOther=(navigation,dispatch,navigationTo)=>{
  const {loading,error,message} =useSelector(state=>state.product);

  

  useEffect(()=>{

      if(error){
    
          Toast.show({
            type: 'error',
            text1: error,
          });
    
          dispatch({
            type:"clearError"
          })
      }
    
      if(message){
    
        Toast.show({
          type: 'success',
          text1: message,
        });
    
         navigation.navigate(navigationTo)
    
        dispatch({
          type:"clearMessage"
        })
      }
    
    },[error,message,dispatch]);

    return loading;
}

export const useMessageAndErrorOrder=(navigation,dispatch,navigationTo)=>{
  const {loading,error,message} =useSelector(state=>state.order);

  

  useEffect(()=>{

      if(error){
    
          Toast.show({
            type: 'error',
            text1: error,
          });
    
          dispatch({
            type:"clearError"
          })
      }
    
      if(message){
    
        Toast.show({
          type: 'success',
          text1: message,
        });
    
         navigation.navigate(navigationTo)
    
        dispatch({
          type:"clearMessage"
        })
      }
    
    },[error,message,dispatch]);

    return loading;
}