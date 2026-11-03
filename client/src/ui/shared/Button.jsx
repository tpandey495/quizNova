/**
 * Button — shared primitive component
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'ghost' | 'danger'   (default: 'primary')
 *  - size:    'sm' | 'md' | 'lg'                              (default: 'md')
 *  - isLoading: boolean                                       (default: false)
 *  - disabled: boolean
 *  - onClick: function
 *  - children: ReactNode
 *  - type: 'button' | 'submit' | 'reset'                     (default: 'button')
 *  - className: string – extra classes to merge in
 */

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
}

const sizeClasses = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  onClick,
  children,
  type = 'button',
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? <span className="btn-spinner" aria-hidden="true" /> : null}
      {children}
    </button>
  )
}
