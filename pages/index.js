import React, { useContext, useEffect, useState } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import Head from 'next/head'
import Link from 'next/link'

//Components
import Button from '../app/common/FormElements/Buttons/Button/Button'
import PresentationCard from '../app/common/Containers/cards/presentationCard'
import Spinner from '../app/common/widgets/spinner/Spinner'

//Costum hooks 
import { useHttpClient } from '../app/hooks/http-hook'

//Context
import { MessageContext } from '../app/common/UserNotifications/Message/Context/Message-Context'
import { AuthContext } from '../authentication/context/auth-context'

//Styling
import styles from './home-page.module.scss'



const HomePage = () => {

    //Holds the state the organisations
    const [feedList, setFeedList] = useState([])

    //Import the authentication context to make sure the user is well connected
    const auth = useContext(AuthContext);

    //Import message context 
    const msg = useContext(MessageContext);

    //Extract the functions inside useHttpClient
    const {isLoading, sendRequest} = useHttpClient();

    //Fetch the data 
    useEffect(() => {

      const fetchApi = async () => {
        
          //Send the request with the specialized hook
          const orgResponse = await sendRequest(
              "/organisations/list",
              'POST',
              JSON.stringify({"data": {
                "name": "jonathan"
              }}),
              { 'Content-Type': 'application/json' }
          )

          //Send the request with the specialized hook
          const persResponse = await sendRequest(
              "/personnes/list",
              'POST',
              JSON.stringify({"data": {
                "name": "jonathan"
              }}),
              { 'Content-Type': 'application/json' }
          )


          /*
              Display the proper message relative to the api response
          */

          //If positive
          if(!orgResponse.error && !persResponse.error){
            
            //store the data
            const feed = [...orgResponse.data, ...persResponse.data];

            //Sort the data to display the new elements before
            //Eventually, this will have to be done by the backend
            feed.sort(function(a, b) {
              return (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0);
            });

            //Finaly, update the state to display the result
            setFeedList(feed)

            //If negative
            } else {          
            
                if(orgResponse.error)
                  msg.addMessage({ 
                      text: orgResponse.message,
                      positive: false 
                  })
                
                if(persResponse.error)
                    msg.addMessage({ 
                      text: persResponse.message,
                      positive: false 
                    })
            } 
      }

      if(auth.isLoggedIn) fetchApi()


    }, [auth.isLoggedIn])


    /****************************
             LD+Json data
     ****************************/
    const schema = {
      '@context': 'http://schema.org',
      '@type':'WebSite',
      name: "Ontologie - Avantage Numérique",
      description: "Base de donnée ouverte et liée crée par Avantage Numérique et qui recense les techno-créatifs sur le territoire du Croissant boréal.",
      
      producer: {
        '@context': 'http://schema.org',
        '@type':'Organization',
        name: "Avantage Numérique",
        description: "Avantage numérique est un hub virtuel, physique et mobile qui dessert les secteurs de la culture, des affaires et du savoir. Il vise le développement de l’écosystème créatif, entrepreneurial et technologique du Croissant boréal.",
        mainEntityOfPage: "https://avantagenumerique.org/"
      }
    }

  return (

    <div className={`col-12 ${styles["home-page"]}`}>

      {/* Page head element  */}
      <Head>
        <title>Ontologie - Avantage Numérique</title>

        {/* Keywords and description to evaluate */}
        <meta name="description" content="Documentation complète sur l'ontologie utilisée dans la base de donnée ouverte et liée d'Avantage Numérique." />
        <meta name="keywords" content="ontologie, classe, propriété, base de données, technologie, créateurs, communauté" /> 

        {/* social media meta tag */}
        <meta property="og:title"              content="Ontologie - Avantage Numérique" />
        <meta property="og:description"        content="Documentation complète sur l'ontologie utilisée dans la base de donnée ouverte et liée d'Avantage Numérique." />
        
        <meta name="twitter:title"             content="Ontologie - Avantage Numérique"/>
        <meta name="twitter:description"       content="Documentation complète sur l'ontologie utilisée dans la base de donnée ouverte et liée d'Avantage Numérique."/>

        {/* 

        To add when the domain will be selected ....

        <link rel="canonical" href="https://avantagenumerique.org/">  

        */}

        {/* Structured data */}
        <script 
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(schema))}}
        />

      </Head>

      {/*

          Main content of the page

      */}

      <section className="col-12">

          {/* Text content section that follow the normalized width of the app */}
          <div className="maxWidthPageContainer">

               <div className={`${styles["home-page__header--img-container"]}`}>

                  <img
                    src="/general_images/Croissant-Boreal@3x-1440x1440.png"
                    alt="Image d'un événement de projection devant public."
                  />

              </div>

              <div className="col-12">

                <h1 className="col-12 white">Avantage Numérique</h1>
                <h3 className="col-12 white">Toutes les données du Croissant Boréal</h3>
                
              </div>

          </div>

      </section>

      <div className={`${styles["home-page__main"]} maxWidthPageContainer`}>

        <div className="col-12">

            {/************************************
             * 
             * Page first section (main)
             * 
             * ***********************************/}

            <section className={`${styles["home-page__feed-section"]} col-8`}>

              <h2 className={`col-12 `}>Actualités</h2>
              {
                !auth.isPending && 
                <> 

                

              {/************************************
               *
               * Loading state : If loading is on and there is no feed
               *  
               ***********************************/}
              {
                isLoading &&
                <div className={`col-12 ${styles["home-page__feed-section--spinner-container"]}`}>

                  <div className={`col-12`}>
                    <Spinner reverse />
                  </div>
                  <p className="col-12"><strong>Chargement des données</strong></p>

                </div>
              }

              {/************************************
               *
               *  If there is no loading state and no feed, go on that by default
               *  
               ***********************************/}
              {
                feedList.length === 0 && !isLoading && auth.isLoggedIn &&
                <div className="col-12">
                  <h5>Aucune donnée ne semble disponible :( <br/><br/> Assurez-vous d'avoir une connexion internet fonctionnelle.</h5>
                </div>
              }

              {/**************************************
               * 
               *  If the user is not logged is, FOR NOW, display this message
               * 
               ***************************************/}
               {
                !auth.isLoggedIn &&
                <div className="col-12">
                  <h4 className="col-12">Veuillez vous connecter pour pouvoir visualiter le contenu de la base de données.</h4>
                  <p>Ceci est très temporaire et, sous peu, vous pourrez consulter les données même sans être connecté.</p>
                </div>
              }

              <div className={`col-12 ${styles["home-page__feed-section--container"]}`}>


                  {/************************************
                   *
                   * Display feed if there is one
                   *  
                   ***********************************/}
                  {
                    feedList.length > 0 && !isLoading && auth.isLoggedIn &&
                    
                    feedList.map(elem => (
                        <PresentationCard
                          key={elem._id}
                          header={elem.surnom ? "Personne" : "Organisation"}
                          firstname={elem.prenom}
                          name={elem.nom}
                          username={elem.surnom}
                          description={elem.description}
                          createdAt={elem.createdAt}
                          url={elem.url}
                          contactPoint={elem.contactPoint}
                        />

                    ))
                  }
                
              </div>

              </>
              }

            </section>

            

            {/************************************
             * 
             * Page : Aside section
             * 
             * ***********************************/}

            <aside className={`col-3`}>

              <h2 className={`col-12`}>Menu rapide</h2>



              {/* 
                    Section : If user is not connected, offer the option to connect it self
              */}

                { !auth.isLoggedIn && !auth.isPending &&

                <section className={`col-12 ${styles["aside__connection-option"]}`}>
                    
                    <Button href="/compte/connexion">Se connecter</Button>

                </section>

                }

                  

              {/*  
                    Rapid options to access of edit the database  
              */}

              <section className={`col-12 ${styles["aside__db-edit-options"]}`}>
                
                  <div className={`col-12 ${styles["db-edit-options__button-set"]}`}>
                      <Button disabled slim>Événement</Button>
                      <Button disabled slim>+</Button>
                  </div>

                  <div className={`col-12 ${styles["db-edit-options__button-set"]}`}>
                      <Button disabled slim>Personne</Button>
                      <Button 
                        disabled={!auth.isLoggedIn}
                        href="/contribuer/personne" 
                        slim
                      >+</Button>
                  </div>

                  <div className={`col-12 ${styles["db-edit-options__button-set"]}`}>
                      <Button disabled slim>Organisation</Button>
                      <Button 
                        disabled={!auth.isLoggedIn} 
                        slim
                        href="/contribuer/organisation"
                      >+</Button>
                  </div>

                  { auth.isLoggedIn &&
                    <Button color="blue4" reverse href="/contribuer">Ajouter une donnée</Button>
                  }
                  
                  <p className="col-12"><strong className="red">DÉVELOPPEMENT EN COURS.</strong> Vous pourrez bientôt lancer des recherches et consulter toutes les données. </p>
                  
              </section>


              {/* 
                    Section : If user is not connected, propose to create an account if he doesn't have one
              */}

              { !auth.isLoggedIn && !auth.isPending &&

                <section className={`col-12 ${styles["aside__register-option"]}`}>
                    
                    <div className="col-12 blue_BG white">

                      <h4>Pas encore de compte ?</h4>

                      <p>Vous en aurez besoin afin de vous aussi contribuer aux données</p>

                      <Button href="/compte/inscription">C'est par ici !</Button>

                    </div>

                </section>

              }

              {/* 
                    Section : More informations about the project
              */}
              <section className="col-12">

                <h4 className="col-12">À propos</h4>
                <p className="col-12">
                  La Base de données structurées, ouvertes et liées (BDSOL) est le cœur du hub virtuel d’Avantage numérique. Elle vise à recenser et géolocaliser les talents, les compétences, les ressources, les initiatives techno-créatives à travers le territoire du Croissant Boréal.
                  <br/>
                  <br/>
                  <span className="col-12 blue1">
                    <Link href="/">En savoir plus</Link>
                  </span>
                </p>
              </section>


            </aside>
          </div>
      </div>



      
    </div>

  )
}

export default HomePage;
