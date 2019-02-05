<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pharma net</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Heebo:400,400i,700|Titillium+Web:600" rel="stylesheet">
    <link rel="stylesheet" href="public/css/style.css">
      <!-- jQuery CDN -->
      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- JS file -->
    <script src="EA_search/jquery.easy-autocomplete.min.js"></script> 
    <!-- CSS file -->
    <link rel="stylesheet" href="EA_search/easy-autocomplete.min.css"> 
    <!-- Additional CSS Themes file - not required-->
    <link rel="stylesheet" href="EA_search/easy-autocomplete.themes.min.css">
    <script type = "text/javascript"></script>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</head>
<body class="is-boxed">
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                <div class="button-group">
                    <div>
                    <i class="fas fa-clinic-medical active"title="Infos médicaments" href="#home"></i>
                    </div>
                    <div>
                    <i class="fas fa-map-marked-alt active" title="Rechercher une pharmacie autour de vous" href="#geolocalisation"></i>
                    </div>
                    <div>
                    <i class="fas fa-info-circle active"title="à propos" href="#info"></i>
                    </div>
                
                </div>
                </div>
            </div>
        </header>
        <main>
            <div id="home">
            <section class="hero text-center" >
                <div class="container-sm">
                    <div class="hero-inner">
                        <h1 class="hero-title mt-0 is-revealing"><img src="public/images/pharmanetlogo1.svg" class="logo"></h1>
                        <p class="hero-paragraph is-revealing">Besoin d'une information sur un medicament ?<br>Ne perdez plus votre temps. <br> Faites vos recherches en toute simplicité !</p>
                        <div class="hero-cta is-revealing">
                        <input id="provider-json" class="champ" style ="margin-left:10px; margin-right:15px; margin-bottom:15px; height:60px; width:100%;" type="text" value=""/>
                        <div class="reponse">
                        <div id="nom"></div><br>
                        <div id="prescription"></div><br>
                        <div class="price" id="prix_titre"></div>
                        <div id="prix"></div>
                        <div id="taux_titre"></div>
                        <div id="taux"></div>
                        <div id="IR_titre"></div>
                        <div id="indicremboursement"></div>
                        </div>
                        </div>

                    </div>
                </div>
                <div class="containers">
                <img src="public/images/feuille.jpg" >
                </div>
            </section>
            </div>
            


            <section class="features section text-center" id="info">
                <div class="container-sm">
                    <div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">
                            <div class="feature">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										    <g fill="none" fill-rule="evenodd">
										        <path fill="url(#feature-1-a)" d="M64 32v32H32V32H0V0h32v32z"/>
										        <path fill="url(#feature-1-b)" d="M16 16h32v32H16z"/>
										    </g>
										</svg>
                                    </div>
                                    <img src="public/images/teamwork.svg" style="width:30%;">
                                    <h3 class="feature-title mt-24">A propos</h3>
                                    <p class="text-sm">Projet fait par une équipe jeune, motivée et dynamique afin de simplifier la recherche par médicaments.</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-16c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z" fill="url(#feature-2-a)"/>
										        <path fill="url(#feature-2-b)" d="M0 0h32v32H0z"/>
										    </g>
										</svg>
                                    </div>
                                    <img src="public/images/email.svg" style="width:30%;">
                                    <h3 class="feature-title mt-24">Contact</h3>
                                    <p class="text-sm">A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
                                	</div>
                            	</div>
		                	</div>
                </section>
                

        <footer class="site-footer">
			<div class="footer-disk footer-disk-1 is-moving-object is-translating" data-translating-factor="60">
				<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
					<defs>

					<path d="M153 492c0-165.685 134.315-300 300-300s300 134.315 300 300H603c0-82.843-67.157-150-150-150s-150 67.157-150 150H153z" transform="translate(-153 -192)" fill="url(#disk-5-a)" fill-rule="evenodd"/>
				</svg>
			</div>
			<div class="footer-disk footer-disk-2 is-moving-object is-translating" data-translating-factor="80">
				<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
					<defs>

					<path d="M1153 63c0 165.685-134.315 300-300 300S553 228.685 553 63h150c0 82.843 67.157 150 150 150s150-67.157 150-150h150z" transform="translate(-553 -63)" fill="url(#disk-6-a)" fill-rule="evenodd"/>
				</svg>
			</div>
			<div class="footer-sphere footer-sphere-1 is-moving-object is-translating" data-translating-factor="20">
				<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<defs>
				</svg>
			</div>
            <div class="container">
                <div class="site-footer-inner has-top-divider">
                    <div class="brand footer-brand">
                    </div>
                    <ul class="footer-social-links list-reset">
                    </ul>
                    <div class="footer-copyright">&copy; 2019 Pharma net, all rights reserved</div>
                </div>
            </div>
        </footer>
    </div>

    <script src="search.js"></script>
</body>
</html>
