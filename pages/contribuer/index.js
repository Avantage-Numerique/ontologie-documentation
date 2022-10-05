
//Components
import Button2 from 'react-bootstrap/Button';

//Context
import {useAuth} from '@/auth/context/auth-context'

//styling
import styles from './contribution-page.module.scss'
import {withSessionSsr} from "@/auth/session/handlers/withSession";
import {ssrCanAccess} from "@/auth/permissions/ssrCanAccess";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PageHeader from "@/layouts/Header/PageHeader";
import React from "react";

 
const Index = () => {

    const auth = useAuth();

    return (
        <div className={`${styles["contribution-page"]}`}>

            <PageHeader
                title={"Créer une donnée"}
                description={"Vous avez accès ici à tous les types de données qu'il est présentement possible d'intégrer à la base de données."} />

            <div className={`${styles["contribution-page__menu"]}`}>
                <Container className='p-0'>

                    { !auth.user.isLoggedIn &&
                        <Row>
                            <Col>
                                <span className="text-danger"><strong>Attention ! </strong></span>
                                Vous devez être connecté afin de pouvoir éditer la base de données.
                            </Col>
                        </Row>
                    }

                    <Row className='pt-3'>
                        <Col>
                            <h4 className="col-12">Sélectionnez le type d'entité que vous voulez ajouter</h4>
                        </Col>
                    </Row>

                    <Row className='pt-3'>
                        <Col>
                            <Button2 href="/contribuer/personne" size="lg" className={"w-100"} disabled={!auth.user.isLoggedIn}>Personne</Button2>
                        </Col>
                        <Col>
                            <Button2 href="/contribuer/organisation" size="lg" className={"w-100"} disabled={!auth.user.isLoggedIn}>Organisation</Button2>
                        </Col>
                        <Col>
                            <Button2 href="/contribuer/taxonomy" size="lg" className={"w-100"} disabled={!auth.user.isLoggedIn}>Taxonomy</Button2>
                        </Col>
                    </Row>

                    <Row className='pt-3'>
                        <Col>
                            <h4 className="col-12">Entités à venir</h4>
                        </Col>
                    </Row>

                    <Row className='pt-3'>
                        <Col>
                            <Button2 href="/" size='lg' className={"w-100"} disabled>Projet</Button2>
                        </Col>
                        <Col>
                            <Button2 href="/" size='lg' className={"w-100"} disabled>Événement</Button2>
                        </Col>
                        <Col>
                            <Button2 href="/" size='lg' className={"w-100"} disabled>Matériel</Button2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}
export const getServerSideProps = withSessionSsr(ssrCanAccess);

export default Index