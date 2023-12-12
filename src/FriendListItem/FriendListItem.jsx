import React from 'react';
import { Item, Status, Avatar, Name } from '../styled/FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

export default FriendListItem;
