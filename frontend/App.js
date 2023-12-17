import Main from "./Main";
import {Provider} from "react-redux"
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeApiKey="pk_test_51KAByRSDov8uqpNWO2cu6eEDeKiX62rG00inqv86KLxua7VRpK7p738ZEP5jjIQz572Gn520Bb30kgiurHuVKDB800jryFLMLR"

export default function App() {
  return (

  <StripeProvider

    threeDSecureParams={{
      backgroundColor:"black",
      timeout:5,
    }}

    
    merchantIdentifier="bhai-tera-ecom.com"
    publishableKey={stripeApiKey}
    >
          <Provider store={store}>
            <Main/>
        </Provider>
  </StripeProvider>
  
  );
}


