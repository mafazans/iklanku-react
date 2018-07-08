import React, { Component } from 'react';

export default class Dashboard extends Component {
	render(){
		return(
			<div className="dashboard-content">
			  <h1 className="title is-1 is-marginless">Selamat datang,<br />arif mafazan simohartono</h1>
			  <h2 className="title is-4 pt1">Apa yang ingin Anda kerjakan saat ini?</h2>
			  <div className="tile is-ancestor">
			    <div className="tile is-6 is-vertical is-parent no-left">
			      <a href="dashboard/report">
			        <div className="tile is-parent box-dashboard">
			          <div className="tile is-3 is-child">
			            <div className="media">
			              <i className="pe pe-7s-graph has-text-centered" />
			            </div>
			          </div>
			          <div className="tile is-child">
			            <div className="content campaign-text has-text-left">
			              <p>Laporan Iklan</p>
			              <small>Bagaimana performa kampanye yang sudah Anda jalankan? Lihat laporannya di sini.
			              </small>
			            </div>
			          </div>
			        </div>
			      </a>
			      <a href="/campaign-wizard">
			        <div className="tile is-parent box-dashboard">
			          <div className="tile is-3 is-child">
			            <div className="media">
			              <i className="pe pe-7s-note has-text-centered" />
			            </div>
			          </div>
			          <div className="tile is-child">
			            <div className="content campaign-text has-text-left">
			              <p>Buat Iklan Baru</p>
			              <small>Produk baru? Promo baru? Kenapa tidak dibuat kampanye baru, klik di sini
			                untuk melakukannya.
			              </small>
			            </div>
			          </div>
			        </div>
			      </a>
			      <a href="{{ route('topup-get') }}">
			        <div className="tile is-parent box-dashboard-last">
			          <div className="tile is-3 is-child">
			            <div className="media">
			              <i className="pe pe-7s-piggy has-text-centered" />
			            </div>
			          </div>
			          <div className="tile is-child">
			            <div className="content campaign-text has-text-left">
			              <p>Top-up Saldo</p>
			              <small>Saldo iklan menipis? Perlu anggaran untuk kampanye baru? Isi ulang saldo iklan
			                Anda di sini.
			              </small>
			            </div>
			          </div>
			        </div>
			      </a>
			    </div>
			    <div className="tile is-parent">
			      <div id="chart_not_found" className="box-blank has-text-centered" style={{padding: '11rem 3rem'}}>
			        <div className="content">
			          <p>Maaf, saat ini Anda tidak memiliki kampanye yang sedang/sudah berjalan. Silakan jalankan kampanye Anda terlebih dahulu dengan klik tombol di bawah</p>
			        </div>
			        <div className="block">
			          <a href="/dashboard/campaign" className="button is-primary">Kelola Kampanye</a>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

// 2 div setelah Kelola kampany
// <div className="tile is-child box-dashboard-img hidden" style={{backgroundColor: 'white', padding: 0}} id="canvas_wrapper">
//   <div className="columns">
//     <div className="column">
//       <ul className="parameter-cart">
//         <li className="view-circle"><i className="fa fa-circle" aria-hidden="true" />Jumlah Tayangan
//         </li>
//         <li className="click-circle"><i className="fa fa-circle" aria-hidden="true" />Jumlah Klik</li>
//       </ul>
//     </div>
//     <div className="column">
//       <div className="field is-grouped">
//         <a className="button but-dash is-keyword" data-day="1day" onclick="getReport(this)">Hari Ini</a>
//         <a className="button but-dash is-keyword active" data-day="7day" onclick="getReport(this)">7 Hari Terakhir</a>
//         <a className="button but-dash is-keyword" data-day="30day" onclick="getReport(this)">30 Hari Terakhir</a>
//       </div>
//     </div>
//   </div>
//   <div id="loading_chart" className style={{marginTop: 180}}>
//     <div className="wrapper-loading">
//       <img src="/assets/img/logo-iklanku.png" width="60px" />
//       <div className="loading">
//         <span />
//         <span />
//         <span />
//       </div>
//     </div>
//   </div>
//   <canvas id="canvas" width={455} height={455} className="hidden" />
// </div>