import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function UserList(props) {
  const { user } = props;

  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <strong>Name:</strong> {user.name} <br />
          <strong>Email:</strong> {user.email} <br />
          <strong>Department:</strong> {user.department} <br />
          <strong>Title:</strong> {user.title} <br />
          <strong>Tasks:</strong>
          <ul>
            {user.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default UserList;
