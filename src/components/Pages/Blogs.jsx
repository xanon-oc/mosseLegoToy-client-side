import React from "react";
import Lottie from "lottie-react";
import BlogsAnimation from "../../assets/Blogs.json";
import useTitle from "../../Hooks/useTitle";
const Blogs = () => {
  useTitle(" blogs");
  return (
    <div className="mt-8">
      <div className="mx-auto w-96">
        <Lottie animationData={BlogsAnimation} loop={true} />
      </div>
      <h2 className="text-center text-2xl font-bold mb-8 mt-8">Blogs</h2>

      <div>
        {/* qna 1 */}
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt="Party"
                    src="https://thekenyandev.com/static/ba180df420dbaffd7405a0f65764feab/cover.png"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-600">
                    <p>
                      An access token is a credential issued to a client upon
                      successful authentication, granting access to specific
                      resources. It is used to authenticate requests to a
                      resource server. A refresh token is a long-lived
                      credential used to obtain a new access token when the
                      current one expires. It is used to refresh the access
                      token without requiring the user to reauthenticate.
                    </p>
                    <p>
                      The typical workflow involves the client authenticating
                      the user and receiving an access token and refresh token
                      from the authorization server. The client includes the
                      access token in requests to the resource server. When the
                      access token expires, the client can use the refresh token
                      to obtain a new access token from the authorization
                      server.
                    </p>
                    <p>
                      Access tokens should be stored securely on the
                      client-side, such as in encrypted local storage or cookies
                      with appropriate security measures. Refresh tokens, being
                      more sensitive, require even stronger security measures
                      and should be stored in secure locations like encrypted
                      HTTP-only cookies or secure storage mechanisms provided by
                      the operating system or framework.
                    </p>
                    <p>
                      It is important to follow security best practices and
                      consult relevant documentation for secure handling and
                      storage of access tokens and refresh tokens in your
                      specific programming language, framework, or security
                      libraries.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* qna 2 */}
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Compare SQL and NoSQL databases?
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt="Party"
                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o2IgqXaoE90j8ZtoXPodjA.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-600">
                    <p>
                      SQL and NoSQL are different types of database management
                      systems. SQL databases use a structured, tabular data
                      model with predefined schemas, while NoSQL databases offer
                      a flexible, schema-less data model. SQL databases are
                      vertically scalable, while NoSQL databases are designed
                      for horizontal scalability. SQL databases have fixed
                      schemas and use SQL as the query language, while NoSQL
                      databases have dynamic schemas and use various query
                      languages or APIs. SQL databases provide strong ACID
                      compliance, while NoSQL databases prioritize scalability
                      and may offer eventual consistency. SQL databases are
                      suitable for structured data and complex relationships,
                      while NoSQL databases are ideal for handling unstructured
                      data and scalability. The choice between SQL and NoSQL
                      depends on specific project requirements and data
                      characteristics.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* qna 3 */}
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What is express js? What is Nest JS ?
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt="Party"
                    src="https://www.linearloop.io/wp-content/uploads/2022/08/LL_Bb_Express-vs-Nest.js-1425x524.jpg"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-600">
                    <p>
                      Express.js is a minimalist web application framework for
                      Node.js, offering flexibility and simplicity in building
                      web applications and APIs. It provides a basic set of
                      features for handling HTTP requests, routing, and
                      middleware integration.
                    </p>
                    <p>
                      Nest.js, on the other hand, is a progressive and
                      opinionated framework for building server-side
                      applications with Node.js. It is inspired by Angular and
                      employs TypeScript, decorators, and modules to bring
                      structure and organization to development. Nest.js
                      supports a wide range of features and is suitable for
                      building scalable and maintainable applications.
                    </p>
                    <p>
                      In summary, Express.js is flexible and minimalistic, while
                      Nest.js is opinionated and provides a structured and
                      organized approach. The choice between the two depends on
                      your specific project needs and preferences.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* qna 4 */}
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What is MongoDB aggregate and how does it work ?
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt="Party"
                    src="https://goteleport.com/blog/_next/image/?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2Fmongodb%402x-min.4324f764.png&w=1920&q=75"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-600">
                    <p>
                      The MongoDB aggregate function is used for data
                      aggregation and transformation. It works by combining
                      multiple stages into a pipeline, where each stage performs
                      a specific operation on the data. Common stages include
                      filtering documents, grouping them based on criteria,
                      shaping the output, sorting, limiting results, and
                      deconstructing arrays. Aggregation pipelines allow for
                      complex data manipulations and are useful for analytical
                      queries and generating aggregated results.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
// h-[calc(100vh-390px)]
