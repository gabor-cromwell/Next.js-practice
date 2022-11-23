const User = ({ user }) => {
  return (
    <div key={user.id}>
      <h5>{user.name}</h5>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
