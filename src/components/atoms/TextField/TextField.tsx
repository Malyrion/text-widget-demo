import React from 'react'

type TextFieldProps = {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  maxLength?: number
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Enter your text here',
  maxLength = 1000,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-l font-bold text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        rows={5}
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}

export default TextField