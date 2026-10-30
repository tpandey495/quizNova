/**
 * Badge — shared primitive component
 *
 * Props:
 *  - variant: 'default' | 'success' | 'warning' | 'danger' | 'info'  (default: 'default')
 *  - children: ReactNode
 *  - className: string
 */

const variantClasses = {
  default: 'badge-default',
  success: 'badge-success',
  warning: 'badge-warning',
  danger: 'badge-danger',
  info: 'badge-info',
}

export default function Badge({ variant = 'default', children, className = '' }) {
  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
