$("#save").click(function()
{
	var url = $("#route").val();
	var data = {
		campaign_name : $("#campaign_name").val(),
		url : $("#url").val()
	}

	request('post', url, data, null, null, createCampaign, null);
});

function createCampaign(data)
{
	result = JSON.parse(data);
	window.location = result.redirect;
}
