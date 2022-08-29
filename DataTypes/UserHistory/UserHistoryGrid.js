import React, {useContext, useEffect, useState} from 'react'

import {useHttpClient} from '../../app/hooks/http-hook'

//Context
import {AuthContext} from '../../authentication/context/auth-context'

//Styling
import styles from './UserHistoryGrid.module.scss'
import Button from "../../app/common/FormElements/Buttons/Button/Button";


const UserHistoryGrid = (props) => {
    //Extract the functions inside useHttpClient
    const {sendRequest} = useHttpClient();

    const auth = useContext(AuthContext);

    //Data UserHistory query
    const formData = {
        "data": {
            "user": auth.id
        }
    };

    const [usersHistory, setUsersHistory] = useState([]);

    useEffect(() => {
        const getUsersHistory = async () => {
            const usersHistory =  await sendRequest(
                "/userhistory/list",
                'POST',
                JSON.stringify(formData),
                { 'Content-Type': 'application/json' }
            );
            setUsersHistory(usersHistory);
        }
        if(auth.isLoggedIn) getUsersHistory();

    }, [auth.isLoggedIn]);

    const modificationMsg = (modif) => {
        switch (modif){
            case "create": return "Création de "; break;
            case "update": return "Mise à jour de "; break;
            case "delete": return "Suppression de "; break;
            default : return "action state undefined";
        }
    }

    if (usersHistory
        && !usersHistory.error
        && usersHistory.data
        && usersHistory.data.length > 0)
    {

        const dateLanguage = 'en-CA';
        const timeLanguage = 'it-IT'
        return (
            <>
                <h3>Historique de modification</h3>
                <div key={`${styles["history-table"]}`} className={`${styles["history-table"]}`}>
                    {usersHistory.data.map( modification =>
                        <>
                            <div>{new Date(modification.modifDate).toLocaleDateString(dateLanguage)} <br></br> {new Date(modification.modifDate).toLocaleTimeString(timeLanguage)}</div>
                            <div>{modificationMsg(modification.action)}
                                {modification.user == modification.modifiedEntity ? "votre compte : " : "l'entité : " }
                                {modification.fields.username ? modification.fields.username + ". " : null}
                                {modification.fields.firstName ? modification.fields.firstName + " " + modification.fields.lastName : modification.fields.name}
                            </div>
                            <div>{Object.keys(modification.fields).length} champ{Object.keys(modification.fields).length > 1 ? 's' : ''}</div>
                            <div>
                                <Button slim key={modification._id.toString() + "BTN"} onClick={function () {
                                    alert(Object.keys(modification.fields).map( key =>
                                        '\n' + key + ' : ' + (modification.fields[key] ? modification.fields[key] : "\"\"")));
                                }}>Détails</Button>
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    }
}


export default UserHistoryGrid