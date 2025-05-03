import React from 'react';

export default function MemberCard({ member }) {
  return (
    <div className="relative bg-yellow-100 p-4 rounded-lg shadow-md w-64 rotate-[-2deg] hover:rotate-0 transition-transform">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow"></div>
       <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-md mb-2" />
       <h3 className="text-xl font-bold">{member.name}</h3>
       <p className="text-sm text-gray-600">{member.grade}・{member.role}</p>
       <p className="mt-2 text-sm">{member.comment}</p>
  </div>
  );
}