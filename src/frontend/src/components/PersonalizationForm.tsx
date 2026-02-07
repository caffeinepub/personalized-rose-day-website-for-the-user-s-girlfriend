import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RotateCcw } from 'lucide-react';

interface PersonalizationFormProps {
  girlfriendName: string;
  setGirlfriendName: (value: string) => void;
  senderName: string;
  setSenderName: (value: string) => void;
  customMessage: string;
  setCustomMessage: (value: string) => void;
  onReset: () => void;
}

export default function PersonalizationForm({
  girlfriendName,
  setGirlfriendName,
  senderName,
  setSenderName,
  customMessage,
  setCustomMessage,
  onReset,
}: PersonalizationFormProps) {
  return (
    <Card className="mx-auto max-w-3xl border-rose-200 bg-white/80 shadow-lg backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-rose-900">
          Personalize Your Message
        </CardTitle>
        <CardDescription className="text-rose-700">
          Customize the names and message to make this page uniquely yours
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="girlfriend-name" className="text-rose-900">
              Her Name
            </Label>
            <Input
              id="girlfriend-name"
              value={girlfriendName}
              onChange={(e) => setGirlfriendName(e.target.value)}
              placeholder="My Love"
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sender-name" className="text-rose-900">
              Your Name
            </Label>
            <Input
              id="sender-name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Forever"
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="custom-message" className="text-rose-900">
            Your Message
          </Label>
          <Textarea
            id="custom-message"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Write your heartfelt message here..."
            rows={4}
            className="resize-none border-rose-200 focus-visible:ring-rose-400"
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={onReset}
            variant="outline"
            className="border-rose-300 text-rose-700 hover:bg-rose-50 hover:text-rose-900"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset to Default
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
