import React from 'react';
import user from '../path/user.json';
import Profile from '../data/Profile.jsx';

import data from '../path/data.json';
import Statistics from '../data/Statistics';

import friends from '../path/friends.json';
import FriendList from '../data/FriendList';

import transactions from '../path/transactions.json';
import TransactionHistory from '../data/TransactionHistory';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
