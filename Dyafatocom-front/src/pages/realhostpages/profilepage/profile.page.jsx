import './profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function ProfilePage() {
    return ( <>
        <div className="profile-container">
            <div className="profile-left-column">
                <div className="user-image"><img src="src/assets/logo.png" alt="" srcset="" /></div>
                <div className="btn-logout">Logout</div>
            </div>
            <div className="profile-right-column">
            
            <table className="table table-bordered m-1 table-striped">
      <tbody>
        <tr>
          <td>Nom :</td>
          <td>
            <input type="text" className="form-control" value="Bachri" />
          </td>
        </tr>
        <tr>
          <td>Prenom :</td>
          <td>
            <input type="text" className="form-control" value="Otmane" />
          </td>
        </tr>
        <tr>
          <td>Tel :</td>
          <td>
            <input type="text" className="form-control" value="06151414" />
          </td>
        </tr>
        <tr>
          <td>Cin :</td>
          <td>
            <input type="text" className="form-control" value="MD29290" />
          </td>
        </tr>
        <tr>
          <td>Sex :</td>
          <td>
            <div className="form-check">
              <input type="radio" className="form-check-input" value="Male" />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" value="Female" />
              <label className="form-check-label">Female</label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div className='save-changes-btn'>Save changes</div>
            </div>
        </div>
        
    </> );
}

export default ProfilePage;