'use client'

import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'

export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-gray-300'>
      <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />
      <div className='flex flex-1 flex-col gap-y-4'>
      <textarea
        name='content'
        rows={4}
        className='w-full text-xl bg-gray-300/10 placeholder-gray-500 p-2'
        placeholder='¡¿Qué está pasando?!'
      ></textarea>
        <button type="submit" className="bg-[#1D9BF0] text-sm text-white hover:bg-[#2A8EFF] font-bold rounded-full px-5 py-2 self-end">
            Postear
        </button>
      </div>
    </form>
  )
}