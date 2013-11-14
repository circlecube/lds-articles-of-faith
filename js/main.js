/*

*/
var touching = false;
var language = 'english';
var font_size = 'normal';
var long_word_length = 3;
var short_word_length = 4;
var clicked;
var quiz_article = -1;
var quiz_guesses_total = 0;
var quiz_guesses_correct = 0;
var blank_string = '___';
var langs = {
	english: { 
		language_native: "English", 
		language_english: "English", 
		ordinals: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th"],
		title: "Article of Faith", 
		title_plural: "13 Articles of Faith", 
		church: "The Church of Jesus Christ of Latter-day Saints",
		about_text: "<p>One of the first things we’re taught as children are the Articles of Faith — 13 statements that summarize our fundamental beliefs.</p><p>The Prophet Joseph Smith wrote them in a letter to a newspaper editor, John Wentworth, who had asked for information about the Church.</p><p>Ever since the Articles of Faith were written, they’ve inspired and directed us in the basic principles of our gospel. They enhance our understanding of certain doctrines and help us commit to living them. They invite further thought. And they’re a good tool for explaining our beliefs to people unfamiliar with them.</p>",
		skip: "Skip",
		next: "Continue",
		again: "Again",
		quiz: "Quiz",
		difficulty: "Difficulty",
		difficulty_all: "All Words",
		difficulty_long: "Long Words",
		difficulty_short: "Short Words",
		difficulty_random: "Random Words",
		list: "List All",
		font_size: "Font Size",
		normal: "Normal",
		large: "Large",
		small: "Small",
		language_string: "Language"
	},
	french: { 
		language_native: "Français", 
		language_english: "French", 
		ordinals: ["1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e", "10e", "11e", "12e", "13e"],
		title: "Article de Foi", 
		title_plural: "Treize articles de foi", 
		church: "L'ÉGLISE DE JÉSUS-CHRIST DES SAINTS DES DERNIERS JOURS" ,
		about_text: "<p>Les Articles de Foi font partie des premières choses que l’on nous enseigne dans notre enfance : ces treize déclarations résument nos croyances fondamentales.</p><p>Deux ans avant de mourir, Joseph Smith, le prophète, les communiqua par lettre à John Wentworth, rédacteur en chef d’un journal, qui lui avait demandé des renseignements sur l’Église.</p><p>Depuis ce jour, les Articles de Foi sont une source d’inspiration pour les gens qui veulent obéir aux principes fondamentaux de l’Évangile. Grâce aux Articles de Foi, nous comprenons mieux certains points de doctrine et nous nous engageons réellement à vivre les principes de l’Évangile. Nous nous sentons poussés à réfléchir davantage. Enfin, les Articles de Foi sont un bon moyen d’expliquer nos croyances aux personnes qui les connaissent peu.</p>",
		skip: "Passer",
		next: "Continuer",
		again: "Refaire",
		quiz: "Quiz",
		difficulty: "Difficulté",
		difficulty_all: "Tous les mots",
		difficulty_long: "Les mots longs",
		difficulty_short: "Mots plus courts",
		difficulty_random: "Let mots au hasard",
		list: "Liste Complète",
		font_size: "Taille du texte",
		normal: "Normale",
		large: "Grand",
		small: "Petit",
		language_string: "Langue"
	},
	spanish: { 
		language_native: "Español", 
		language_english: "Spanish", 
		ordinals: ["1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°", "11°", "12°", "13°"],
		title: "Artículo de Fe", 
		title_plural: "13 Artículos de Fe", 
		church: "LA IGLESIA DE JESUCRISTO DE LOS SANTOS DE LOS ÚLTIMOS DÍAS" ,
		about_text: "<p>Algunas de las primeras cosas que se nos enseñan de niños son los Artículos de Fe: son trece declaraciones que resumen nuestras creencias fundamentales.</p><p>Dos años antes de su muerte, el profeta José Smith los escribió en una carta que dirigió a John Wentworth, director de un periódico, quien había solicitado información acerca de la Iglesia.</p><p>Desde que se redactaron los Artículos de Fe, nos han servido de inspiración y de guía en cuanto a los principios básicos del Evangelio. Amplían nuestro entendimiento de ciertas doctrinas y nos ayudan a comprometernos a vivirlas. Nos invitan a reflexionar. Además, son un buen recurso para explicar nuestras creencias a las personas que no las conocen.</p>",
		skip: "Pasar",
		next: "Continuar",
		again: "Rehacer",
		quiz: "Examen",
		difficulty: "Dificultad",
		difficulty_all: "Todas las Palabras",
		difficulty_long: "Palabras largas",
		difficulty_short: "Las palabras más cortas",
		difficulty_random: "Palabras azar",
		list: "Lista Completa",
		font_size: "Tamaño del texto",
		normal: "Normal",
		large: "Grande",
		small: "Pequeño",
		language_string: "Idioma"
	},
	german: { 
		language_native: "Deutsch", 
		language_english: "German", 
		ordinals: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		title: "Die Glaubensartikel", 
		title_plural: "Die 13 Glaubensartikel",
		church: "KIRCHE JESU CHRISTI DER HEILIGEN DER LETZTEN TAGE" ,
		about_text: "<p>Wir lernen bereits als Kind jene dreizehn Aussagen, in denen unsere grundlegenden Glaubensansichten zusammengefasst sind.</p><p>Der Prophet Joseph Smith schrieb sie zwei Jahre vor seinem Tod in einem Brief an John Wentworth nieder, den Herausgeber einer Zeitung, der um Informationen bezüglich der Kirche gebeten hatte.</p><p>Seit damals, als die Glaubensartikel verfasst worden sind, weisen sie auf die grundlegenden Evangeliumsprinzipien hin. Sie helfen uns, bestimmte Lehren besser zu verstehen und bereitwillig danach zu leben. Sie regen dazu an, sich tiefere Gedanken zu machen. Und sie sind ein gutes Hilfsmittel, jemandem, der unsere Lehre nicht so gut kennt, diese zu erläutern.</p>",
		skip: "überspringen",
		next: "Weiter",
		again: "Wieder",
		quiz: "Quiz",
		difficulty: "Schwierigkeit",
		difficulty_all: "Alle Wörter",
		difficulty_long: "Lange Wörter",
		difficulty_short: "Kurze Wörter",
		difficulty_random: "Zufällige Wörter",
		list: "Vollständige Liste",
		normal: "Normale",
		large: "Große",
		small: "Wenig",
		font_size: "Textgröße",
		language_string: "Sprache"
	},
};
var difficulty = langs['english'].difficulty_all;
/*
difficulty levels
'all_words', 
'long_words', 
'short_words', 
'random_words', 
'even_words'
*/

var aof = [
	{ aof: 1,   
		spanish: "Nosotros creemos en Dios el Eterno Padre, y en su Hijo Jesucristo, y en el Espíritu Santo.",
		french: "Nous croyons en Dieu, le Père éternel, et en son Fils, Jésus-Christ, et au Saint-Esprit.",
		german: "Wir glauben an Gott, den Ewigen Vater, und an seinen Sohn, Jesus Christus, und an den Heiligen Geist.",
		english: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost." },
	{ aof: 2,   
		spanish: "Creemos que los hombres serán castigados por sus propios pecados, y no por la transgresión de Adán.",
		french: "Nous croyons que les hommes seront punis pour leurs propres péchés, et non pour la transgression d'Adam.",
		german: "Wir glauben, daß der Mensch für seine eigenen Sünden bestraft werden wird und nicht für die Übertretung Adams.",
		english: "We believe that men will be punished for their own sins, and not for Adam’s transgression." },
	{ aof: 3,   
		spanish: "Creemos que por la Expiación de Cristo, todo el género humano puede salvarse, mediante la obediencia a las leyes y ordenanzas del Evangelio.",
		french: "Nous croyons que, grâce au sacrifice expiatoire du Christ, tout le genre humain peut être sauvé en obéissant aux lois et aux ordonnances de l'Évangile.",
		german: "Wir glauben, daß durch das Sühnopfer Christi alle Menschen errettet werden können, indem sie die Gesetze und Verordnungen des Evangeliums befolgen.",
		english: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel." },
	{ aof: 4,   
		spanish: "Creemos que los primeros principios y ordenanzas del Evangelio son: primero, Fe en el Señor Jesucristo; segundo, Arrepentimiento; tercero, Bautismo por inmersión para la remisión de los pecados; cuarto, Imposición de manos para comunicar el don del Espíritu Santo.",
		french: "Nous croyons que les premiers principes et ordonnances de l'Évangile sont: premièrement la foi au Seigneur Jésus-Christ, deuxièmement le repentir, troisièmement le baptême par immersion pour la rémission des péchés, quatrièmement l'imposition des mains pour le don du Saint-Esprit.",
		german: "Wir glauben, daß die ersten Grundsätze und Verordnungen des Evangeliums sind: erstens der Glaube an den Herrn Jesus Christus; zweitens die Umkehr; drittens die Taufe durch Untertauchen zur Sündenvergebung; viertens das Händeauflegen zur Gabe des Heiligen Geistes.",
		english: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ; second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost." },
	{ aof: 5,   
		spanish: "Creemos que el hombre debe ser llamado por Dios, por profecía y la imposición de manos, por aquellos que tienen la autoridad, a fin de que pueda predicar el evangelio y administrar sus ordenanzas.",
		french: "Nous croyons que l'on doit être appelé de Dieu par prophétie, et par l'imposition des mains de ceux qui détiennent l'autorité, pour prêcher l'Évangile et en administrer les ordonnances.",
		german: "Wir glauben, daß man durch Prophezeiung und das Händeauflegen derer, die Vollmacht dazu haben, von Gott berufen werden muß, um das Evangelium zu predigen und seine heiligen Handlungen zu vollziehen.",
		english: "We believe that a man must be called of God, by prophecy, and by the laying on of hands by those who are in authority, to preach the Gospel and administer in the ordinances thereof." },
	{ aof: 6,   
		spanish: "Creemos en la misma organización que existió en la Iglesia Primitiva, esto es, apóstoles, profetas, pastores, maestros, evangelistas, etc.",
		french: "Nous croyons à la même organisation que celle qui existait dans l'Église primitive, savoir: apôtres, prophètes, pasteurs, docteurs, évangélistes, etc.",
		german: "Wir glauben an die gleiche Organisation, wie sie in der Urkirche bestanden hat, nämlich Apostel, Propheten, Hirten, Lehrer, Evangelisten usw.",
		english: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth." },
	{ aof: 7,   
		spanish: "Creemos en el don de lenguas, profecía, revelación, visiones, sanidades, interpretación de lenguas, etc.",
		french: "Nous croyons au don des langues, de prophétie, de révélation, de vision, de guérison, d'interprétation des langues, etc.",
		german: "Wir glauben an die Gabe der Zungenrede, Prophezeiung, Offenbarung, der Visionen, der Heilung, Auslegung der Zungenrede usw.",
		english: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth." },
	{ aof: 8,   
		spanish: "Creemos que la Biblia es la palabra de Dios hasta donde esté traducida correctamente; también creemos que el Libro de Mormón es la palabra de Dios.",
		french: "Nous croyons que la Bible est la parole de Dieu dans la mesure où elle est traduite correctement; nous croyons aussi que le Livre de Mormon est la parole de Dieu.",
		german: "Wir glauben, daß die Bibel, soweit richtig übersetzt, das Wort Gottes ist; wir glauben auch, daß das Buch Mormon das Wort Gottes ist.",
		english: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God." },
	{ aof: 9,   
		spanish: "Creemos todo lo que Dios ha revelado, todo lo que actualmente revela, y creemos que aún revelará muchos grandes e importantes asuntos pertenecientes al reino de Dios.",
		french: "Nous croyons tout ce que Dieu a révélé, tout ce qu'il révèle maintenant, et nous croyons qu'il révélera encore beaucoup de choses grandes et importantes concernant le royaume de Dieu.",
		german: "Wir glauben alles, was Gott offenbart hat, und alles, was er jetzt offenbart; und wir glauben, daß er noch viel Großes und Wichtiges offenbaren wird, was das Reich Gottes betrifft.",
		english: "We believe all that God has revealed, all that He does now reveal, and we believe that He will yet reveal many great and important things pertaining to the Kingdom of God." },
	{ aof: 10,  
		spanish: "Creemos en la congregación literal del pueblo de Israel y en la restauración de las Diez Tribus; que Sión (la Nueva Jerusalén) será edificada sobre el continente americano; que Cristo reinará personalmente sobre la tierra, y que la tierra será renovada y recibirá su gloria paradisíaca.",
		french: "Nous croyons au rassemblement littéral d'Israël et au rétablissement des dix tribus. Nous croyons que Sion (la nouvelle Jérusalem) sera bâtie sur le continent américain, que le Christ régnera en personne sur la terre, que la terre sera renouvelée et recevra sa gloireparadisiaque.",
		german: "Wir glauben an die buchstäbliche Sammlung Israels und die Wiederherstellung der Zehn Stämme, daß Zion (das Neue Jerusalem) auf dem amerikanischen Kontinent errichtet werden wird, daß Christus persönlich auf der Erde regieren wird und daß die Erde erneuert werden und ihre paradiesische Herrlichkeit empfangen wird.",
		english: "We believe in the literal gathering of Israel and in the restoration of the Ten Tribes; that Zion (the New Jerusalem) will be built upon the American continent; that Christ will reign personally upon the earth; and, that the earth will be renewed and receive its paradisiacal glory." },
	{ aof: 11,  
		spanish: "Reclamamos el derecho de adorar a Dios Todopoderoso conforme a los dictados de nuestra propia conciencia, y concedemos a todos los hombres el mismo privilegio: que adoren cómo, dónde o lo que deseen.",
		french: "Nous affirmons avoir le droit d'adorer le Dieu Tout-Puissant selon les inspirations de notre conscience et reconnaissons le même droit à tous les hommes: qu'ils adorent comme ils veulent, où ils veulent ou ce qu'ils veulent.",
		german: "Wir beanspruchen das Recht, den Allmächtigen Gott zu verehren, wie es uns das eigene Gewissen gebietet, und gestehen allen Menschen das gleiche Recht zu, mögen sie verehren, wie oder wo oder was sie wollen.",
		english: "We claim the privilege of worshiping Almighty God according to the dictates of our own conscience, and allow all men the same privilege, let them worship how, where, or what they may." },
	{ aof: 12,  
		spanish: "Creemos en estar sujetos a los reyes, presidentes, gobernantes y magistrados; en obedecer, honrar y sostener la ley.",
		french: "Nous croyons que nous devons nous soumettre aux rois, aux présidents, aux gouverneurs et aux magistrats, et que nous devons respecter, honorer et défendre la loi.",
		german: "Wir glauben, daß es recht ist, Königen, Präsidenten, Herrschern und Obrigkeiten untertan zu sein und dem Gesetz zu gehorchen, es zu achten und für es einzutreten.",
		english: "We believe in being subject to kings, presidents, rulers, and magistrates, in obeying, honoring, and sustaining the law." },
	{ aof: 13,  
		spanish: "Creemos en ser honrados, verídicos, castos, benevolentes, virtuosos y en hacer el bien a todos los hombres; en verdad, podemos decir que seguimos la admonición de Pablo: Todo lo creemos, todo lo esperamos; hemos sufrido muchas cosas, y esperamos poder sufrir todas las cosas. Si hay algo virtuoso, o bello, o de buena reputación, o digno de alabanza, a esto aspiramos.",
		french: "Nous croyons que nous devons être honnêtes, fidèles, chastes, bienveillants et vertueux, et que nous devons faire du bien à tous les hommes; en fait, nous pouvons dire que nous suivons l'exhortation de Paul: nous croyons tout, nous espérons tout, nous avons supporté beaucoup et nous espérons être capables de supporter tout. Nous recherchons tout ce qui est vertueux ou aimable, tout ce qui mérite l'approbation ou est digne de louange.",
		german: "Wir glauben, daß es recht ist, ehrlich, treu, keusch, gütig und tugendhaft zu sein und allen Menschen Gutes zu tun; ja, wir können sagen, daß wir der Ermahnung des Paulus folgen—wir glauben alles, wir hoffen alles, wir haben viel ertragen und hoffen, alles ertragen zu können. Wenn es etwas Tugendhaftes oder Liebenswertes gibt, wenn etwas guten Klang hat oder lobenswert ist, so trachten wir danach.",
		english: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men; indeed, we may say that we follow the admonition of Paul-We believe all things, we hope all things, we have endured many things, and hope to be able to endure all things. If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things." }
];

jQuery(document).ready(function($) {
	

	function update_options(){
		var	font_size_normal_selected, font_size_large_selected, font_size_small_selected, d_a_selected, d_l_selected, d_s_selected, d_r_selected = '';
		if (font_size == 'large'){
			font_size_large_selected = 'selected';
		}
		else if (font_size == 'small'){
			font_size_small_selected = 'selected';
		}
		else{
			font_size_normal_selected = 'selected';
		}

		if (difficulty == langs['english'].difficulty_long ){
			d_l_selected = 'selected';
		}
		else if (difficulty == langs['english'].difficulty_short ){
			d_s_selected = 'selected';
		}
		else if (difficulty == langs['english'].difficulty_random ){
			d_r_selected = 'selected';
		}
		else{
			d_a_selected = 'selected';
		}

		var options_content = '';
		options_content += '<div class="option">';
			options_content += '<label><h3>' + langs[language].language_string + '</h3>';
			options_content += '<select class="option_language">';
				for (var lang in langs) {
					var selected = '';
					if (language == lang){
						selected = 'selected';
					}
				   options_content += "<option value='" + lang + "' " + selected + ">" + langs[lang].language_native + "</option>";
				}
			options_content += '</select></label>';
		options_content += '</div>';

		options_content += '<div class="option">';
			options_content += '<label><h3>' + langs[language].font_size + '</h3>';
			options_content += '<select class="option_font_size">';
				options_content += '<option value="" ' + font_size_normal_selected + '>' + langs[language].normal + '</option>';
				options_content += '<option value="large" ' + font_size_large_selected + '>' + langs[language].large + '</option>';
				options_content += '<option value="small" ' + font_size_small_selected + '>' + langs[language].small + '</option>';
			options_content += '</select></label>';
		options_content += '</div>';

		options_content += '<div class="option">';
			options_content += '<label><h3>' + langs[language].difficulty + '</h3>';
			options_content += '<select class="option_difficulty">';
				options_content += '<option value="' + langs['english'].difficulty_all + '" ' + d_a_selected + '>' + langs[language].difficulty_all + '</option>';
				options_content += '<option value="' + langs['english'].difficulty_long + '" ' + d_l_selected + '>' + langs[language].difficulty_long + '</option>';
				options_content += '<option value="' + langs['english'].difficulty_short + '" ' + d_s_selected + '>' + langs[language].difficulty_short + '</option>';
				options_content += '<option value="' + langs['english'].difficulty_random + '" ' + d_r_selected + '>' + langs[language].difficulty_random + '</option>';
			options_content += '</select></label>';
		options_content += '</div>';

		options_content += '<div class="option">';
			options_content += '<div class="button button_game">' + langs[language].quiz + '</div>';
			options_content += '<div class="button button_list">' + langs[language].list + '</div>';
		options_content += '</div>';
		$('.options').html(options_content);
	}

	function list_aofs(){
		var aofs = '<h1>' + langs[language].title_plural + '</h1>';

		for(var i=0; i<aof.length; i++){
			aofs += "<article class='aof_" + i + "'>";
			aofs += "<dt>" + langs[language].ordinals[i] + " " + langs[language].title + "</dt>";
			aofs += "<dd style='display:none;'>" + aof[i][language];
			aofs += "<div class='button button_game' data-id='" + i + "'>" + langs[language].quiz + "</div></dd>";
			aofs += "</article>";
		}

		$('.content').html(aofs);

		$('article dd').each(function(idx,e){
			$(this).slideUp();
		});
	}

	$('.content').on('click touch', 'article dt', function(e){
		$(this).next('dd').slideToggle();
		$(this).toggleClass('active');
	});

	$('.options').on('change', '.option_font_size', function(){
		//console.log('font size update:', $(this).val() );
		font_size = $(this).val();
		$('body').attr('class', '');
		$('body').addClass(  'font-' + font_size );
		$('.options').removeClass('active');
	});
	$('.options').on('change', '.option_difficulty', function(){
		//console.log('font size update:', $(this).val() );
		difficulty = $(this).val();
		console.log(difficulty);
		//$('body').attr('class', '');
		//$('body').addClass(  'font-' + font_size );
		//$('.options').removeClass('active');
	});
	$('.options').on('change', '.option_language', function(){
		//console.log('language change:', $(this).val() );
		language = $(this).val();
		$('.content').html('');
		update_options();
	});
	$('.options').on('click touch', '.button_list', function(){
		list_aofs();
		$('.options').removeClass('active');
	});
	$('body').on('touchstart', function(){
		//touching = true;
	});
	$('body').on('touchend', function(){
		touching = false;
	});
	$('body').on('click touch', '.button_game', function(e){
		//console.log($(this).data('id') );
		if( $(this).data('id') != undefined ){
			quiz_article = $(this).data('id') - 1;
		}
		else {
			quiz_article = -1;
		}
		//console.log(quiz_article);
		// difficulty = 'long_words';
		game_aofs();
		$('.options').removeClass('active');
	});
	$('.content').on('click touch', '.button_skip', function(e){
		game_aofs();
	});
	$('.content').on('click touch', '.button_again', function(e){
		quiz_article--;
		$(this).remove();
		game_aofs();
	});
	$('.options_toggle').on('click touch', function(){
		$('.options').toggleClass('active');
	})

	function game_aofs(){
		//console.log(quiz_article);
		quiz_article++;
		if (quiz_article > 12 || quiz_article < 0 ){
			quiz_article = 0;
		}
		//var random_article = Math.floor( aof.length * Math.random() );
		var random_article_words = randomize_aof( quiz_article );
		var content = '<h1>' + langs[language].quiz + '</h1>';
		content += '<dt>' + langs[language].ordinals[quiz_article] + " " + langs[language].title + '</dt><dd class="ordered"></dd><dd class="unordered">';

		//place unordred words
		if (difficulty == langs['english'].difficulty_long ){
			for (var i = 0; i < random_article_words.length; i++){
				if (random_article_words[i].length > long_word_length) {
					content += '<span class="word" data-absolute_order="' + random_article_words[i].absolute_order + '" data-order="' + random_article_words[i].order + '">' + random_article_words[i].word + '</span>';
				}
			}
		}
		else if (difficulty == langs['english'].difficulty_short ){
			for (var i = 0; i < random_article_words.length; i++){
				if (random_article_words[i].length < short_word_length) {
					content += '<span class="word" data-absolute_order="' + random_article_words[i].absolute_order + '" data-order="' + random_article_words[i].order + '">' + random_article_words[i].word + '</span>';
				}
			}
		}
		else if (difficulty == langs['english'].difficulty_random ){
			for (var i = 0; i < random_article_words.length; i++){
				if (i < random_article_words.length/2) {
					content += '<span class="word" data-absolute_order="' + random_article_words[i].absolute_order + '" data-order="' + random_article_words[i].order + '">' + random_article_words[i].word + '</span>';
				}
			}
		}
		//default - normal - all words
		else{
			for (var i = 0; i < random_article_words.length; i++){
				content += '<span class="word" data-order="' + random_article_words[i].order + '">' + random_article_words[i].word + '</span>';
			}
		}


		content += '</dd>';
		content += '<div class="button button_skip">' + langs[language].skip + '</div>';
		$('.content').html( content );
		$('.options').removeClass('active');

		//place ordered words
		if (difficulty == langs['english'].difficulty_long ){
			for (var i = 0; i < random_article_words.length; i++){
				if (random_article_words[i].length > long_word_length) {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order);
				}
				else {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order, random_article_words[i].word);
				}
			}
		}
		else if (difficulty == langs['english'].difficulty_short ){
			for (var i = 0; i < random_article_words.length; i++){
				if (random_article_words[i].length < short_word_length) {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order);
				}
				else {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order, random_article_words[i].word);
				}
			}
		}
		else if (difficulty == langs['english'].difficulty_random ){
			for (var i = 0; i < random_article_words.length; i++){
				if (i < random_article_words.length/2) {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order);
				}
				else {
					add_to_ordered_dd(random_article_words[i].absolute_order, random_article_words[i].order, random_article_words[i].word);
				}
			}
		}
		else {
			//nothing - all words are unordered
			clicked = 0;
		}
		update_clicked();
	}
	function update_clicked(){
		$('.ordered .current').removeClass('current');
		//add class to style current blank for UI benefit
		//find next blank in ordered section
		if ( $('.ordered .word.blank').length > 0 ) {
			clicked = $('.ordered .word.blank').first().addClass('current').data('absolute_order');
			console.log( 'first blank' );
		}
		//if no blank and no unordered nothing
		else if( $('.unordered .word').length <= 0 ) {
			//nothing
			console.log( 'no blanks, no guesses - none' );
		}
		//if no blank find total
		else if ( $('.ordered .word').length > 0 ) {
			clicked = $('.ordered .word').length;
			//$('.ordered .word:last').addClass('current');
			console.log( 'no blanks, total used' );
		}
		else{
			clicked = 0;
		}
		console.log( clicked );

	}
	function add_to_ordered_dd(absolute_order, order, word){
		var blank_class = '';
		console.log('before', $('.ordered').text() );
		if ( word == undefined || word == null || word == blank_string ) {
			word = blank_string;
			blank_class='blank';
		}
		word_html = '<span class="word ' + blank_class + '" data-absolute_order="' + absolute_order + '" data-order="' + order + '">' + word + '</span>';
		var added = false;
		var order_ar = order.split(',');
		order_ar.shift();
		order_ar.pop();
		if ($('.ordered .word').length > 0) {
			//for (var j = 0; j < order_ar.length; j++){
				//console.log('order array', j, order_ar[j]);
				//order = parseInt(order_ar[j]);
				order = absolute_order;
				$('.ordered .word').each(function(i,e){
					/* order is an array of each value. use first one and if it already exists check the next one. check each order value */

					//console.log(i, order, $(this).data('order'));
					if (!added){
						//this order is already here and is "___", replace it
						if ( parseInt($(this).data('absolute_order')) == order && $(this).text() == blank_string ) {
							console.log(word, order, 'replacewith', $(this).data('absolute_order'), $(this).text());
							$(this).replaceWith(word_html);
							added = true;
		console.log('after', $('.ordered').text() );
							return true;
						}
						//this order already here but not a blank spot, check the next index or order
						else if ( parseInt($(this).data('absolute_order')) == order && $(this).text() != blank_string ){
							//nothing - order will be incremented and checked again next go around in the for j loop
							console.log(word, order, 'match found but not blank so continue from here with next order value', $(this).data('absolute_order'), $(this).text());
							j++;
							order = parseInt(order_ar[j]);
							//return true;
						}
						//found a higher order data attribte, add this one before that one
						else if ( parseInt($(this).data('absolute_order')) > order ) {
							console.log(word, order, 'inserted before', $(this).data('absolute_order'), $(this).text());
							$(this).before(word_html);
							added = true;
		console.log('after', $('.ordered').text() );
							return true;
						}
						else{
							//nothing, check the next one
							//console.log(word, order, 'not added here, continue');
						}
					}
				});

			//}
			//no place to insert, add it to the end - the order is after the last word 
			if (!added) {
				console.log(word, order, 'appended to end');
				$('.ordered').append(word_html);
		console.log('after', $('.ordered').text() );
				return true;
			}
		}
		//no words yet, add this first one
		else {
			$('.ordered').html(word_html)
			console.log(word, 'added first one', absolute_order, order);
		console.log('after', $('.ordered').text() );
			return true;
		}
	}


	$('.content').on('click touchstart', '.unordered .word', function(e){
		if (!touching) {
			touching = true;
			quiz_guesses_total++;
			var this_order = $(this).data('order');
			//console.log(this_order);
			//simple order
			// if ( this_order == clicked ) {
			// 	$(this).addClass('clicked');
			// 	clicked++;
			// }
			//multiple order
			if( this_order.indexOf("," + clicked + ",") != -1 ) {
				quiz_guesses_correct++;
				//$(this).addClass('clicked');
				//remove clicked word and append to a preceding div
				//$('.ordered').append( $(this) );
				add_to_ordered_dd( clicked, $(this).data('order'), $(this).text() );
				$(this).remove();
				//clicked++;
			}
				update_clicked();
			//console.log($('.unordered .word').length);
			//show next
			if ( $('.unordered .word').length < 1) {
				$('.unordered').addClass('empty');
				$('.button_skip').text( langs[language].next );
				$('.button_skip').after( "<div class='button button_again'>" + langs[language].again + "</div>" );
				$('dt').append(" - " + parseInt( (quiz_guesses_correct / quiz_guesses_total) * 100 ) + "%");
			}
			//console.log('score :', quiz_guesses_correct / quiz_guesses_total);
		}
	});


	function randomize_aof(article){
		//console.log('randomize_aof()');
		//split article into array of words in correct order
		var article_word = aof[article][language].split(' ');
		var article_words = [];
		//copy words into array with correct order vars
		for (var i = 0; i < article_word.length; i++){
			article_words.push({ 
				word: article_word[i], 
				order: i,
				absolute_order: i,
				odd: i % 2,
				length: article_word[i].length
			});
		}
		//console.log(article_words);
		article_words.sort(
			function compare(a,b) {
			  if (a.word < b.word)
			     return -1;
			  if (a.word > b.word)
			    return 1;
			  return 0;
			}
		);
		//console.log(article_words);
		for (var i = 0; i < article_words.length; i++){
			//console.log(article_words[i].word);
			if ( i < article_words.length-1 && article_words[i].word == article_words[i+1].word ){
				var j,k = i;
				var ik_order = ',';
				var ik_order_ar = [];
				for (j = i; j < article_words.length;j++){
					if ( article_words[i].word == article_words[j].word ){
						k=j;
						ik_order += article_words[j].order + ',';
						ik_order_ar.push(article_words[j].order);
						//console.log(ik_order);
					}
				}
				ik_order_ar.sort(function(a,b){return a-b});
				for (j = i; j <= k; j++){
					article_words[j].order_ar = ik_order_ar;
					ik_order = ',' + ik_order_ar.join() + ',';
					article_words[j].order = ik_order;
				}	
				i = k;
			}
			else{
				article_words[i].order = ',' + article_words[i].order + ',';
				article_words[i].order_ar = new Array();
				article_words[i].order_ar[0] = article_words[i].order;
				//console.log(article_words[i].order);
			}
		}
		//random sort
		article_words.sort(
			function() {
				return 0.5 - Math.random();
			}
		);
		return article_words;
	}


	function init(){
		update_options();
		$('.options').toggleClass('active');
	}

	init();
});