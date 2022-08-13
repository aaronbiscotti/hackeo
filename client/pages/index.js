export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl">Register</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className='btn'>
          Register
        </button>
      </div>
    </div>
  )
}
