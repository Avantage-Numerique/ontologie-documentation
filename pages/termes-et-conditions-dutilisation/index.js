import PageHeader from "@/layouts/Header/PageHeader";
import React from "react";
import {appConfig} from "@/src/configs/AppConfig";
import {RouteLink} from "@/common/Components/RouteLink";
import PageMeta from "@/src/common/PageMeta/PageMeta";
import {lang} from "@/src/common/Data/GlobalConstants";


const TermsOfService = () => {

    const pageSpacing = appConfig.spacing.pagesContentSpacing;

    //Style setup in layouts/static

    /**
     * idée :
     * - Ajouter des tips sur les mots clés avec définitions défini en haut.
     * - Ajouter un Table des matière navigable.
     */
    return (
        <div className={"legal-page page-terms-of-use"}>
            <PageMeta 
                title={lang.terms_conditions_use__title}
                description={lang.terms_conditions_use__description}
            />
            <PageHeader
                bg={"bg-primary-lighter"}
                textColor={"text-white"}
                title={"Conditions d'utilisation"}
                subTitle={"Base de données avnu d'Avantage Numérique"}
                description="Dernière mise à jour : 2024-02-10 (version 3.0)"
                key={"termsPage"}
            />
            <section className={`container ${pageSpacing}`}>
                <div className="row">
                    <div className={"col"}>
                        <p>Veuillez lire les Conditions d’utilisation suivantes (les « Conditions ») avant d’utiliser la plateforme web disponible à l’adresse <RouteLink routeName={"app"} /> (la « Plateforme ») ainsi que la documentation et les autres documents ou guides relatifs à la Plateforme (collectivement, la « Documentation ») qui peuvent vous être fournis (« vous » ou « votre ») par La Troupe de Théâtre « Les Zybrides » et ses sociétés affiliées, le cas échéant (collectivement, la « Troupe », « nous » ou « notre »). En accédant à la Plateforme et en l’utilisant, vous acceptez d’être lié par les présentes Conditions, telles que définies par la Troupe, ainsi que par notre Politique de confidentialité <RouteLink routeName={"confidentialityPolicy"} />, et notre <RouteLink routeName={"valuesChart"} /> (ou tout autre politique que nous pouvons autrement lister), lesquelles faisant partie intégrante des présentes Conditions. Si vous choisissez de ne pas accepter les présentes Conditions, la Politique de confidentialité ou la Charte de valeurs, vous devez vous abstenir d’utiliser la Plateforme.</p>
                        <p>Dans la mesure permise par la loi, nous nous réservons le droit, à notre seule et entière discrétion, de modifier les présentes Conditions, ou toute partie de celles-ci, à tout moment. Dans ce cas, la Troupe vous fournira un préavis raisonnable avant l’entrée en vigueur des Conditions modifiées et pourra vous en informer à travers un courriel. Les Conditions modifiées prendront effet trente (30) jours après leur publication (ou tout autre délai autrement indiqué par écrit par la Troupe) et s’appliqueront à votre utilisation de la Plateforme à partir de ce moment. Votre utilisation de la Plateforme après l’entrée en vigueur des Conditions modifiées équivaut à une acceptation tacite de celles-ci. Vous êtes invités à partager vos commentaires et vos idées pour continuer de faire évoluer ces Conditions.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>1. Utilisation de la plateforme</h2>
                        <h3>1.1. Accès et utilisation.</h3> 
                        <p>Sous réserve de votre stricte conformité avec les présentes Conditions, la Troupe vous autorise à accéder et à utiliser la Plateforme pour consulter les informations disponibles ou fournir de nouvelles informations, conformément à la Documentation le cas échéant, uniquement pour votre usage personnel.</p>
                        <h3>1.2. Exactitude des informations.</h3> 
                        <p>Nous déployons des efforts commercialement raisonnables, afin que l’information disponible sur la Plateforme soit exacte et à jour. Il peut cependant arriver que certaines informations contiennent des erreurs typographiques, des inexactitudes ou des omissions mineures. Dans ce cas, et dans la mesure permise par la loi, nous nous réservons le droit de corriger toute telle erreur, inexactitude ou omission mineures sur la Plateforme.</p>
                        <h3>1.3. Politique de confidentialité.</h3> 
                        <p>Toute collecte et utilisation de vos renseignements personnels via la Plateforme est régie par notre <RouteLink routeName={"confidentialityPolicy"} />, laquelle fait partie intégrante des présentes Conditions. En cas de conflit entre les termes des Conditions et ceux de la Politique de confidentialité en ce qui a trait à la collecte et l’utilisation de vos renseignements personnels, les termes de la Politique de confidentialité prévaudront.</p>
                        <h3>1.4. Sécurité des informations.</h3> 
                        <p>Vous comprenez que le contenu que vous soumettez via la Plateforme peut être transféré de manière non cryptée vers divers réseaux ; un tel transfert peut impliquer des modifications pour se conformer et s’adapter aux exigences techniques des réseaux ou des dispositifs de connexion. Vos renseignements personnels demeurent toutefois protégés conformément à notre <RouteLink routeName={"confidentialityPolicy"} />.</p>
                        <h3>1.5. Restrictions.</h3> 
                        <p>Sauf avec l’autorisation expresse écrite de la Troupe ou du titulaire de droits pertinent, vous ne pouvez, à aucun moment, directement ou indirectement, sauf autorisation expresse : (i) copier, modifier ou créer des œuvres dérivées de la Plateforme, son Contenu (tel que défini ci-dessous) ou de la Documentation, en tout ou en partie ; (ii) louer, prêter, vendre, octroyer des sous-licences, céder, distribuer, publier, transférer la Plateforme, le Contenu ou la Documentation à des tiers ; (iii) effectuer de la rétro-ingénierie, désassembler, décompiler, décoder, adapter ou autrement tenter de dériver ou d’accéder au code source de la Plateforme, en tout ou en partie, sauf dans la mesure permise par les licences applicables le cas échéant ; (iv) supprimer tout avis de propriété de la Plateforme, de la Documentation ou du Contenu ; (v) utiliser la Plateforme comme un bureau de services (service bureau), en temps partagé ou de toute autre manière allouée à des tiers ; (vi) utiliser la Plateforme contrairement aux Conditions, à la Documentation ou à la Charte de valeurs; (vii) diffuser du Contenu faux, inexact, trompeur, diffamatoire, nuisible, abusif, menaçant, harcelant, délictuel, violent, vulgaire, obscène, entrant en violation avec le droit à la vie privée ou à la confidentialité des tiers, haineux, raciste ou autrement inapproprié; (viii) utiliser la Plateforme pour autrement diffuser des programmes malicieux, des virus, ou d’autres programmes nocifs, de la sollicitation illégale (incluant sans s’y limiter des pourriels ou spam) ou pour autrement prétendre être quelqu’un d’autre ou faire de fausses représentations; (ix) fournir des mots de passe ou d’autres informations de connexion à la Plateforme à des tiers; (x) partager des fonctionnalités non-publiques de la Plateforme avec des tiers; (xi) sonder, numériser, tester la vulnérabilité ou contourner tout mécanisme de sécurité utilisé par les sites Web, serveurs ou réseaux connectés à la Plateforme ; (xii) entreprendre toute action qui impose une charge déraisonnable ou disproportionnée sur les sites Web, serveurs ou réseaux connectés à la Plateforme ; (xiii) accéder à, tenter d’accéder à, ou utiliser les données d’autres utilisateurs de la Plateforme sans leur consentement ; (xiv) sciemment diminuer ou entraver l’accès à la Plateforme ; (xv) Sauf selon la licence prévue, avec l’autorisation du titulaire des droits ou tel que prévu par les lois applicables, venir copier, redistribuer et/ou autrement rendre disponibles le Contenu; ou (xvi) utiliser la Plateforme, la Documentation ou le Contenu de la Plateforme de quelque manière ou à quelque fin que ce soit qui enfreint, détourne ou viole tout droit de propriété intellectuelle ou autre droit de toute personne, ou qui viole toute loi applicable.</p>
                        <h3>1.6. Suspension de la Plateforme.</h3> 
                        <p>Nonobstant toute disposition contraire dans les présentes Conditions, la Troupe peut temporairement suspendre votre accès à une partie ou à la totalité de la Plateforme si, de l’avis raisonnable de la Troupe : (i) il y a une menace ou une attaque sur toute composante de la Plateforme ; (ii) votre utilisation de la Plateforme perturbe ou pose un risque de sécurité à la Plateforme ou à tout autre utilisateur de la Plateforme ; (iii) vous utilisez la Plateforme pour des activités frauduleuses ou illégales ; (iv) votre utilisation de la Plateforme est interdite par les lois applicables ; ou (v) votre utilisation de la Plateforme viole les Conditions, la Documentation ou la Charte (chacune, une « Suspension »). La Troupe déploiera des efforts commercialement raisonnables, afin de vous aviser par écrit de toute Suspension et de vous fournir des mises à jour concernant la reprise de l’accès à la Plateforme au terme de toute Suspension. La Troupe déploiera des efforts commercialement raisonnables, afin de fournir l’accès à la Plateforme dès que raisonnablement possible après que l’événement donnant lieu à la Suspension ait été corrigé. Dans la mesure permise par la loi, la Troupe n’est pas responsable des dommages, des responsabilités, des pertes (incluant toute perte de profits), ou de toute autre conséquence que vous pourriez encourir à la suite d’une Suspension.</p>
                        <h3>1.7. Mesures de conformité.</h3> 
                        <p>La Plateforme peut contenir des mesures de protection technologiques empêchant la copie ainsi que d’autres mesures de sécurité empêchant les utilisations non autorisées de la Plateforme, telles que les utilisations : (i) dépassant la portée de l’accès octroyé à en vertu de l’article 1.1 des Conditions ; et/ou (ii) interdites en vertu de l’article 1.5 des Conditions. Vous ne devez pas, et ne devez pas tenter, de supprimer, désactiver, contourner ou autrement créer ou mettre en œuvre toute solution de rechange à de telles mesures de sécurité.</p>
                        <h3>1.8. Enquêtes et poursuites.</h3> 
                        <p>La Troupe se réserve le droit d’enquêter sur toute violation existante ou potentielle des présentes Conditions ou de la Charte et de prendre les mesures appropriées afin de mettre fin à toute telle violation. Vous reconnaissez et convenez que la Troupe a le droit (mais non l’obligation) de veiller au respect des présentes Conditions, des lois applicables, des ordonnances et des exigences d’un tribunal ou d’une instance gouvernementale. En cas de violation des présentes Conditions, la Troupe a le droit, à tout moment et sans préavis, de désactiver votre accès ou votre utilisation de la Plateforme.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>2. Compte d'utilisateur</h2>
                        <h3>2.1. Création d’un compte.</h3>
                        <p>Certaines fonctionnalités ou certains accès à la Plateforme exigent la création d’un compte d’utilisateur. Si vous choisissez de vous inscrire et de créer un compte sur la Plateforme, vous devez compléter la procédure d’enregistrement en fournissant à la Troupe des informations à jour, complètes et exactes comme demandé dans le formulaire d’enregistrement applicable. Vous devez également choisir un nom d’utilisateur unique et un mot de passe sécurisé. En cas de violation du présent paragraphe 2.1, la Troupe peut mettre fin à vos droits d’accès et d’utilisation de la Plateforme à sa seule et entière discrétion.</p>
                        <h3>2.2. Utilisation de la Plateforme par des mineurs.</h3>
                        <p>La Troupe ne collecte pas sciemment d’informations auprès d’enfants âgés de moins de 14 ans.</p>
                        <h3>2.3. Responsabilité du compte.</h3>
                        <p>Vous êtes entièrement responsable du maintien de la confidentialité de votre mot de passe et de votre compte. En outre, vous êtes entièrement responsable de toutes les activités qui se produisent sur votre compte. Vous acceptez d’informer immédiatement la Troupe de toute utilisation non autorisée de votre compte ou de toute autre brèche de sécurité.</p>
                        <h3>2.4. Sécurité du compte.</h3>
                        <p>Bien que nous utilisions des mesures de sécurité commercialement raisonnables pour protéger vos renseignements personnels, nous ne pouvons pas garantir que des tierces parties non autorisées ne soient jamais en mesure de violer les mesures de sécurité de la Plateforme ou de faire un usage inapproprié de vos renseignements personnels.</p>
                        <h3>2.5. Utilisation d’autres comptes.</h3>
                        <p>Vous ne pouvez à aucun moment utiliser le compte d’une autre personne.</p>
                        <h3>2.6. Suppression du compte.</h3>
                        <p>Vous pouvez demander la suppression de votre compte en nous envoyant une demande écrite à cet effet.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>3. Entités</h2>
                        <h3>3.1. Création d’une Entité.</h3>
                        <p>À titre d’utilisateur, vous pouvez créer une Entité sur la Plateforme. Vous devez être connecté à votre compte pour créer une Entité. Une « Entité » est toute page de la Plateforme à propos d’une personne, d’une organisation, d’un projet, d’un événement, d’un lieu ou d’un équipement. Vous pouvez également créer une « Entité rapide », il s’agit d’une Entité créée à partir des champs d’une autre Entité (rapide ou non) et qui doit contenir, au minimum, des informations dans le champs « Nom de l’entité », qu’il s’agisse du nom/prénom d’un individu, nom d’affichage d’un organisme, nom d’un projet, nom d’un lieu, nom d’un équipement ou nom d’un événement.</p>
                        <h3>3.2. Modification d’une Entité.</h3>
                        <p>À titre d’utilisateur, vous pouvez également venir proposer des modifications à une Entité disponible sur la Plateforme en étant connecté à votre compte. La Troupe se réserve également le droit de modifier une Entité ou refuser une modification à sa discrétion ou si les informations ou éléments fournis ne répondent pas au standard de qualité établi à l’interne.</p>
                        <h3>3.3. Informations vous concernant.</h3>
                        <p>Vous comprenez et acceptez que La Troupe conserve et rende publique certaines informations vous concernant et concernant votre compte lors de la création ou modification d’une Entité. Pour plus de clarté, la Troupe rendra disponible publiquement (a) le nom d’utilisateur public associé à la création ou la modification d’une Entité; (b) les modifications faites à l’Entité; et (c) la date et l’heure de la création ou la modification. La Troupe conservera également à l’interne les informations suivantes concernant la création ou modification d’une Entité : (a) le nom de l’utilisateur; (b) le courriel de l’utilisateur; (c) le nom public de l’utilisateur; et (d) toutes les modifications faites ou éléments créés en lien avec une Entité par un utilisateur.</p>
                        <h3>3.4. Responsabilité des informations.</h3>
                        <p>Lorsque vous venez créer ou modifier une Entité, vous comprenez que vous ne pouvez fournir dans la Plateforme que des informations ou des éléments concernant l’Entité que vous avez le droit de fournir à la Troupe ou autrement partager avec un tiers. Vous devez nécessairement respecter les obligations prévues dans la Section 5 plus bas. Avant de pouvoir soumettre des données à la Plateforme, vous devrez confirmer que les informations ou éléments vous appartiennent ou que vous disposez des droits, autorisations ou licences nécessaires pour le faire. Sans limiter la généralité de ce qui précède, il peut donc s’agir d’informations ou d’éléments qui vous appartiennent, d’informations ou d’éléments que vous avez l’autorisation expresse de partager ou d’éléments pour lesquels vous détenez une licence nécessaire. Vous vous engagez à défendre et indemniser la Troupe en cas de réclamation d’un tiers en lien avec les données et éléments fournis concernant une Entité tel qu’autrement prévu dans les Conditions.</p>
                        <h3>3.5. Endossement d’une Entité.</h3>
                        <p>À titre d’Utilisateur, vous pouvez venir endosser une Entité ou une information sur une Entité. Endosser une Entité signifie que vous considérez que les informations et données disponibles sur l’Entité, ou une information spécifique, sont d’une haute qualité. La Troupe se réserve le droit d’inclure dans son évaluation de la qualité des données d’une Entité l’endossement par des utilisateurs pour déterminer si les informations sont d’une qualité suffisante.</p>
                        <h3>3.6. Consultation d’une Entité et ses informations.</h3>
                        <p>Une Entité est consultée à partir d’une fiche disponible pour tous les utilisateurs et peut être consultée selon trois modalités : (i) avec des informations réduites (méthode simple), (ii) avec toutes les données associées à l’Entité (méthode complète) ou (iii) avec les données brutes de l’Entité, incluant les métadonnées (méthode donnée).</p>
                        <h3>3.7. Signalement d’une Entité.</h3>
                        <p>Vous pouvez en tout temps signaler une Entité et/ou son contenu pour indiquer à l’équipe de modération de La Troupe que celle-ci ne conviendrait pas à la Plateforme ou ne respecterait pas les Conditions, notre Politique de confidentialité ou la Charte de valeurs en suivant la procédure prévue au paragraphe 5.6. La Troupe se réserve le droit de prendre les actions jugées nécessaires suivant ses pratiques et politiques.</p>
                        <h3>3.8. Suppression d’une Entité.</h3>
                        <p>Dépendamment de la licence utilisée pour nous fournir des informations ou des éléments concernés, vous pouvez demander la suppression ou l’archivage d’une Entité dont vous êtes le créateur en nous envoyant une demande écrite à cet effet. La Troupe se réserve le droit de refuser une telle demande à son entière discrétion. Sans être limité par ce qui précède, La Troupe se réserve le droit, en tout temps, de supprimer une Entité qui ne respecterait pas les Conditions, notre Politique de confidentialité, ou notre Charte d’engagement ou pour toute autre raison à notre discrétion. Dans un tel cas, le créateur de l’Entité sera préalablement informé, dans la mesure du possible.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>4. Collecte et utilisation des informations; Données agrégées</h2>
                        <h3>4.1. Collecte et utilisation des informations.</h3> 
                        <p>La Troupe peut, directement ou indirectement par les services de tierces parties, recueillir et stocker des informations concernant l’utilisation de la Plateforme et sur l’équipement par lequel la Plateforme est accessible et utilisée, par le biais de : (i) la fourniture de services de maintenance et de soutien ; (ii) les mesures de sécurité incluses dans la Plateforme telles que décrites au paragraphe 1.7 ci-dessus ; et (iii) par le transfert par l’Internet. Vous acceptez que la Troupe puisse utiliser ces informations à des fins liées à toute utilisation de la Plateforme par vous, incluant, mais sans limitation, afin : (y) d’améliorer la performance de la Plateforme ou de développer des mises à jour ; et (z) de vérifier votre conformité avec les Conditions et faire respecter les droits de la Troupe, incluant les droits de propriété intellectuelle que la Troupe détient, entre les parties, sur et dans la Plateforme et la Documentation. Sans limiter la portée de ce qui précède, toute collecte et utilisation de vos renseignements personnels via la Plateforme est régie par notre Politique.</p>
                        <h3>4.2. Données agrégées.</h3> 
                        <p>Nonobstant toute disposition contraire dans les présentes, la Troupe peut surveiller votre utilisation de la Plateforme, recueillir et compiler des ensembles de données agrégées et anonymisées, ainsi que des modèles décisionnels (collectivement, les « Données agrégées »). Entre les parties, l’ensemble des droits, titres et intérêts sur et dans les Données agrégées, incluant tous les droits de propriété intellectuelle s’y rapportant, appartiennent à et sont détenus exclusivement par la Troupe. Vous reconnaissez et convenez que la Troupe peut, à sa seule et entière discrétion : (i) rendre les Données agrégées accessibles au public conformément aux lois applicables ; et (ii) utiliser les Données agrégées dans la mesure et de la manière autorisées par les lois applicables.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>4. Collecte et utilisation des informations; Données agrégées</h2>
                        <h3>4.1. Collecte et utilisation des informations.</h3>
                        <p>La Troupe peut, directement ou indirectement par les services de tierces parties, recueillir et stocker des informations concernant l’utilisation de la Plateforme et sur l’équipement par lequel la Plateforme est accessible et utilisée, par le biais de : (i) la fourniture de services de maintenance et de soutien ; (ii) les mesures de sécurité incluses dans la Plateforme telles que décrites au paragraphe 1.7 ci-dessus ; et (iii) par le transfert par l’Internet. Vous acceptez que la Troupe puisse utiliser ces informations à des fins liées à toute utilisation de la Plateforme par vous, incluant, mais sans limitation, afin : (y) d’améliorer la performance de la Plateforme ou de développer des mises à jour ; et (z) de vérifier votre conformité avec les Conditions et faire respecter les droits de la Troupe, incluant les droits de propriété intellectuelle que la Troupe détient, entre les parties, sur et dans la Plateforme et la Documentation. Sans limiter la portée de ce qui précède, toute collecte et utilisation de vos renseignements personnels via la Plateforme est régie par notre Politique.</p>
                        <h3>4.2. Données agrégées.</h3>
                        <p>Nonobstant toute disposition contraire dans les présentes, la Troupe peut surveiller votre utilisation de la Plateforme, recueillir et compiler des ensembles de données agrégées et anonymisées, ainsi que des modèles décisionnels (collectivement, les « Données agrégées »). Entre les parties, l’ensemble des droits, titres et intérêts sur et dans les Données agrégées, incluant tous les droits de propriété intellectuelle s’y rapportant, appartiennent à et sont détenus exclusivement par la Troupe. Vous reconnaissez et convenez que la Troupe peut, à sa seule et entière discrétion : (i) rendre les Données agrégées accessibles au public conformément aux lois applicables ; et (ii) utiliser les Données agrégées dans la mesure et de la manière autorisées par les lois applicables.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>5. Contenu</h2>
                        <h3>5.1. Propriété du contenu.</h3>
                        <p>Entre nous, vous conservez la propriété de tout texte, vidéo, photo ou autre matériel que vous téléversez, publiez sur ou communiquez via la Plateforme ou que vous fournissez à la Troupe en vertu des présentes (le « Contenu »), à l’exception de la Rétroaction (telle que définie ci-dessous). Sans qu’il s’agisse d’une obligation, nous recommandons de permettre la libre circulation des Contenus tout en les liant à leurs auteurs et en limitant les usages possibles. Pour ce faire, nous recommandons l’utilisation de la licence Creative Commons (CC BY-NC-SA 4.0).</p>
                        <h3>5.2. Responsabilité du Contenu.</h3>
                        <p>Vous reconnaissez et convenez que vous êtes le seul et unique responsable de tout Contenu que vous fournissez dans la Plateforme en vertu des présentes. Par conséquent, vous déclarez et garantissez à la Troupe que : (i) vous êtes le seul et unique titulaire du Contenu, ou que vous avez tous les droits, licences, autorisations, consentements et décharges pour octroyer à la Troupe les droits sur ce Contenu ; et (ii) ni le Contenu ni sa publication, sa transmission, ou son utilisation par la Troupe ne violent ou ne violeront les droits de tiers, incluant les droits de propriété intellectuelle et le droit à l’image, ou toute loi ou réglementation, canadienne ou étrangère.</p>
                        <h3>5.3. Interdictions.</h3>
                        <p>À tout moment, lorsque vous fournissez, téléversez, communiquez ou autrement publiez du Contenu sur la Plateforme en vertu des présentes, vous vous engagez à ne faire aucune déclaration et à ne générer aucun Contenu qui pourrait être considéré, à la seule et entière discrétion de la Troupe, comme : (i) étant abusif, diffamatoire, pornographique, indécent, menaçant, haineux, raciste, xénophobe, homophobe ou sexiste (ou toute utilisation d’un langage discriminatoire) ou représentant des personnes identifiables d’une manière offensante, pornographique, obscène, immorale, diffamatoire ou calomnieuse ; (ii) impliquant un langage vulgaire, obscène ou malveillant ; et (iii) divulguant des renseignements personnels ou les informations confidentielles d’autrui.</p>
                        <h3>5.4. Licence sur le Contenu.</h3>
                        <p>Nonobstant toute disposition contraire, en soumettant du Contenu, vous accordez à la Troupe une licence mondiale, non exclusive, perpétuelle, irrévocable, libre de redevances et transférable, avec droit de donner des sous-licence, pour reproduire, publier, modifier, créer des oeuvres dérivées et généralement utiliser le Contenu par la Troupe ou ses sous-licenciés, y compris en relation avec la Plateforme, incluant, mais sans s’y limiter, la publicité, diffusion, promotion ou représentations des activités et services de la Troupe. Vous acceptez également de compléter et signer tous les documents que la Troupe pourrait raisonnablement requérir, afin de donner plein effet à cette disposition.</p>
                        <h3>5.5. Contenu de tiers.</h3>
                        <p>Par le biais de la Plateforme, vous pouvez utiliser et/ou accéder à du contenu fourni par des tiers. La Troupe ne peut garantir que ce contenu sera exempt de tout matériel ou information que vous pourriez trouver répréhensible. La Troupe décline toute responsabilité liée à votre accès à tout contenu.</p>
                        <h3>5.6. Plaintes et gestion de la Plateforme.</h3>
                        <p>Si vous estimez que du contenu disponible sur la Plateforme viole l’une ou l’autre des dispositions du présent article 4 ou toute loi applicable, la Troupe vous invite à déposer une plainte qui sera traitée de manière confidentielle à l’adresse courriel : <RouteLink routeName={"contact"} /> ou en utilisant la fonction « Signaler comme inapproprié » sur la Plateforme. Malgré ce qui précède, vous reconnaissez et convenez que la Troupe n’a aucune obligation d’examiner le contenu publié sur la Plateforme, incluant votre Contenu, ou de surveiller votre accès à la Plateforme ou son utilisation, mais a le droit de le faire, afin d’assurer la conformité avec les présentes Conditions, les lois applicables, les ordonnances judiciaires, les normes gouvernementales ou toute autre exigence applicable. La Troupe se réserve tous les droits relatifs à l’administration de la Plateforme, incluant, mais sans limitation le droit de supprimer sans préavis tout Contenu qui, à la seule et entière discrétion de la Troupe, ne respecte pas les règles énoncées dans le présent article 4.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>6. Propriété intellectuelle</h2>
                        <h3>6.1. Plateforme et Documentation.</h3>
                        <p>Vous reconnaissez et convenez que la Plateforme et la Documentation vous sont fournies en vertu d’une licence, et qu’elles ne vous sont pas vendues. Sauf en vertu d’une licence spécifique, vous n’acquérez aucun droit, titre ou intérêt sur et dans la Plateforme ou la Documentation en vertu des présentes Conditions autres que le droit d’accéder et d’utiliser la Plateforme et la Documentation conformément aux Conditions. Entre les parties, dans toute la mesure possible, la Troupe conserve tous les droits, titres et intérêts sur et dans la Plateforme et à la Documentation, incluant les droits de propriété intellectuelle s’y rapportant, sous réserve des accès expressément concédés en vertu des présentes. Vous êtes tenus de protéger la Plateforme et la Documentation (incluant toutes les copies de celles-ci) contre toute contrefaçon, détournement, vol, utilisation ou accès non autorisés.</p>
                        <h3>6.2. Marques de commerce.</h3>
                        <p>L’ensemble de marques de commerce, marques de service, logos, noms commerciaux et autres signes distinctifs désignant la Troupe ou la Plateforme sont, entre nous, des marques de commerce de la Troupe. Toutes les autres marques de commerce, marques de service, logos, noms commerciaux et autres signes distinctifs sont des marques de commerce de leurs titulaires respectifs.</p>
                        <h3>6.3. Contenu de la Plateforme.</h3>
                        <p>Toutes les œuvres originales reproduites ou publiées sur la Plateforme sont protégées par droit d’auteur. Le titulaire du droit d’auteur sur chaque œuvre se réserve tous les droits sur celle-ci. Vous reconnaissez et convenez que le fait pour toute personne de poser, sans le consentement du titulaire du droit d’auteur, un geste que seul le titulaire du droit d’auteur a le droit de faire en vertu des lois applicables sur le droit d’auteur constitue une violation de ce droit. Les éléments du contenu offerts par la Troupe sur la Plateforme, les documents, les échantillons audio et vidéo, les photos ou autres matériels (collectivement, le « Contenu de la Plateforme ») peuvent être protégés par propriété intellectuelle incluant, mais sans limitation, par droit d’auteur, droit à la vie privée, marques de commerce et autres, et peuvent nécessiter d’obtenir le consentement d’un tiers ou la licence de ces droits. La Troupe ne déclare ni ne garantit que de tels consentements ou licences ont été obtenus, et décline expressément toute responsabilité à cet égard.</p>
                        <h3>6.4. Rétroaction.</h3>
                        <p>Si vous envoyez ou transmettez à la Troupe toute communication ou matériel suggérant ou recommandant des changements à la Plateforme, incluant, mais sans limitation, de nouvelles caractéristiques ou fonctionnalités relatives à celle-ci, ou tout commentaire, question, suggestion ou autre (chacune, une « Rétroaction »), la Troupe aura le droit (mais non l’obligation) d’utiliser cette Rétroaction. Par la présente, vous cédez à la Troupe, en votre nom, tous les droits, titres et intérêts relatifs à la Rétroaction, et cette cession prend effet à la date de création de ces droits, titres et intérêts. Vous acceptez de renoncer à tout droit moral que vous détenez ou pourriez détenir sur et dans la Rétroaction. Sans limiter la généralité de ce qui précède, vous reconnaissez et convenez que la Troupe ait le droit (mais non l’obligation) d’utiliser, sans aucune attribution ou compensation, toute idée, tout savoir-faire, tout concept, toute technique ou tout autre droit de propriété intellectuelle sur et dans la Rétroaction, à quelque fin que ce soit. Vous acceptez également de remplir et de signer tous les documents que la Troupe pourrait raisonnablement requérir, afin de donner plein effet à cette disposition.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>7. Limite de responsabilité</h2>
                        <p>7.1. EN AUCUN CAS LA TROUPE NE PEUT ÊTRE TENUE RESPONSABLE ENVERS VOUS DE TOUTE INTERRUPTION, SUSPENSION OU INCAPACITÉ D’ACCÉDER À LA PLATEFORME NOTAMMENT EN CAS DE PANNES, DE PROBLÈMES DE RÉSEAU, DE FORCE MAJEURE OU D’ÉVÉNEMENTS HORS DE NOTRE CONTRÔLE NI DE TOUT DOMMAGE QUI PEUT EN DÉCOULER. LA TROUPE PEUT, À TOUT MOMENT ET SANS PRÉAVIS, INTERROMPRE L’ACCÈS À LA PLATEFORME DE FAÇON TEMPORAIRE POUR DES RAISONS DE MAINTENANCE VISANT SON BON FONCTIONNEMENT, SANS AVOIR À ACCORDER D’INDEMNITÉS. DANS LA PLEINE MESURE PERMISE PAR LA LOI, LA TROUPE NE PEUT EN AUCUN CAS ÊTRE TENUE RESPONSABLE DE TOUTE PERTE OU DE TOUT DOMMAGE RELATIVEMENT À VOTRE SYSTÈME INFORMATIQUE, Y COMPRIS, MAIS SANS S’Y LIMITER, LA PERTE DE DONNÉES, LA TRANSMISSION DE VIRUS, LES TENTATIVES D’INTRUSION ET LE PIRATAGE DES DONNÉES, DES FICHIERS OU DES PROGRAMMES QU’IL CONTIENT, DANS LA MESURE OÙ CES PERTES OU DOMMAGES NE RÉSULTENT PAS D’UNE FAUTE DE LA TROUPE OU D’UN MANQUEMENT À SES OBLIGATIONS EN VERTU DES PRÉSENTES.</p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>8. Sites externes</h2>
                        <p>8.1. La Plateforme peut contenir des hyperliens vers des sites Internet externes qui vous font quitter la Plateforme (les « Sites externes »). Vous reconnaissez et convenez que la Troupe n’est pas responsable de la disponibilité de ces Sites externes ni de l’exactitude du contenu, des produits ou des services disponibles sur ces Sites externes. Les hyperliens vers des Sites externes ne signifient pas que la Troupe approuve ou cautionne ces Sites externes. Vous reconnaissez et convenez que vous assumez tous les risques découlant de votre utilisation des Sites externes. En utilisant la Plateforme, vous dégagez expressément la Troupe de toute responsabilité découlant de votre utilisation de tout Site externe, et vous êtes lié aux conditions d’utilisation et à la politique de confidentialité applicables à ces Sites externes. </p>
                    </div>
                </div>
                <div className="row">
                    <div className={"col"}>
                        <h2>9. Généralités</h2>
                        <h3>9.1. Survie des dispositions.</h3>
                        <p>Les dispositions qui, par leur nature, devraient survivre à la résiliation des présentes Conditions survivront à la résiliation, y compris les dispositions relatives à la propriété ainsi que les clauses de non-responsabilité et les limitations de responsabilité.</p>
                        <h3>9.2. Intégralité de l’entente.</h3>
                        <p>Les présentes Conditions, la Politique de confidentialité et la Charte de valeurs remplacent tout accord antérieur entre vous et la Troupe et constituent l’intégralité de l’entente entre vous et la Troupe concernant l’utilisation de la Plateforme et de son contenu.</p>
                        <h3>9.3. Avis.</h3>
                        <p>Nous pouvons vous transmettre tous les avis légaux requis (y compris la signification d’un acte de procédure) par toute méthode légale, y compris l’affichage d’avis sur la Plateforme ou l’envoi d’avis à toute adresse électronique que vous fournissez lors de l’établissement de votre compte sur la Plateforme ou que vous fournissez lors de toute autre interaction avec nous ou la Plateforme. Vous acceptez de nous envoyer des avis en les postant au : 112 7ème Rue, Rouyn-Noranda (Québec) J9X 1Z9.</p>
                        <h3>9.4. Cession.</h3>
                        <p>Vous ne pouvez pas céder ou transférer les présentes Conditions ou tout droit ou obligation y afférents.</p>
                        <h3>9.5. Renonciation et divisibilité.</h3>
                        <p>Le fait que la Troupe ne fasse pas valoir un droit ou une disposition des présentes Conditions ne constitue pas une renonciation à l’application future de ce droit ou de cette disposition. La renonciation à un tel droit ou à une telle disposition ne sera effective que si elle est faite par écrit et signée par un représentant dûment autorisé de la Troupe. Sauf dans les cas expressément prévus dans les présentes Conditions, l’exercice par la Troupe de l’un de ses recours en vertu des présentes Conditions sera sans préjudice à ses autres recours. Si, pour quelque raison que ce soit, un tribunal compétent juge qu’une disposition de cette convention est invalide ou inapplicable, les autres dispositions de ces Conditions resteront valides et effectives.</p>
                        <h3>9.6. Force majeure.</h3>
                        <p>À l’exception des obligations relatives au paiement, chaque partie sera libérée de ses obligations dans la mesure et pour la période où elle est incapable ou empêchée de s’acquitter desdites obligations par des circonstances indépendantes de sa volonté et hors de son contrôle et ne sera pas responsable envers l’autre partie pour tout dommage subi.</p>
                        <h3>9.7. Contactez-nous.</h3>
                        <p>La Troupe apprécie vos commentaires, questions et réactions, qui peuvent être envoyés à <span>{appConfig.support.email}</span> ou en utilisant le formulaire en ligne mis à disposition par la Troupe <RouteLink routeName={"contact"} />.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsOfService;