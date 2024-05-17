import {  createServerActionClient  } from "@supabase/auth-helpers-nextjs"
import {  cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { ComposePostTextArea } from "./compose-post-text-area";

export function ComposePost({
    userAvatarUrl
}:{
    userAvatarUrl:string
}) {
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get("content")

        if(content == null) return

        const supabase = createServerActionClient({cookies})
        //revisar si el usuario esta autentificado
        const { data: {user}} = await supabase.auth.getUser()
        if(user == null) return
        await supabase.from('posts').insert({ content, user_id: user.id })

        revalidatePath('/')
        
    }
    return (
        <form action={addPost} className="flex flex-row p-4 border-b border-gray-300">
            <img className="w-10 h-10 rounded-full object-contain mr-4" src={userAvatarUrl}/>
            <div className="flex flex-1 flex-col gap-y-4">
                <ComposePostTextArea />
                <button type="submit" className="bg-[#1D9BF0] text-sm text-white hover:bg-[#2A8EFF] font-bold rounded-full px-5 py-2 self-end">
                    Postear
                </button>
            </div>
        </form>
    )
}