import React, { Component } from 'react';

export default class Wizard1 extends Component {
	render() {
		return (
			<div v-if="campaign.wizard_state == 1">
			  <h1 className="title is-2" v-text="headerTitle" v-cloak />
			  <p>Lengkapilah formulir di bawah ini untuk membuat iklan pertama Anda di Google.</p>
			  <div className="columns is-vcentered">
			    <div className="column is-1h is-offset-2h box-flex">
			      <label className="label has-text-right is-marginless">Nama Kampanye</label>
			      <a data-tooltip="Sebuah struktur yang berisi kelompok-kelompok iklan. Satu kelompok iklan biasanya berisi kumpulan teks/gambar iklan. Kampanye dibuat berdasarkan pengkategorian tertentu. Bisa dibuat berdasarkan event misalnya Promo Lebaran, kategori produk yang ditawarkan, sampai gender atau kota domisili audiens yang disasar."><span className="is-text-blue"><i className="mdi mdi-information font08 ml03" /></span></a>
			    </div>
			    <div className="column is-5 pr0">
			      <div className="field">
			        <div className="control box-flex">
			          <span className="doubledot">:</span>
			          <input id="campaign_name" name="campaign_name" className="input input-custom" type="text" placeholder="Misal: Promo Awal Bulan" v-model="campaign.campaign_name" required />
			        </div>
			      </div>
			    </div>
			  </div>
			  <div id="error_campaign_name" className="columns is-vcentered hidden">
			    <div className="column is-1h is-offset-2h box-flex" />
			    <div className="column is-5 pr0">
			      <div className="field">
			        <div className="control box-flex">
			          <span className="doubledot" />
			          <p className="notif-error" style={{paddingLeft: 4}}>Nama Kampanye harus diisi.</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="columns is-vcentered">
			    <div className="column is-1h is-offset-2h box-flex">
			      <label className="label has-text-right">Tautan Situs Anda</label>
			    </div>
			    <div className="column is-5 pr0">
			      <div className="field">
			        <div className="control box-flex ">
			          <span className="doubledot">:</span>
			          <input id="url" name="url" className="input input-custom" type="text" v-model="campaign.url" placeholder="Misal: www.iklansaya.id" required />
			        </div>
			      </div>
			    </div>
			  </div>
			  <div id="error_url" className="columns is-vcentered hidden">
			    <div className="column is-1h is-offset-2h box-flex" />
			    <div className="column is-5 pr0">
			      <div className="field">
			        <div className="control box-flex">
			          <span className="doubledot" />
			          <p className="notif-error" style={{paddingLeft: 4}}>Tautan situs anda harus diisi.</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div id="error_url_valid" className="columns is-vcentered hidden">
			    <div className="column is-1h is-offset-2h box-flex" />
			    <div className="column is-5 pr0">
			      <div className="field">
			        <div className="control box-flex">
			          <span className="doubledot" />
			          <p className="notif-error" style={{paddingLeft: 4}}>Maaf, tautan yang Anda masukkan tidak terbaca oleh sistem. Mohon periksa kembali tautan Anda.</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <a className="button is-primary pad-button">Lanjutkan</a>
			</div>
		);
	}
}
