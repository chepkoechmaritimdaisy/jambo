"use client";

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function AvailabilityPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  const footer = selectedDay
    ? <p>You selected {format(selectedDay, 'PPP')}.</p>
    : <p>Please pick a day.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Manage Availability</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-container-dark p-4 rounded-xl border border-border-dark">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              footer={footer}
              className="text-white"
              styles={{
                caption: { color: '#EAEAEA' },
                head: { color: '#A0A0A0' },
                day: { color: '#EAEAEA' },
                // ... add more styles to match the theme
              }}
            />
          </div>
        </div>
        <div>
          {selectedDay && (
            <div className="bg-container-dark p-6 rounded-xl border border-border-dark">
              <h2 className="text-xl font-bold text-white mb-4">Set working hours for {format(selectedDay, 'PPP')}</h2>
              {/* Form to set availability for specialists and stations will go here */}
              <p className="text-text-muted-dark">Specialist and station management will be implemented here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
