var selected_keyword = 0;
var estimate_click = 0;
var campaign_cost = 0;
var keywords = [];

$(document).ready( function () 
{
	init();
});

$("#save").click(function()
{
	var url = $("#route").val();

	var data = {
		keywords : JSON.stringify(keywords),
		selected_keyword : selected_keyword,
		estimate_click : estimate_click,
		campaign_cost : campaign_cost
	}

	request('post', url, data, null, null, campaignKeyword, null);
});

function campaignKeyword(data)
{
	result = JSON.parse(data);

	window.location = result.redirect;
}

$("#keyword_filter").click(function()
{
	$('html').addClass('is-clipped');
	$("#keyword_filter_modal").addClass('is-active');
});

$("#keyword_filter_button").click(function()
{
	filter('keyword', $("#keyword_input").val());

	$('html').removeClass('is-clipped');
	$('.modal').removeClass('is-active');
});

function filter(by, value)
{
	$("#keywords").text('');
	for(var i = 0; i < keywords.length; i++)
	{
		if(keywords[i].keyword.includes(value))
		{
			$("#keywords").append(`<tr>
				<th>
					<label class="checkbox check-keyword">
						<input id="` + keywords[i].id + `" type="checkbox">
					</label>
				</th>
				<td>` + keywords[i].keyword + `</td>
				<td>` + keywords[i].volume + `</td>
				<td>Rp ` + format_number(keywords[i].cpc) + `</td>
			</tr>`);
		}
	}
}

function format_number(n) 
{
	return n.toFixed(0).replace(/./g, function (c, i, a) {
		return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c
	})
}

function summary()
{
	selected_keyword = 0;
	estimate_click = 0;
	campaign_cost = 0;

	for(var i = 0; i < keywords.length; i++)
	{
		if(keywords[i].active)
		{
			selected_keyword = selected_keyword + 1;
			estimate_click = estimate_click + keywords[i].volume;
			campaign_cost = campaign_cost + keywords[i].cpc;
		}
	}

	$("#selected_keyword").text(selected_keyword);
	$("#estimate_click").text(estimate_click);
	$("#campaign_cost").text("Rp " + format_number(campaign_cost));
}

function toggleCheckbox(id)
{
	for(var i = 0; i < keywords.length; i++)
	{
		if(keywords[i].id == id)
		{
			if(keywords[i].active == false)
				keywords[i].active = true;
			else
				keywords[i].active = false;
		}
	}

	summary();
}