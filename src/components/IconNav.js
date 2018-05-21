import React, { Component } from 'react';

export default class IconNav extends Component {
	state = {
		notifCondition: true,
		userCondition: true
	}

	handleClickOutside = () => {
		this.setState({
			notifCondition: true,
			userCondition: true
		})
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick, false);
	}

	handleClick = (evt) => {
		if(this.nodeNotif.contains(evt.target)) {
			this.setState({
				notifCondition: !this.state.notifCondition
			})
			return;
		}
		if(this.nodeUser.contains(evt.target)){
			this.setState({
				userCondition: !this.state.userCondition
			})
			return;
		}
		this.handleClickOutside()
	}

	render(){
		return(
			<nav className="nav no-shadow">
			  <span id="nav-toggle" className="nav-toggle">
			    <span />
			    <span />
			    <span />
			  </span>
			  <div className="nav-right nav-menu">
			    <div ref={nodeNotif => this.nodeNotif = nodeNotif} id="notification" className="dropdown navbar-icon box-notif-icon" title="Notifikasi">
			      <i className="pe pe-7s-bell">
			        <div
			        className={`dropdown-notification ${ this.state.notifCondition && "hidden"}`}
			        >
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
			    <div ref={nodeUser => this.nodeUser = nodeUser} id="profile" className="dropdown navbar-icon box-user-icon" title="Akun Anda">
			      <i className="pe pe-7s-user">
			        <div className={`dropdown-user ${ this.state.userCondition && "hidden"}`}>
			          <ul className="has-text-left">
			            <a href="{{route('profile-setting')}}"><li>Pengaturan Akun</li></a>
			            <a href="/signout"><li>Keluar</li></a>
			          </ul>
			        </div>
			      </i>
			    </div>
			  </div>
			</nav>
		)
	}
}