'use client'
import { useState } from "react";

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
    <div className="max-w-[450px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-4 py-3 bg-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src={avatarUrl}
            alt="Avatar"
          />
          <div>
            <h4 className="text-sm font-semibold leading-none text-gray-800">{userFullName}</h4>
            <h5 className="text-xs text-gray-600">{userName}</h5>
          </div>
        </div>
        
      </div>
      <div className="px-4 py-2 text-sm text-gray-600">
        <p>{content}</p>
        
      </div>
      <div className="px-4 py-3 bg-gray-200 flex justify-between">
        <div className="flex items-center space-x-1 text-gray-600">
          <p className="font-semibold">4</p>
          <p>Following</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-600"> 
          <p className="font-semibold ml-2">97.1K</p>
          <p>Followers</p> 
        </div>
      </div>
    </div>
  );
}
