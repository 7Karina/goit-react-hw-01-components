import React from 'react';
import css from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  const statusClassName = isOnline ? css.online : css.offline;

  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClassName}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
