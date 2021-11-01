import successImg from '../assets/images/successfully.svg'

const Success = ({ onOkay }) => {
  return (
    <div className="container">
      <div className="success__box">
        <img src={successImg} alt="Успешно" />
        <h3 className="success__title">Успешно отправлено!</h3>
        <p className="success__text">
          Все пользователи из списка были оповещены о вашем мероприятии
        </p>
        <button onClick={onOkay} className="success__btn">
          Хорошо
        </button>
      </div>
    </div>
  )
}

export default Success
