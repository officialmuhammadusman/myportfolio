"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimePickerProps {
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
  availableTimes?: string[];
}

export function TimePicker({ 
  selectedTime, 
  onTimeSelect,
  availableTimes = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
    "04:00 PM", "04:30 PM"
  ]
}: TimePickerProps) {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[350px] flex flex-col p-4 border border-white/10 rounded-2xl bg-white/[0.02]">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
        <Clock className="w-4 h-4 text-[#FF6A00]" />
        <span className="text-sm font-semibold text-[#FFF7ED] font-display">Select Time</span>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 no-scrollbar space-y-2">
        {availableTimes.map((time, idx) => (
          <motion.button
            key={time}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03, duration: 0.2 }}
            type="button"
            onClick={() => onTimeSelect(time)}
            className={cn(
              "w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all border flex items-center justify-center",
              selectedTime === time
                ? "bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                : "bg-white/5 border-white/5 text-[#FFF7ED]/70 hover:bg-white/10 hover:text-white hover:border-white/20"
            )}
          >
            {time}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
