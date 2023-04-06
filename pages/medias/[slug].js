import React from 'react'
import styles from './singleMedia.module.scss';
import {withSessionSsr} from "@/auth/session/handlers/withSession";
import SingleMedia from "@/DataTypes/Media/layouts/SingleMedia";
import {externalApiRequest} from "@/src/hooks/http-hook";
import {getUserHeadersFromUserSession} from "@/auth/context/auth-context";
import AppRoutes from "@/src/Routing/AppRoutes";

const SingleMediaPage = (props) => {
    console.log(props);
    return (
        <div className={`single-container ${styles["single-media"]}`}>
            <div className="maxWidthPageContainer">

                <SingleMedia data={props} />

            </div>
        </div>
    )
}

export default SingleMediaPage;


export const getServerSideProps = withSessionSsr(mediaSlugSSProps);

export async function mediaSlugSSProps(context) {
    const { slug } = context.query;//in fact it's the id for now.

    const response = await externalApiRequest(
        `/medias/data/${slug}`,
        {
            method: 'GET',
            headers: getUserHeadersFromUserSession(context.req.session.user)
        });

    if (!response.error) {
        response.data.url = process.env.NEXT_PUBLIC_API_URL + response.data.url;
        return { props: response.data };
    }

    return {
        props: {
            slug: slug,
            title: "title",
            alt: "alt",
            description: "description",
            path: "path",
            url: "/show_screen_shot.jpg",
            licence: "copyright",
            fileType: "Image/jpg",
            fileName: "show_screen_shot.jpg",
            extension: "jpg",
            entityId: "targetEntity",
            entityType: "type entité",
            uploadedBy: "user qui a upload",
            dbStatus: "status du média",
            status: "status de la mod",
        }
    };
}


