const User = ({ email, avatarUrl, fullName, onAdd, id, isAdded }) => {
  return (
    <div className="users__box">
      <div className="users__left">
        <img src={avatarUrl} alt="Пользователь" />
        <div className="users__inner">
          <h4 className="users__name">{fullName}</h4>
          <p className="users__subtext">{email}</p>
        </div>
      </div>
      <div className="users__right">
        <button
          onClick={() => onAdd(id)}
          type="button"
          className={`close-btn ${isAdded ? 'pushed' : ''}`}
        ></button>
      </div>
    </div>
  )
}

export default User
