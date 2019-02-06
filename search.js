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
							backgroundColor : "rgba(151, 231, 226, 0.671)",
							marginBottom:"20px",
							borderRadius:"20px",
							paddingTop: "5%",
							paddingRight: "3%",
							paddingLeft: "3%",
							paddingBottom: "5%"});
						// $("#prescription").css("text-align","left");
						$("#nom").text(responseJson.denomination);
						$("#pres_titre").text("Prescrition :");
						$("#prescription").html(responseJson.indicationsTherapeutiques).css("text-align","left");
						$("#prix_titre").text("Prix :");
						$("#prix").text(responseJson.presentations[0].prix == null ? "libre" : responseJson.presentations[0].prix);
						$("#taux_titre").text("Taux de remboursement :");
						$("#taux").text(responseJson.presentations[0].tauxRemboursement.length == 0 ? "Non remboursé" : responseJson.presentations[0].tauxRemboursement);
						$("#IR_titre").text("Indication de remboursement :");
						$("#indicremboursement").html(responseJson.presentations[0].indicationsRemboursement.length == 0 ? "Non renseigné" : responseJson.presentations[0].indicationsRemboursement);
						$("#gene_titre").text("Générique(s) :");
						if (responseJson.infosGenerique) {
							var content = "";	
							for (var i = 0; i < responseJson.infosGenerique.autresMedicamentsGroupe.length; i++) {
								content += responseJson.infosGenerique.autresMedicamentsGroupe[i].denomination + "<br><br>";
							}
							// console.log(content);
							$("#generique").html(content);
						}else{
							// console.log(content);
							$("#generique").html(responseJson.infosGenerique == null ? "Aucun" : responseJson.infosGenerique);
						}
					}
			 });

			}
		},

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