import "../../Home/Home.css";
export default function EditProfile() {
  const onSubmit = () => {
    return true;
  };
  return (
    <form className="container mt-5" onSubmit={onSubmit}>
      <div class="row justify-content-center">
        <div class="col-auto">
          <h1 className="m-3 p-0 text-cen">Edit Profile</h1>
          <table className="tbl">
            <tr>
              <th>First Name</th>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>
                <input type="number" name="" id="" />
              </td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <th>Country</th>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto mt-2">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
