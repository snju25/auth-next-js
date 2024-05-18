const UserProfile = ({params}: any) => {
    return (
      <div className="h-screen justify-center items-center flex">
        <h1>Profile</h1>
        <hr />
        <p className="text-2xl">Profile Page</p>
        <span className="text-2xl text-white ml-2 p-2 bg-orange-400"> {params.id}</span>
      </div>
    )
  }
  export default UserProfile