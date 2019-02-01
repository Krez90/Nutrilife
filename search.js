var prix = "Prix = ";

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
					success: function (response) {//response is value returned from php (for your example it's "bye bye"
						var responseJson = $.parseJSON(response);
						$("#nom").text(responseJson.denomination);
						$("#description").text(responseJson.indicationsTherapeutiques);
						$("#prix").text(responseJson.presentations[0].prix == null ? "Prix libre" : responseJson.presentations[0].prix);
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


