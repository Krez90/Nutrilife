var options = {
	url: function(phrase) {
		return "searchMedicament.php?search="+phrase;
	},
 
	getValue: function(element) {
		return element.denomination;
		},
		list:{
			onClickEvent :function(event){
					var data = $("#provider-json").getSelectedItemData();
				$.ajax({
					url: 'medicament.php?id=' + data.codeCIS,
					dataType: "html",
					success: function (response) {//response is value returned from php (for your example it's "bye bye"
						var responseJson = $.parseJSON(response);
						$(".reponse").css({
							backgroundColor : "#e6fbfe",
							marginBottom:"20px",
							borderRadius:"20px",
							paddingTop: "10%",
							paddingRight: "10%",
							paddingLeft: "10%",
							paddingBottom: "10%",
							display: "block"});
						$("#ligne").css({
							backgroundColor : "#70839b",
							marginRight:"auto",
							marginLeft:"auto",
							width : "50%",
							height : "2px",
							borderRadius : "100%",																	
							marginTop: "5%"});
						$("#nom").text(responseJson.denomination);
						$("#prescription").html(responseJson.indicationsTherapeutiques).css("text-align","left");
						$("#prix_titre").text("Prix en euros :");
						$("#prix").text(responseJson.presentations[0].prix == null ? "libre." : responseJson.presentations[0].prix);
						$("#taux_titre").text("Taux de remboursement :");
						$("#taux").text(responseJson.presentations[0].tauxRemboursement.length == 0 ? "Non remboursé." : responseJson.presentations[0].tauxRemboursement);
						$("#IR_titre").text("Indication de remboursement :").css({textAlign:"center", paddingTop: "20%"});
						$("#indicremboursement").html(responseJson.presentations[0].indicationsRemboursement.length == 0 ? "Non renseigné." : responseJson.presentations[0].indicationsRemboursement).css({textAlign : "justify", textAlignLast:"center"});
						$("#gene_titre").html("Générique(s) :" + "<ul>").css({textAlign:"center", paddingTop: "5%"});
						if (responseJson.infosGenerique) {
							var content = "";	
							for (var i = 0; i < responseJson.infosGenerique.autresMedicamentsGroupe.length; i++) {
								content += "<li>"+responseJson.infosGenerique.autresMedicamentsGroupe[i].denomination + "</li>";
							}
							// console.log(content);
							// $("#generique").html(content);
							$("#generique").html(content.toLowerCase()).css( {textAlign :"justify", paddingLeft : "10%" }) +"</ul>";
						}else{
							// console.log(content);
							$("#generique").html(responseJson.infosGenerique == null ? "Aucun." : responseJson.infosGenerique).css("text-align","center");
						}
					}
			 });

			}
		},

// AJAX SETTINGS //
	ajaxSettings: {
		dataType: "json",
		method: "POST",
		data: {
		  dataType: "json"
		}
	  },
	
	  preparePostData: function(data) {
		data.phrase = $("#provider-json").val();
		return data;
	  },
	
	  requestDelay: 400

};

$("#provider-json").easyAutocomplete(options);


// animation navbar//
$( ".button-group > div" ).click(function() {
	$('.button-group > div.active').not(this).removeClass('active');
	$( this ).toggleClass( "active" );
  });


