# teamCreator

## Technologies
- GitHub
- Angular
- Jenkins
- Sonar Cloud

## TODO : Functionnalities
- [ ] UNIT Tests
- [x] Login
- [x] Administrator view :
  + [x] configuration of the last group (multiple, LAST_MIN, LAST_Max)
 - [ ] User view :
  + [ ] List users without group
  + [ ] Ask to create a group => create invitation link to share (group created only when an user accept the invitation)
  + [ ] Join a specific group (no complet) with a share link
  + [ ] Ask to join a random group
  + [ ] Show an user group, the group member and button to leave the group
- [ ] Back-end :
  + [ ] Must join a group when every group are created (not create a new one) => disable share link maybe
  + [ ] Random join group => join a group created with one place left or create a new group
  + [ ] A group must have at least 2 members or be deleted
  + [ ] group dispatch, number, etc
  + [x] Just a login (no password) for an user
  + [ ] Group name can be generic 'group1', 'group2', etc
  + [x] An administrator can be identify with the pseudo 'admin'

## TODO : Functionnalities More
- [ ] UI admin : 
  + [ ] Can see the list of groups created
  + [ ] Edit group : 
    + [ ] Assign or kick an user from a group 
    + [ ] Delete last group existing
    + [ ] Create a group
    + [ ] Add user to group
 - [ ] Back-end :
  + [ ] Add or kick user when the app is running :
    + [ ] When the total number of users changed
    + [ ] Kick user from a group
    + [ ] Change the total number of groups
  + [ ] Be careful : when the admin change number of users in group or number of group
  + [ ] Add metadata to users : forbidden access of an user to a group, force user to be in the same group
  + [ ] User account creation : users have a real account with a login (identifier and password)

## TODO Integration
- [ ] CI Pipeline :
  + [ ] Unit Test
  + [ ] Integration Test
  + [x] Source code Analysis (Sonar Cloud)
  + [ ] Compilation
  + [ ] Publish reports
- [ ] Jenkins Server :
  + [ ] Add pipeline
  + [ ] Differents jobs to configure :
    + [ ] Report automatised tests
    + [ ] Add report Source code Analysis
- [ ] Test on different environments : FireFox, Chrome, Edge

## Delivery
- [ ] Report complet :
  + [ ] reference to source code
  + [ ] Schema of pipeline
  + [x] Screenshot of code review
  + [x] Screenshot of code analysis
  + [ ] Screenshot configuration Jenkins
  + [ ] Screenshot jobs Jenkins
  + [ ] Screenshot pipeline created
  + [ ] Questions to answer :
    + [ ]  Quels outils d'intégration continue avez-vous conseillé à l'équipe de développelement d'installer sur leur machine personnelle ?
      + [ ] Sonar Qube : code quality
      + [ ] Code coverage
      + [ ] Git Bash / Git Desktop (or other)
    + [ ]  Quels sont les différents dépôts de code source utilisés pour l'ensemble du projet ? pourquoi avoir fait ce choix de découpage ?
      + [ ]  GitHub (easier to configure than Azure Devops and account already created a contrari to Gitlab or gitBucket) (and we like to share our project for free with microsoft :)
      + [ ]  PR
      + [ ]  Versionning
    + [ ]  Quel(les) pipeline(s) d'intégration continue avez-vous défini(s) pour gérer votre projet ? (Insérer un schémades grandes étapes du processus complet d'intégration continue que vous avez définies, depuis l'environnement au développeur à la validation finale des changements. Il n'est pas demandé de  réaliser le déploiement continu de l'application, ni de générer des binaires de production.
      + [ ]  TODO
    + [ ]  Quels jobs et/ou pipelines avez-vous définis dans Jenkins ? (Justifier vos réponses)
      + [ ]  TODO
    + [ ]  Pour chaque job de Jenkins, fournir un screenshot des rapports affichés sur la page principale du job.
      + [ ]  TODO
    + [ ]  Comment avez-vous interfacé l'analyse du code source avec SonarQube ? On fournira des screenshots des rapports de SonarQube pour chaque job intégré.
    + [ ]  Quel(s) framework(s) de test avez-vous choisi d'utiliser ? Pourquoi ?
      + [ ]  Karma parce que c'est installé de base (:
    + [ ]  Avez-vous choisi de tester certaines fonctionnalités ou zones de code plus que d'autres ? Pourquoi ?
      + [ ]  TODO : point critique, ...
    + [ ]  Avez-vous réalisé des tests manuels ? Si oui, lesquels ?
      + [ ]  Scénario de test, data entrée et sortie pour admin, utilisateur, par action ?
