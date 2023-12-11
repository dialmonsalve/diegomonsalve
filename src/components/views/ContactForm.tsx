'use client';

import { FormEvent, RefObject, useRef, useState } from 'react';
import { useForm } from '@/hooks/useForm';

import emailjs from '@emailjs/browser';

import { Button, FormControl, ErrorMessage } from '../UI';
import {
  formValidator,
  newMessage,
  newMessageValidationSchema,
} from '@/helpers';

export const ContactForm = () => {
  const form: RefObject<HTMLFormElement> = useRef(null);
  const [toggleAlert, setToggleAlert] = useState(false);

  const {
    formState,
    isFormSubmitted,
    isTouched,
    handleBlur,
    handleFieldChange,
    areFieldsValid,
    handleResetForm,
  } = useForm(newMessage);

  const { email, lastName, name, phone, message } = formState;

  const errors = formValidator().getErrors(
    formState,
    newMessageValidationSchema
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.current === null) return;

    if (areFieldsValid(errors)) {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_API_SERVICE}`,
          `${process.env.NEXT_PUBLIC_API_TEMPLATE}`,
          form.current,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        )
        .then((result) => {
          setToggleAlert(true);
          setTimeout(() => {
            setToggleAlert(false);
          }, 4000);
        })
        .catch((err) => console.log(err))
        .finally(handleResetForm);
    }
  };
  return (
    <>
      <form
        ref={form}
        style={{ width: '50rem' }}
        className="form"
        onSubmit={handleSubmit}
      >
        <FormControl
          label="Nombre"
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={handleFieldChange}
          onBlur={handleBlur}
          isRequerid
        />
        <ErrorMessage
          fieldName={errors?.name}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.name}
        />
        <FormControl
          label="Apellidos"
          name="lastName"
          type="text"
          placeholder="Tus apellidos"
          value={lastName}
          onChange={handleFieldChange}
        />
        <ErrorMessage
          fieldName={errors?.lastName}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.lastName}
        />

        <FormControl
          label="email"
          name="email"
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={handleFieldChange}
          onBlur={handleBlur}
          isRequerid
        />
        <ErrorMessage
          fieldName={errors?.email}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.email}
        />
        <FormControl
          label="Teléfono"
          name="phone"
          type="phone"
          placeholder="Tu Teléfono"
          value={phone}
          onChange={handleFieldChange}
        />
        <ErrorMessage
          fieldName={errors?.phone}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.phone}
        />
        <label className={`form-control__label`}>
          Mensaje<span>*</span>{' '}
        </label>
        <ErrorMessage
          fieldName={errors?.message}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.message}
        />
        <textarea
          className="text-area"
          placeholder="Haz tus preguntas"
          style={{ height: '10rem', marginTop: '1rem' }}
          name="message"
          value={message}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />

        <Button type="submit" backgroundColor="blue" disabled={!!errors}>
          Enviar
        </Button>
      </form>

      <div className={`alert ${toggleAlert ? 'show-alert' : 'hide-alert'} `}>
        <p className="alert__messenger">
          Enviado con éxito. Nos pondremos en contacto contigo pronto. ¡Gracias!
        </p>
      </div>
    </>
  );
};
