////// Dépot git à partir dossier existant
//A la racine de votre dossier dans la console, faire :

git init


// INIT LOCAL PROJECT TO GITHUB

git init
git add .
git remote add origin https://github.com/mikax64/drinkshot-react.git    //if fatal: remote alreay exists --> git remote rm origin
git commit -m "first commit"

// ----------> If error of right , not allowed
git config user.name mikax64
git config user.email michael.belhatte@SVGFEColorMatrixElement.com



//*************************************  COMMIT 

git add chemin_vers_mon_fichier
git commit -m "message du commit"

// ----> modifier un commit.
git commit --amend
// ensuite modifier le commentaire ou les fichiers ajoutés--> ensuite faire ESC puis tapper :wq dans la console

// ----> modifier le nom d'un commit.
git commit --amend -m "your message"

//  Antidater un commit.
git add .
GIT_AUTHOR_DATE="2015-12-12 08:32 +100" git commit -m "Commit antidaté"


//*************************************  OTHERS 
//  Connaitre les fichiers pris en compte et autres infos
git status

//


//*************************************  PUSH 
//  pour envoyer ses commits sur git
git push
// pour le premier commit -> git push --set-upstream origin master

//  Envoyer ses commits vers le dépôt distant sur la branche master
git push origin master
//git push --force --set-upstream origin master

//  Envoyer ses commits vers le dépôt distant sur une branch spécifique
git push origin MA_BRANCH

//  Annuler le dernier commit et modifs
git reset --hard md5_commit
git push --force


//************************************* PULL

//  Mettre à jour le dépôt local
git pull


// Mettre à jour le dépôt local d'une branch spécifique
git pull origin MA_BRANCH



//************************************* DELETE FILES


// Supprimer un fichier du répertoire de travail et de l'index
git rm nom_du_fichier


// Supprimer un fichier de l'index
git rmg --cached nom_du_fichier


//*************************************  BRANCHS

//voir les branhces existantes
git branch

//Créer une nouvelle branche
git branch new-branche

//Se placer dans une autre branche pour les checkin
git checkout my-branch

// on peut faire les deux actions suivantes : git branch ma-branche puis git checkout ma-branche avec celle ci -> git checkout -b ma-branche

// Merger une branche vers la master

git checkout master
git merge my-branch
git push









