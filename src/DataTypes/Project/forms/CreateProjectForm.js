import React, {useEffect} from 'react';

//Custom hooks
import { useFormUtils } from '@/src/hooks/useFormUtils/useFormUtils'

//Components
import Button from '@/FormElements/Button/Button'
import Input from '@/FormElements/Input/Input'
import SelectFetch from '@/FormElements/Select/SelectFetch'
import Select2 from '@/FormElements/Select2/Select2'

//Utils 
import {lang} from "@/src/common/Data/GlobalConstants";
import {getDefaultCreateEntityStatus} from "@/DataTypes/Status/EntityStatus";

//Context
import { useAuth } from "@/src/authentification/context/auth-context";

const CreateProjectForm = () => {

    //Authentication ref
    const auth = useAuth();


    const { FormUI, submitRequest, formState, formTools } = useFormUtils(
        {
            name: {
                value: "",
                isValid: true
            },
            entityInCharge: {
                value: "",
                isValid: true
            },
            context: {
                value: "",
                isValid: true
            }
        },/* 
        //Pass a set of rules to execute a valid response of an api request
        positiveRequestActions || {
            clearForm: true,            //Clear the form
            displayResMessage: true     //Display a message to the user to confirm the succes
        } */
    );

    useEffect(() => console.log("formState", formState), [formState])

    const submitHandler = async event => {
        
        event.preventDefault();
        
        const formData = {
            "data": {
                name: formState.inputs.name.value,
                entityInCharge: formState.inputs.entityInCharge.value.value,
                context: formState.inputs.context.value,
                status: getDefaultCreateEntityStatus(auth.user),
            }
        }
        
        //Add data to the formData
        await submitRequest(
            "/projects/create",
            'POST',
            formData
        );
    }

    return (
        <form>
            <FormUI />

            <Input 
                name="name"
                label="Nom du projet"
                formTools={formTools}
                validationRules={[
                    {name: "REQUIRED"}
                ]}
            />    

            <Select2
                name="entityInCharge"
                label="Organisation en charge"
                formTools={formTools}
                creatable={false}
                isMulti={false}


                fetch={"/organisations/list"}
                //requestData={{}}
                searchField={"name"}
                selectField={"name"}

                /* optionsList={[
                    { value: "Potater", label: "Patates" },
                    { value: "certaa", label: "Sierra" },
                    { value: "Plier", label: "Pliers" }
                ]} */
            />
            <SelectFetch 
                name="context"
                label="Choisissez un contexte"
                formTools={formTools}
                noValueText={lang.noSelectedOption}
                fetchOption="context-enum"
            />
 
            <Button onClick={submitHandler}>
                Soumettre
            </Button>
        </form>
    )
}

export default CreateProjectForm;