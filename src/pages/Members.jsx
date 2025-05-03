import React, { useEffect, useState } from 'react';
import MemberCard from '../components/memberCard';

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('./data/members.json')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-200 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-8 text-center">🎉 メンバー紹介 🎉</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
