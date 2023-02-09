import Button from "@/FormElements/Button/Button";
import {lang} from "@/common/Data/GlobalConstants";
import React from "react";
import {useModal} from "@/src/hooks/useModal/useModal";
import Router from "next/router";


const EntityNavBar = ({ entity, containerClass, ModalForm }) => {

    const backUrl = "/";
    const type = entity.type ?? "person";
    const closingModalBaseURI = `/${type}s/`;

    const {displayModal, modal, closeModal, Modal} = useModal()

    const displayUpdateForm = selectStatus => {
        displayModal();
    }
    return (
        <>
            <div className={`container ${containerClass}`}>
                <div className="row justify-content-between mb-4">
                    <div className="col-6 col-lg-8 justify-content-end">
                        <a className="text-white" href={backUrl} title={lang.back}> &#8629; {lang.back}</a>
                    </div>
                    <div className={"col-auto col-lg-4 d-flex justify-content-end"}>
                        <Button onClick={displayUpdateForm}>
                            {lang.proposeContentChangeLabel}
                        </Button>
                    </div>
                </div>
            </div>
            {
                modal.display &&
                <Modal
                    className={`${type}-form-modal`}
                    coloredBackground
                    darkColorButton
                    closingFunction={closeModal}
                >
                    <ModalForm
                        initValues={entity}
                        positiveRequestActions={{
                            //CallbackFunction is one of the four behaviors the useFormUtils hook can apply when a request return a positive answer
                            callbackFunction: requestResponse => {
                                //Redirect to the right path if the slug changes and otherwise, at least reflect the changes
                                Router.push(`${closingModalBaseURI}${requestResponse.data.slug}`);

                                //Close the modal
                                closeModal()
                            }
                        }}
                    />
                </Modal>
            }
        </>
    )
}

export default EntityNavBar;