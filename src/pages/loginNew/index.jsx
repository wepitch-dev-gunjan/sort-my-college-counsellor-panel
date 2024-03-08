import './style.scss'
import Logo from "../../assets/logo.svg"
import GoogleIcon from "../../assets/google-logo-icon.svg"

const LoginNew = () => {
    return(
        <>
            <div className='login-new-main'>
                <div className='login-new-sub' >
                    <div className='ln-left-logo' >
                        <img src={Logo} alt="sortmycollege"></img>
                    </div>
                    <div className='ln-row'>
                        <div className='ln-left'>
                            <h3>Sign in</h3>
                            <p>Use your Google Account</p>
                        </div>
                        <div className='ln-right'>
                            <div className='google-btn' >
                                <button>
                                    <img src={GoogleIcon} alt="google logo" ></img>
                                      {'   '} Login with Google
                                </button>
                            </div>
                            <p>By logging in, you agree to our Terms of Service and Privacy Policy. Please take a moment to review these documents before proceeding.</p>
                            <p>If you do not agree with these terms, please refrain from accessing or using our services.</p>
                            <p>Thank you for choosing <span>Sort My College</span>. We're excited to have you on board!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew;