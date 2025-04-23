import React from 'react';
import UserList from './UserList';

export default function SideBar(props) {
  const { users } = props;

  return (
    <div className="side-container">
      <h2>Users</h2>
      {users.map((user, index) => (
        <UserList key={index} user={user} />
      ))}
    </div>
  );
}
