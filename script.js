/**Exercice 1: Créer une page HTML comportant:

un champ "input" de type "color"
un bouton "modifier le background" Au clic sur le bouton, le background de la page doit prendre la valeur de la couleur choisie.**/


$(document).ready(function() {

	 $('#modifier').on('click', function(){
	 	// var btn = $('button');
		 var input = $('input[name=couleur]');
		 var color = input.val();
		 $('body').css('background-color', color);
	});

/**Exercice 2: Créer une page HTML comportant:

un champ de saisie "input" de type "text" Lorsque l'on clique dans le champ de texte, le curseur se positionne dans ce champ. Lorsque l'on clique à l'extérieur du champ, le curseur disparaît.
Ecrire le code javascript nécessaire pour:

logger le message "dans le champ" après un clic sur le champ texte
logger le message "hors du champ" après un clic en-dehors du champ**/

	 // $('input[name=texte]').on('click', function(){
	 // 	 var text = "Dans le champ";
  //        $(this).val(text);
	 // });
	 // $('body').on('click', function(evt){
	 // 	var clicked = evt.target;
	 // 	var jElem = $(clicked);
	 // 	if(!jElem.is('input[name=texte]')) {
	 // 		 var text = "Hors du champ";
  //        $('input[name=texte]').val(text);
	 // 	}
	 	
	 // });

	 var input2 = $('input[name=texte]');
	 input2.on('focus', function(){
	 	console.log('Dans le champ');
	 });
	 input2.on('blur', function(){
	 	input2.off('focus');
	 	console.log('Hors du champ');
	 });

/**Exercice 3: Créer une page HTMl comportant un champ input de type texte. Ecrire le code javascript nécessaire pour que, lorsqu'on tape du texte dans le champ, si la touche entrée est appuyée, une popup d'alerte s'ouvre avec le texte "touche entrée saisie".**/

	  $('input[name=texte2]').keyup(function(e) {    
   		if(e.keyCode == 13) { // KeyCode de la touche entrée
          alert('Touche entrée saisie')};
	 });

/**Exercice 4 :
En HTML, créer une liste vide (non ordonnée), un input[type=text] et un bouton d'action
«ajouter».
EN JS : Au click sur «ajouter», insérer un élément de liste (LI) dans le DOM et lui associer
le contenu du champs texte .
Si le champs texte est vide, indiquer une erreur à l'utilisateur et empêcher l'insertion.**/

/**
Exercice 5 : En HTML, ajouter un bouton d'action «supprimer».
Modifier le programme pour associer un input[type=checkbox] à chaque élément ajouté à
la liste.
Au click sur «supprimer», tous les éléments cochés seront retirés de la liste.
Si la liste est vide, l'indiquer à l'utilisateur**/

/**
Exercice 6 : Modifier le programme pour associer deux icônes d'action «déplacer» à chaque élément
de liste créé. Utiliser par exemple ces icônes :
http://fortawesome.github.io/Font-Awesome/icon/caret-up/
http://fortawesome.github.io/Font-Awesome/icon/caret-down/
L'action «déplacer» a deux comportements :
Au click sur «up», remonter le LI correspondant d'un niveau dans la liste.
Au click sur «down», descendre le LI correspondant d'un niveau dans la liste.
Faire attention aux cas limites : si le LI manipulé est le premier ou le dernier de la liste.**/

	  $('#ajouter').on('click', function(){
	  	var input3 = $('input[name=texte3]');
	  	var textEntre = input3.val();

	  	if($.trim(textEntre)) {
			var li = $('<li><input type="checkbox">'+ textEntre +'<i class="fa fa-caret-up" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></li>');
			li.css('list-style', 'none');
	  		li.appendTo('ul');
	  	}
	  	else {
	  		alert("Erreur, le champ est vide. Veuillez entrer du texte.")
	  	}
	  });

			$('input[type="text"]').on('focus', function(){
				var text = "";
			    $('input[type="text"]').val(text);
			});

	  $('#supprimer').on('click', function(){
	  		$('li').has('input:checkbox:checked').remove();
	  		
	  		if(!$('li').length) {
	  			alert('La liste est vide.');
	  		}
	  });

	  $('.fa.fa-caret-up').on('click', function() {
		  var $current = $(this).closest('li');
		  var $previous = $current.prev('li');
		  if($previous.length !== 0){
	    	$current.insertBefore($previous);
  			}
	  });

	  $('.fa.fa-caret-down').on('click', function(){
		  var $current = $(this).closest('li')
		  var $next = $current.next('li');
		  if($next.length !== 0){
		    $current.insertAfter($next);
		  }
		});

});				
