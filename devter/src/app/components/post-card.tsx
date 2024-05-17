'use client'
import { useState } from "react";
import Link from 'next/link';
import { IconMessageCircle, IconRepeat, IconHeart } from "@tabler/icons-react";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string;
  userName: string;
  avatarUrl: string;
  content: string;
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="w-[340px] bg-transparent shadow-none rounded-none overflow-hidden hover:bg-[#edeaea]
     transition border-b border-gray-300 cursor-pointer">
      <div className="px-4 py-3 bg-gray-250 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href={`/${userName}`}>
            <img
              className="w-10 h-10 rounded-full"
              src={avatarUrl}
              alt={`${userFullName}'s avatar`}
            />
          </Link>
          <div>
            <h4 className="text-sm font-semibold leading-none text-black">{userFullName}</h4>
            <h5 className="text-xs text-gray-600">{userName}</h5>
          </div>
        </div>
        
      </div>
      <div className="px-4 py-2 text-sm text-black bg-gray-250">
        <p>{content}</p>
        
      </div>
      <div className="px-4 py-3 bg-gray-250 flex justify-between">
        <div className="flex items-center text-gray-600 space-x-2">
          <button>
          <IconMessageCircle className="w-5 h-5 text-[#1D9BF0]" />
          </button>
          <button>
          <IconRepeat className="w-5 h-5 text-[#1D9BF0]" />
          </button>
          <button>
          <IconHeart className="w-5 h-5 text-[#1D9BF0]" />
          </button>
        </div>
      </div>
    </div>
  );
}
