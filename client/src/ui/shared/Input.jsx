/**
 * Input — shared primitive component
 *
 * Props:
 *  - label: string
 *  - id: string (required for a11y)
 *  - type: string  (default: 'text')
 *  - error: string – error message to display below the field
 *  - hint: string  – helper text to display below the field
 *  - ...rest – forwarded to the underlying <input>
 */

export default function Input({
  label,
  id,
  type = 'text',
  error,
  hint,
  className = '',
  ...rest
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        {...rest}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="input-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="input-error-msg" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
