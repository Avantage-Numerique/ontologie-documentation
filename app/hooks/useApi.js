import { sendExternalApiRequest } from './http-hook';

export default async function useApi(connectedSetter) {
    const pingApi = async () => {
        try {
            const res = await sendExternalApiRequest(
                "/ping",
                'POST',
                JSON.stringify({})
            );
            if (res !== undefined && res.data["/ping"] === "OK")
                connectedSetter(true);
            else
                connectedSetter(false); // Set as api is not up

        } catch (error) {
            connectedSetter(false);
        }
    }
    
    //First ping
    pingApi();

    //Then ping at interval of time
    setInterval( async () => pingApi(), 20000);

}