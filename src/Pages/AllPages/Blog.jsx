
const Blog = () => {
    return (
        <div className="m-5 gap-y-4 ">
            <h3 className="text-3xl text-purple-800 mb-5 mt-4 font-extraboldbold">Answers all Question</h3>
          <div>
          <h3 className="text-3xl text-purple-800 mb-5 mt-4font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className="text-2xl mt-2 mb-2 ">An access and refresh token are used in authentication and authorization protocols. </p>
            <p className="text-2xl mt-2 mb-2">Access Token: When a client logs in, it typically sends its credentials username/passsword to the server. if the credentials are valid, the server When a client logs in , it typically sends its credentials username/password to the server. If the credentials are valid, the server generates an access token and returns it to the client. The client includes this access token in subsequent requests to access protected his accessable resources.</p>
            <p className="text-2xl mt-2 mb-2">
                Refresh Token: A refresh token is a long-lived system. A access token can expire then use this system to create a new access token. this process allows to continue to access protected resources.
            </p>
          </div>
          <div>
          <h3 className="text-3xl text-purple-800 mb-5 mt-4 font-bold">Compare SQL and NoSQL databases?</h3>
            <p className="text-2xl mt-2 mb-2">SQL is full from of(Structred Query Language) on the othen site NoSQL full from of(Not Only SQL) database. these are two type popular database. </p>
            <p className="text-2xl mt-2 mb-2">SQL database is a relational database system. it organized tables into data row and colums. it used vartically scalable </p>
            <p className="text-2xl mt-2 mb-2">
                NoSQL database employ various data models, such as key-value, document, columner, and graph. it provide more flexible schema design. they allow to dynamic schema changes. NoSQl is horizontally scalable.
            </p>
          </div>
          <div>
          <h3 className="text-3xl text-purple-800 mb-5 mt-4 font-bold">What is express js? What is Nest JS ?</h3>
            <p className="text-2xl mt-2 mb-2">Express.js: Express.js is a framwork. for node.js its handle routing and requests/response handle and common functionalities. </p>
            <p className="text-2xl mt-2 mb-2">
               Next.js: Next.js is a type-script based framework. it building scalable and efficient server-side applications. it leverages concepts from both object-oriented programming and funtional programming design complex web application.
            </p>
          </div>
          <div>
          <h3 className="text-3xl text-purple-800 mb-5 mt-4 font-bold">What is MongoDB aggregate and how does it work ?</h3>
            <p className="text-2xl mt-2 mb-2">In MongoDB. the aggregate method used to advanced data processing and analysis operations on the documents within a collection. the aggregate method takes an array of stages as its parameter. Each stage represents a specific operation or transformation that is applied to the documents in the collection. aggregate work on matching stage, transformation stage. </p>
          </div>
        </div>
    );
};

export default Blog;