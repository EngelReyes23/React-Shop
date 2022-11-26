import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import * as z from 'zod'

// Local imports
import { productsContext } from '../../context'
import countryList from '../../data/countryList.json'
import { Field } from './Field'

const cardNumberRegex =
  /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/

const schema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().email(),
  phone: z.string().min(10).max(20).regex(/^\d+$/),
  cardNumber: z.string().min(16).max(16).regex(cardNumberRegex),
  cardExpiration: z
    .string()
    .min(5)
    .max(5)
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  cardCvv: z.string().min(3).max(3),
  zipCode: z.string().min(5).max(5),
  country: z.string().min(2).max(20)
})

export const Form = () => {
  const { clearCart } = useContext(productsContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema), shouldFocusError: false })

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data', data)
    const random = Math.floor(Math.random() * 10)

    if (random % 2 === 0) {
      await Swal.fire('Success', 'Payment successful', 'success')
      clearCart()
    } else Swal.fire('Error', 'Payment failed', 'error')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-6 gap-4'>
      <Field
        label='First Name'
        name='firstName'
        type='text'
        register={register}
        errors={errors}
        span={3}
      />

      <Field
        label='Last Name'
        name='lastName'
        type='text'
        register={register}
        errors={errors}
        span={3}
      />

      <Field label='Email' name='email' type='email' register={register} errors={errors} span={6} />

      <Field label='Phone' name='phone' type='tel' register={register} errors={errors} span={6} />

      <fieldset className='col-span-6'>
        <legend className='mb-1 block text-sm text-gray-600'>Card Details</legend>

        <div className='-space-y-px rounded-lg bg-white shadow-sm'>
          <div>
            <label className='sr-only' htmlFor='card-number'>
              Card Number
            </label>

            <input
              className='placeholder-gray-blue-500 relative w-full rounded-t-lg border border-blue-200 p-2.5 text-sm focus:z-10 focus:border-blue-500'
              type='text'
              name='card-number'
              id='card-number'
              placeholder='Card number'
              {...register('cardNumber')}
            />

            {errors.cardNumber && (
              <p className='mb-3 text-left text-sm text-red-500'>{errors.cardNumber.message}</p>
            )}
          </div>

          <div className='flex -space-x-px'>
            <div className='flex-1'>
              <label className='sr-only' htmlFor='card-expiration-date'>
                Expiration Date
              </label>

              <input
                className='outline-500 placeholder-gray-4 focus:border-blue-50000 relative w-full rounded-bl-lg border border-blue-200 p-2.5 text-sm focus:z-10'
                type='text'
                name='card-expiration-date'
                id='card-expiration-date'
                placeholder='MM / YY'
                {...register('cardExpiration')}
              />

              {errors.cardExpiration && (
                <p className='text-left text-sm text-red-500'>{errors.cardExpiration.message}</p>
              )}
            </div>

            <div className='flex-1'>
              <label className='sr-only' htmlFor='card-cvc'>
                CVC
              </label>

              <input
                className='placeholder-gray-blue-500 focus:border-blue-500focus:z-10 relative w-full rounded-br-lg border border-blue-200 p-2.5  text-sm'
                type='text'
                name='card-cvc'
                id='card-cvc'
                placeholder='CVC'
                {...register('cardCvv')}
              />

              {errors.cardCvv && (
                <p className='text-left text-sm text-red-500'>{errors.cardCvv.message}</p>
              )}
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className='col-span-6'>
        <legend className='mb-1 block text-sm text-gray-600'>Billing Address</legend>

        <div className='-space-y-px rounded-lg bg-white shadow-sm'>
          <div>
            <label className='sr-only' htmlFor='country'>
              Country
            </label>

            <select
              className='outline:z-10 relative w-full rounded-t-lg border border-blue-200 p-2.5 text-sm outline-none focus:border-blue-500'
              id='country'
              name='country'
              autoComplete='country-name'
              {...register('country')}
            >
              {countryList.map((country) => (
                <option key={country.code} value={country.code3}>
                  {country.name}
                </option>
              ))}
            </select>

            {errors.country && (
              <p className='text-left text-sm text-red-500'>{errors.country.message}</p>
            )}
          </div>

          <div>
            <label className='sr-only' htmlFor='postal-code'>
              ZIP/Post Code
            </label>

            <input
              className='placeholder-gray-blue-500 relative w-full rounded-b-lg border border-blue-200 p-2.5 text-sm focus:z-10 focus:border-blue-500'
              type='text'
              name='postal-code'
              id='postal-code'
              placeholder='ZIP/Post Code'
              {...register('zipCode')}
            />

            {errors.zipCode && (
              <p className='text-left text-sm text-red-500'>{errors.zipCode.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      <div className='col-span-6'>
        <button className='block w-full rounded-lg bg-black p-2.5 text-sm text-white' type='submit'>
          Pay Now
        </button>
      </div>
    </form>
  )
}
