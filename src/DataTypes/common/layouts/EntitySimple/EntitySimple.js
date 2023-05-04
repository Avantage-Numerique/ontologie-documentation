import React from 'react';

//Components
import KebabButton from '@/common/FormElements/KebabButton/KebabButton'

//Styling
import styles from './EntitySimple.module.scss';
import MediaFigure from "@/DataTypes/Media/layouts/MediaFigure";
import {TYPES} from "@/DataTypes/Entity/Types";
import SanitizedInnerHtml from "@/src/utils/SanitizedInnerHtml";
import {replacePathname} from "@/src/helpers/url";
import Link from "next/link";

/********* 
 * 
 *   Component that gives the base styling and functionalities for the Simple components
 *      @param props.redirectionLink {String} Active un bouton kebab de redirection vers le single de l'élément
 *      @param props.overRidingHeader {JSX Component} When declared, it override the normal content of the header to allow personalization of the section
 *      @param props.overRidingContent {JSX Component} When declared, it override the normal content of the main section to allow personalization of the section
 *      @param props.entityType  {String}  Displayed over the picture : Organisation / Personne / etc
 *      @param props.title  {String}  Main displayed title. Can be a name of person, of an organisation, the title of a project, etc
 *      @param props.imgSrc  {String} Link to the image representing the entity
 *      @param props.imgAlt  {String} Alt text for the image
 *      @param props.description  {String} Description 
 *      @param props.tagListTitle {String} Title of the section containing a list of tag
 *      @param props.tagList  {Object}  List to be displayed of individual tags
 *      @return {JSX.Element}
 *      @constructor
*/


/**
 *
 * @param props
 * @param props.model {EntitySimple|object}
 * @return {JSX.Element}
 * @constructor
 */
const EntitySimple = (props) => {

    const Tag = "article";

    /**** Deconstructiong props ******/
    const {
        className,
        //Props for this component fonctionalities
        //redirectionLink,
        OverRidingHeader,
        OverRidingContent,
        //showEntityType,
        //Props for informations to display
        //title,
        imgSrc,
        imgAlt,
        //description,
        tagListTitle,
        tagList,
        tagKeyName,
        model
    } = props;

    //content
    const title = model.title;
    const description = model.shortDescription;
    const type = model.type;
    const link = "/"+replacePathname(model.singleRoute.pathname, {slug: model.slug});

    //params
    const showEntityType = props.showEntityType ?? true;
    const appType = TYPES.get(model.type);

    const Header = (
        <>
            {/* Image representing the entity */}
            { model.mainImage &&
                <div>
                    <Link href={link} title={title}>
                        <MediaFigure
                            model={model.mainImage}
                            className={`${styles["simple-abstract__header__figure"]} position-absolute top-0 start-0 w-100 h-100 t-0`}
                            imgClassName={`${styles["simple-abstract__header__figure__img"]}`}
                            addGradientOver={true}>
                            <div className={`${styles["figure-overlay"]} position-absolute w-100 h-100 no-pointer-events dark-transparent-gradient`}></div>
                        </MediaFigure>
                    </Link>
                </div>
            }
            {/* Display over the entity the type of image */}
            {showEntityType && appType &&
                <h4 className={`position-relative text-white fw-normal m-0 ${styles["entity-type"]}`}>{appType.label}</h4>
            }
        </>
    )

    return (
        <Tag className={`${className} rounded ${styles["simple-abstract"]}`}>
            {/* SECTION 1/2 : Header */}
            <header className={`${styles["simple-abstract__header"]}`}>
                {/* Override the display of the normal visual if there is the overRidingHeader is defined */}
                { OverRidingHeader ? OverRidingHeader : Header }
            </header>
            {/* SECTION 2/2 : Main content */}
            <section className={`${styles["simple-abstract__content"]}`}>
                { OverRidingContent ? OverRidingContent :
                    <>
                        <header className="d-flex justify-content-between">
                            {/* Main name of the entity */}
                            <SanitizedInnerHtml tag={"h3"} className={`${styles["simple-abstract__content__title"]}`}>{model.title}</SanitizedInnerHtml>
                            {/* Redirection button */}
                            { link && <KebabButton href={link} /> }
                        </header>
                        <section>
                            {/* Description */}
                            {description && <SanitizedInnerHtml className={`${styles["simple-abstract__content__description"]}`}>{description}</SanitizedInnerHtml>}
                            {/* List of tags */}
                            {tagList && tagListTitle &&
                                <h4>{tagListTitle}</h4>
                            }
                            {tagList && tagList.length > 0 &&
                                <ul className={`d-flex flex-wrap ${styles["simple-abstract__content__tagList"]}`}>
                                    {tagList.map(tag => (
                                        <li className="rounded">{tag[tagKeyName]}</li>
                                    ))}
                                </ul>
                            }
                        </section>
                    </>
                }
            </section>
        </Tag>
    )
}

export default EntitySimple