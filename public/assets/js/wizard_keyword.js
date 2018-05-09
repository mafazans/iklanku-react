var app = new Vue({
	el: '#campaign_wizard',
	data: {
		campaign : [],
		keywords : [],
		keywordsTemp : [],
		keywords_selected : [],
		on_queue_keyword_selected : 0,
		keywords_competitor_search : '',
		keywords_competitor : [],
		keywordsCompetitorTemp : [],
		keywords_manual : [],
		keywords_manual_list : '',
		keywords_loading : false,
		keywordsManualTemp : [],
		adGroups : [],
		ads : [],
		adsSelected : [],
		is_keyword_selected_all : false,
		keyword_page : 'Keyword Rekomendasi',
		keywords_competitor_loading : false,
		keywords_manual_loading : false,
		filterByData : '',
		campaignState : 1,
		keywordFilterDropdown : 'none',
		keywordSummaryFilterDropdown : "none",
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
        addKeywordState : "automatic"
	},
	watch: {
		 
	},
	methods: {
		getEditCampaign: function () {
			return axios.post('/dashboard/getEditCampaign', {
				campaign_id: $("#campaign_id").val()
			})
			.then((response) => {
				console.log(response.data)
				this.campaign = response.data;

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

				console.log(this.campaign);
				return Promise.resolve();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		sortBy: function (data, dataKey, key, by) {
			data = _.orderBy(data, [key], [by]);

			if(dataKey == 'keywords')
			{
				this.keywords = data;
				console.log(data);
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
			.catch(function (error) {
				console.log(error);
			});
		},
		getAdwordsIdeaGroup: function () {
			axios.post('/dashboard/getAdwordsIdeaGroup', {
				campaign : this.campaign
			})
			.then((response) => {
				this.keywords = response.data.keywords;

				for(let i = 0; i < this.keywords.length; i++)
				{
					Vue.set(this.keywords[i], 'selected', false);
					Vue.set(this.keywords[i], 'id', i);
					this.source = '';
				}
				console.log('keywords');
				console.log(this.keywords);
			})
			.catch(function (error) {
				console.log(error);
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

				// save keyword database
				this.saveKeywordsDatabase();

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

				
				Vue.set(this.adsSelected, 'page', 1);

				for(let i = 0; i < response.data.length; i++)
				{
					this.getAds(this.ads[i].adgroup);
				}
				
				console.log(this.ads);
				console.log(this.adsSelected);
				
				this.nextStep();
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		getAds: function (adgroup) {
			axios.post('/dashboard/getAds', {
				campaign : this.campaign,
				adgroup : adgroup
			})
			.then((response) => {
				console.log('getAds');

				for(let i = 0; i < this.ads.length; i++)
				{
					if(this.ads[i].adgroup == adgroup)
					{
						Vue.set(this.ads[i], 'ads', _.values(response.data));
						Vue.set(this.ads[i], 'id', i);
						let last_page = Math.ceil((response.data.length + 1) / this.ad_view_max_page);
						Vue.set(this.ads, 'last_page', last_page);

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

				// console.log(this.ads);
			})
			.catch(function (error) {
				console.log(error);
			});
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
			this.keyword_page = page;
		},

		chooseStep: function (step) {
			console.log(step);
			this.campaign.wizard_state = step;
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
		modalShow: function (modal) {
			$('html').addClass('is-clipped');
			$("#" + modal).addClass('is-active');
		},
		modalClose: function () {
			$('html').removeClass('is-clipped');
			$('.modal').removeClass('is-active');
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
		selectAllKeyword: function () {
			for(let i = 0; i < this.keywords.length; i++)
			{
				if(this.is_keyword_selected_all)
					this.keywords[i].selected = true;
				else
					this.keywords[i].selected = false;
			}
		},
		redirect: function (url) {
			$("#close-state").val('order');
			window.location.href = url;
		},
		getKeywordCompetitor: function() {
			this.keywords_competitor_loading = true;

			axios.post('/dashboard/getKeywordSuggestionByUrl', {
				campaign : this.campaign, 
				url : this.keywords_competitor_search
			})
			.then((response) => {
				this.keywords_competitor = response.data.keywords;

				for(let i = 0; i < response.data.keywords.length; i++)
				{
					Vue.set(this.keywords_competitor[i], 'keyword', response.data.keywords[i].text);
					Vue.set(this.keywords_competitor[i], 'volume', response.data.keywords[i].searchVolume);
					Vue.set(this.keywords_competitor[i], 'cpc', response.data.keywords[i].avgCpc);
					Vue.set(this.keywords_competitor[i], 'selected', false);
					Vue.set(this.keywords_competitor[i], 'id', i);
					Vue.set(this.keywords_competitor[i], 'source', this.keywords_competitor_search);
				}

				// console.log(1);

				this.keywords_competitor_loading = false;

				console.log(2);

				console.log('keywords keywords competitor');
				console.log(this.keywords_competitor);

				this.keywords_competitor_search = '';
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		onKeywordChange: function (keywords) {
			let selected_keyword = 0;
			for(let i = 0; i < keywords.length; i++)
			{
				if(keywords[i].selected)
				{
					selected_keyword = selected_keyword + 1;
				}
			}

			this.on_queue_keyword_selected = selected_keyword;
		},
		getKeywordManual: function() {
			this.keywords_manual_loading = true;

			axios.post('/dashboard/getKeywordManual', {
				campaign : this.campaign, 
				keywords : this.keywords_manual_list
			})
			.then((response) => {
				console.log('keywords keywords manual');
				this.keywords_manual = response.data;

				console.log(response.data);
				console.log(this.keywords_manual);

				for(let i = 0; i < response.data.length; i++)
				{
					console.log(response.data[i]);
					Vue.set(this.keywords_manual[i], 'keyword', response.data[i].text);
					Vue.set(this.keywords_manual[i], 'volume', response.data[i].searchVolume);
					Vue.set(this.keywords_manual[i], 'cpc', response.data[i].avgCpc);
					Vue.set(this.keywords_manual[i], 'selected', false);
					Vue.set(this.keywords_manual[i], 'id', i);
					Vue.set(this.keywords_manual[i], 'source', 'manual');
					console.log(this.keywords_manual[i]);
				}

				this.keywords_manual_loading = false;

			})
			.catch(function (error) {
				console.log(error);
			});
		},
		calculateKeywordSummary: function() {
			let selected_keyword = 0;
			let estimate_click = 0;
			let campaign_cost = 0;

			for(let i = 0; i < this.keywords_selected.length; i++)
			{
				selected_keyword = selected_keyword + 1;
				estimate_click = estimate_click + this.keywords_selected[i].volume;
				campaign_cost = campaign_cost + ((Math.round(this.keywords_selected[i].cpc/1000000) * this.keywords_selected[i].volume) * 0.2);
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
		getFilterAutomaticKeyword : function(field) {
			if(this.filterAutomaticKeywordValue){
                if(this.filterAutomaticKeywordOption == "="){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .equals(field,this.filterAutomaticKeywordValue)
                        .select();
                }else if(this.filterAutomaticKeywordOption == "!="){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .not()
                        .equals(field, this.filterAutomaticKeywordValue)
                        .select();
                }else if(this.filterAutomaticKeywordOption == "like"){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .contains(field, this.filterAutomaticKeywordValue)
                        .select();
                }else if(this.filterAutomaticKeywordOption == "!like"){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .not()
                        .contains(field, this.filterAutomaticKeywordValue)
                        .select();
                }else if(this.filterAutomaticKeywordOption == "startWith"){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .startsWith(field, this.filterAutomaticKeywordValue)
                        .select();
                }else if(this.filterAutomaticKeywordOption == "!startWith"){
                    this.keywordsTemp = this.keywords;
                    this.keywords = jLinq.from(this.keywords)
                        .ignoreCase()
                        .not()
                        .startsWith(field, this.filterAutomaticKeywordValue)
                        .select();
                }
			}else{
				this.keywords = this.keywordsTemp;
			}

			this.keywordFilterDropdown = "none";
			this.ulKeywordFilterDropdown = "none";

		},
        getFilterManualKeyword : function(field) {
            if(this.filterManualKeywordValue){
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
            }else{
                this.keywords_manual = this.keywordsManualTemp;
            }

            this.keywordFilterDropdown = "none";
            this.ulKeywordFilterDropdown = "none";

        },
        getFilterCompetitorKeyword : function(field) {
            if(this.filterCompetitorKeywordValue){
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
			this.chooseStep(3);

			let campaign_id = $("#campaign_id").val();

			axios.post('/dashboard/getKeywordCampaign', {
				campaign_id : campaign_id
			})
			.then((response) => {
				console.log('keyword selected');
				console.log(response.data);
				this.keywords = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		changeStateAddKeyword : function (type){
			this.addKeywordState = type;
		},
    	saveEditKeywords : function() {
    		this.keywords_loading = true;

    		axios.post('/dashboard/saveKeywords', {
				uuid : this.campaign.uuid,
				keywords: this.keywords_selected
			})
			.then((response) => {
				console.log('saveKeywords');
				console.log(response.data);

				axios.post('/dashboard/getAdgroups', {
					campaign : this.campaign
				})
				.then((response) => {
					console.log('getAdgroups');

					// save keyword database
					axios.post('/dashboard/saveKeywordsDatabase', {
						uuid : this.campaign.uuid,
						campaign_id : this.campaign.id
					})
					.then((response) => {
						console.log('saveKeywordsDatabase');
						console.log(response.data);

						this.keywords_loading = false;

						this.redirect('/dashboard/campaign/edit/' + this.campaign.id);
					})
					.catch(function (error) {
						console.log(error);
					});
					
				})
				.catch(function (error) {
					console.log(error);
				});
			})
			.catch(function (error) {
				console.log(error);
			});
    	}
	},
	mounted() {
		this.getEditCampaign().then(() => {
			this.campaign.selected_keyword = 0;
			this.getAdwordsIdea().then(() => {
				this.getAdwordsIdeaGroup();
			});
		});
	}
})