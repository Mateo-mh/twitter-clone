import {  createdServerActionClient  } from "@supabase/auth-helpers-nextjs"
import {  cookies } from "next/headers"
//import { revalidatePath } from "next/cache"

export function ComposePost({
    userAvatarUrl
}:{
    userAvatarUrl:string
}) {
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get("content")

        if(content == null) return
        
    }
    return (
        <form action={addPost} className="flex flex-row p-4 border-b border-gray-300">
            <img className="w-10 h-10 rounded-full object-contain mr-4" src={userAvatarUrl}/>
            <div className="flex flex-1 flex-col gap-y-4">
                <textarea
                name="content"
                rows={4}
                className="w-full text-xl bg-gray-300/10 placeholder-gray-500 p-2"
                placeholder="¡¿Que esta pasando?!"
                ></textarea>
                <button type="submit" className="bg-[#1D9BF0] text-sm text-white hover:bg-[#2A8EFF] font-bold rounded-full px-5 py-2 self-end">
                    Postear
                </button>
            </div>
        </form>
    )
}