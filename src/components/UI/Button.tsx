type Color =
  | 'blue' | 'red' | 'green' | 'purple' | 'yellow'
  | 'outline-blue' | 'outline-red' | 'outline-green' | 'outline-purple' | 'outline-yellow' | 'transparent';

interface ButtonProps {
  backgroundColor?: Color;
  children?: string;
  type?: 'button' | 'submit';
  disabled?: boolean
  onClick?: () => void;
  className?: string
}

export const Button = ({
  backgroundColor = 'blue',
  className,
  children,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {

  const isDisabled = disabled ? 'disabled' : '';

    return (
      <button
        type={type}
        className={`btn btn--${backgroundColor} btn--medium ${isDisabled} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
}
