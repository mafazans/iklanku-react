var app = new Vue({
	el: '#campaign_wizard',
	data: {
		campaign : [],
		company : {},
		locations : [],
		locationsSelected : [],
		verticalList : [],
		keywords : [],
		keywordsTemp : [],
		keywords_selected : [],
		keywordsSelectedTemp : [],
		on_queue_keyword_selected : 0,
		keywords_competitor_search : '',
		keywords_competitor : [],
		keywordsCompetitorTemp : [],
		keywords_manual : [],
		keywords_manual_list : '',
		keywords_loading : false,
		adsEditMasked : false,
		keywordsManualTemp : [],
		adGroups : [],
		ads : [],
		adsSelected : [],
		adsDeleted : [],
		advance_adview : true,
		company_value : '',
		is_keyword_selected_all : false,
		is_keyword_selected_all_competitor : false,
		is_keyword_selected_all_manual : false,
		keyword_page : 'Keyword Rekomendasi',
		keywords_competitor_loading : false,
		keywords_manual_loading : false,
		fixBudget : 0,
		fixEstimateClick : 0,
		ads_new_adgroup : '',
		ads_edit : { h1 : '', h2 : '', desc : '', du : '', fu : '', p1 : '', p2 : '', selected : true},
		ads_new : { h1 : '', h2 : '', desc : '', du : '', fu : '', p1 : '', p2 : '', selected : false},
		ads_edit_adgroup_id : '',
		ad_view_max_page : 3,
		filterByData : '',
		campaignState : 1,
		keyword_loading : false,
		sisaBudget : 0,
		newSisaBudget : 0,
		paymentLoading : true,
		is_keyword_selected_selected_all : false,
		deleteAdgroupCount : 0,
		deletedAdsCount : 0,
		all_time : [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		],
		work_hour_24 : [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		],
		work_hour : [
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		],
		time_matrix : [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		],
		time_init : [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		],
		time_custom : [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		],
		days : ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
		keywordFilterDropdown : 'none',
		keywordSummaryFilterDropdown : "none",
		isSelectAllLocation : false,
		headerTitle : 'Iklan Pertama Anda',
		paymentMethod : 'bank_transfer',
		paymentType : 'transfer_bca',
		priceUniq : 0,
		filterAutomaticKeywordOption : "",
		filterAutomaticKeywordValue : "",
		filterManualKeywordOption :"",
		filterManualKeywordValue : "",
		filterCompetitorKeywordOption :"",
		filterCompetitorKeywordValue : "",
		filterSelectedKeywordOption :"",
		filterSelectedKeywordValue : "",
		ulKeywordFilterDropdown : "none",
		ulKeywordSummaryFilterDropdown : "none",
		editCampaignCost : false,
		new_campaign_cost : 0,
		addKeywordState : "automatic",
		editSisaBudget : false,
		campaignDetailEdited : false,
		campaignTargetEdited : false,
		campaignKeywordEdited : false,
		campaignAdsEdited : false,
		campaignBudgetEdited : false,
		confirmNotSavePage : 1,
		updateLoading : false,
		saldoKurang : 0,
		keywordManualState : 1,
		adsLoading : false,
		deleteAdsId : 0,
		deleteAdgroupId : 0,
		invoiceId: '',
		topupValue: 0,
		diffSaldo: 0,
		currentSaldo: 0,
		keywordManual: [],
		deleteAdgroupName : ''
	},
	watch: {
		'isSelectAllLocation': function (newLocation) {
			console.log('isSelectAllLocation');
			for(let i = 0; i < this.locations.length; i++)
			{
				Vue.set(this.locations[i], 'selected', newLocation);

				for(let j = 0; j < this.locations[i].cities.length; j++)
				{
					Vue.set(this.locations[i].cities[j], 'selected', newLocation);
				}
			}
		},
		'window.beforeunload' : function(newLoad)
		{
			this.leaving();
		},
		'campaign.campaign_budget': function (newCampaignBudget) {
			console.log('campaign change');
			console.log(this.campaign_budget);
			console.log(newCampaignBudget);
			console.log(this.fixBudget);
			console.log(this.fixEstimateClick);

			if(this.campaign.wizard_state == 5)
			{
				this.campaign.estimate_click = Math.floor((newCampaignBudget/this.fixBudget) * this.fixEstimateClick);
			}
		},
		'campaign.campaign_name': function (newCampaignName) {
			console.log('campaign name change');
			this.campaignDetailEdited = true;
		},
		'campaign.network': function (newCampaignNetwork) {
			console.log('campaign network change');
			this.campaignTargetEdited = true;
		},
		'campaign.cities': function (newCampaignCities) {
			console.log('campaign cities change');
			this.campaignTargetEdited = true;
		},
		'campaign.time': function (newCampaignTime) {
			console.log('campaign time change');
			this.campaignTargetEdited = true;
		}, 
		'campaign.period': function (newCampaignPeriod) {
			console.log('campaign period change');
			this.campaignTargetEdited = true;
		}, 
		'campaign.period': function (newCampaignPeriod) {
			console.log('campaign period change');
			this.campaignTargetEdited = true;
		},
		'campaign.goal': function (newCampaignGoal) {
			console.log('campaign goal change');
			this.campaignTargetEdited = true;
		},
		'ads_new.h1': function (h1) {
			this.ads_new.h1 = h1.substring(0, 30);
		},
		'ads_new.h2': function (h2) {
			this.ads_new.h2 = h2.substring(0, 30);
		},
		'ads_new.desc': function (desc) {
			this.ads_new.desc = desc.substring(0, 80);
		},
		'ads_edit.h1': function (h1) {
			this.ads_edit.h1 = h1.substring(0, 30);
		},
		'ads_edit.h2': function (h2) {
			this.ads_edit.h2 = h2.substring(0, 30);
		},
		'ads_edit.desc': function (desc) {
			this.ads_edit.desc = desc.substring(0, 80);
		},
		'campaign.reccuring_period': function (value) {
			if (value === '' ) {
				this.campaign.reccuring_period = 1
			}
		}
	},
	methods: {
		getCurrentCampaign: function () {
			return axios.get('/dashboard/getCurrentCampaign')
			.then((response) => {
				console.log(response.data)
				this.campaign = response.data;

				if(this.campaign.network == null)
					this.campaign.network = ["Google Pencarian"];
				else
					this.campaign.network = JSON.parse(this.campaign.network);

				if(this.campaign.city_criteria_id == null)
					this.campaign.city_criteria_id = [];
				else
					this.campaign.city_criteria_id = JSON.parse(this.campaign.city_criteria_id);

				if(this.campaign.time_matrix == null)
					this.campaign.time_matrix = this.time_matrix;
				else 
				{
					this.campaign.time_matrix = JSON.parse(this.campaign.time_matrix);
					this.time_matrix = this.campaign.time_matrix;
				}

				console.log(this.campaign.time);
				if(this.campaign.time == null)
				{
					this.campaign.time = 'Setiap Waktu (24/7)';
					this.time_matrix = this.all_time;
				}

				if(this.campaign.goal == null)
				{
					this.campaign.goal = 'Tingkatkan Kunjungan Website';
				}

				console.log(this.campaign.network);

				if(this.campaign.period == null)
					this.campaign.period = 30;

				console.log('matrix');
				console.log(this.time_matrix);

				console.log(this.campaign);
				return Promise.resolve();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		getEditCampaign: function (state = 1) {
			return axios.post('/dashboard/getEditCampaign', {
				campaign_id: $("#campaign_id").val()
			})
			.then((response) => {
				console.log(response.data)
				this.campaign = response.data;

				this.campaign.wizard_state = state;

				if(this.campaign.network == null)
					this.campaign.network = [];
				else
					this.campaign.network = JSON.parse(this.campaign.network);

				if(this.campaign.city_criteria_id == null)
					this.campaign.city_criteria_id = [];
				else
					this.campaign.city_criteria_id = JSON.parse(this.campaign.city_criteria_id);

				if(this.campaign.time_matrix == null)
					this.campaign.time_matrix = this.time_matrix;
				else 
				{
					this.campaign.time_matrix = JSON.parse(this.campaign.time_matrix);
					this.time_matrix = this.campaign.time_matrix;
				}

				let cities_arr = this.campaign.cities.split(",");
				let cities2 = _.uniq(cities_arr);
				this.defaultSelectedCities(cities2);

				console.log('matrix');
				console.log(this.time_matrix);

				console.log(this.campaign);
				return Promise.resolve();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		defaultSelectedCities : function (cities) {
			for(let z = 0; z < cities.length; z++)
			{
				for(let i = 0; i < this.locations.length; i++)
				{
					// if(this.locations[i].province == cities[z])
					// {
					// 	Vue.set(this.locations[i], 'selected', false);
					// 	Vue.set(this.locations[i], 'moved', true);
					// 	for(let j = 0; j < this.locations[i].cities.length; j++)
					// 	{
					// 		Vue.set(this.locations[i].cities[j], 'moved', true);
					// 	}

					// 	this.locationsSelected.push(_.cloneDeep(this.locations[i]));
					// }

					for(let j = 0; j < this.locations[i].cities.length; j++)
					{
						if(this.locations[i].cities[j].name == cities[z])
						{
							Vue.set(this.locations[i].cities[j], 'selected', false);
							Vue.set(this.locations[i].cities[j], 'moved', true);

							if(this.locationsToSelectedContainProvice(this.locations[i].id_global))
							{
								for(let k = 0; k < this.locationsSelected.length; k++)
								{
									if(this.locationsSelected[k].id_global == this.locations[i].id_global)
									{
										this.locationsSelected[k].cities.push(_.cloneDeep(this.locations[i].cities[j]));
									}
								}
							}
							else
							{
								this.locationsSelected.push(_.cloneDeep(this.locations[i]));
								this.locationsSelectedRemoveCities(this.locations[i].id_global);

								for(let k = 0; k < this.locationsSelected.length; k++)
								{
									if(this.locationsSelected[k].id_global == this.locations[i].id_global)
									{
										this.locationsSelected[k].cities.push(_.cloneDeep(this.locations[i].cities[j]));
									}
								}
							}						
						}
					}
				}

			}

			this.locationsSelectedOpenAll();
			console.log(this.locationsSelected);
		},
		getCompanyProfile: function () {
			if(this.campaign.company_profile_id != null)
			{
				axios.get('/dashboard/getCompanyProfile/' + this.campaign.company_profile_id)
				.then((response) => {
					this.company = response.data;
					this.company_value = this.company.name + ', ' + this.company.address + ', ' + this.company.phone;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
			else
			{
				this.company_value = '';
			}
			
		},
		getProvincesWithCities: function () {
			return axios.get('/dashboard/getProvincesWithCities/')
			.then((response) => {

				this.locations = response.data;
				let k = 0;

				for(let i = 0; i < this.locations.length; i++)
				{
					Vue.set(this.locations[i], 'opened', false);
					Vue.set(this.locations[i], 'selected', false);
					Vue.set(this.locations[i], 'id', i);
					Vue.set(this.locations[i], 'id_global', k);

					k++;

					for(let j = 0; j < this.locations[i].cities.length; j++)
					{
						Vue.set(this.locations[i].cities[j], 'selected', false);
						Vue.set(this.locations[i].cities[j], 'id', j);
						Vue.set(this.locations[i].cities[j], 'id_global', k);

						k++;
					}
				}

				console.log('locations');
				console.log(this.locations);
				
				return Promise.resolve();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		locationSelect : function (id_global) {

			console.log(id_global);

			for(let i = 0; i < this.locations.length; i++)
			{
				if(this.locations[i].id_global == id_global)
					Vue.set(this.locations[i], 'selected', !this.locations[i].selected);
				
				for(let j = 0; j < this.locations[i].cities.length; j++)
				{
					if(this.locations[i].cities[j].id_global == id_global)
					{
						Vue.set(this.locations[i].cities[j], 'selected', !this.locations[i].cities[j].selected);
					}
				}
			}

			this.locationsToSelected();
		},
		locationSelectedSelect : function (id_global) {

			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				if(this.locationsSelected[i].id_global == id_global)
					Vue.set(this.locationsSelected[i], 'selected', !this.locationsSelected[i].selected);
				
				for(let j = 0; j < this.locationsSelected[i].cities.length; j++)
				{
					if(this.locationsSelected[i].cities[j].id_global == id_global)
					{
						Vue.set(this.locationsSelected[i].cities[j], 'selected', !this.locationsSelected[i].cities[j].selected);
					}
				}
			}

			this.locationSelectedDelete();
		},
		locationSelectedDelete : function () {

			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				if(this.locationsSelected[i].selected)
				{


					// serachingn location where provice ->moved to false
					for(let j = 0; j < this.locations.length; j++)
					{
						if(this.locationsSelected[i].province == this.locations[j].province)
						{
							Vue.set(this.locations[j], 'moved', false);

							for(let l = 0; l < this.locations[j].cities.length; l++)
							{
								Vue.set(this.locations[j].cities[l], 'moved', false);
							}
						}
					}

					this.locationsSelected.splice(i, 1);
				}

				for(let j = 0; j < this.locationsSelected[i].cities.length; j++)
				{
					if(this.locationsSelected[i].cities[j].selected)
					{
						console.log(this.locationsSelected[i].cities[j].selected);
						// serachingn location where city name ->moved to false
						for(let k = 0; k < this.locations.length; k++)
						{
							for(let l = 0; l < this.locations[k].cities.length; l++)
							{
								if(this.locationsSelected[i].cities[j].name == this.locations[k].cities[l].name)
								{

									Vue.set(this.locations[k], 'moved', false);
									console.log(this.locations[k]);
									Vue.set(this.locations[k].cities[l], 'moved', false);
									console.log(this.locations[k].cities[l]);
								}
							}
						}

						this.locationsSelected[i].cities.splice(j, 1);
					}
				}
			}
		},
		locationsToSelectedContainProvice : function (id_global) {
			let found = false;

			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				if(this.locationsSelected[i].id_global == id_global)
					found = true;
			}

			return found;
		},
		locationsSelectedRemoveCities : function (id_global) {
			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				if(this.locationsSelected[i].id_global == id_global)
					this.locationsSelected[i].cities = [];
			}
		},
		locationsSelectedOpenAll : function () {
			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				Vue.set(this.locationsSelected[i], 'opened', true);
				
				for(let j = 0; j < this.locationsSelected[i].cities.length; j++)
				{
					Vue.set(this.locationsSelected[i].cities[j], 'opened', true);
				}
			}
		},
		locationsToSelected : function (){
			for(let i = 0; i < this.locations.length; i++)
			{
				if(this.locations[i].selected)
				{
					Vue.set(this.locations[i], 'selected', false);
					Vue.set(this.locations[i], 'moved', true);
					for(let j = 0; j < this.locations[i].cities.length; j++)
					{
						Vue.set(this.locations[i].cities[j], 'moved', true);
					}
					
					this.locationsSelected.push(_.cloneDeep(this.locations[i]));
				}
				
				for(let j = 0; j < this.locations[i].cities.length; j++)
				{
					if(this.locations[i].cities[j].selected)
					{
						Vue.set(this.locations[i].cities[j], 'selected', false);
						Vue.set(this.locations[i].cities[j], 'moved', true);

						if(this.locationsToSelectedContainProvice(this.locations[i].id_global))
						{
							for(let k = 0; k < this.locationsSelected.length; k++)
							{
								if(this.locationsSelected[k].id_global == this.locations[i].id_global)
								{
									this.locationsSelected[k].cities.push(_.cloneDeep(this.locations[i].cities[j]));
								}
							}
						}
						else
						{
							this.locationsSelected.push(_.cloneDeep(this.locations[i]));
							this.locationsSelectedRemoveCities(this.locations[i].id_global);

							for(let k = 0; k < this.locationsSelected.length; k++)
							{
								if(this.locationsSelected[k].id_global == this.locations[i].id_global)
								{
									this.locationsSelected[k].cities.push(_.cloneDeep(this.locations[i].cities[j]));
								}
							}
						}						
					}
				}
			}

			this.locationsSelectedOpenAll();
			console.log(this.locationsSelected);
		},
		locationsToSelectedAll : function (){
			this.locationsSelected = _.cloneDeep(this.locations);

			for(let i = 0; i < this.locations.length; i++)
			{
				Vue.set(this.locations[i], 'moved', true);
				for(let j = 0; j < this.locations[i].cities.length; j++)
				{

					Vue.set(this.locations[i].cities[j], 'moved', true);
				}
			}
		},
		locationsSelectedDeleteAll : function (){
			this.locationsSelected = [];

			// location 
			for(let i = 0; i < this.locations.length; i++)
			{
				Vue.set(this.locations[i], 'moved', false);
				for(let j = 0; j < this.locations[i].cities.length; j++)
				{
					
					Vue.set(this.locations[i].cities[j], 'moved', false);
				}
			}
		},
		allLocationSelected : function () {
			let selectedAll = true;

			for(let i = 0; i < this.locations.length; i++)
			{
				if(this.locations[i].moved)
					selectedAll = selectedAll && true;
				else
					selectedAll = selectedAll && false;
			}

			return selectedAll;
		},
		locationsSelectedSave : function () {
			this.campaign.cities = [];
			this.campaign.city_criteria_id = [];

			for(let i = 0; i < this.locationsSelected.length; i++)
			{
				
				this.campaign.cities.push(this.locationsSelected[i].province);
				this.campaign.city_criteria_id.push(this.locationsSelected[i].criteria_id);

				for(let j = 0; j < this.locationsSelected[i].cities.length; j++)
				{

					this.campaign.cities.push(this.locationsSelected[i].cities[j].name);
					this.campaign.city_criteria_id.push(this.locationsSelected[i].cities[j].criteria_id);
				}
			}

			if(this.allLocationSelected())
			{
				this.campaign.cities = 'Indonesia';
			}
			else
			{
				this.campaign.cities = this.campaign.cities.join();
			}
			
			this.campaign.city_criteria_id = _.uniq(this.campaign.city_criteria_id);

			this.modalClose();
		},
		networkSave: function () {
			
			// if (this.campaign.owner == '' && this.campaign.hash == '' && this.campaign.country == '' && this.campaign.network != '' && this.campaign.city_criteria_id.length > 0) 
			// {
			// 	this.getAdwordsIdea().then(() => {
			// 		this.getAdwordsIdeaGroup();
			// 	});
			// }
			// else if(this.campaign.owner != '' && this.campaign.hash != '' && this.campaign.country != '' && this.campaign.network != '' && this.campaign.city_criteria_id.length > 0)
			// {
			// 	this.getAdwordsIdea().then(() => {
			// 		this.getAdwordsIdeaGroup();
			// 	});
			// }

			this.modalClose();
		},
		saveManualKeyword: function () {
			axios.post('/dashboard/saveManualKeyword', {
				keywords: this.keywords_manual
			})
			.then((response) => {
				console.log(this.response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		saveLocation: function () {
			
			this.campaign.cities = '';
			this.campaign.city_criteria_id = [];

			for(let i = 0; i < this.locations.length; i++)
			{
				if(this.locations[i].selected)
				{
					this.campaign.cities += this.locations[i].province + ', ';
					this.campaign.city_criteria_id.push(this.locations[i].criteria_id);
				}

				for(let j = 0; j < this.locations[i].cities.length; j++)
				{
					this.campaign.cities += this.locations[i].cities[j].name + ', ';
					this.campaign.city_criteria_id.push(this.locations[i].cities[j].criteria_id);
				}
			}

			// if (this.campaign.owner == '' && this.campaign.hash == '' && this.campaign.country == '' && this.campaign.network != '' && this.campaign.city_criteria_id.length > 0) 
			// {
			// 	this.getAdwordsIdea().then(() => {
			// 		this.getAdwordsIdeaGroup();
			// 	});
			// }
			// else if(this.campaign.owner != '' && this.campaign.hash != '' && this.campaign.country != '' && this.campaign.network != '' && this.campaign.city_criteria_id.length > 0)
			// {
			// 	this.getAdwordsIdea().then(() => {
			// 		this.getAdwordsIdeaGroup();
			// 	});
			// }

			this.campaign.city_criteria_id = _.uniq(this.campaign.city_criteria_id);

			console.log(this.campaign.city_criteria_id);

			this.modalClose();
		},
		sortBy: function (data, dataKey, key, by) {
			data = _.orderBy(data, [key], [by]);

			if(dataKey == 'keywords')
			{
				this.keywords = data;
				console.log(data);
			}
			else if(dataKey == 'keywords_selected')
			{
				this.keywords_selected = data;
			}
			else if(dataKey == 'keywords_competitor')
			{
				this.keywords_competitor = data;
			}
			else if(dataKey == 'keywords_manual')
			{
				this.keywords_manual = data;
			}
		},
		resetFilter : function (dataKey)
		{
			if(dataKey == 'keywords')
			{
				this.keywords = this.keywordsTemp;
			}
			else if(dataKey == 'keywords_selected')
			{
				this.keywords_selected = this.keywordsSelectedTemp;
			}
			else if(dataKey == 'keywords_competitor')
			{
				this.keywords_competitor = this.keywordsCompetitorTemp;
			}
			else if(dataKey == 'keywords_manual')
			{
				console.log('masuk');
				console.log(this.keywordsManualTemp);
				this.keywords_manual = this.keywordsManualTemp;
			}
		},
		filterBy: function (data, dataKey, key, filterByData) {

			data = _.filter(data, function(o) { return o.keyword == filterByData; });

			if(dataKey == 'keywords')
			{
				this.keywords = data;
				console.log(data);
			}
		},
		getKeywordList: function () {
			axios.get('/dashboard/getKeywordList', {
				params: {
					url : this.campaign.url,
					network : this.campaign.network,
					city_criteria_id : this.city_criteria_id
				}
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		getVerticalList: function () {
			axios.get('/dashboard/getVerticalList')
			.then((response) => {
				this.verticalList = response.data;

				console.log(this.verticalList);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		getAdwordsIdea: function () {
			return axios.post('/dashboard/getAdwordsIdea', {
				campaign_name: this.campaign.campaign_name,
				url: this.campaign.url,
				network: this.campaign.network,
				city_criteria_id: this.campaign.city_criteria_id
			})
			.then((response) => {
					// this.verticalList = response.data;
					var properties = response.data.properties;
					console.log('properties');
					console.log(response.data);
					this.campaign.campaign_name = properties.brand_name;
					this.campaign.country = JSON.stringify(properties.country);
					this.campaign.hash = properties.hash;
					this.campaign.owner = properties.owner;
					this.campaign.url = properties.url;

					console.log(this.campaign);
					return Promise.resolve();
				})
			.catch((error) => {
				console.log(error);
				console.log('retrying....');
				this.getAdwordsIdea();
			});
		},
		getAdwordsIdeaGroup: function () {
			axios.post('/dashboard/getAdwordsIdeaGroup', {
				campaign : this.campaign
			})
			.then((response) => {
				this.keywords = response.data.keywords;

				let temp = [];

				for(let i = 0; i < this.keywords.length; i++)
				{
					Vue.set(this.keywords[i], 'selected', false);

					if(Math.round(this.keywords[i].cpc/1000000) < 1000)
					{
						Vue.set(this.keywords[i], 'cpc', 1000 * 1000000);
					}

					Vue.set(this.keywords[i], 'id', i);
					this.source = '';

					if(this.keywords[i].volume != 0)
					{
						temp.push(this.keywords[i]);
					}
				}

				this.keywords = temp;
				this.keywordsTemp = this.keywords;

				this.keyword_loading = false;
				console.log('keywords');
				console.log(this.keywords);
			})
			.catch( (error) => {
				console.log(error);
				console.log('retrying....');
				this.getAdwordsIdeaGroup()
			});
		},
		getAdwordsIdeaList: function () {
			axios.post('/dashboard/getAdwordsIdeaList', {
				campaign : this.campaign
			})
			.then((response) => {
				this.adGroups = response.data;

				// add page variable in adgoup for ads view per page
				let k = 0;
				for(let i = 0; i < this.adGroups.adgroups.length; i++)
				{
					Vue.set(this.adGroups.adgroups[i], 'id', k);
					Vue.set(this.adGroups.adgroups[i], 'page', 1);
					k = k + 1;
				}

				console.log('adwords idea list');
				this.adGroupAdsReIndex();
				console.log(this.adGroups);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		saveCampaign: function () {
			this.campaign.time_matrix = this.time_matrix;

			axios.post('/dashboard/saveCampaign', {
				campaign : this.campaign
			})
			.then((response) => {
				console.log('save campaign');
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		getAdgroups: function () {
			axios.post('/dashboard/getAdgroups', {
				campaign : this.campaign
			})
			.then((response) => {
				console.log('getAdgroups');

				console.log(response.data);

				// save keyword database
				var delayMillis = 1000; //1 second

				setTimeout(() =>
				{
					this.saveKeywordsDatabase();
				}, delayMillis);
				

				for(let i = 0; i < response.data.length; i++)
				{
					let ad = {id : 0, adgroup : '', ads : [], page : 1};
					Vue.set(ad, 'adgroup', response.data[i]);
					Vue.set(ad, 'ads', []);
					Vue.set(ad, 'page', 1);

					console.log(ad);

					this.ads.push(ad);

					let adCopy = {id : 0, adgroup : '', ads : [], page : 1};
					Vue.set(adCopy, 'adgroup', response.data[i]);
					Vue.set(adCopy, 'ads', []);
					this.adsSelected.push(adCopy);
				}

				// const findOtherIndex = this.ads.findIndex(item => item.adgroup === 'others')
				// const other = this.ads.find(item => item.adgroup === 'others')

    //             const updatedData =  [
    //                 ...this.ads.slice(0, findOtherIndex),
    //                 ...this.ads.slice(findOtherIndex + 1)
    //             ]

				// this.ads = [
				// 	...updatedData,
				// 	other
				// ]

				Vue.set(this.adsSelected, 'page', 1);

				console.log('adgroup dan ads')
				console.log(this.ads)

				for(let i = 0; i < response.data.length; i++)
				{
					this.getAdview(this.ads[i].adgroup);
				}
				
				console.log(this.ads);
				console.log(this.adsSelected);
				
				// this.nextStep();
			})
			.catch( (error) => {
				console.log(error);
				console.log('retrying....');
				this.getAdgroups();
			});
		},
		getAdview: function (adgroup) {
			axios.post('/dashboard/getAdview', {
				campaign : this.campaign,
				adgroup : adgroup
			})
			.then((response) => {
				console.log('getAdview');

				for(let i = 0; i < this.ads.length; i++)
				{
					if(this.ads[i].adgroup == adgroup)
					{
						Vue.set(this.ads[i], 'ads', _.values(response.data));
						Vue.set(this.ads[i], 'id', i);
						let last_page = Math.ceil((response.data.length + 1) / this.ad_view_max_page);
						Vue.set(this.ads[i], 'last_page', last_page);

						for(let j = 0; j < this.ads[i].ads.length; j++)
						{
							Vue.set(this.ads[i].ads[j], 'id', j);
							Vue.set(this.ads[i].ads[j], 'selected', true);
							Vue.set(this.ads[i].ads[j], 'deleted', false);
						}
					}

					// adsSelected
					if(this.adsSelected[i].adgroup == adgroup)
					{
						Vue.set(this.adsSelected[i], 'ads', _.values(response.data));
						Vue.set(this.adsSelected[i], 'id', i);
						let last_page = Math.ceil((response.data.length + 1) / this.ad_view_max_page);
						Vue.set(this.adsSelected, 'last_page', last_page);

						for(let j = 0; j < this.adsSelected[i].ads.length; j++)
						{
							Vue.set(this.adsSelected[i].ads[j], 'id', j);
							Vue.set(this.adsSelected[i].ads[j], 'selected', true);
							Vue.set(this.adsSelected[i].ads[j], 'deleted', false);
						}
					}
				}

				this.keywords_loading = false;
				this.adsLoading = false;

				// console.log(this.ads);
			})
			.catch((error) =>  {
				console.log(error);
				this.getAdview();
			});
		},
		companyProfileSave: function () {
			this.company.name = this.company.name || '';
			this.company.address = this.company.address || '';
			this.company.phone = this.company.phone || '';

			let pass = true;

			if(this.company.name == '')
			{
				$("#error_company_name").removeClass('hidden');
				$("#error_company_name").addClass('box-flex');
				pass = false;
			}
			else
			{
				$("#error_company_name").addClass('hidden');
				$("#error_company_name").removeClass('box-flex');
			}

			if(this.company.address == '')
			{
				$("#error_company_address").removeClass('hidden');
				$("#error_company_address").addClass('box-flex');
				pass = false;
			}
			else
			{
				$("#error_company_address").addClass('hidden');
				$("#error_company_address").removeClass('box-flex');
			}

			if(this.company.phone == '')
			{
				$("#error_company_phone").removeClass('hidden');
				$("#error_company_phone").addClass('box-flex');
				pass = false;
			}
			else
			{
				$("#error_company_phone").addClass('hidden');
				$("#error_company_phone").removeClass('box-flex');
			}


			if(!pass)
				return;

			this.company_value = this.company.name + ', ' + this.company.address + ', ' + this.company.phone;

			this.modalClose();

			if(this.campaign.company_profile_id == null)
			{
				axios.post('/dashboard/newCompanyProfile', {
					company: this.company
				})
				.then((response) => {
					this.campaign.company_profile_id = response.data;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
			else
			{
				axios.post('/dashboard/updateCompanyProfile', {
					company_profile_id : this.campaign.company_profile_id,
					company: this.company
				})
				.then((response) => {
					console.log(this.response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
			}

		},
		adGroupAdsReIndex: function () {
			var k = 0;
			for(let i = 0; i < this.adGroups.adgroups.length; i++)
			{
				for(let j = 0; j < this.adGroups.adgroups[i].ads.length; j++)
				{
					Vue.set(this.adGroups.adgroups[i].ads[j], 'id', k);
					k = k + 1;
				}
			}
		},
		adsEdit: function (adgroup_id, id, modal) {
			this.ads_edit_adgroup_id = adgroup_id;
			for(let i = 0; i < this.ads.length; i++)
			{
				if(this.ads[i].id == adgroup_id)
				{
					for(let j = 0; j < this.ads[i].ads.length; j++)
					{
						if(this.ads[i].ads[j].id == id)
						{
							this.ads_edit = _.cloneDeep(this.ads[i].ads[j]);
							this.ads_edit.id = id;

							let substring = "{Keyword:";
							if(this.ads_edit.h1.includes(substring))
							{
								let length = this.ads_edit.h1.length - 1;
								this.ads_edit.h1 = (this.ads_edit.h1.substring(9, length));
								
								this.adsEditMasked = true;
							}
							else
							{
								this.adsEditMasked = false;
							}
							

							break;
						}
					}
				}
			}

			this.modalShow(modal);
		},
		adsEditSave: function () {
			this.clearHiddenAdsEdit();

			let pass = true;

			if(this.ads_edit.h1 == '')
			{
				pass = false;
				this.removeHidden('h1_error_ads_edit');
			}
			if(this.ads_edit.h2 == '')
			{
				pass = false;
				this.removeHidden('h2_error_ads_edit');
			}
			if(this.ads_edit.desc == '')
			{
				pass = false;
				this.removeHidden('desc_error_ads_edit');
			}
			if(this.ads_edit.du == '')
			{
				pass = false;
				this.removeHidden('du_error_ads_edit');
			}
			if(this.ads_edit.fu == '')
			{
				pass = false;
				this.removeHidden('fu_error_ads_edit');
			}

			if(pass)
			{
				for(let i = 0; i < this.ads.length; i++)
				{
					if(this.ads[i].id == this.ads_edit_adgroup_id)
					{
						for(let j = 0; j < this.ads[i].ads.length; j++)
						{
							if(this.ads[i].ads[j].id == this.ads_edit.id)
							{
								if(this.adsEditMasked)
								{
									let h1 = "{Keyword:" + this.ads_edit.h1 + "}";


									Vue.set(this.ads[i].ads[j], 'h1', h1);
									this.adsEditMasked = false;
								}
								else
								{
									Vue.set(this.ads[i].ads[j], 'h1', this.ads_edit.h1);
								}
								
								Vue.set(this.ads[i].ads[j], 'h2', this.ads_edit.h2);
								Vue.set(this.ads[i].ads[j], 'du', this.ads_edit.du);
								Vue.set(this.ads[i].ads[j], 'fu', this.ads_edit.fu);
								Vue.set(this.ads[i].ads[j], 'desc', this.ads_edit.desc);
								Vue.set(this.ads[i].ads[j], 'p1', this.ads_edit.p1);
								Vue.set(this.ads[i].ads[j], 'p2', this.ads_edit.p2);

								this.campaignAdsEdited = true;

								break;
							}
						}
					}
				}
				this.modalClose();
			}
		},
		adsNew: function (adgroup, modal) {
			this.ads_new_adgroup = adgroup;
			this.ads_new.du = this.campaign.owner;
			this.ads_new.fu = this.campaign.url;
			this.modalShow(modal);
		},
		removeHidden : function (id) {
			$("#"+id).removeClass('hidden');
		},
		addHidden : function (id) {
			$("#"+id).addClass('hidden');
		},
		clearHiddenAdsNew : function() {
			this.addHidden('h1_error_ads');
			this.addHidden('h2_error_ads');
			this.addHidden('desc_error_ads');
			this.addHidden('du_error_ads');
			this.addHidden('fu_error_ads');
		},
		clearHiddenAdsEdit : function() {
			this.addHidden('h1_error_ads_edit');
			this.addHidden('h2_error_ads_edit');
			this.addHidden('desc_error_ads_edit');
			this.addHidden('du_error_ads_edit');
			this.addHidden('fu_error_ads_edit');
		},
		adsNewSave: function () {
			this.clearHiddenAdsNew();

			let pass = true;

			if(this.ads_new.h1 == '')
			{
				pass = false;
				this.removeHidden('h1_error_ads');
			}
			if(this.ads_new.h2 == '')
			{
				pass = false;
				this.removeHidden('h2_error_ads');
			}
			if(this.ads_new.desc == '')
			{
				pass = false;
				this.removeHidden('desc_error_ads');
			}
			if(this.ads_new.du == '')
			{
				pass = false;
				this.removeHidden('du_error_ads');
			}
			if(this.ads_new.fu == '')
			{
				pass = false;
				this.removeHidden('fu_error_ads');
			}

			if(pass)
			{
				for(let i = 0; i < this.ads.length; i++)
				{
					this.ads_new.selected = true;

					console.log(this.ads[i].adgroup);
					console.log(this.ads_new_adgroup);

					if(this.ads[i].adgroup == this.ads_new_adgroup)
					{
						console.log(this.ads_new_adgroup);
						this.ads[i].ads.push(_.cloneDeep(this.ads_new));
					}
				}

				this.campaignAdsEdited = true;
				this.reIndexAds();
				this.modalClose();
			}	
		},
		adsDelete: function(adgroup_id, id)
		{
			this.deleteAdsId = id;
			this.deleteAdgroupId = adgroup_id;

			this.modalShow('delete_ads_confirm');
		},
		adsDeleteConfirm: function()
		{
			let id = this.deleteAdsId;
			let adgroup_id = this.deleteAdgroupId;

			console.log('ads delete');
			for(let i = 0; i < this.ads.length; i++)
			{
				if(this.ads[i].id == adgroup_id)
				{
					for(let j = 0; j < this.ads[i].ads.length; j++)
					{
						if(this.ads[i].ads[j].id == id)
						{
							let temp = this.ads;
							Vue.set(temp[i].ads[j], 'deleted', true);

							console.log(temp);
							this.ads = temp;

							this.addToTrash(this.ads[i].adgroup, this.ads[i].ads[j]);

							this.ads[i].ads.splice(j, 1);

							// console.log(this.ads[i].ads[j].delete);

							this.reIndexAds();
							this.campaignAdsEdited = true;

							this.modalClose();
							
							return true;
						}
					}
				}
			}
		},
		addToTrash : function (adgroup, ads)
		{
			if(this.adsDeleted.length == 0)
			{
				let ad = {id : 0, adgroup : '', ads : [], page : 1};
				Vue.set(ad, 'adgroup', adgroup);
				Vue.set(ad, 'ads', []);
				Vue.set(ad, 'page', 1);

				this.adsDeleted.push(ad);
				this.adsDeleted[0].ads.push( _.cloneDeep(ads))

			}
			
			console.log('ads deleted');
			console.log(adgroup);
			console.log(ads);
			console.log(this.adsDeleted);
			console.log(this.adsDeleted.length);
		},
		adgroupDelete : function(adgroup)
		{
			this.deleteAdgroupName = adgroup;
			this.modalShow('delete_adgroup_confirm');

		},
		adgroupDeleteConfirm : function()
		{
			let adgroup = this.deleteAdgroupName;

			for(let i = 0; i < this.ads.length; i++)
			{
				console.log('hapus');
				console.log(this.ads[i]);
				if(this.ads[i].adgroup == adgroup)
				{
					this.ads.splice(i, 1);
					this.reIndexAds();
					this.campaignAdsEdited = true;

					this.modalClose();

					return true;

				}
			}
		},
		adsCopy: function (adgroup_id, id) {
			console.log('copy');

			let adgroup_length = this.ads.length;
			for(let i = 0; i < adgroup_length; i++)
			{
				console.log('i ' + i);
				if(this.ads[i].id == adgroup_id)
				{
					let ads_length = this.ads[i].ads.length;

					for(let j = 0; j < ads_length; j++)
					{
						if(this.ads[i].ads[j].id == id)
						{
							console.log('ada yg dicopy');
							let ads_new = {id : 0, h1 : '', h2 : '', desc : '', du : '', fu : '', p1 : '', p2 : '', selected : true};
							Vue.set(ads_new, 'id', ads_length);
							Vue.set(ads_new, 'h1', this.ads[i].ads[j].h1);
							Vue.set(ads_new, 'h2', this.ads[i].ads[j].h2);
							Vue.set(ads_new, 'du', this.ads[i].ads[j].du);
							Vue.set(ads_new, 'fu', this.ads[i].ads[j].fu);
							Vue.set(ads_new, 'desc', this.ads[i].ads[j].desc);
							Vue.set(ads_new, 'p1', this.ads[i].ads[j].p1);
							Vue.set(ads_new, 'p2', this.ads[i].ads[j].p2);
							Vue.set(ads_new, 'deleted', false);
							Vue.set(ads_new, 'selected', true);

							console.log(ads_new);

							// Vue.set(this.adGroups.adgroups[i].ads, j, ads_new);
							this.ads[i].ads.push(_.cloneDeep(ads_new));
							Vue.set(this.ads[i].ads[j], 'selected', true);
							Vue.set(this.ads[i].ads[j], 'deleted', false);
							console.log(this.ads[i]);

							this.campaignAdsEdited = true;
							this.reIndexAds();

							break;
						}
					}
				}
			}

			
			// this.adGroupAdsReIndex();
			// this.reInitAdGroups();
		},
		goalCampaign: function (goal) {
			this.campaign.goal = goal;
		},
		clickTime: function (i,j) {
			if(this.time_matrix[i][j] == 1)

				this.time_matrix[i].splice(j,1,0);
			else
				this.time_matrix[i].splice(j,1,1);

		},
		timeCampaign: function (time) {
			this.campaign.time = time;
			if(time == 'Setiap Waktu (24/7)')
				this.time_matrix = this.all_time;
			else if(time == 'Hari Kerja 24 Jam')
				this.time_matrix = this.work_hour_24;
			else if(time == 'Jam Kantor')
				this.time_matrix = this.work_hour;
			else
				this.time_matrix = this.time_init;
		},
		keywordDropdownEvent: function(dropdown) {
			if(this.keywordFilterDropdown == dropdown)
				this.keywordFilterDropdown = 'none';
			else
				this.keywordFilterDropdown = dropdown;
		},
		keywordSummaryDropdownEvent: function(dropdown) {
			if(this.keywordSummaryFilterDropdown == dropdown)
				this.keywordSummaryFilterDropdown = 'none';
			else
				this.keywordSummaryFilterDropdown = dropdown;
		},
		changeKeywordPage: function (page) {
			if(page == 'Keyword Manual')
			{
				if(this.keywords_manual.length > 0)
					this.keywordManualState = 2;
				else
					this.keywordManualState = 1;
			}
			this.keyword_page = page;
		},
		locationOpen: function(index){
			console.log(index);
			console.log(this.locations[index].opened);
			this.locations[index].opened = !this.locations[index].opened;
		},
		locationSelectedOpen: function(index){
			console.log(index);
			console.log(this.locationsSelected[index].opened);
			this.locationsSelected[index].opened = !this.locationsSelected[index].opened;
		},
		provinceOpen: function(index){
			console.log(this.locations[index]);
			for(let i = 0; i < this.locations[index].cities.length; i++)
			{
				Vue.set(this.locations[index].cities[i], 'selected', this.locations[index].selected);
			}
		},
		nextStep: function () {
			$(window).scrollTop(0);

			this.campaign.wizard_state = this.campaign.wizard_state + 1;
		},
		chooseStep: function (step) {
			console.log(step);
			this.campaign.wizard_state = step;
		},
		nextPage: function (adgroup_id) {

			console.log(this.ads);
			for(let i = 0; i < this.ads.length; i++)
			{
				if(this.ads[i].id == adgroup_id)
				{
					if(this.ads[i].page < this.ads[i].last_page)
					{
						console.log(this.ads[i].page);
						console.log(this.ads[i].last_page);
						let page = this.ads[i].page + 1;
						Vue.set(this.ads[i], 'page', page);
						break;
					}
				}
			}

		},
		prevPage: function (adgroup_id) {
			for(let i = 0; i < this.ads.length; i++)
			{
				if(this.ads[i].id == adgroup_id)
				{
					if(this.ads[i].page > 1)
					{
						let page = this.ads[i].page - 1;
						Vue.set(this.ads[i], 'page', page);
						break;
					}
				}
			}
		},
		isUrlValid : function(url) 
		{
			var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z‌​]{2,6}\b([-a-zA-Z0-9‌​@:%_\+.~#?&=]*)/g);
			if(res == null)
				return false;
			else
				return true;
		},
		createCampaign: function () {
			let pass = true;

			$("#error_campaign_name").addClass('hidden');
			$("#error_url").addClass('hidden');
			$("#error_url_valid").addClass('hidden');

			if(this.campaign.campaign_name == '' || this.campaign.campaign_name == null)
			{
				$("#error_campaign_name").removeClass('hidden');
				pass = pass && false;
			}

			if(this.campaign.url == '' || this.campaign.url == null)
			{
				$("#error_url").removeClass('hidden');
				pass = pass && false;
			}
			else
			{
				if(!this.isUrlValid(this.campaign.url))
				{
					$("#error_url_valid").removeClass('hidden');
					pass = pass && false;
				}
			}

			if(pass)
			{
				// history.pushState({}, null, '/next-step');
				this.nextStep();	

				this.campaign.owner = this.campaign.owner || '';
				this.campaign.url = this.campaign.url || '';
				this.campaign.hash = this.campaign.hash || '';
				this.campaign.country = this.campaign.country || '';
				this.campaign.campaign_name = this.campaign.campaign_name || '';

				// if (this.campaign.owner == '' && this.campaign.hash == '' && this.campaign.country == '' && this.campaign.network != '' && this.campaign.city_criteria_id.length > 0) 
				// {
				// 	this.getAdwordsIdea().then(() => {
				// 		this.getAdwordsIdeaGroup();
				// 	});
				// }
				// else if(this.campaign.network != '' && this.campaign.city_criteria_id.length > 0)
				// {
				// 	this.getAdwordsIdea().then(() => {
				// 		this.getAdwordsIdeaGroup();
				// 	});
				// }

				this.keyword_loading = true;

				this.getAdwordsIdea().then(() => {

					var delayMillis = 1000; //1 second

					setTimeout(() =>
					{
						this.getAdwordsIdeaGroup();
					}, delayMillis);

				});

				this.saveCampaign();
				console.log('ini lagi di step2')
                this.$ga.page('/dashboard/campaign/wizard/step2')
                ga('send', 'pageview', location.pathname+'/step2')
			}
		},
		updateCampaignProperties : function () {
			this.updateLoading = true;
			this.hideAllCampaigneditView();

			this.resetFlagMovePage();
			this.saveCampaign();

			$("#editCreateCampaign").removeClass('hidden');

			axios.post('/dashboard/updateCampaignProperties', {
				campaign_orig_id : this.campaign.campaign_orig_id,
				campaign_name : this.campaign.campaign_name,
				customer_id : this.campaign.customer_id
			})
			.then((response) => {
				console.log('update campaign properties');
				console.log(response.data);
				this.updateLoading = false;
				
				$("#detail_campaign_save").removeClass('hidden');


			})
			.catch(function (error) {
				console.log(error);
			});
		},
		updateCampaignSetting : function () {
			this.updateLoading = true;
			// this.hideAllCampaigneditView();

			this.resetFlagMovePage();

			this.saveCampaign();

			axios.post('/dashboard/updateCampaignSetting', {
				campaign : this.campaign
			})
			.then((response) => {
				console.log('update campaign setting');
				console.log(response.data);
				this.updateLoading = false;

				$("#setting_campaign_save").removeClass('hidden');
				$("#editCampaignTarget").removeClass('hidden');
				
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		updateCampaignAds : function () {
			$("#editAds").removeClass('hidden');

			this.updateLoading = true;
			this.hideAllCampaigneditView();

			this.resetFlagMovePage();

			$("#editAds").removeClass('hidden');

			axios.post('/dashboard/updateCampaignAds', {
				campaign_orig_id : this.campaign.campaign_orig_id,
				campaign_id : this.campaign.id,
				customer_id : this.campaign.customer_id,
				ads : this.ads
			})
			.then((response) => {
				console.log('update campaign ads');
				console.log(response.data);

				$("#ads_campaign_save").removeClass('hidden');

				$("editAds").removeClass('hidden');

				this.updateLoading = false;
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		updateCampaignExtension : function () {
			$('html').removeClass('is-clipped');
			$("#company-modal").removeClass('is-active');
			axios.post('/dashboard/updateCampaignExtension', {
				campaign_orig_id : this.campaign.campaign_orig_id,
				company : this.company,
				customer_id : this.campaign.customer_id
			})
			.then((response) => {
				console.log('update campaign extension');
				console.log(response.data);

			})
			.catch(function (error) {
				console.log(error);
			});
		},
		createCampaignTarget: function () {
			let pass = true;

			if(this.campaign.network == '' || this.campaign.network == null)
			{
				$("#error_network").removeClass('hidden');
				$("#error_network").addClass('show');
				pass = pass && false;
			}

			if(this.campaign.city_criteria_id == '' || this.campaign.city_criteria_id == null)
			{
				$("#error_location").removeClass('hidden');
				$("#error_location").addClass('show');
				pass = pass && false;
			}

			if(this.campaign.time == '' || this.campaign.time == null)
			{
				$("#error_time").removeClass('hidden');
				$("#error_time").addClass('show');
				pass = pass && false;
			}

			if(this.campaign.goal == '' || this.campaign.goal == null)
			{
				$("#error_goal").removeClass('hidden');
				$("#error_goal").addClass('show');
				pass = pass && false;
			}

			if(this.company_value == '' || this.company_value == null)
			{
				$("#error_company_value").removeClass('hidden');
				$("#error_company_value").addClass('show');
				pass = pass && false;
			}

			if(pass)
			{
				

				this.nextStep();
				this.campaign.campaign_cost = 0;
				this.campaign.selected_keyword = 0;
				this.campaign.estimate_click = 0;
				// this.getAdwordsIdeaList();
				

				this.saveCampaign();
				this.savePeriod();

				console.log('ini lagi di step3')
                this.$ga.page('/dashboard/campaign/wizard/step3')
                ga('send', 'pageview', location.pathname+'/step3')
			}
		},
		createCampaignKeyword: function () {
			if(this.keywords_selected.length < 1)
			{
				$("#error_keyword").removeClass('hidden');
				$("#error_keyword").addClass('show');
			}
			else
			{
				this.adsLoading = true;
				this.nextStep();
				// this.filterAdGroups();
				this.saveKeywords();
				
				this.fixBudget = this.campaign.campaign_cost;
				this.fixEstimateClick = this.campaign.estimate_click;

				console.log('fix budget');
				console.log(this.fixBudget);

				console.log('fix estimate click');
				console.log(this.fixEstimateClick);

                console.log('ini lagi di step4')
                this.$ga.page('/dashboard/campaign/wizard/step4')
                ga('send', 'pageview', location.pathname+'/step4')
			}
		},
		createCampaignAdviews: function () {
			this.nextStep();

			this.saveAds();

			// this.campaign.campaign_budget = this.campaign.campaign_cost;
			//update
            this.campaign.campaign_budget = 250000;
            this.campaign.estimate_click = Math.floor((this.campaign.campaign_budget/this.fixBudget) * this.fixEstimateClick);

			// axios.post('/dashboard/saveKeywords/', {
			// 	campaign_id : this.campaign.id,
			// 	keywords: this.keywords_selected
			// })
			// .then((response) => {
			// 	console.log('saveKeywords');
			// 	console.log(response.data);
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });

			console.log('ini lagi di step5')
            this.$ga.page('/dashboard/campaign/wizard/step5')
            ga('send', 'pageview', location.pathname+'/step5')
		},
		createCampaignBudget : function () {
			$("#error_budget_minimum").removeClass('show');
			$("#error_budget_minimum").addClass('hidden');
			$('#paymentButton').removeClass('is-loading');

            if(this.campaign.campaign_budget < 10000000){
                var komisi = 0.2;
            }
            if(this.campaign.campaign_budget >= 10000000 && this.campaign.campaign_budget < 30000000){
                var komisi = 0.15;
            }
            if(this.campaign.campaign_budget >= 30000000){
                var komisi = 0.1;
            }

			if(this.campaign.campaign_budget <  250000)
			{
				$("#error_budget_minimum").removeClass('hidden');
				$("#error_budget_minimum").addClass('show');
			}
			else if(this.campaign.campaign_budget < (komisi * this.campaign.campaign_cost))
			{
				this.modalShow('budget_notification');
			}
			else
			{
				this.nextStep();
				this.saveCampaign();

                console.log('ini lagi di step6')
                this.$ga.page('/dashboard/campaign/wizard/step6')
                ga('send', 'pageview', '/dashboard/campaign/wizard/step6')
			}
			
		},
		createCampaignBudgetNext : function () {
			this.modalClose('budget_notification');
			this.nextStep();
			this.saveCampaign();
		},
		saveKeywords: function (){
			this.keywords_loading = true;
			axios.post('/dashboard/saveKeywords', {
				uuid : this.campaign.uuid,
				keywords: this.keywords_selected
			})
			.then((response) => {
				console.log('saveKeywords');
				console.log(response.data);

				this.getAdgroups();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		saveKeywordsDatabase: function ()
		{
			axios.post('/dashboard/saveKeywordsDatabase', {
				uuid : this.campaign.uuid,
				campaign_id : this.campaign.id
			})
			.then((response) => {
				console.log('saveKeywordsDatabase');
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		saveAds : function ()
		{
			var saveAds = this.ads;
			if(this.advance_adview)
			{
				saveAds = this.adsSelected;
			}

			axios.post('/dashboard/saveAds', {
				ads : saveAds,
				campaign_id : this.campaign.id
			})
			.then((response) => {
				console.log('save Ads');
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		createCampaignPayment: function() {
			$('#paymentButton').addClass('is-loading');
			this.nextStep();

			let cost = this.campaign.campaign_budget * 0.1;

			let orderCost = (parseInt(parseInt(cost) + parseInt(this.campaign.campaign_budget)));

			axios.post('/dashboard/getUniqCodePrice', {
				campaign_cost: orderCost
			})
			.then((response) => {
				console.log(response.data);
				this.priceUniq = response.data;

				let uniq_code = this.priceUniq % 1000;

				axios.post('/dashboard/saveOrder', {
					campaign_id: this.campaign.id,
					price : this.campaign.campaign_budget,
					uniq_code : uniq_code,
					payment_method_id : this.paymentMethod
				})
				.then((response) => {
					this.invoiceId = response.data.invoice
					console.log(response.data);

					this.paymentLoading = false;
				})
				.catch(function (error) {
					console.log(error);
				});
			})
			.catch(function (error) {
				console.log(error);
			});

		},
		modalShow: function (modal) {
			$('html').addClass('is-clipped');
			$("#" + modal).addClass('is-active');
		},
		modalClose: function () {
			$('html').removeClass('is-clipped');
			$('.modal').removeClass('is-active');
		},
		deleteAllSelectedKeyword : function() {
			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				this.deleteSelectedKeyword(this.keywords_selected[i].keyword);
			}
			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				this.deleteSelectedKeyword(this.keywords_selected[i].keyword);
			}
		},
		deleteSelectedKeyword: function(keyword) {
			let temp = [];
			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				if(this.keywords_selected[i].keyword == keyword)
				{
					if(this.keywords_selected[i].source == 'main')
					{
						this.keywords_selected[i].selected = false;
						this.keywords.push(this.keywords_selected[i]);
					}
					else
					{
						this.keywords_selected[i].selected = false;
						this.keywords_competitor.push(this.keywords_selected[i]);
					}
				}
				else
				{
					temp.push(this.keywords_selected[i]);
				}
			}

			this.keywords_selected = temp;
			this.calculateKeywordSummary();
		},
		getKeywordEvent: _.debounce(
			function () {
				console.log('masuk event');
				if ((this.campaign.vertical != '' || this.campaign.vertical != null || this.campaign.vertical !== undefined) && (this.campaign.city_criteria_id != '' || this.campaign.city_criteria_id != null || this.campaign.city_criteria_id !== undefined)) 
				{
					// this.getKeywordList();
					console.log('berubah');
				}
			},

			500
			),
		selectAllKeyword: function () {
			for(let i = 0; i < this.keywords.length; i++)
			{
				if(this.is_keyword_selected_all)
					Vue.set(this.keywords[i], 'selected', true);
				else
					Vue.set(this.keywords[i], 'selected', false);
			}

			this.onKeywordChange(this.keywords);
		},
		selectAllKeywordSelected: function () {
			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				if(this.is_keyword_selected_selected_all)
					Vue.set(this.keywords_selected[i], 'selected', true);
				else
					Vue.set(this.keywords_selected[i], 'selected', false);
			}

			this.onKeywordChange(this.keywords_selected);
		},
		selectAllKeywordCompetitor: function () {
			for(let i = 0; i < this.keywords_competitor.length; i++)
			{
				if(this.is_keyword_selected_all_competitor)
					Vue.set(this.keywords_competitor[i], 'selected', true);
				else
					Vue.set(this.keywords_competitor[i], 'selected', false);
			}

			this.onKeywordChange(this.keywords_competitor);
		},
		selectAllKeywordManual: function () {
			for(let i = 0; i < this.keywords_manual.length; i++)
			{
				if(this.is_keyword_selected_all_manual)
					Vue.set(this.keywords_manual[i], 'selected', true);
				else
					Vue.set(this.keywords_manual[i], 'selected', false);
			}

			this.onKeywordChange(this.keywords_manual);
		},
		redirect: function (url) {
			$("#close-state").val('order');
			window.location.href = url;
		},
		onKeywordChange: function (keywords) {
			console.log('chanhe');
			let selected_keyword = 0;
			console.log(keywords);
			for(let i = 0; i < keywords.length; i++)
			{
				if(keywords[i].selected)
				{
					console.log(keywords[i].selected);
					selected_keyword = selected_keyword + 1;
				}
			}

			this.on_queue_keyword_selected = selected_keyword;
		},
		getKeywordCompetitor: function() {
			this.keywords_competitor_loading = true;

			axios.post('/dashboard/getKeywordSuggestionByUrl', {
				campaign : this.campaign, 
				url : this.keywords_competitor_search
			})
			.then((response) => {
				this.keywords_competitor = response.data.keywords;

				if(this.keywords_competitor.length <= 0)
				{
					this.modalShow('keyword_competitor_not_found');
				}

				let temp = [];

				for(let i = 0; i < response.data.keywords.length; i++)
				{
					Vue.set(this.keywords_competitor[i], 'keyword', response.data.keywords[i].text);
					Vue.set(this.keywords_competitor[i], 'volume', response.data.keywords[i].searchVolume);
					Vue.set(this.keywords_competitor[i], 'cpc', response.data.keywords[i].avgCpc);
					if(Math.round(this.keywords_competitor[i].cpc/1000000) < 1000)
					{
						Vue.set(this.keywords_competitor[i], 'cpc', 1000 * 1000000);
					}

					Vue.set(this.keywords_competitor[i], 'selected', false);
					Vue.set(this.keywords_competitor[i], 'id', i);
					Vue.set(this.keywords_competitor[i], 'source', this.keywords_competitor_search);

					if(this.keywords_competitor[i].volume != 0)
					{
						temp.push(this.keywords_competitor[i]);
					}
				}

				// console.log(1);
				this.keywords_competitor = temp;
				this.keywordsCompetitorTemp = this.keywords_competitor;

				this.keywords_competitor_loading = false;

				console.log(2);

				console.log('keywords keywords competitor');
				console.log(this.keywords_competitor);

				this.keywords_competitor_search = '';
			})
			.catch((error) =>  {
				console.log(error);
				this.getKeywordCompetitor();
			});
		},
		getKeywordManual: function() {
			this.keywords_manual_loading = true;

			return axios.post('/dashboard/getKeywordManual', {
				campaign : this.campaign, 
				keywords : this.keywords_manual_list
			})
			.then((response) => {
				console.log('keywords keywords manual');
				this.keywords_manual = response.data;

				if(this.keywords_manual.length <= 0)
				{
					this.modalShow('keyword_manual_not_found');
				}

				console.log(response.data);
				console.log(this.keywords_manual);

				let temp = [];

				for(let i = 0; i < response.data.length; i++)
				{
					console.log(response.data[i]);
					Vue.set(this.keywords_manual[i], 'keyword', response.data[i].text);
					Vue.set(this.keywords_manual[i], 'volume', response.data[i].searchVolume);
					Vue.set(this.keywords_manual[i], 'cpc', response.data[i].avgCpc);
					if(Math.round(this.keywords_manual[i].cpc/1000000) < 1000)
					{
						Vue.set(this.keywords_manual[i], 'cpc', 1000 * 1000000);
					}
					Vue.set(this.keywords_manual[i], 'selected', false);
					Vue.set(this.keywords_manual[i], 'id', i);
					Vue.set(this.keywords_manual[i], 'source', 'manual');
					console.log(this.keywords_manual[i]);

					if(this.keywords_manual[i].volume != 0)
					{
						temp.push(this.keywords_manual[i]);
					}
				}

				this.keywords_manual = temp;
				this.keywordsManualTemp = this.keywords_manual;

				this.keywords_manual_loading = false;

				return Promise.resolve();
			})
			.catch((error) =>  {
				console.log(error);
				this.getKeywordManual();
			});
		},
		calculateKeywordSummary: function() {
			let selected_keyword = 0;
			let estimate_click = 0;
			let campaign_cost = 0;

			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				selected_keyword = selected_keyword + 1;
				estimate_click = estimate_click + (this.keywords_selected[i].volume  * 0.025);
				campaign_cost = campaign_cost + ((Math.round(this.keywords_selected[i].cpc/1000000) * this.keywords_selected[i].volume) * 0.025);
			}

			this.campaign.selected_keyword = selected_keyword;
			this.campaign.estimate_click = estimate_click;
			this.campaign.campaign_cost = campaign_cost;
		},
		addToKeywordSelected: function () {

			let temp_keywords = [];

			if(this.keyword_page == 'Keyword Rekomendasi')
			{
				for(let i = 0; i < this.keywords.length; i++)
				{
					if(this.keywords[i].selected)
					{
						this.keywords[i].source = 'main';
						this.keywords_selected.push(this.keywords[i]);
					}
					else
					{
						temp_keywords.push(this.keywords[i]);
					}
				}

				this.keywords = temp_keywords;
			}
			else if(this.keyword_page == 'Keyword Kompetitor')
			{
				for(let i = 0; i < this.keywords_competitor.length; i++)
				{
					if(this.keywords_competitor[i].selected)
					{
						this.keywords_selected.push(this.keywords_competitor[i]);
					}
					else
					{
						temp_keywords.push(this.keywords_competitor[i]);
					}
				}

				this.keywords_competitor = temp_keywords;
			}
			else if(this.keyword_page == 'Keyword Manual')
			{
				if (this.keywordManualState === 1) {
					this.keywordManualProceed(false)
				}
				for(let i = 0; i < this.keywords_manual.length; i++)
				{
					if(this.keywords_manual[i].selected)
					{
						this.keywords_selected.push(this.keywords_manual[i]);
					}
					else
					{
						temp_keywords.push(this.keywords_manual[i]);
					}
				}

				this.keywords_manual = temp_keywords;
			}

			this.calculateKeywordSummary();
			this.on_queue_keyword_selected = 0;

			$("#error_keyword").removeClass('show');
			$("#error_keyword").addClass('hidden');
		},
		keywordContain: function (data) {
			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				if(this.keywords_selected[i].keyword == data)
					return true;
			}
		},
		filterAdGroups: function () {
			for(let i = 0; i < this.adGroups.adgroups.length; i++)
			{
				this.adGroups.adgroups[i].selected = false;
				let selected_page = 0;

				for(let j = 0; j < this.adGroups.adgroups[i].ads.length; j++)
				{
					if(this.keywordContain(this.adGroups.adgroups[i].keywords[j].keyword))
					{
						// console.log(this.adGroups.adgroups[i].keywords[j].keyword);
						// console.log(this.adGroups.adgroups[i].ads[j].h1);
						Vue.set(this.adGroups.adgroups[i].ads[j], 'selected', true);
						Vue.set(this.adGroups.adgroups[i], 'selected', this.adGroups.adgroups[i].selected || true);
						selected_page = selected_page + 1;
					}
					else
					{
						Vue.set(this.adGroups.adgroups[i].ads[j], 'selected', false);
						Vue.set(this.adGroups.adgroups[i], 'selected', this.adGroups.adgroups[i].selected || false);
					}
				}

				let last_page = Math.ceil((selected_page + 1) / this.ad_view_max_page);
				Vue.set(this.adGroups.adgroups[i], 'last_page', last_page);
			}

			console.log(this.adGroups);
		},
		reInitAdGroups: function () {
			for(let i = 0; i < this.ads.length; i++)
			{
				let selected_page = 0;

				for(let j = 0; j < this.ads[i].ads.length; j++)
				{
					if(this.ads[i].ads[j].selected)
					{
						selected_page = selected_page + 1;
					}
				}

				let last_page = Math.ceil((selected_page + 1) / this.ad_view_max_page);
				Vue.set(this.adGroups.adgroups[i], 'last_page', last_page);
			}

			console.log(this.adGroups);
		},
		leaving: function () {
			alert("Leaving...");
		},
		formatNumber : function (n) {
			// if(n == undefined)
			// 	return n;
			n = parseFloat(n);

			return n.toFixed(0).replace(/./g, function (c, i, a) {
				return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c
			});
		},
		changePaymentMethod : function (method) {
			this.paymentMethod = method;

			if(method == 'bank_transfer')
				this.paymentType = 'transfer_bca';
			else
				this.paymentType = 'gopay';
		},
		servicePrice : function () {
            if(this.campaign.campaign_budget < 10000000){
                return this.formatNumber((this.campaign.campaign_budget * 20) / 100);
            }
            if(this.campaign.campaign_budget >= 10000000 && this.campaign.campaign_budget < 30000000){
                return this.formatNumber((this.campaign.campaign_budget * 15) / 100);
            }
            if(this.campaign.campaign_budget >= 30000000){
                return this.formatNumber((this.campaign.campaign_budget * 10) / 100);
            }
		},
		uniqCode : function () {
			return this.leftPad((this.priceUniq % 1000), 3);
		},
		totalPrice : function () {
            if(this.campaign.campaign_budget < 10000000){
                var cost = (this.campaign.campaign_cost * 20) / 100;
            }
            if(this.campaign.campaign_budget >= 10000000 && this.campaign.campaign_budget < 30000000){
                var cost = (this.campaign.campaign_cost * 15) / 100;
            }
            if(this.campaign.campaign_budget >= 30000000){
                var cost = (this.campaign.campaign_cost * 10) / 100;
            }
            return parseInt(cost + this.campaign.campaign_cost);
		},
		totalPriceFormat : function () {
            if(this.campaign.campaign_budget < 10000000){
                var cost = (this.campaign.campaign_budget * 20) / 100;
            }
            if(this.campaign.campaign_budget >= 10000000 && this.campaign.campaign_budget < 30000000){
                var cost = (this.campaign.campaign_budget * 15) / 100;
            }
            if(this.campaign.campaign_budget >= 30000000){
                var cost = (this.campaign.campaign_budget * 10) / 100;
            }
            console.log(cost);

            return this.formatNumber(parseInt(parseInt(cost) + parseInt(this.campaign.campaign_budget)));
		},
		getFilterAutomaticKeyword : function(field) {
			if(this.filterAutomaticKeywordValue){

				if(field == 'volume')
				{
					this.keywords = this.keywordsTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(this.keywords[i].volume == this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(this.keywords[i].volume >= this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(this.keywords[i].volume <= this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(this.keywords[i].volume > this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(this.keywords[i].volume < this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}

					this.keywords = temp;
				}
				else if(field == 'cpc')
				{
					this.keywords = this.keywordsTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(Math.round(this.keywords[i].cpc/1000000) == this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(Math.round(this.keywords[i].cpc/1000000) >= this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(Math.round(this.keywords[i].cpc/1000000) <= this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(Math.round(this.keywords[i].cpc/1000000) > this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords.length; i++)
						{
							if(Math.round(this.keywords[i].cpc/1000000) < this.filterAutomaticKeywordValue)
							{
								temp.push(this.keywords[i]);
							}
						}
					}

					this.keywords = temp;
				}
				else
				{
					if(this.filterAutomaticKeywordOption == "=")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.equals(field,this.filterAutomaticKeywordValue)
						.select();
					}
					else if(this.filterAutomaticKeywordOption == "!=")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.not()
						.equals(field, this.filterAutomaticKeywordValue)
						.select();
					}
					else if(this.filterAutomaticKeywordOption == "like")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.contains(field, this.filterAutomaticKeywordValue)
						.select();
					}
					else if(this.filterAutomaticKeywordOption == "!like")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.not()
						.contains(field, this.filterAutomaticKeywordValue)
						.select();
					}
					else if(this.filterAutomaticKeywordOption == "startWith")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.startsWith(field, this.filterAutomaticKeywordValue)
						.select();
					}
					else if(this.filterAutomaticKeywordOption == "!startWith")
					{
						this.keywordsTemp = this.keywords;
						this.keywords = jLinq.from(this.keywords)
						.ignoreCase()
						.not()
						.startsWith(field, this.filterAutomaticKeywordValue)
						.select();
					}
				}
				
			}else{
				this.keywords = this.keywordsTemp;
			}

			this.keywordFilterDropdown = "none";
			this.ulKeywordFilterDropdown = "none";

		},
		getFilterSelectedKeyword : function(field) {
			if(this.filterSelectedKeywordValue){
				if(field == 'volume')
				{
					this.keywords_selected = this.keywordsSelectedTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(this.keywords_selected[i].volume == this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(this.keywords_selected[i].volume >= this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(this.keywords_selected[i].volume <= this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(this.keywords_selected[i].volume > this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(this.keywords_selected[i].volume < this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}

					this.keywords_selected = temp;
				}
				else if(field == 'cpc')
				{
					this.keywords_selected = this.keywordsSelectedTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(Math.round(this.keywords_selected[i].cpc/1000000) == this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(Math.round(this.keywords_selected[i].cpc/1000000) >= this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(Math.round(this.keywords_selected[i].cpc/1000000) <= this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(Math.round(this.keywords_selected[i].cpc/1000000) > this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_selected.length; i++)
						{
							if(Math.round(this.keywords_selected[i].cpc/1000000) < this.filterSelectedKeywordValue)
							{
								temp.push(this.keywords_selected[i]);
							}
						}
					}

					this.keywords_selected = temp;
				}
				else
				{
					if(this.filterSelectedKeywordOption == "="){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.equals(field,this.filterSelectedKeywordValue)
						.select();
					}else if(this.filterSelectedKeywordOption == "!="){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.not()
						.equals(field, this.filterSelectedKeywordValue)
						.select();
					}else if(this.filterSelectedKeywordOption == "like"){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.contains(field, this.filterSelectedKeywordValue)
						.select();
					}else if(this.filterSelectedKeywordOption == "!like"){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.not()
						.contains(field, this.filterSelectedKeywordValue)
						.select();
					}else if(this.filterSelectedKeywordOption == "startWith"){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.startsWith(field, this.filterSelectedKeywordValue)
						.select();
					}else if(this.filterSelectedKeywordOption == "!startWith"){
						this.keywordsSelectedTemp = this.keywords_selected;
						this.keywords_selected = jLinq.from(this.keywords_selected)
						.ignoreCase()
						.not()
						.startsWith(field, this.filterSelectedKeywordValue)
						.select();
					}
				}

			}else{
				this.keywords_selected = this.keywordsSelectedTemp;
			}

			this.keywordFilterDropdown = "none";
			this.ulKeywordFilterDropdown = "none";

		},
		getFilterManualKeyword : function(field) {

			if(this.filterManualKeywordValue){
				if(field == 'volume')
				{
					this.keywords_manual = this.keywordsManualTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(this.keywords_manual[i].volume == this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(this.keywords_manual[i].volume >= this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(this.keywords_manual[i].volume <= this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(this.keywords_manual[i].volume > this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(this.keywords_manual[i].volume < this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}

					this.keywords_manual = temp;
				}
				else if(field == 'cpc')
				{
					this.keywords_manual = this.keywordsManualTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(Math.round(this.keywords_manual[i].cpc/1000000) == this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(Math.round(this.keywords_manual[i].cpc/1000000) >= this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(Math.round(this.keywords_manual[i].cpc/1000000) <= this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(Math.round(this.keywords_manual[i].cpc/1000000) > this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_manual.length; i++)
						{
							if(Math.round(this.keywords_manual[i].cpc/1000000) < this.filterManualKeywordValue)
							{
								temp.push(this.keywords_manual[i]);
							}
						}
					}

					this.keywords_manual = temp;
				}
				else
				{
					if(this.filterManualKeywordOption == "="){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.equals(field,this.filterManualKeywordValue)
						.select();
					}else if(this.filterManualKeywordOption == "!="){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.not()
						.equals(field, this.filterManualKeywordValue)
						.select();
					}else if(this.filterManualKeywordOption == "like"){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.contains(field, this.filterManualKeywordValue)
						.select();
					}else if(this.filterManualKeywordOption == "!like"){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.not()
						.contains(field, this.filterManualKeywordValue)
						.select();
					}else if(this.filterManualKeywordOption == "startWith"){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.startsWith(field, this.filterManualKeywordValue)
						.select();
					}else if(this.filterManualKeywordOption == "!startWith"){
						this.keywordsManualTemp = this.keywords_manual;
						this.keywords_manual = jLinq.from(this.keywords_manual)
						.ignoreCase()
						.not()
						.startsWith(field, this.filterManualKeywordValue)
						.select();
					}
				}
				
			}else{
				this.keywords_manual = this.keywordsManualTemp;
			}

			this.keywordFilterDropdown = "none";
			this.ulKeywordFilterDropdown = "none";

		},
		getFilterCompetitorKeyword : function(field) {
			if(this.filterCompetitorKeywordValue)
			{
				if(field == 'volume')
				{
					this.keywords_competitor = this.keywordsCompetitorTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(this.keywords_competitor[i].volume == this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(this.keywords_competitor[i].volume >= this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(this.keywords_competitor[i].volume <= this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(this.keywords_competitor[i].volume > this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(this.keywords_competitor[i].volume < this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}

					this.keywords_competitor = temp;
				}
				else if(field == 'cpc')
				{
					this.keywords_competitor = this.keywordsCompetitorTemp;
					let temp = [];
					if(this.filterAutomaticKeywordOption == "=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(Math.round(this.keywords_competitor[i].cpc/1000000) == this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(Math.round(this.keywords_competitor[i].cpc/1000000) >= this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<=")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(Math.round(this.keywords_competitor[i].cpc/1000000) <= this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == ">")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(Math.round(this.keywords_competitor[i].cpc/1000000) > this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}
					else if(this.filterAutomaticKeywordOption == "<")
					{
						for(let i = 0; i < this.keywords_competitor.length; i++)
						{
							if(Math.round(this.keywords_competitor[i].cpc/1000000) < this.filterCompetitorKeywordValue)
							{
								temp.push(this.keywords_competitor[i]);
							}
						}
					}

					this.keywords_competitor = temp;
				}
				else
				{
					if(this.filterCompetitorKeywordOption == "="){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.equals(field,this.filterCompetitorKeywordValue)
						.select();
					}else if(this.filterCompetitorKeywordOption == "!="){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.not()
						.equals(field, this.filterCompetitorKeywordValue)
						.select();
					}else if(this.filterCompetitorKeywordOption == "like"){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.contains(field, this.filterCompetitorKeywordValue)
						.select();
					}else if(this.filterCompetitorKeywordOption == "!like"){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.not()
						.contains(field, this.filterCompetitorKeywordValue)
						.select();
					}else if(this.filterCompetitorKeywordOption == "startWith"){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.startsWith(field, this.filterCompetitorKeywordValue)
						.select();
					}else if(this.filterCompetitorKeywordOption == "!startWith"){
						this.keywordsCompetitorTemp = this.keywords_competitor;
						this.keywords_competitor = jLinq.from(this.keywords_competitor)
						.ignoreCase()
						.not()
						.startsWith(field, this.filterCompetitorKeywordValue)
						.select();
					}
				}
				
			}else{
				this.keywords_competitor = this.keywordsCompetitorTemp;
			}

			this.keywordFilterDropdown = "none";
			this.ulKeywordFilterDropdown = "none";

		},
		ulKeywordDropdownEvent: function(dropdown) {
			if(this.ulKeywordFilterDropdown == dropdown)
				this.ulKeywordFilterDropdown = 'none';
			else
				this.ulKeywordFilterDropdown = dropdown;
		},
		ulKeywordSummaryDropdownEvent: function(dropdown) {
			if(this.ulKeywordSummaryFilterDropdown == dropdown)
				this.ulKeywordSummaryFilterDropdown = 'none';
			else
				this.ulKeywordSummaryFilterDropdown = dropdown;
		},
		editKeyword : function () {
			if(this.campaignDetailEdited || this.campaignTargetEdited || this.campaignAdsEdited || this.campaignBudgetEdited)
			{
				this.modalShow('save_notification');
				this.confirmNotSavePage = 3;
			}
			else
			{
				this.chooseStep(3);
				this.hideAllCampaigneditView();
			}

			let campaign_id = $("#campaign_id").val();

			axios.post('/dashboard/getKeywordCampaign', {
				campaign_id : campaign_id
			})
			.then((response) => {
				console.log('keyword selected');
				console.log(response.data);
				this.keywords = response.data;
				this.campaign.selected_keyword = this.keywords.length;

				for(let i = 0; i < this.keywords.length; i++)
				{
					if(Math.round(this.keywords[i].cpc/1000000) < 1000)
					{
						Vue.set(this.keywords[i], 'cpc', 1000 * 1000000);
					}

					
					if(this.keywords[i].error_description == null)
					{
						Vue.set(this.keywords[i], 'error', 'Publish');
					}
					else
					{
						let error = JSON.parse(this.keywords[i].error_description);
						// console.log(error[0].desc);
						Vue.set(this.keywords[i], 'error', error[0].desc);
					}
				}

				
				$("#editKeyword").removeClass('hidden');
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		changeAdvanceAds : function () {
			this.advance_adview = !this.advance_adview;
		},
		adSelectedLength : function () {
			console.log('ad selected length');
			let len = 0;
			for(let i = 0; i < this.ads.length; i++)
			{
				len += this.ads[i].ads.length;
			}

			console.log(len);
			return len;
		},
		adSelect : function (adgroup, id) {

			for(let i = 0; i < this.ads.length; i++)
			{
				console.log(this.ads[i].adgroup);

				if(this.ads[i].adgroup == adgroup)
				{
					console.log('masuk');
					for(let j = 0; j < this.ads[i].ads.length; j++)
					{	
						console.log(this.ads[i].ads[j].id);
						if(this.ads[i].ads[j].id == id)
						{
							console.log('ini nih');
							console.log(this.ads[i].ads[j]);
							Vue.set(this.ads[i].ads[j], 'selected', true);
							this.adSelectedPush(adgroup, id, _.cloneDeep(this.ads[i].ads[j]));
						}
					}
				}
			}
		},
		adSelectedPush : function (adgroup, id, ads) {
			for(let i = 0; i < this.adsSelected.length; i++)
			{
				console.log(this.adsSelected[i].adgroup);

				if(this.adsSelected[i].adgroup == adgroup)
				{
					console.log('masuk');
					this.adsSelected[i].ads.push(ads);
				}
			}

			console.log('tambah ads');
			console.log(this.adsSelected);
		},
		adSelectedNew : function () {
			console.log('tambah iklan baru');

			for(let i = 0; i < this.adsSelected.length; i++)
			{
				console.log(this.adsSelected[i].adgroup);

				if(this.adsSelected[i].adgroup == 'others')
				{
					this.adsSelected[i].ads.push(this.ads_new);
				}
			}

			this.ads_new = { h1 : '', h2 : '', desc : '', du : '', fu : '', p1 : '', p2 : '', selected : false};

			this.reIndexAdsSelected();
		},
		reIndexAdsSelected : function () {
			for(let i = 0; i < this.ads.length; i++)
			{
				Vue.set(this.ads[i], 'id', i);

				for(let j = 0; j < this.ads[i].ads.length; j++)
				{	
					Vue.set(this.ads[i].ads[j], 'id', j);
				}
			}
		},
		reIndexAds : function () {
			console.log('reIndexAds');
			for(let i = 0; i < this.ads.length; i++)
			{
				Vue.set(this.ads[i], 'id', i);
				Vue.set(this.ads[i], 'last_page', Math.ceil((this.ads[i].ads.length + 1) / this.ad_view_max_page));

				for(let j = 0; j < this.ads[i].ads.length; j++)
				{	
					Vue.set(this.ads[i].ads[j], 'id', j);
				}

				console.log(this.ads[i].ads.length + 1);
			}

			
		},
		adsSelectedReset : function()
		{
			console.log('ads reset');
			for(let i = 0; i < this.adsSelected.length; i++)
			{
				Vue.set(this.adsSelected[i], 'ads', []);
			}

			console.log(this.adsSelected);

			for(let i = 0; i < this.ads.length; i++)
			{
				for(let j = 0; j < this.ads[i].ads.length; j++)
				{
					Vue.set(this.ads[i].ads[j], 'selected', false);
				}
			}
		},
		adsSelectedDelete: function(adgroup, id)
		{
			console.log('ads delete');
			for(let i = 0; i < this.adsSelected.length; i++)
			{
				if(this.adsSelected[i].adgroup == adgroup)
				{
					console.log('masuk');
					for(let j = 0; j < this.adsSelected[i].ads.length; j++)
					{	
						if(this.adsSelected[i].ads[j].id == id)
						{
							console.log('masuk');	
							// Vue.delete(this.ads[i].ads, j);
							
							// selected false for ads
							for(let k = 0; k < this.ads.length; k++)
							{
								if(this.ads[k].adgroup == adgroup)
								{
									for(let l = 0; l < this.ads[k].ads.length; l++)
									{	
										if(this.ads[k].ads[l].h1 == this.adsSelected[i].ads[j].h1)
										{
											Vue.set(this.ads[k].ads[l], 'selected', false);
										}
									}
								}
							}

							console.log(this.adsSelected[i].ads[j]);
							this.adsSelected[i].ads.splice(j, 1);
							console.log(this.adsSelected[i]);
						}
					}
				}
			}
		},
		adsSelectedCopy: function (adgroup, id) {
			console.log('ads copy');
			let adgroup_length = this.adsSelected.length;
			for(let i = 0; i < adgroup_length; i++)
			{
				console.log('i ' + i);
				if(this.adsSelected[i].adgroup == adgroup)
				{
					console.log(adgroup);
					let ads_length = this.adsSelected[i].ads.length;

					for(let j = 0; j < ads_length; j++)
					{
						if(this.adsSelected[i].ads[j].id == id)
						{
							let ads_new = {id : 0, h1 : '', h2 : '', desc : '', du : '', fu : '', p1 : '', p2 : '', selected : true};
							Vue.set(ads_new, 'id', ads_length);
							Vue.set(ads_new, 'h1', this.adsSelected[i].ads[j].h1);
							Vue.set(ads_new, 'h2', this.adsSelected[i].ads[j].h2);
							Vue.set(ads_new, 'du', this.adsSelected[i].ads[j].du);
							Vue.set(ads_new, 'fu', this.adsSelected[i].ads[j].fu);
							Vue.set(ads_new, 'desc', this.adsSelected[i].ads[j].desc);
							Vue.set(ads_new, 'p1', this.adsSelected[i].ads[j].p1);
							Vue.set(ads_new, 'p2', this.adsSelected[i].ads[j].p2);
							Vue.set(ads_new, 'selected', true);

							console.log(ads_new);

							// Vue.set(this.adGroups.adgroups[i].ads, j, ads_new);
							this.adsSelected[i].ads.push(_.cloneDeep(ads_new));
							// this.adsSelected[i].ads[j] = ads_new;
							// Vue.set(this.adGroups.adgroups[i].ads[j], 'selected', true);
							console.log(this.adsSelected[i]);

							break;
						}
					}
				}
			}

			this.reIndexAdsSelected();
		},
		adsSelectedEdit: function (adgroup, id, modal) 
		{
			for(let i = 0; i < this.adsSelected.length; i++)
			{
				for(let j = 0; j < this.adsSelected[i].ads.length; j++)
				{
					if(this.adsSelected[i].ads[j].id == id)
					{
						this.ads_edit = this.adsSelected[i].ads[j];
						this.ads_edit.id = id;

						break;
					}
				}
			}

			this.modalShow(modal);
		},
		adsSelectedEditSave: function () 
		{
			console.log('edit save');

			for(let i = 0; i < this.adsSelected.length; i++)
			{
				for(let j = 0; j < this.adsSelected[i].ads.length; j++)
				{
					if(this.adsSelected[i].ads[j].id == this.ads_edit.id)
					{
						console.log('masuk');
						Vue.set(this.adsSelected[i].ads[j], 'h1', this.ads_edit.h1);
						Vue.set(this.adsSelected[i].ads[j], 'h2', this.ads_edit.h2);
						Vue.set(this.adsSelected[i].ads[j], 'du', this.ads_edit.du);
						Vue.set(this.adsSelected[i].ads[j], 'fu', this.ads_edit.fu);
						Vue.set(this.adsSelected[i].ads[j], 'desc', this.ads_edit.desc);
						Vue.set(this.adsSelected[i].ads[j], 'p1', this.ads_edit.p1);
						Vue.set(this.adsSelected[i].ads[j], 'p2', this.ads_edit.p2);

						break;
					}
				}
			}
			this.modalClose();
		},
		nextPageAdsSelected: function () {
			// TODO last page
			if(this.adsSelected.page < 9)
			{
				Vue.set(this.adsSelected, 'page', this.adsSelected.page+1);
			}

			console.log(this.ads.page);
		},
		prevPageAdsSelected: function () {
			if(this.adsSelected.page > 1)
			{
				Vue.set(this.adsSelected, 'page', this.adsSelected.page-1);
			}

			console.log(this.ads);
		},
		editAds : function () {
			if(this.campaignDetailEdited || this.campaignTargetEdited || this.campaignAdsEdited || this.campaignBudgetEdited)
			{
				this.modalShow('save_notification');
				this.confirmNotSavePage = 4;
			}
			else
			{
				this.chooseStep(4);
				this.hideAllCampaigneditView();
			}

			this.ads = [];
			this.adsSelected = [];

			axios.post('/dashboard/getSavedAdgroups', {
				campaign_id : this.campaign.id
			})
			.then((response) => {
				console.log('getSavedAdgroups');

				for(let i = 0; i < response.data.length; i++)
				{
					let ad = {id : 0, adgroup : '', ads : [], page : 1};
					Vue.set(ad, 'adgroup', response.data[i].name);
					Vue.set(ad, 'ads', []);
					Vue.set(ad, 'page', 1);

					this.ads.push(ad);

					let adCopy = {id : 0, adgroup : '', ads : [], page : 1};
					Vue.set(adCopy, 'adgroup', response.data[i].name);
					Vue.set(adCopy, 'ads', []);
					Vue.set(adCopy, 'page', 1);
					this.adsSelected.push(adCopy);
				}

				Vue.set(this.adsSelected, 'page', 1);

				console.log(this.ads);

				for(let i = 0; i < this.ads.length; i++)
				{
					this.getSavedAds(this.ads[i].adgroup);
				}

				
				$("#editAds").removeClass('hidden');
			});

		},
		getSavedAds: function (adgroup) {
			axios.post('/dashboard/getSavedAds', {
				campaign_id : this.campaign.id,
				adgroup : adgroup
			})
			.then((response) => {
				console.log('getSavedAds');

				for(let i = 0; i < this.ads.length; i++)
				{
					if(this.ads[i].adgroup == adgroup)
					{
						Vue.set(this.ads[i], 'ads', _.values(response.data));
						Vue.set(this.ads[i], 'id', i);
						let last_page = Math.ceil((response.data.length + 1) / this.ad_view_max_page);
						Vue.set(this.ads[i], 'last_page', last_page);

						for(let j = 0; j < this.ads[i].ads.length; j++)
						{
							Vue.set(this.ads[i].ads[j], 'iklankuId', this.ads[i].ads[j].id);
							Vue.set(this.ads[i].ads[j], 'id', j);
							Vue.set(this.ads[i].ads[j], 'selected', true);
							Vue.set(this.ads[i].ads[j], 'deleted', false);
						}
					}

					// adsSelected
					if(this.adsSelected[i].adgroup == adgroup)
					{
						Vue.set(this.adsSelected[i], 'ads', _.values(response.data));
						Vue.set(this.adsSelected[i], 'id', i);
						let last_page = Math.ceil((response.data.length + 1) / this.ad_view_max_page);
						Vue.set(this.adsSelected, 'last_page', last_page);

						for(let j = 0; j < this.adsSelected[i].ads.length; j++)
						{
							Vue.set(this.adsSelected[i].ads[j], 'id', j);
							Vue.set(this.adsSelected[i].ads[j], 'selected', true);
							Vue.set(this.adsSelected[i].ads[j], 'deleted', false);
						}
					}
				}

				this.keywords_loading = false;

				console.log(this.ads);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		backState : function(state)
		{
			if(state < this.campaign.wizard_state)
				this.campaign.wizard_state = state;
		},
		changeCampaignCost : function(){
			if(this.editCampaignCost == false)
				this.editCampaignCost = true;
			else
				this.editCampaignCost = false;
		},
		changeCampaignCostSave : function() {
			this.editCampaignCost = false;
			this.campaignBudgetEdited = true;

			let diffSaldoAwal = this.new_campaign_cost - this.campaign.campaign_budget;
			let diffSisaSaldo = this.newSisaBudget - this.sisaBudget;

			let topupValue = diffSaldoAwal + diffSisaSaldo;

			let diff = diffSaldoAwal + diffSisaSaldo;

			axios.post('/dashboard/getSaldo', {

			})
			.then((response) => {
				console.log(response.data);
				
				this.saldoKurang = Math.abs(parseInt(response.data) - diff); 
				$("#saldo_kurang").removeClass('hidden');
				$("#saldo_kurang").addClass('box-flex');
			})
			.catch(function (error) {
				console.log(error);
			});

		},
		changeSisaBudget : function(){
			if(this.editSisaBudget == false)
				this.editSisaBudget = true;
			else
				this.editSisaBudget = false;
		},
		changeSisaBudgetSave : function(){
			this.editSisaBudget = false;
			this.campaignBudgetEdited = true;

			this.editCampaignCost = false;
			this.campaignBudgetEdited = true;

			let diffSaldoAwal = this.new_campaign_cost - this.campaign.campaign_budget;
			let diffSisaSaldo = this.newSisaBudget - this.sisaBudget;

			let topupValue = diffSaldoAwal + diffSisaSaldo;

			let diff = diffSaldoAwal + diffSisaSaldo;

			axios.post('/dashboard/getSaldo', {

			})
			.then((response) => {
				console.log(response.data);

				this.saldoKurang = Math.abs(parseInt(response.data) - diff); 
				$("#saldo_kurang").removeClass('hidden');
				$("#saldo_kurang").addClass('box-flex');
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		updateCampaignBudget : function() {
			$("#budget_less").addClass('hidden');
			this.updateLoading = true;
			this.resetFlagMovePage();

			let diffSaldoAwal = this.new_campaign_cost - this.campaign.campaign_budget;
			let diffSisaSaldo = this.newSisaBudget - this.sisaBudget;

			// kasus nurunin budget
			if(diffSaldoAwal < 0)
			{
				let refund = Math.abs(diffSaldoAwal);
				console.log(this.campaign.spending);
				console.log(refund);

				let budget_sisa = this.campaign.campaign_budget - this.campaign.spending;
				if(refund > budget_sisa)
				{
					$("#budget_less").removeClass('hidden');

					return;
				}
				else
				{
					this.campaign.campaign_budget -= refund;
				}
			}

			if(diffSisaSaldo < 0)
			{
				let refund = Math.abs(diffSisaSaldo);
				console.log(this.campaign.spending);
				console.log(refund);

				let budget_sisa = this.campaign.campaign_budget - this.campaign.spending;
				if(refund > budget_sisa)
				{
					$("#budget_less").removeClass('hidden');

					return;
				}
				else
				{
					this.campaign.campaign_budget -= refund;
				}
			}

			let topupValue = diffSaldoAwal + diffSisaSaldo;
			let diff = diffSaldoAwal + diffSisaSaldo;

			console.log(diff);

			axios.post('/dashboard/checkSaldo', {
				diff : diff
			})
			.then((response) => {
				console.log(response.data);
				if(!response.data)
				{
					axios.post('/dashboard/getSaldo')
					.then((response) => {
						this.currentSaldo = parseInt(response.data)
						this.diffSaldo = diff;
						this.topupValue = topupValue;
						this.modalShow('modal_need_topup');
					})
				}
				else
				{
					axios.post('/dashboard/updateCampaignBudgetSaldo', {
						campaign_id : this.campaign.id,
						price : diff
					})
					.then((response) => {
						console.log(response.data);

						this.editSisaBudget = false;
						this.editCampaignCost = false;

						this.campaign.campaign_budget = this.new_campaign_cost;
						this.sisaBudget = this.campaign.campaign_budget - this.campaign.spending;

						$("#budget_notification").removeClass('hidden');
						$("#budget_notification").addClass('box-flex');

						$("#saldo_sidebar").text("Rp " + this.formatNumber(response.data));

						this.updateLoading = false;
						this.modalClose()


						this.hideAllCampaigneditView();

						this.campaign = [];
						this.getEditCampaign(5).then(() => {
							// flag change page
							this.resetFlagMovePage();

							this.new_campaign_cost = this.campaign.campaign_budget;
							this.sisaBudget = this.campaign.campaign_budget - this.campaign.spending;
							this.newSisaBudget = this.sisaBudget;
							
							$("#editCampaignBudget").removeClass('hidden');


						});
						this.chooseStep(5);
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			})
			.catch(function (error) {
				console.log(error);
			});

		},
		topUpUser: function () {
			window.location = "/dashboard/topup-update-budget/" + this.campaign.user_id + '/' + this.campaign.id + '/' + this.topupValue;
			this.modalClose()
		},
		savePeriod : function(){
			axios.post('/dashboard/saveCampaignPeriod', {
				campaign_id : this.campaign.id,
				period : this.campaign.period
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		changeStateAddKeyword : function (type){
			this.addKeywordState = type;

		},
		editCreateCampaign : function(state) {
			$("#detail_campaign_save").addClass('hidden');
			$("#setting_campaign_save").addClass('hidden');

			if(this.campaignDetailEdited || this.campaignTargetEdited || this.campaignAdsEdited || this.campaignBudgetEdited)
			{
				this.modalShow('save_notification');
				this.confirmNotSavePage = 1;
			}
			else
			{
				
				this.hideAllCampaigneditView();

				this.campaign = [];
				this.getEditCampaign(1).then(() => {
					console.log(this.campaignDetailEdited);
					// flag change page
					this.resetFlagMovePage();

					
					$("#editCreateCampaign").removeClass('hidden');
				});
				this.chooseStep(1);
			}
		},
		resetFlagMovePage : function() {
			this.campaignDetailEdited = false;
			this.campaignTargetEdited = false;
			this.campaignKeywordEdited = false;
			this.campaignAdsEdited = false;
			this.campaignBudgetEdited = false;
		},
		toNextStep : function() {
			// flag change page
			this.campaignDetailEdited = false;
			this.campaignTargetEdited = false;
			this.campaignKeywordEdited = false;
			this.campaignAdsEdited = false;
			this.campaignBudgetEdited = false;

			this.chooseStep(this.confirmNotSavePage);
			this.modalClose();
		},
		editCampaignBudget : function(state) {
			if(this.campaign.status != 'ACTIVE')
			{
				this.modalShow('budget_campaign_not_active');
				return;
			}

			if(this.campaignDetailEdited || this.campaignTargetEdited || this.campaignAdsEdited || this.campaignBudgetEdited)
			{
				this.modalShow('save_notification');
				this.confirmNotSavePage = 5;
			}
			else
			{
				

				this.hideAllCampaigneditView();

				this.campaign = [];
				this.getEditCampaign(5).then(() => {
					// flag change page
					this.resetFlagMovePage();
					
					$("#editCampaignBudget").removeClass('hidden');
				});
				this.chooseStep(5);

				// // $("#progress_bar").removeClass('is-danger');
				// // $("#progress_bar").removeClass('progress');
				// // $("#progress_bar").removeClass('is-safe');
				// // $("#progress_bar").removeClass('progress-safe');

				// if(Math.round((this.sisaBudget/this.campaign.campaign_budget)*100) <= 20)
				// {
				// 	$("#progress_bar").addClass('is-danger');
				// 	$("#progress_bar").addClass('progress');
				// }
				// else
				// {
				// 	$("#progress_bar").addClass('is-safe');
				// 	$("#progress_bar").addClass('progress-safe');

				// 	console.log('masuk');
				// }


				// this.hideAllCampaigneditView();
				// $("#editCampaignBudget").removeClass('hidden');
			}
		},
		editCampaignTarget : function (state) {
			$("#detail_campaign_save").addClass('hidden');
			$("#setting_campaign_save").addClass('hidden');

			if(this.campaignDetailEdited || this.campaignTargetEdited || this.campaignAdsEdited || this.campaignBudgetEdited)
			{
				this.modalShow('save_notification');
				this.confirmNotSavePage = 2;
			}
			else
			{
				
				this.hideAllCampaigneditView();
				
				this.campaign = [];
				this.getEditCampaign(2).then(() => {
					console.log(this.campaignDetailEdited);
					// flag change page
					this.resetFlagMovePage();

					
					$("#editCampaignTarget").removeClass('hidden');
				});
				this.chooseStep(2);
			}
		},
		hideAllCampaigneditView : function () {
			$("#editCreateCampaign").addClass('hidden');
			$("#editCampaignTarget").addClass('hidden');
			$("#editKeyword").addClass('hidden');
			$("#editAds").addClass('hidden');
			$("#editCampaignBudget").addClass('hidden');
		},
		editAddKeyword : function() {
			let url = '/dashboard/campaign/edit/add-keyword/' + this.campaign.id;

			this.redirect(url);
		},
		onFileChange(e) {
			console.log('file');
			var fileToLoad = document.getElementById("file_keyword").files[0];
			var fileReader = new FileReader();

			fileReader.onload = (fileLoadedEvent) => {
				let type = fileToLoad.name.substring(fileToLoad.name.length - 3, fileToLoad.name.length);
				if (type != 'txt' && type != 'csv' )
				{
					this.modalShow('file_type_not_found');
					return;
				}

				var textFromFileLoaded = fileLoadedEvent.target.result;

				$('#keyword_manual').val(textFromFileLoaded);
				$('#keyword_manual').focus();
				this.keywords_manual_list = textFromFileLoaded;
			};

			fileReader.readAsText(fileToLoad, "UTF-8");	
		},
		uploadKeyword : function () {
			$("#file_keyword").click();
		},
		paymentStep : function() {
			$("#paymentStepForm").submit();
		},
		campaignGoalModal : function() {
			this.campaign.goal = this.campaign.goal || 'Tingkatkan Kunjungan Website';
			this.modalShow('goal-modal');
		},
		keywordCpc : function(cpc) {
			cpc = Math.round(keyword.cpc/1000000);

			if(cpc <= 0)
				cpc = 1000;

			console.log(cpc);

			return cpc;
		},
		editCampaignAddKeyword : function() {
			this.getKeywordManual().then(() => {
				for(let i = 0; i < this.keywords_manual.length; i++)
				{
					Vue.set(this.keywords_manual[i], 'selected', true);
					Vue.set(this.keywords_manual[i], 'adgroup', this.adGroups[0].id);
				}

				this.modalClose();
				this.modalShow('add_keyword_select');
			});
		},
		getSavedAdgroup : function() {
			axios.post('/dashboard/getSavedAdgroups', {
				campaign_id : this.campaign.id
			})
			.then((response) => {
				console.log('getSavedAdgroups');

				this.adGroups = response.data;
				console.log(this.adGroups);
			});
		}, 
		updateCampaignKeyword : function () {
			this.keywords_manual_loading = true;
			axios.post('/dashboard/updateCampaignKeyword', {
				campaign_id : this.campaign.id,
				keywords : this.keywords_manual,
				customer_id : this.campaign.customer_id
			})
			.then((response) => {
				console.log('updateCampaignKeyword');

				console.log(response.data);
				this.editKeyword();

				this.campaign.selected_keyword = this.keywords.length;

				this.keywords_manual_loading = false;

				this.modalClose();
			});
		},
		drop: function(ev) {
			ev.preventDefault();

			var dt = ev.dataTransfer;

			if (dt.items) 
			{
		    	// Use DataTransferItemList interface to access the file(s)
		    	for (var i=0; i < dt.items.length; i++) {
		    		if (dt.items[i].kind == "file") {
		    			var f = dt.items[i].getAsFile();

		    			let type = f.name.substring(f.name.length - 3, f.name.length);

		    			if(type != 'txt' && f.type != 'csv' )
		    			{
		    				this.modalShow('file_type_not_found');

		    				return false;
		    			}

		    			console.log(f);
		    			var fileToLoad = f;

		    			var fileReader = new FileReader();

		    			fileReader.onload = (fileLoadedEvent) => {
		    				var textFromFileLoaded = fileLoadedEvent.target.result;

		    				$('#keywords_manual_list').val(textFromFileLoaded);
		    				$('#keywords_manual_list').focus();
		    				this.keywords_manual_list = textFromFileLoaded;
		    			};

		    			fileReader.readAsText(fileToLoad, "UTF-8");	

		    			console.log("... file[" + i + "].name = " + f.name);
		    		}
		    	}
		    } else {
		    	// Use DataTransfer interface to access the file(s)
		    	for (var i=0; i < dt.files.length; i++) {
		    		console.log("... file[" + i + "].name = " + dt.files[i].name);
		    	}  
		    }

		    return false;
		},
		keywordManualProceed : function (updateState = true) {
			let char = this.keywords_manual_list;

			if (/^\s*$/.test(char))
			{
				this.modalShow('keyword_manual_whitespace');
			}
			else
			{
				if (updateState) {
					console.log('aa')
					this.getKeywordManual().then(() => {
						this.keywordManualState = 2;
					});
				} else {
					this.modalShow('keyword_manual');
					axios.post('/dashboard/getManualKeywordSuggestion', {keywords: this.keywords_manual_list}).then(response => {
						this.keywords_manual = response.data.keywords.map(item => {
							Vue.set(item, 'selected', false)
							Vue.set(item, 'keyword', item.text)
							Vue.set(item, 'cpc', item.avgCpc)
							Vue.set(item, 'volume', item.searchVolume)
                        	// item.selected = false
                        	return {
                        		selected: false,
                        		keyword: item.text,
                        		cpc: item.avgCpc,
                        		volume: item.searchVolume
                        	}
                        })
					})
				}
			}
		},
		addManualKeyword: function () {
			this.addToKeywordSelected()
			this.modalClose()
			// console.log(this.keyword_manual.filter(item => item.selected))
		},
		maskingPeriod : function (period) {
			if(period == 14)
				return '2 Minggu';
			else if(period == 30)
				return '1 Bulan';
			else if(period == 90)
				return '3 Bulan';
			else
				return '6 Bulan';
		},
		changeKeywordManualState : function () {
			this.keywordManualState = 1;
		},
		percentageSisaBudget : function() {
			if(this.sisaBudget == 0)
				return 0;
			else
				return Math.round((this.sisaBudget/this.campaign.campaign_budget)*100);
		},
		leftPad : function (number, targetLength) {
			var output = number + '';
			while (output.length < targetLength) {
				output = '0' + output;
			}
			return output;
		},
		titleMasking : function (title) {
			let substring = "{Keyword:";
			if(title.includes(substring))
			{
				let length = title.length - 1;
				return (title.substring(9, length));
			}
			else
			{
				return title;
			}
		}
	},
	mounted() {
		console.log('lagi di step1')
        this.$ga.page('/dashboard/campaign/wizard/step1')
        ga('send', 'pageview', location.pathname+'/step1')

		$("#campaign_wizard").show();

		let edit = $("#wizard-edit").val();
		if(edit == 'edit')
		{
			this.getEditCampaign().then(() => {
				$("#editCreateCampaign").removeClass('hidden');

				this.new_campaign_cost = this.campaign.campaign_budget;
				this.sisaBudget = this.campaign.campaign_budget - this.campaign.spending;
				this.newSisaBudget = this.sisaBudget;
				this.getCompanyProfile();
				this.getProvincesWithCities();

				this.getSavedAdgroup();

				// flag change page
				this.campaignDetailEdited = false;
				this.campaignTargetEdited = false;
				this.campaignKeywordEdited = false;
				this.campaignAdsEdited = false;
				this.campaignBudgetEdited = false;
			});
		}
		else
		{
			this.getCurrentCampaign().then(() => {
				this.new_campaign_cost = this.campaign.campaign_budget;

				this.getCompanyProfile();

				if(this.campaign.cities == null || this.campaign.cities == 'Indonesia')
				{
					this.getProvincesWithCities().then(() => {
						this.locationsToSelectedAll();
						this.locationsSelectedSave();

						this.campaign.cities = 'Indonesia';
					});
				}
				else
				{
					this.getProvincesWithCities();
				}
			});
		}
		
		this.campaignState = $("#campaign-state").val();
		if(this.campaignState)
			this.headerTitle = 'Iklan Anda';


		// this.getVerticalList();
	}
})