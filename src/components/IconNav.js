import React, { Component } from 'react';

export default class IconNav extends Component {
	render(){
		return(
			<nav className="nav no-shadow">
			  <span id="nav-toggle" className="nav-toggle">
			    <span />
			    <span />
			    <span />
			  </span>
			  <div className="nav-right nav-menu">
			    <div id="notification" className="dropdown navbar-icon box-notif-icon" title="Notifikasi">
			      <i className="pe pe-7s-bell">
			        <div className="dropdown-notification hidden">
			          <ul>
			            <li><a href="{{ $notification->route }}">
			                <div className="content has-text-left">
			                  <p className="is-marginless ellipsisone">{'{'}{'{'} $notification-&gt;text {'}'}{'}'}</p>
			                  <small className="is-text-blue">{'{'}{'{'} $notification-&gt;date {'}'}{'}'}</small>
			                </div>
			              </a></li>
			            <li><a href="{{ route('notification') }}">
			                <div className="content has-text-centered">
			                  <p className="is-text-blue">Tampilkan Semua Notifikasi</p>
			                </div>
			              </a></li>
			          </ul>
			        </div>
			      </i>
			      {/*@if(Auth::user()-&gt;notificationNotReaded())
			      			      <span className="navbar-icon-badge">{'{'}{'{'} Auth::user()-&gt;notificationNotReaded() {'}'}{'}'}</span>
			      			      @endif*/}
			    </div>
			    <div id="profile" className="dropdown navbar-icon box-user-icon" title="Akun Anda">
			      <i className="pe pe-7s-user">
			        <div className="dropdown-user hidden">
			          <ul className="has-text-left">
			            <a href="{{route('profile-setting')}}"><li>Pengaturan Akun</li></a>
			            <a href="{{ route('signout') }}"><li>Keluar</li></a>
			          </ul>
			        </div>
			      </i>
			    </div>
			  </div>
			</nav>
		)
	}
}