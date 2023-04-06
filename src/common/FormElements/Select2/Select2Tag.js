import React, {useEffect, useState, useRef} from 'react';//useContext

//Custom Hooks
import { useHttpClient } from '@/src/hooks/http-hook'
import { useValidation } from '@/src/hooks/useValidation/useValidation';
import useDebounce from '@/src/hooks/useDebounce'

//Components
import CreatableSelect from 'react-select/creatable';

//Styling
import styles from './Select2Tag.module.scss'
import makeAnimated from 'react-select/animated';
import { selectStyle } from '@/src/styles/datatypeStyle';

/*
Props :
    - formTools : For formState update
    - name : formState update and mainly use for ids and keys
    - searchField : The name of the field to make the search on
    - label : When mentionned, add a label on top of the select field
    - fetch : the url to fetch from
    - requestData : the objet to send for the first request
    - placeholder : placeholder inside the select field
    - idField : field the id should go in ==> select tag set formState value to [ { idField : value, status: {statusObject} }.
    - If there is an initial value to formState, it should be an array, and elem.[idField]._id and elem[searchField] should exist
        */

const Select2Tag = ({name, formTools, ...props}) => {

    const {
        formState,
        inputHandler,
        //inputTouched
    } = formTools;

    //Import message context
    const {sendRequest} = useHttpClient();

    //List of options fetched by the api and proposed to the user
    const [selectResponse, setSelectResponse] = useState([]);
    const [optionList, setOptionList] = useState([]);

    const selectRef = useRef();
    const [inputValue, setInputValue] = useState("");

    //List of probably chosen entities
    const entitiesList = useRef([]);

    //Set default selectValue
    useEffect(() => {

        if(formState.inputs[name]?.value?.length > 0)
        {
            const state = formState.inputs[name].value.map((elem) => {
                //FIX. If the field recieve an array of direct data instead if the structure : { idField: { data} }
                if(elem._id){
                    //If yes, we need to ajust the shape of the data
                    const formatedObj = formState.inputs[name].value.map(obj => ({[props.idField] : obj}));
                    entitiesList.current.push(...formatedObj)
                } else {
                    //Normal behavior
                    entitiesList.current.push(...formState.inputs[name].value)
                }

                //If the data is directly inside
                if(elem._id)
                    return { value: elem._id, label: elem[props.searchField]}
                //Else
                return { value: elem[props.idField]._id, label: elem[props.idField][props.searchField]
            }})
            selectRef.current.setValue(state, "set-value");
        }
    }, [])

    const fetchSingleTaxonomy = async (id) => {
        return await sendRequest(
            "/taxonomies/search",
            'POST',
            JSON.stringify({data:{id:id}})
        );
    }
    

    const updateValue = (selectedValue) => {
        //Create formState object to update it with
        const updatedList = selectedValue.map( (selected) => {
            //if is in entitiesList
            const inEntityList = entitiesList.current.find( elem => {
                return selected.value === elem[props.idField]._id
            })
            if(inEntityList)
                return inEntityList;

            //If is in selectResponse
            const inSelectResponse = selectResponse?.data.find( elem => {
                return selected.value === elem._id
            })
            if(inSelectResponse){
                entitiesList.current.push({[props.idField]: inSelectResponse});
                return {[props.idField]: inSelectResponse};
            }
        });
        inputHandler(
            name,
            updatedList,
            props.validators ? validate(event.target.value, props.validators) : true
        )
    }

    //Extract validation methods
    const { validate, RequirementsBadges, ValidationErrorMessages } = useValidation( props.validationRules )

    //Research terms send to the api to refine the search
    //shape : data: {category: 'occupations', name: 'ingenieur'}
    const [requestData, setRequestData] = useState({...props.requestData});

    //Allow only one request per 400ms, after the user stop typing
    const debouncedRequest = useDebounce(requestData, 400);

    //Update the list of options to display
    useEffect(() => { getSelectResponse() }, [debouncedRequest] );

    //Called whenever the user enter or modify a value into the field
    const formRequestData = (val) => {
        setInputValue(val);
        const newRequestData = {...requestData};
        newRequestData[props.searchField ?? 'name'] = val;
        setRequestData(newRequestData);
    }

    const getSelectResponse = async () => {
        if(props.fetch !== undefined && props.requestData !== undefined) {
            const serverResponse =  await sendRequest(
                (props.fetch),
                'POST',
                JSON.stringify({data:requestData})
            );
            setSelectResponse(serverResponse);
        }
    }

    useEffect( () => {
        let newOptionList = [];
        if (selectResponse?.data?.length > 0)
            newOptionList = selectResponse.data.map( (elem) => {
            return { value: elem._id, label: elem[props.searchField], category: elem.category, type: elem.type }
        })
        setOptionList(newOptionList)
    },[selectResponse])

    const resetSelectComponent = () => {
        //setInputValue("");
        //updateValue([]);
        selectRef.current.setValue([], "set-value");
        //formRequestData("");
    }

    const handleCreateOption = (val) => {
        props.creatableModal.displayModal({name: val}, addFromCreatedModal);
    }

    const addFromCreatedModal = (val) => {
        //Format val to {value:id, label:name}
        entitiesList.current.push({[props.idField]:val});
        const newSelectedFromCreate = { value: val._id, label: val.name };
        selectRef.current.setValue([...selectRef.current.state.selectValue, newSelectedFromCreate], "set-value");
    }

    const setValueWithComma = () => {
        selectRef.current.setValue([...selectRef.current.state.selectValue, selectRef.current.state.focusedOption], "set-value")
    }

    const animatedComponents = makeAnimated();
    const colourStyles = selectStyle(); //From our styling factory

    return (
        <div className={`${styles["select"]}`}> 

            {/************ field label ************/}
            { props.label && 
            <div className={`${styles["select__label-row"]}`}>
                <label htmlFor='SelectInput'>{ props.label }</label>
            </div>

            }
            <div className={`
                form-element
                form-element--color-validation
                d-flex
            `}>

                <div className="flex-grow-1 form-element--field-padding">
                
                    <CreatableSelect
                        ref={selectRef}
                        instanceId={"SelectTag-"+props.name}
                        placeholder={props.placeholder}
                        options={optionList}
                        components={animatedComponents}
                        isMulti
                        inputValue={inputValue}
                        onInputChange={(val) => {
                            val.slice(-1) === ',' ?
                            setValueWithComma()
                            :
                            formRequestData(val)
                        }}
                        onChange={(val) => updateValue(val)}
                        formatCreateLabel={(val)=> "Créer : "+val}
                        onCreateOption={(val) => handleCreateOption(val)}
                        /*theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            colors: {
                              ...theme.colors,
                              primary25: 'hotpink',
                              primary: 'black',
                            },
                          })}*/
                        styles={colourStyles}
                    />

                    <div className="w-100 d-flex">
                        <RequirementsBadges /> 
                    </div>
                </div>
            </div>
            <div className="validation-error-messages-container">
            </div>
        </div>
    );
}
export default Select2Tag;


export const getSelectedToFormData = (selected, idField, user ) => {
    
    return selected.map( (elem) => {
        return {
            [idField] : elem[idField]._id,
            status: {
                state: "pending",
                lastModifiedBy: user.id,
                requestedBy: user.id
            }
        }
    })
}