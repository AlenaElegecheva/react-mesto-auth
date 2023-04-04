import React, { useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from '../hooks/useForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose, onAddPlace, loadText }) {
  const { values, handleChange, setValues } = useForm({ name: "", link: "" });
  const currentUser = useContext(CurrentUserContext);

  // const [place, setPlace] = useState('');
  // const [src, setSrc] = useState('');

  //  Обработчик изменения инпута обновляет стейт
  // function handlePlaceChange(e) {
  //   setPlace(e.target.value);
  // }

  // function handleSrcChange(e) {
  //   setSrc(e.target.value);
  // }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace(values);
  }

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", link: "" });
    }
  }, [currentUser, isOpen])

  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      formName={"add"}
      formId={"add"}
      btnText={"Создать"}
      btnLoadText={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      loadText={loadText}
    >
      <input value={values.name}
        onChange={handleChange}
        className="popup__input popup__input_field_place"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30" required />
      <span className="popup__error place-error"></span>
      <input value={values.link}
        onChange={handleChange}
        className="popup__input popup__input_field_src"
        type="url"
        name="link"
        placeholder="Ссылка на картинку" required />
      <span className="popup__error src-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;