

//Component 
import CreatePersonForm from '../../../DataTypes/Person/Components/Forms/CreatePerson/CreatePersonForm'
import Button from '../../../app/common/FormElements/Buttons/Button/Button'

//Styling 
import styles from './createPerson.module.scss'
import {lang} from "../../../app/common/Data/GlobalConstants";
import SanitizedInnerHtml from "../../../app/utils/SanitizedInnerHtml";

const CreatePersonPage = () => {

    return (
        
        <div className={`col-12 ${styles["create-person"]}`}>

                <div className={`col-12 ${styles["create-person__return-button"]}`}>
                    <div className="maxWidthPageContainer">
                        <Button 
                            color="blue4"
                            reverse
                            href="/contribuer"
                        >
                            {lang.historyBack}
                        </Button>
                    </div>
                </div>
                <header className={`col-12`}>
                    <div className="maxWidthPageContainer">
                        <div className={`${styles["create-person--max-width"]}`}>
                            <h1 className={`col-12 blue`}>{lang.Personnes}</h1>
                            <h4 className="col-12">{lang.formPersonsSubtitle}</h4>
                            <p>
                                <SanitizedInnerHtml>{lang.formPersonsInstructions}</SanitizedInnerHtml>
                            </p>
                        </div>
                    </div>
                </header>

                <section className="col-12">
                    <div className="maxWidthPageContainer">
                        <div className={`${styles["create-person--max-width"]}`}>
                            <CreatePersonForm />
                        </div>
                    </div>
                </section>

        </div>
    )

}

export default CreatePersonPage