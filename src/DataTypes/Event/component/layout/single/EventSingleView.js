import React, {useCallback, useEffect, useState} from "react";

//Components
import SingleBase from "@/src/DataTypes/common/layouts/single/SingleBase";
import SingleBaseHeader from "@/src/DataTypes/common/layouts/single/defaultSections/SingleBaseHeader";
import SingleInfo from "@/src/DataTypes/common/layouts/SingleInfo/SingleInfo";
import EntitiesTagGrid from "@/src/DataTypes/Entity/layouts/EntitiesTagGrid";
import SearchTag from "@/src/common/Components/SearchTag";
import {ExternalLink} from "@/src/common/Components/ExternalLink";

//Utils
import Head from "next/head";
import SanitizedInnerHtml from '@/src/utils/SanitizedInnerHtml';
import {lang} from "@/src/common/Data/GlobalConstants";
import {SingleEntityMeta} from "@/src/DataTypes/Meta/components/SingleEntityMeta";
import {getTitle} from "@/DataTypes/MetaData/MetaTitle";
import Event from "../../../models/Event";
import DisplaySchedule from "../../Forms/Schedule/DisplaySchedule";

//Hooks
import {dateManager} from '@/common/DateManager/DateManager'
import {clientSideExternalApiRequest} from "@/src/hooks/http-hook";
import EntityLink from "@/DataTypes/Entity/layouts/EntityLink";


const EventSingleView = ({data}) => {

    const {
        _id,
        name,
        slug,
        alternateName,
        url,
        description,
        entityInCharge,
        organizer,
        eventType,
        eventFormat,
        team,
        //duration,
        startDate,
        endDate,
        contactPoint,
        mainImage,
        attendees,
        domains,
        skills,
        experience,
        schedule,
        subEvents,
        location,
        meta,
        type,
        createdAt,
        updatedAt
    } = data
    const model = new Event(data);

    const [formatEnumState, setFormatEnumState] = useState(undefined);

    useEffect( () => {
        const getEventFormatEnum = async () => {
            const eventFormatResponse = await clientSideExternalApiRequest(
                '/info/eventformat-enum',
                { method: 'GET' }
            );
            const keyValueEnum = {};
            eventFormatResponse.forEach( (elem) => { keyValueEnum[elem.value] = elem.label });
            setFormatEnumState(keyValueEnum);
        }
        getEventFormatEnum();
    }, [])

    const getLabelGenerator = useCallback((param, query) => {
        return {
            "events": lang.Events,
            "slug": model.title        
        }[param];
    }, []);

    const breadCrumb = {
        route: model.singleRoute,
        getLabelGenerator: getLabelGenerator
    }

    const { TimeTag, TimeIntervalSentence } = dateManager(startDate, endDate);


    const header = (
        <SingleBaseHeader 
            title={(<SanitizedInnerHtml tag={"h1"} className="text-white">{`${model.title}`}</SanitizedInnerHtml>)}
            subtitle={(
                <div className="d-text">
                    <h4 className="text-white">{model.alternateName ? model.alternateName : ""}</h4>
                    <div className="mt-4">
                        {model.entityInCharge &&
                            <p className="text-white">
                                <span className={"badge bg-secondary"}>{lang.inCharge}</span> <EntityLink data={model.entityInCharge} />
                            </p>
                        }
                        {model.organizer &&
                            <p className="text-white">
                                <span className={"badge bg-secondary"}>{lang.eventOrganizer}</span> <EntityLink data={model.organizer} />
                            </p>
                        }
                    </div>
                </div>
            )}
            mainImage={model.mainImage}
            entity={model}
            buttonText="Proposer des modifications"
            buttonLink={model.singleEditLink}
        />
    );


    const fullWidthContent = (
        <div>
            <div className="row justify-content-center align-items-center">
                <div className="col col-md-6">              
                    {/*Date*/}
                    { startDate && endDate  &&
                        <TimeIntervalSentence tag="h3" />
                    }
                </div>
                <div className="col col-md-6">
                    {/* location */}
                    {
                        location?.length > 0 &&
                        <SingleInfo title="Emplacement">
                            <EntitiesTagGrid feed={location} subBadgeProperty={"address"} numberOfCols={1} />
                        </SingleInfo>
                    }
                </div>
            </div>
            <div className="row mt-4">
                {
                    description && description !== "" &&
                    <SingleInfo title={lang.description} className={"col"}>
                        <SanitizedInnerHtml>{description}</SanitizedInnerHtml>
                    </SingleInfo>
                }
            </div>
        </div>
    )

    const contentColumnLeft = (
        <>
            {/* schedule */}
            {
                schedule && schedule.length > 0 &&
                <SingleInfo title={lang.schedule} className={"pb-3 mb-3"}>
                    <DisplaySchedule feed={schedule}/>
                </SingleInfo>
            }
            {/* subEvents */}
            {
                subEvents && subEvents.length > 0 &&
                <SingleInfo title={lang.subEvents} className={"py-3"}>
                    <EntitiesTagGrid feed={subEvents} />
                </SingleInfo>
            }

            {/* team */}
            {
                team?.length > 0 &&
                <SingleInfo
                    title={lang.teamMembers}
                    className="mb-3"
                >
                    <EntitiesTagGrid feed={team} subEntityProperty={"member"} subBadgeProperty={"role"} noneMessage={"Aucun membre de l'équipe spécifiés"} />
                </SingleInfo>
            }

            {/* attendees */}
            {
                attendees && attendees.length > 0 &&
                <SingleInfo title={lang.attendees} className={"py-3"}>
                    <EntitiesTagGrid feed={attendees} />
                </SingleInfo>
            }
            
        </>
    )
    const contentColumnRight = (
        <>
            {/*eventType */}
            { eventType?.length > 0 &&
                <SingleInfo title={lang.eventType}>
                    <ul>
                        {eventType.map( type => (
                            <li key={`${type.name}`}>
                                {type.name}
                            </li>
                        ))}
                    </ul>
                </SingleInfo>
            }
            {/* eventFormat */}
            { eventFormat &&
                <SingleInfo title={lang.eventFormat}>
                    {formatEnumState?.[eventFormat] ?? eventFormat}
                </SingleInfo>
            }
            {/* skills */}
            {
                skills?.length > 0 &&
                <SingleInfo 
                    title={lang.eventSkills}
                    className="mb-3"
                >
                    <>
                        <SearchTag
                            className="row"
                            list={skills}
                        />
                    </>
                </SingleInfo>
            }

            {/* domains */}
            {
                domains?.length > 0 && 
                <SingleInfo title={lang.domainsSingleLabel} className={"mb-3"}>
                    <SearchTag
                        className="row"
                        list={domains}
                        listProperty={"domain"}
                    />
                </SingleInfo>
            }
            {/* Url */}
            { url &&
                <SingleInfo title={lang.hyperlink} className={"pb-4"}>
                    <ExternalLink href={url}>{url}</ExternalLink>
                </SingleInfo>
            }
            {/* contactPoint */}
            { contactPoint &&
                <SingleInfo title={lang.contactPoint}>
                    {contactPoint}
                </SingleInfo>
            }
        </>
    )

    {/*********** Footer section ***********/}
    const footer = (
        <div>
            {
                (createdAt || updatedAt || meta) &&
                <SingleEntityMeta  
                    createdAt={createdAt} 
                    updatedAt={updatedAt} 
                    meta={meta} />
            }
        </div>
    )
    
    return (
        <>
            <Head>
                <title>{getTitle([model.title, model.Type.label])}</title>
            </Head>
            <SingleBase
                breadCrumb={breadCrumb}
                header={header}              
                fullWidthContent={fullWidthContent}
                contentColumnLeft={contentColumnLeft}
                contentColumnRight={contentColumnRight}
                footer={footer}
            />
        </>
    )
}

export default EventSingleView;