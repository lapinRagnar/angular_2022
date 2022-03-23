=================
directive:
----------
un attribut sur un element htmlqui permet d'enrichir un element.
ex: <div monDirective>

decorateur: une fonction qui permet d'enrichir le comportement

quelque decorateur:
====================
- @hostbinding : permet de lier une propriété de ma class typescrpt à une propriété html sur lequel la directive est gréffé
==> quand la veleur de la propriété TS évolue, Angular met à jour automatiquement la valeur de l'element html

- @hostlistener :
  -------------
  permet de lier une méthode TS à un événement qui se produit sur l'element html sur lequel est greffé  la directive

- @Input : permet de lier un attribut placé sur l'element html à une propriété de la classe TS
-----------

property binding ou [quelqueChose] = "" : Angular evalue le "..."  comme du TS et non comme une chaine

template ref : 
--------------
c'est une référence à l'element hypothetique sur lequel on travaille

viewContainer ref:
--------------------
c'est l'endroit où devra se situer  si biensur il se met à exister.

directive d'attribut: 
----------------------
elle ne fait qu'enrichir le comportement d'un element html.

directive structurelle:
-----------------------
elle agit sur l'existence meme d'un element et donc sur la structure du dom.

=============================
composant
==============================

Angular nous offre des outils pour créer des DIRECTIVES

<h1 nomdirective nomZetiko="red">

<h1 *if="5 === 5">

3 types de directives : 
--------------------------
==> directive d'attribut : enrichir un élémént html
==> directive structurelle: faire en sorte qu'un élément html apparait ou pas
==> décorateur component
    @Decorator :            dedier à la gestion d'un template html, son style css
    --------------


Event binding :
------------------
permet de lier un comportement de ma directive TS à un evenement dans le html.
ex: <div (click)="onClickUpdate()" >        

Reference de template:
------------------------
permet de créer une variable disponible uniquement dans le code html et qui fait reference à l'element sur lequel elle est positionner.
ex: <input #prenom >

Projection de contenu:
---------------------------
un composant peut accueillir du code html entre ses balises ouvrantes et fermantes. Ce code html pourra être projeté (affiché)
à l'endroit ou l'on souhaite grace au composant livré qui s'appelle <ng-content>


=========================
les observables
========================

programmation reactive:
----------------------
c'est un paradigm dans lesquels une source(bouton, varibles, ...) peut propager un evenement qui vient de se produire et d'autre element de code vont pouvoir y reagir.


fetch(--------------)               |           evenements
-----------------------------------------------------------
.then(() = {})                      |       .addEventListener(() => {})


