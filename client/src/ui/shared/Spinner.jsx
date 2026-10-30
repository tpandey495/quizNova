/**
 * Spinner — shared loading indicator primitive
 *
 * Props:
 *  - size: 'sm' | 'md' | 'lg'   (default: 'md')
 *  - className: string
 */

const sizeClasses = {
  sm: 'spinner-sm',
  md: 'spinner-md',
  lg: 'spinner-lg',
}

export default function Spinner({ size = 'md', className = '' }) {
  return (
    <span
      className={`spinner ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}
