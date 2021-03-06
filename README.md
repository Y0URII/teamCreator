# teamCreator

## Technologies
- GitHub
- Angular
- Jenkins
- Sonar Qube ?

## TODO : Functionnalities
- [ ] UNIT TESTS !!!!!!!!!!!!! TDD or BDD ?
- [ ] Login
- [ ] Administrator view :
  + [ ] Edit number of users
  + [ ] number of users in group
  + [ ] configuration of the last group (multiple, LAST_MIN, LAST_Max)
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
  + [ ] Just a login (no password) for an user
  + [ ] Group name can be generic 'group1', 'group2', etc
  + [ ] An administrator can be identify with the pseudo 'admin'

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
  + [ ] Source code Analysis (Sonar Qube ?)
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
  + [ ] Screenshot of code review (git ?)
  + [ ] Screenshot of code analysis (Sonar Qube ?)
  + [ ] Screenshot configuration Jenkins
  + [ ] Screenshot jobs Jenkins
  + [ ] Screenshot pipeline created
  + [ ] Questions to answer :
    + [ ]  Quels outils d'int??gration continue avez-vous conseill?? ?? l'??quipe de d??veloppelement d'installer sur leur machine personnelle ?
      + [ ] Sonar Qube : code quality
      + [ ] Code coverage
      + [ ] Git Bash / Git Desktop (or other)
    + [ ]  Quels sont les diff??rents d??p??ts de code source utilis??s pour l'ensemble du projet ? pourquoi avoir fait ce choix de d??coupage ?
      + [ ]  GitHub (easier to configure than Azure Devops and account already created a contrari to Gitlab or gitBucket) (and we like to share our project for free with microsoft :)
      + [ ]  PR
      + [ ]  Versionning
    + [ ]  Quel(les) pipeline(s) d'int??gration continue avez-vous d??fini(s) pour g??rer votre projet ? (Ins??rer un sch??mades grandes ??tapes du processus complet d'int??gration continue que vous avez d??finies, depuis l'environnement au d??veloppeur ?? la validation finale des changements. Il n'est pas demand?? de  r??aliser le d??ploiement continu de l'application, ni de g??n??rer des binaires de production.
      + [ ]  TODO
    + [ ]  Quels jobs et/ou pipelines avez-vous d??finis dans Jenkins ? (Justifier vos r??ponses)
      + [ ]  TODO
    + [ ]  Pour chaque job de Jenkins, fournir un screenshot des rapports affich??s sur la page principale du job.
      + [ ]  TODO
    + [ ]  Comment avez-vous interfac?? l'analyse du code source avec SonarQube ? On fournira des screenshots des rapports de SonarQube pour chaque job int??gr??.
    + [ ]  Quel(s) framework(s) de test avez-vous choisi d'utiliser ? Pourquoi ?
      + [ ]  Karma parce que c'est install?? de base (:
    + [ ]  Avez-vous choisi de tester certaines fonctionnalit??s ou zones de code plus que d'autres ? Pourquoi ?
      + [ ]  TODO : point critique, ...
    + [ ]  Avez-vous r??alis?? des tests manuels ? Si oui, lesquels ?
      + [ ]  Sc??nario de test, data entr??e et sortie pour admin, utilisateur, par action ?
