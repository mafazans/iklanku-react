import React, {Component} from 'react';

class NotFound extends Component {
	render(){
		return(
			<section className="content-home">
			  <div className="hero-body line-one">
			    <div className="container">
			      <div className="tile is-ancestor is-marginless">
			        <div className="tile is-parent ">
			          <div className="tile is-child">
			            <div className="content welcome-home">
			              <div className="columns">
			                <div className="column is-5">
			                  <h1 className="title is-2">Halaman Tidak Ditemukan</h1>
			                  <p className="text-normal">
			                    Maaf, halaman yang Anda akses tidak kami temukan. Silakan kembali ke halaman beranda dengan <a href="{{ route('dashboard') }}">klik di sini</a> atau klik tautan <a id="driftOpen2">bantuan chat</a> untuk mendapat panduan dari tim kami.
			                  </p>
			                  <div className="block pt2">
			                    <img src="/assets/img/404.png" alt="Not Found" width="80%" />
			                  </div>
			                </div>
			                <div className="column">
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
		)
	}
}

export default NotFound;