import React, {Component} from 'react';

class RegisterSuccess extends Component {
	render(){
		return(
			<div>
			  <div className="hero-body line-one">
			    <div className="container">
			      <div className="tile is-ancestor">
			        <div className="tile is-parent ">
			          <div className="tile is-child is-12">
			            <div className="content welcome-home">
			              <h1 className="title is-2">Konfirmasi <br />Pendaftaran Anda</h1>
			              <h2 className="subtitle is-4">Silahkan cek inbox email anda untuk mendapatkan link konfirmasi akun</h2>
			              <span>Tidak menerima email pendaftaran? <a href="{{route('resend-signup-email', ['hash' => $hash])}}">Kirim ulang email</a></span>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* Hero content: will be in the middle */}
			  <div className="hero-body line-two">
			    <div className="container">
			      <div className="tile is-ancestor">
			        <div className="tile is-parent ">
			          <div className="tile is-child is-6">
			            <div className="content confirm-page">
			              <h2 className="title is-6">Tahukah Anda?</h2>
			              <p>Menurut hasil survey <a href="http://apac.thinkwithgoogle.com/infographics/ecommerce-indonesia-more-shoppers-going-mobile.html" target="_blank" rel="noopener noreferrer" >Google</a>, jumlah pengguna internet yang melakukan transaksi online di Indonesia terus meningkat. Menariknya, 27% pengguna internet mencari informasi terlebih dahulu di mesin pencari Google sebelum bertransaksi online. Angka ini dua kali lipat lebih besar daripada transaksi dari media sosial yang hanya 13%.Jadi terbukti,beriklan di Google adalah pilihan tepat bagi pengusaha yang ingin produknya lebih laku di pasar online.</p>
			            </div>
			          </div>
			          <div className="tile is-child">
			            <img src="/assets/img/iklanku_image.png" alt="iklanKu" />
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default RegisterSuccess;