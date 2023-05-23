import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div>
        <h1>404 - Page Not Found</h1>
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" 
          alt="Error"
        //   style={{ width: '500px', height: 'auto' }}
        />
        <Link to='/'><button className="btn btn-secondary justify-center">Go Back Home</button></Link>
        <p>Oops! The page you`re <span>{status || 404}</span> looking for does not exist.</p>
        <h3>{error?.message}</h3>
      </div>
    );
};

export default ErrorPage;