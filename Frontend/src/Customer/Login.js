import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css'
import "../style/sidebar.css"
import gumaan from '../images/gumaan.jpg'

// const Side=()=>{
//   return(
//       <>
        
//       </>
//   );
// }

const Login = () => {
  return( 
  <>
  {/* <Side/> */}
  <div class="sidebar">
            <h1>Gumaan</h1>
            <p>तू ही आग तू हे उसपे पार्टी बारिश में वो खाली हवेली जिसकी तू अकेली वारिस तू ही चाओं, तू ही धूप, रंगों के सात रूप तू जितनी खूबसूरत यूयेसेस से कही’न ज़्यादा दूउरमें लिखना चोर दूं जो तेरे बारे में क़लम टोर दूं और तू सियाही में </p>
        </div>
        <div class="content">
    
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						{/* <input type="checkbox"> Remember Me <input> */}
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</>  
)
};
// export {Side};
export default Login;
