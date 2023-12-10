import React from 'react';
import css from '../Profile/Profile.module.css'



const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width="80"
      height="80"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;