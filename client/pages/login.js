
const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl">Sign In</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="btn">Register</button>
      </div>
    </div>
  );
};

export default Page;
