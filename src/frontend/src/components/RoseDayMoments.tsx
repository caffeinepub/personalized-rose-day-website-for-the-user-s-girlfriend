import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, Gift, Star, MessageCircle, Flower2 } from 'lucide-react';

interface Moment {
  id: number;
  title: string;
  icon: React.ReactNode;
  preview: string;
  fullMessage: string;
}

const moments: Moment[] = [
  {
    id: 1,
    title: 'A Compliment',
    icon: <Heart className="h-6 w-6" />,
    preview: 'Something I admire about you...',
    fullMessage:
      'Your smile lights up my entire world. The way you laugh, the kindness in your eyes, and the warmth of your heart make every day brighter. You are absolutely beautiful, inside and out.',
  },
  {
    id: 2,
    title: 'A Memory',
    icon: <Sparkles className="h-6 w-6" />,
    preview: 'A moment I cherish...',
    fullMessage:
      'I still remember the first time I saw you. Time seemed to stop, and I knew in that instant that you were someone special. Every moment since then has been a gift I treasure deeply.',
  },
  {
    id: 3,
    title: 'A Promise',
    icon: <Gift className="h-6 w-6" />,
    preview: 'What I promise you...',
    fullMessage:
      'I promise to always be there for you, to support your dreams, to hold your hand through every challenge, and to celebrate every joy. My love for you grows stronger with each passing day.',
  },
  {
    id: 4,
    title: 'Why I Love You',
    icon: <Star className="h-6 w-6" />,
    preview: 'The reasons are endless...',
    fullMessage:
      'I love you for your strength, your compassion, your humor, and your spirit. I love the way you make me want to be a better person. You inspire me every single day.',
  },
  {
    id: 5,
    title: 'A Sweet Note',
    icon: <MessageCircle className="h-6 w-6" />,
    preview: 'Just for you...',
    fullMessage:
      'Thank you for being you. Thank you for choosing me. Thank you for every laugh, every hug, every moment we share. You are my favorite person, my best friend, and my greatest love.',
  },
  {
    id: 6,
    title: 'Our Future',
    icon: <Flower2 className="h-6 w-6" />,
    preview: 'What I dream of...',
    fullMessage:
      'I dream of a lifetime of adventures with you, of building a beautiful life together, of growing old side by side. With you, every tomorrow is something to look forward to.',
  },
];

export default function RoseDayMoments() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleMoment = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMoment(id);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {moments.map((moment) => {
        const isExpanded = expandedId === moment.id;
        return (
          <Card
            key={moment.id}
            className="cursor-pointer border-rose-200 bg-white/90 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => toggleMoment(moment.id)}
            onKeyDown={(e) => handleKeyDown(e, moment.id)}
            tabIndex={0}
            role="button"
            aria-expanded={isExpanded}
            aria-label={`${moment.title}. ${isExpanded ? 'Click to collapse' : 'Click to expand'}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-serif text-xl text-rose-900">
                <div className="rounded-full bg-rose-100 p-2 text-rose-600">
                  {moment.icon}
                </div>
                {moment.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-rose-800">
                {isExpanded ? moment.fullMessage : moment.preview}
              </p>
              <p className="mt-3 text-sm font-medium text-rose-600">
                {isExpanded ? 'Click to collapse' : 'Click to reveal'}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
