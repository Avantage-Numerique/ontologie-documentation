import { useContext } from 'react'

/*
*
*   Specific function to be call everytime
*   we want to logout of the api
*
*/

//Context
import { AuthContext } from '../context/auth-context'
import { MessageContext } from '../../app/common/UserNotifications/Message/Context/Message-Context'

//Custom hooks
import { useHttpClient } from '../../app/hooks/http-hook'

export const useSessionHook = () => {

    //Import the authentication context to make sure the user is well connected
    const auth = useContext(AuthContext);

    //Import message context 
    const msg = useContext(MessageContext);

    //Extract the functions inside useHttpClient
    const {isLoading, sendRequest} = useHttpClient();

    const logout = async () => {

        //Make sure the user is logged in before sending the request
        if(auth.isLoggedIn){

            //Send the request to logout and wait the answer
            const response = await sendRequest(
                "/logout",
                'POST',
                {},
                { 'Content-Type': 'application/json' }
            )

            /*
                Display a message to the user relative based
                on the answer of the api
            */
           
            //If positive
            if(!response.error){

                //Remove the connection from the context
                //Erase the token il localstorage
                auth.logout()

                //Notify the user
                msg.addMessage({ 
                    text: response.message,
                    positive: true 
                })

            //If negative
            } else {                    
                msg.addMessage({ 
                    text: response.message,
                    positive: false 
                })
            }

        } else {
            msg.addMessage({ 
                text: "Vous avez déjà été déconnecté.",
                positive: false
            })
        }
    }

    const login = (data) => {
        
    }
    
    return {logout, isLoading}
}

