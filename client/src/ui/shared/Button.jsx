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
      className={'bg-[#615FF0] text-white h-auto text-2xl font-medium  px-6 py-4 rounded-3xl hover:bg-[#504EE0] transition-colors duration-200'}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? <span className="btn-spinner" aria-hidden="true" /> : null}
      {children}
    </button>
  )
}
