import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>Sorry, the page you are looking for does not exist</p>
      <Link href="/">Return to Homepage</Link>
    </>
  );
};

export default NotFound;
