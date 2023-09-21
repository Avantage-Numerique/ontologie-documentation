//Component
import Input from "@/src/common/FormElements/Input/Input";
import Repeater from "@/src/common/FormElements/Repeater/Repeater";
import SingleInfo from "@/src/DataTypes/common/layouts/SingleInfo/SingleInfo";
import Select2 from "@/src/common/FormElements/Select2/Select2";
import Button from "@/src/common/FormElements/Button/Button";

//Utils
import { lang } from "@/src/common/Data/GlobalConstants";


/**
 * @param {string} name Name of formState value
 * @param {formTools} formTools
 * @param {object} parentEntity object data of entity that uses the structure of team
 */
const UpdateSponsor = ({name, formTools, ...props}) => {

    return (
        <>
            <SingleInfo
                title={props.label}
                className="py-3"
            >
                <div className="d-flex">
                    <div className="ps-4 border-start"></div>
                    <div className="w-100">
                        <Repeater
                            formTools={formTools}
                            name={name}
                            className="bg-greyBg"
                            formInitStructure={{
                                name: {
                                    value: "",
                                    isValid: false
                                },
                                entity: {
                                    value: "",
                                    isValid: true
                                },
                                entityType: {
                                    value: "",
                                    isValid: true
                                }
                            }}
                            initValues={props.parentEntity?.sponsor ?? []}
                            sortable
                        >
                            <article className="mb-2 py-2 rounded-1 d-flex gap-4 bg-greyBg">
                                <section className="col mb-1 row">
                                    <div className="col-12 col-md-6">
                                        <Select2
                                            name="entity"
                                            label="Partenaire"
                                            formTools={formTools}
                                            creatable={false}
                                            isMulti={false}

                                            fetch={"/organisations/list"}
                                            searchField={"name"}
                                            selectField={"name"}
                                            validationRules={[
                                                {name: "REQUIRED"}
                                            ]}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Input
                                            name="name"
                                            label="Titre"
                                            formTools={formTools}
                                        />
                                    </div>
                                    
                                </section>

                                <div className="col pr-0 flex-grow-0 text-secondary pt-1">
                                    <Button repeaterdeletedlem type="button" color="danger" size="slim">&#x2716;</Button>
                                </div>
                            </article>
                        </Repeater>
                        
                        
                    </div>
                    <div className="ps-4"></div>
                </div>
            </SingleInfo>
        </>
    )

}

export default UpdateSponsor;