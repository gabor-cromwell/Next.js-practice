const Users = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return { props: { users: data } };
}
