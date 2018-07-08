import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideNav extends Component {
	render(){
		return(
			<div className="left-aside">
			  <div className="logo">
			    <Link to="/dashboard"><img src="/assets/img/logo.svg" width={40} height={40} alt="IklanKu" /> IklanKu</Link>
			  </div>
			  <ul className="side-nav">
			    <Link to="/dashboard"><li>Dashboard</li></Link>
			    <Link to="/dashboard/campaign"><li>Kampanye</li></Link>
			    <Link to="/dashboard/laporan"><li>Laporan</li></Link>
			    <Link to="/dashboard/topup"><li>Saldo Anda</li></Link>
			    <Link to="/dashboard/profile-setting"><li>Pengaturan</li></Link>
			    {/* <a href="{{route('help')}}" {{request()->is('dashboard/help') ? 'class="is-active"' : ''}}><li>Bantuan</li></a> */}
			    <Link to="/dashboard/bantuan"><li>Bantuan</li></Link>
			  </ul>
			</div>
		)
	}
}