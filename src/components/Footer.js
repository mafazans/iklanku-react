import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return(
			<section className="footer">
			  <div className="container">
			    <div className="columns">
			      <div className="column">
			        <div className="content footer-list">
			          <h3 className="subtitle is-5">Panduan &amp; Bantuan</h3>
			          <ul>
			            <li><a id="driftOpen">Bantuan Chat</a></li>
			            <li><a href="{{ route('faq') }}">Daftar Pertanyaan (FAQ)</a></li>
			            <li><a href="{{ route('panduan') }}">Panduan Layanan</a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="column">
			        <div className="content footer-list">
			          <h3 className="subtitle is-5">Legal</h3>
			          <ul>
			            <li><a href="{{ route('kebijakan') }}">Kebijakan Privasi</a></li>
			            <li><a href="{{ route('syarat') }}">Syarat &amp; Ketentuan</a></li>
			            <li><a href="{{ route('sanggahan') }}">Sanggahan</a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="column">
			        <div className="content footer-list">
			          <h3 className="subtitle is-5">Produk Terkait</h3>
			          <ul>
			            <li><a target="_blank" rel="noopener noreferrer" href="https://kofera.com/">Kofera</a></li>
			            <li><a target="_blank" rel="noopener noreferrer" href="https://smartpromo.co.id/">Smartpromo</a></li>
			            <li><a target="_blank" rel="noopener noreferrer" href="https://yellowpages.co.id/">YellowPages Indonesia</a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="column">
			        <div className="content footer-list">
			          <h3 className="subtitle is-5">Media Sosial</h3>
			          <ul>
			            <li><a href="https://www.facebook.com/iklankuid" target="_blank" rel="noopener noreferrer">Facebook</a></li>
			            <li><a href="https://www.instagram.com/iklankuid/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
			            <li><a href="https://twitter.com/iklankuid" target="_blank" rel="noopener noreferrer">Twitter</a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    <hr />
			    <div className="copyright">
			      <p>(c) 2017 Iklanku.id. Hak cipta dilindungi undang-undang</p>
			    </div>
			  </div>
			</section>
		)
	}
}

export default Footer;