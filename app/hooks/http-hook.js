
import { useState, useCallback, useRef, useEffect, useContext } from 'react';

//Custom hook
import { AuthContext } from '../../authentication/context/auth-context' 


//Main hook function called for every request made to the database
export const useHttpClient = () => {

  //State that determine if the request is in progress
  const [isLoading, setIsLoading] = useState(false);

  //Access the authentication context
  const auth = useContext(AuthContext);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(

    //Main request function with pre-determined values
    async (path, method = 'GET', body = null, header = {}) => {

      //Start the loading component
      setIsLoading(true); 

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      const baseApiRoute = 'http://localhost' + ':' + '8000';
      //const apiPingRoute = baseApiRoute + '/ping';
      
      const headers = { 
        ...header,
        //Authorization: 'Bearer ' + auth.token
      }

      try {

        /*
            Use the fetch requestion with the url (required) and with its options object filled with the full data that we want to pass, if so. 
        */
        const response = await fetch(baseApiRoute + path, {
          method,                                   //Get by default
          body,                                     //Data
          headers,
          signal: httpAbortCtrl.signal              
        });

        /*  
          Response data should have this form : 
          https://github.com/Avantage-Numerique/bdsol-api/blob/master/api/doc/documentation-api.md
        */

        const responseData = await response.json();

        //Remove the abort controler now that the response has been received
        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        );

        //Evaluate if the response is positive (code 200) or reprensent an error
        //if (!response.ok || responseData.error) {
        //  throw new Error(responseData);
        //}

        //The operation is done so we can now remove the loading state
        setIsLoading(false);

        //Return the data
        return responseData;

      } catch (err) {
        console.log(err)
          //Remove the loading state
          setIsLoading(false);

          //Default return value
          return {
            error: true,
            code: 504,
            message: "Une erreur est survenue et le serveur ne semble pas répondre. Assurez-vous d'avoir une connexion."
          }


      }
    },
    []
  );

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return { isLoading, sendRequest };
};