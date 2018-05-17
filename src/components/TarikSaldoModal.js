				<div id="withdraw_modal" className="modal">
				  <div className="modal-background" />
				  <div className="modal-content">
				    <div className="panel-block back-checkbox">
				      <div className="container container-box box-map-custom">
				        <div className="has-text-right">
				          <button className="delete close-modal" aria-label="close" />
				        </div>
				        <form action="{{ route('withdraw-store') }}" method="POST" id="withdraw-form">
				          {'{'}!! csrf_field() !!{'}'}
				          <div className="content campaign-text has-text-left">
				            <p>Tarik Saldo</p>
				            <small>Lengkapi data dibawah untuk melakukan penarikan saldo.</small>
				          </div>
				          <div className="columns label-box">
				            <div className="column is-12">
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Nominal Penarikan <span style={{color: 'red'}}>*</span></label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <input id="withdraw_nominal" name="amount" className="input input-custom" type="number" placeholder="Minimal Rp 50.000" required />
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div id="error_withdraw_minimum" className="columns has-text-left cont-box hidden">
				                <div className="column is-3 center-box">
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <p className="notif-error pt1">Minimal penarikan sebesar Rp 50.000.</p>
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div id="error_withdraw_not_enough" className="columns has-text-left cont-box hidden">
				                <div className="column is-3 center-box">
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <p className="notif-error pt1">Saldo anda tidak cukup untuk melakukan penarikan.</p>
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Nama Bank</label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <p className="control">
				                      <span className="select select-custom is-fullwidth">
				                        <select name="bank" className="select-custom">
				                          <option value="Mandiri">Mandiri</option>
				                          <option value="BCA">BCA</option>
				                          <option value="BNI">BNI</option>
				                        </select>
				                      </span>
				                    </p>
				                  </div>
				                </div>
				              </div>
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Cabang</label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <input id="branch" name="branch" className="input input-custom" type="text" placeholder="Jakarta" />
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Pemilik Rekening <span style={{color: 'red'}}>*</span></label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <input name="name" id="withdraw_name" className="input input-custom" type="text" required />
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div id="error_withdraw_name" className="columns has-text-left cont-box hidden">
				                <div className="column is-3 center-box">
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <p className="notif-error pt1">Nama pemilik rekening harus diisi.</p>
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Nomor Rekening <span style={{color: 'red'}}>*</span></label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <input name="rekening" id="withdraw_rekening" className="input input-custom" type="number" required />
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div id="error_withdraw_rekening" className="columns has-text-left cont-box hidden">
				                <div className="column is-3 center-box">
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <p className="notif-error pt1">Nomor rekening harus diisi.</p>
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div className="columns has-text-left cont-box">
				                <div className="column is-3 center-box">
				                  <label className="label">Alasan <span style={{color: 'red'}}>*</span></label>
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <textarea id="withdraw_reason" name="reason" className="textarea" rows={3} defaultValue={""} />
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div id="error_withdraw_reason" className="columns has-text-left cont-box hidden">
				                <div className="column is-3 center-box">
				                </div>
				                <div className="column">
				                  <div className="field">
				                    <div className="control">
				                      <p className="notif-error pt1">Alasan minimal 60 karakter.</p>
				                    </div>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="content campaign-text has-text-left">
				            <small>Catatan: penarikan saldo diproses maksimal dalam 3 hari kerja dan dikenakan admin fee sebesar Rp.5.000.</small>
				          </div>
				          <div className="field checkbox-box">
				            <p className="panel-footer has-text-right">
				              <button id="withdraw_submit" type="button" className="button ct-popup save">Tarik Saldo</button>
				            </p>
				          </div>
				        </form>
				      </div>
				    </div>
				  </div>
				</div>
				<div id="password_modal" className="modal">
				  <div className="modal-background" />
				  <div className="modal-content">
				    <div className="panel-block back-checkbox">
				      <div className="container container-box box-map-custom">
				        <div className="has-text-right">
				          <button className="delete close-modal" aria-label="close" />
				        </div>
				        <div className="content campaign-text has-text-left">
				          <p>Silahkan masukkan password anda.</p>
				        </div>
				        <div className="columns label-box">
				          <div className="column is-12">
				            <div className="columns has-text-left cont-box">
				              <div className="column is-3 center-box">
				                <label className="label">Password</label>
				              </div>
				              <div className="column">
				                <div className="field">
				                  <div className="control">
				                    <input id="withdraw_password" name="rekening" className="input input-custom" type="password" required />
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div id="error_withdraw_password" className="columns has-text-left cont-box hidden">
				          <div className="column is-3 center-box">
				          </div>
				          <div className="column">
				            <div className="field">
				              <div className="control">
				                <p className="notif-error pt1">Password anda tidak cocok.</p>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="field checkbox-box">
				          <p className="panel-footer has-text-right">
				            <button id="password_submit" type="button" className="button ct-popup save">Tarik Saldo</button>
				          </p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>