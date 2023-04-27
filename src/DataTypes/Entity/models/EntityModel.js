import {TYPE_DEFAULT} from "@/DataTypes/Entity/Types";

/**
 * The abstract model for all the entities.
 * @property type {string}
 * @property title {string}
 * @property description {string}
 * @property mainImage {Object}
 * @property defaultSimpleParams {Object} default parameters for the simple component of this entity
 * @property defaultSingleParams {Object} default parameters for the single component of this entity
 * @property simpleParams {Object} parameters for the single component of this entity. If it was empty, it's equal to the default value.
 * @property singleParams {Object} parameters for the single component of this entity. If it was empty, it's equal to the default value.
 */
class EntityModel {

    /**
     * Abstract model for the entity in the app.
     * @param raw {object} All the params to setup this.
     * @param raw.type {String} the entity type.
     * @param raw.description {String} Big string.
     * @param raw.mainImage {Object|Media} Main image (Media) of the entity.
     * @param raw.simpleComponent {Component} the component for the simple view.
     * @param raw.singleComponent {Component} the component for the single view.
     * @param params {object} pass some params.
     * @param params.single {object} Parameters for the single component
     * @param params.simple {object} Parameters for the simple component
     */
    constructor(raw, params={}) {

        this.type = raw.type ?? TYPE_DEFAULT;
        this.title = raw.title ?? "no title set";
        this.description = raw.description ?? "no description set";
        this.mainImage = this.mainImage;
        this.mainImageModel = this.mainImageRaw;

        //  Routes associated with single base, single and contribute uri.
        this.repertoryRoute = raw.repertoryRoute ?? "";
        this.singleRoute = raw.singleRoute ?? "";
        this.contributeRoute = raw.contributeRoute ?? "";

        //Ajouter _id et id ??

        this.defaultSimpleParams = {};
        this.defaultSingleParams = {};

        //manage the parameters in a single array.
        this.params = new Map();
        this.params.set("simple", (params?.simple ?? this.defaultSimpleParams));
        this.params.set("single", (params?.single ?? this.defaultSingleParams));

        this.simpleComponent = raw.simpleComponent ?? undefined;
        this.singleComponent = raw.singleComponent ?? undefined;
    }


    //  --- GETTER / SETTER ---

    /**
     * Get the type of the current model
     * @return {*|string}
     */
    get type () {
        return this._type;
    }
    /**
     * Set the type of the current model
     */
    set type(value) {
        this._type = value;
    }


    /**
     * Get the entity title
     * @return {*|string}
     */
    get title() {
        return this._title;
    }
    /**
     * Set the entity title
     */
    set title(value) {
        this._title = value;
    }


    /**
     * Get the entity title
     * @return {*|string}
     */
    get description() {
        return this._description;
    }
    /**
     * Set the entity title
     */
    set description(value) {
        this._description = value;
    }


    /**
     * Get the entity title
     * @return {*|string}
     */
    get mainImage() {
        return this._mainImage;
        /*if (this._mainImageModel) {
            this._mainImageModel = new Media(this.mainImage)
        }
        return this._mainImageModel;*/
    }
    /**
     * Set the entity title
     */
    set mainImage(value) {
        this._mainImage = value;
    }


    /**
     * Get the simple component
     * @return {*}
     */
    get simpleComponent() {
        return this._simpleComponent;
    }
    set simpleComponent(component) {
        this._simpleComponent = component;
    }

    /**
     * Get the single component
     * @return {*}
     */
    get singleComponent() {
        return this._singleComponent;
    }
    /**
     * Set the single component
     */
    set singleComponent(component) {
        this._singleComponent = component;
    }

    /**
     * Get the parameters of the simple component set for this entity
     * @return {object}
     */
    get simpleParams() {
        return this.params.get("simple");
    }
    /**
     * Set the simple parameters for this entity
     * @param value {object}
     */
    set simpleParams(value) {
        return this.params.set("single", value);
    }

    /**
     * Set the single parameters for this entity
     */
    get singleParams() {
        return this.params.get("single");
    }
    /**
     * Set the single parameters for this entity
     * @param value {object}
     */
    set singleParams(value) {
        return this.params.set("single", value);
    }

    /**
     * Repertory Route
     * @return {Route}
     */
    get repertoryRoute() {
        return this._repertoryRoute;
    }
    /**
     * Set the property repertoryURI from repertoryRoute
     * @param value {Route}
     */
    set repertoryRoute(value) {
        this.repertoryURI = value.pathname
        return this._repertoryRoute = value;
    }

    /**
     * The base Route for the single page.
     * @return {Route}
     */
    get singleRoute() {
        return this._singleRoute;
    }
    /**
     * Set the property singleURI from singleRoute
     * @param value {Route}
     */
    set singleRoute(value) {
        this.singleURI = value.pathname;
        return this._singleRoute = value;
    }

    /**
     * Contribute Route
     * @return {Route}
     */
    get contributeRoute() {
        return this._contributeRoute;
    }
    /**
     * Set the property contributeURI from contributeRoute
     * @param value {Route}
     */
    set contributeRoute(value) {
        this.contributeURI = value.pathname;
        return this._contributeRoute = value;
    }


    //  --- UTILS ---

    /**
     * Declare all the model property to be accessible to it.
     * @param raw {object} the raw data to declare property from.
     */
    setProperties(raw) {
        for (const key in raw) {
            this.definePropertyIfNotOwned(key, raw[key]);
        }
    }


    /**
     * Set all the properties into this scope
     * @param property {string}
     * @param value {any}
     * @return none
     */
    definePropertyIfNotOwned(property, value) {
        if (!this.hasOwnProperty(property)) {
            Object.defineProperty(this, property, {
                value: value,
                enumerable: true,
                configurable: true,
            });
        }
    }

}

export default EntityModel;