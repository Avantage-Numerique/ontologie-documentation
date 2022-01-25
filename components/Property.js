/*

    Component representing a class property
    V.P.R - created: 07/10/2021

*/

import styles from '../styles/components/Property.module.scss'

const Property = ( {data} ) => {


    return (

        <article className={`${styles.propertyComponent} col-12`}>

            <header>
                <h3> {data.title} </h3>
                <div className={`${styles.requirementMention} blue_BG white`}>
                    { data.title.required ? "Requise" : "Non requise" }
                </div>
                <small className="col-12">Source : { data.source }</small>
            </header>
            
            {/* Description section of the property */}
            <section className='col-12'>
                <h4 className="blue" >Description</h4>
                <p>{ data.description }</p>
            </section>

            {/* Use cases section of the property */}
            <section className='col-12'>
                <h4 className="blue" >Cas d'utilisation</h4>
                <p>{ data.uses }</p>
            </section>

            {/* Restrictions section of the property */}
            <section className='col-12'>
                <h4 className="blue" >Restrictions</h4>
                <p>{ data.restrictions }</p>
            </section>
            

        </article>

    )   
}



export default Property;