import EntityModel, {TYPE_DEFAULT} from "@/DataTypes/Entity/models/EntityModel";
import ProjectSimple from "@/DataTypes/Project/layouts/simple/ProjectSimple";
import ProjectSingle from "@/DataTypes/Project/layouts/single/ProjectSingle";
import {TYPE_PROJECT} from "@/DataTypes/Entity/Types";
import Media from "@/DataTypes/Media/models/Media";
import AppRoutes from "@/src/Routing/AppRoutes";


class Project extends EntityModel {

    constructor(raw, params={}) {

        //  Routes associated with single base, single and contribute uri.
        raw.repertoryRoute = AppRoutes.projects;
        raw.singleRoute = AppRoutes.projectSingle;
        raw.contributeRoute = AppRoutes.projects;

        super(raw);

        this.title = raw.name ?? "";
        this.description = raw.description ?? "";
        this.mainImage = !raw.mainImage || raw.mainImage?.url !== "" ? {
            url: "/general_images/project-default.webp",
            alt: raw.name,
            baseSrc: `${process.env.NEXT_PUBLIC_APP_URL}`
        } : raw.mainImage;

        this.mainImageModel = new Media(this.mainImage);

        this.type = raw.type === TYPE_PROJECT ? TYPE_PROJECT : TYPE_DEFAULT;//Wrong data sent here.

        //this.taxonomies = new Map();
        //this.taxonomies.set("domains", raw.domains);
        //this.taxonomies.set("skills", raw.skills);

        params.showMeta = params.showMeta ?? true;
        params.showStatus = params.showStatus ?? true;

        this.simpleComponent = ProjectSimple;
        this.singleComponent = ProjectSingle;

        //sets all the rest as a this[key] = raw[key] value.
        this.setProperties(raw);
    }
}

export default Project;