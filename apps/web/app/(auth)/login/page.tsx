export default function LoginPage(): JSX.Element {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" placeholder="Email" type="text" />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" placeholder="Password" type="password" />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="button">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
