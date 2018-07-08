import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
			<section className="hero body-top">
			  {/* Hero header: will stick at the top */}
			  <div className="hero-head nav-top">
			    <nav className="nav">
			      <div className="container">
			        <div className="nav-left">
			          <Link to="/" className="nav-item is-brand"><img src="/assets/img/logo.svg" alt="iklanku" width={40} height={40} /> IklanKu</Link>
			        </div>
			        <span id="nav-toggle" className="nav-toggle">
			          <span />
			          <span />
			          <span />
			        </span>
			        <div className="nav-right nav-menu">
			          <a id="whatsappIcon" className="nav-item" href="https://api.whatsapp.com/send?phone=628119928928&text=Pesan baru dari iklanku" target="_blank" rel="noopener noreferrer">
			            <svg width={26} height={26} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="#25d366"><path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z" /></svg>
			          </a>
			          <a id="helpDrift" className="nav-item"><i className="pe pe-7s-help1 help1" /></a>
			          <Link to="{{route('contact-us')}}" className="nav-item">Hubungi Kami</Link>
			          <Link to="{{route('sms-landing-page')}}" className="nav-item">SMS Blast</Link>
			          <Link to="{{route('sms-landing-page-targeted')}}" className="nav-item">SMS Targeted</Link>
			          <Link to="/signin" className="nav-item">Masuk Akun</Link>
			        </div>
			      </div>
			    </nav>
			  </div>
			  {/* Hero content: will be in the middle */}
			</section>
		)
	}
}

export default Nav;