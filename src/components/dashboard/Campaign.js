import React, { Component } from 'react';

export default class Campaign extends Component {
	render() {
		return (
			<div id="campaign">
			  <div className="dashboard-content">
			    <h1 className="title is-1 is-marginless">Kampanye Iklan</h1>
			    <h2 className="title is-4">Berikut adalah daftar kampanye yang sedang dan sudah berjalan dari akun Anda</h2>
			    <a href="/dashboard/campaign/wizard" className="button is-primary">Tambah Kampanye Baru</a>
			  </div>
			  <table className="table table-margin-keyword">
			    <thead>
			      <tr>
			        <th><span>Nama Kampanye</span></th>
			        <th><span>Tanggal Dibuat</span></th>
			        <th><span>Status</span></th>
			        <th><span>Budget</span></th>
			        <th><span>Aksi</span></th>
			      </tr>
			    </thead>
			    <tbody id="keywords">
			      <tr v-for="(campaign, index) in campaigns">
			        <td>
			          <a v-if="campaign.status == 'ACTIVE'">{'{'}{'{'} campaign.campaign_name {'}'}{'}'}</a>
			          <a v-if="campaign.status != 'ACTIVE'">{'{'}{'{'} campaign.campaign_name {'}'}{'}'}</a>
			        </td>
			        <td>campaign.date</td>
			        <td>maskingStatus(campaign.status)</td>
			        <td>formatNumber(campaign.campaign_budget)</td>
			        <td style={{paddingLeft: '0.8rem'}}>
			          <span v-if="campaign.status == 'ACTIVE' || campaign.status == 'PAUSE'">
			            <i v-if="campaign.status == 'PAUSE'" className="fa fa-play-circle-o is-text-blue" aria-hidden="true" /> &nbsp;
			            <i v-if="campaign.status == 'ACTIVE'" className="fa fa-pause-circle-o is-text-blue" aria-hidden="true" /> &nbsp;
			            <i v-if="campaign.status != 'STOP'" className="fa fa-stop-circle-o is-text-red" aria-hidden="true" /></span></td>
			      </tr>
			    </tbody>
			  </table>
			</div>
		);
	}
}
