import {useHttpClient} from "@/src/hooks/http-hook";
import React, {useCallback, useEffect, useState} from "react";
import PageHeader from "@/src/layouts/Header/PageHeader";
import {lang} from "@/common/Data/GlobalConstants";
import {Breadcrumbs} from "@/common/Breadcrumbs/Breadcrumbs";
import AppRoutes from "@/src/Routing/AppRoutes";
import Button from '@/src/common/FormElements/Button/Button';

//Styling 
import styles from './index_categories.module.scss';
import Head from "next/head";
import {getTitle} from "@/DataTypes/MetaData/MetaTitle";
import {getType, TYPE_TAXONOMY} from "@/DataTypes/Entity/Types";
import Link from "next/link";

const TaxonomiesCategoryPage = () => {

    const {sendRequest} = useHttpClient();
    const [taxonomiesList, setTaxonomiesList] = useState([]);
    const [taxonomyMenu, setTaxonomyMenu] = useState("skills")
    const categoryList = [
        {value:"domains", label: lang.Domains},
        {value:"technologies", label: lang.Technologies},
        {value:"skills", label: lang.Skills},
        {value:"equipmentType", label: lang.equipmentType}
    ];
    const type = getType(TYPE_TAXONOMY);
    
    useEffect( () => {

        const fetchTaxonomyByCategory = async (category) => {
            if(!category){return}

            const response = await sendRequest(
                "/taxonomies/list",
                'POST',
                JSON.stringify({
                    "data": {
                        "category": category
                    }}),
                { 'Content-Type': 'application/json' }
            );
            return response.data
        }

        let categoriesPromises = [];
        let taxonomiesFiltered = {};

        for (let category of categoryList) {
            categoriesPromises.push(fetchTaxonomyByCategory(category.value));
        }

        Promise.all(categoriesPromises)
            .then(fetchedCategory => {
                fetchedCategory.map( (category, index) => {
                    taxonomiesFiltered[categoryList[index].value] = category;
                });
                setTaxonomiesList(taxonomiesFiltered)
            });

    }, []);

    const mapArrayToListComponent = (list) => {
        if(list === undefined || list.length === 0)
            return (
                <div>Liste introuvable ou vide</div>
            )
        return (
            list.map( (elem) => 
                <div
                    className="col-6 col-sm-4 col-md-3 p-1 p-md-2 d-flex"
                    key={elem.slug}
                >
                    <Link 
                        className={`border d-flex justify-content-between align-items-center w-100 p-1 p-md-2 rounded ${styles["list-tag"]}`}
                        href={`/categories/${elem.category}/${elem.slug}`}
                    >
                        
                            <span>{elem.name}</span>
                            {
                                elem.meta?.count > 0 ?
                            <span className={"badge bg-primary"}>{elem.meta?.count}</span>
                            :
                            ""}
                    
                    </Link>
                </div>
            )
        )
    }

    const getLabelGenerator = useCallback((param, query) => {
        return {
            "categories": "Toutes les catégories",
        }[param];
    }, []);

    return (
        <div>
            <Head>
                <title>{getTitle([type.labelPlural])}</title>
            </Head>
            <PageHeader title={`Toutes les catégories`}>
                <Breadcrumbs className={"pt-2"} route={AppRoutes.categories} getLabelGenerator={getLabelGenerator} />
            </PageHeader>
                {/* Page inner menu */}
                <menu className="gap-1 gap-sm-2 gap-md-3 d-flex flex-wrap p-0 justify-content-center">
                    {
                        categoryList.map((elem) =>
                            <Button 
                                size="slim"
                                key={elem.label+"-categoryMenuBtn"} 
                                onClick={() => setTaxonomyMenu(elem.value)}
                                className={`px-1 px-sm-2 px-md-4 ${elem.value === taxonomyMenu ? "active" : ""}`}
                            >
                                {elem.label}
                            </Button>
                        )
                    }
                </menu>
                {
                    taxonomyMenu !== "" &&
                    <div>
                        <h3 className="py-4">
                            {categoryList.find( el => taxonomyMenu === el.value ).label}{lang.colon}
                        </h3>
                        <div className="container pb-5">
                            <div className="row gx-2">
                                {mapArrayToListComponent(taxonomiesList[taxonomyMenu])}
                            </div>
                        </div>
                    </div>
                }

        </div>
    )
}

export default TaxonomiesCategoryPage