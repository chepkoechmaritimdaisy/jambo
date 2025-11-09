"use client";

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function BookPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  // Placeholder for available days - this will be fetched from the API
  const availableDays: Date[] = [
    new Date(2024, 10, 20),
    new Date(2024, 10, 21),
    new Date(2024, 10, 22),
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black text-white text-center mb-12">Book Your Session</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <div className="bg-container-dark p-4 rounded-xl border border-border-dark">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              modifiers={{ available: availableDays }}
              modifiersClassNames={{
                available: 'bg-primary/50 text-white',
              }}
              className="text-white"
               styles={{
                caption: { color: '#EAEAEA' },
                head: { color: '#A0A0A0' },
                day: { color: '#EAEAEA' },
              }}
            />
          </div>
        </div>
        <div>
          {selectedDay && (
            <div className="bg-container-dark p-6 rounded-xl border border-border-dark">
              <h2 className="text-xl font-bold text-white mb-4">Available time slots for {format(selectedDay, 'PPP')}</h2>
              {/* Time slot selection will go here */}
              <div className="grid grid-cols-3 gap-4">
                {/* Example time slots */}
                <button className="rounded-lg bg-primary/20 p-3 text-sm font-bold text-primary hover:bg-primary/30">09:00 AM</button>
                <button className="rounded-lg bg-primary/20 p-3 text-sm font-bold text-primary hover:bg-primary/30">10:00 AM</button>
                <button className="rounded-lg bg-slate-800 p-3 text-sm font-bold text-slate-500 cursor-not-allowed" disabled>11:00 AM</button>
                <button className="rounded-lg bg-primary/20 p-3 text-sm font-bold text-primary hover:bg-primary/30">02:00 PM</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
