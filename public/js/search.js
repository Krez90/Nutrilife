
var options = {
	url: function(phrase) {
		return "searchMedicament.php?search="+phrase;
	},
	


	getValue: function(element) {
		return element.denomination;
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