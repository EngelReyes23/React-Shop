import clsx from 'clsx'

export const Field = ({ label, name, type, register, errors, span }) => {
  return (
    <div className={`col-span-${span}`}>
      <label className='mb-1 block text-sm text-gray-600' htmlFor={name}>
        {label}
      </label>

      <input
        className={clsx(
          'w-full rounded-lg border border-blue-200 p-2.5 text-sm shadow-sm outline-none focus:border-blue-500',
          errors[name] && 'border-red-500 focus:border-red-500'
        )}
        type={type}
        id={name}
        {...register(name)}
      />

      {errors[name] && <p className='text-left text-sm text-red-500'>{errors[name].message}</p>}
    </div>
  )
}
