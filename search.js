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
						$("#nom").text(responseJson.denomination);
						$("#prescription").html("Prescription :<br><br>" + responseJson.indicationsTherapeutiques);
						$("#prix_titre").text("Prix :");
						$("#prix").text(responseJson.presentations[0].prix == null ? "libre" : responseJson.presentations[0].prix);
						$("#taux_titre").text("Taux de remboursement :");
						$("#taux").text(responseJson.presentations[0].tauxRemboursement.length == 0 ? "Non remboursé" : responseJson.presentations[0].tauxRemboursement);
						$("#IR_titre").text("Indication de remboursement :");
						$("#indicremboursement").html(responseJson.presentations[0].indicationsRemboursement.length == 0 ? "Non renseigné" : responseJson.presentations[0].indicationsRemboursement);
					
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


