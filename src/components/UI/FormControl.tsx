import { FocusEvent, ChangeEvent } from 'react';

interface FormControlProps {
  label: string;
  type: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  disabled?: boolean
  placeholder?: string;
  isRequerid?: boolean
}

export const FormControl = ({ label, type, name, value, placeholder, onBlur, onChange, disabled = false, isRequerid = false }: FormControlProps) => {

  return (
    <div className='form-control'>
      <label
        className={`form-control__label`}
      >
        {label}
        {
          isRequerid && <span>*</span>
        }
      </label>
      <input
        className={`form-control__input ${disabled ? 'input-disabled' : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}