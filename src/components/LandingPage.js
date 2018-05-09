import React, {Component} from 'react';
import RegisterForm from './RegisterForm';

class LandingPage extends Component {
  render(){
		return(
			<div>
        <div className="home-screen">
          <div className="container">
            <div className="tile is-ancestor body-pad">
              <div className="tile is-parent is-6 is-vertical">
                <div className="tile is-child is-12">
                  <div className="content welcome-home">
                    <h1 className="title is-1">Iklan Adwords <br />Praktis &amp; Otomatis</h1>
                    <h2 className="subtitle is-4">Memperkenalkan layanan iklan online Google Adwords <br />yang mudah, murah, dan efisien</h2>
                  </div>
                </div>

                	<RegisterForm history={this.props.history} />

              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="content-home">
          <div className="container">
            <div className="home-content">
              <h2 className="title is-3 is-text-blue">Kenapa Menggunakan IklanKu?</h2>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content">
                      <h3 className="subtitle is-5">Tak Perlu Belajar Ilmu Khusus Digital Marketing</h3>
                      <p>Dengan IklanKu Anda tidak perlu mempelajari digital marketing secara khusus, apalagi belajar mengoperasikan Google Adwords yang rumit. Cukup daftar pakai e-mail, Anda bisa pakai sistem IklanKu untuk membuat iklan di Google dengan cara yang jauh lebih mudah dan cepat.</p>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content">
                      <h3 className="subtitle is-5">Biaya Iklan Murah</h3>
                      <p>Tak perlu bayar buat daftar jadi pengguna IklanKu. Tak perlu pakai kartu kredit. Anda tinggal membayar ke Google dengan sistem transfer bank yang cuma ada di IklanKu. Pakai IklanKu juga bisa membuat biaya iklan Google Anda lebih murah dari standar lho. Kenapa? Karena kami menerapkan biaya minimum mulai Rp 250.000 per bulan. Sangat terjangkau bukan?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content">
                      <h3 className="subtitle is-5">Sangat Mudah Dioperasikan</h3>
                      <p>Platform IklanKu simpel dan tidak ribet! Cukup ikuti 6 step yang sudah kami buat dan Anda tinggal mengisi data-data yang diperlukan. Setelah pembayaran beres, iklan Anda langsung muncul secara otomatis di Google.</p>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content">
                      <h3 className="subtitle is-5">Biaya dan Hasil yang Transparan</h3>
                      <p>Setelah iklan tayang, sistem IklanKu akan terus memberi update jumlah orang yang melihat iklan Anda, jumlah klik, bahkan jumlah penjualan yang didapat dari iklan Anda. IklanKu juga punya laporan penggunaan budget yang lengkap dan transparan. Tinggal login ke dashboard Anda bisa melihat berapa banyak budget yang telah dihabiskan dan hasil yang didapat. Laporan iklan Anda juga bisa diunduh dalam bentuk PDF.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container topup-saldo">
            <div className="columns">
              <div className="column is-8">
              <a className="twitter-timeline" data-height="400" data-link-color="#0066e6" href="https://twitter.com/IklankuId?ref_src=twsrc%5Etfw">Tweets by IklankuId</a>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </div>
              <div className="column">
                <iframe title="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiklankuid&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={400} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" />
              </div>
            </div>
          </div>
        </section>
      </div>
		)
	}
}
export default LandingPage;