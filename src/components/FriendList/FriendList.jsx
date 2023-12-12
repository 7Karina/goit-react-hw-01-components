import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </List>
);
export default FriendList;
