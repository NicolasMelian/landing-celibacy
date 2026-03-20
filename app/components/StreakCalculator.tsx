"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

const phases = [
  { min: 0, max: 3, name: "Initiation", color: "text-red-600", benefits: ["Awareness of habit patterns", "Beginning of willpower training", "Body starts adjusting"] },
  { min: 4, max: 7, name: "Energy Surge", color: "text-orange-600", benefits: ["Increased physical energy", "Testosterone approaching peak (~145% baseline on day 7)", "Improved motivation and drive"] },
  { min: 8, max: 14, name: "Momentum", color: "text-yellow-600", benefits: ["Sustained energy levels", "Better sleep quality", "Improved social confidence", "Reduced brain fog"] },
  { min: 15, max: 30, name: "Mental Clarity", color: "text-green-600", benefits: ["Laser-sharp focus", "Emotional stability", "Creative thinking sharpens", "Skin and appearance improve", "Reduced anxiety"] },
  { min: 31, max: 60, name: "Transformation", color: "text-teal-600", benefits: ["Deep dopamine receptor recovery", "Natural rewards feel satisfying again", "Discipline transfers to other areas", "Deeper relationships", "Physical vitality"] },
  { min: 61, max: 90, name: "Reboot", color: "text-blue-600", benefits: ["Full neurological reboot nearing completion", "PIED recovery for many men", "Strong sense of purpose", "Natural confidence and charisma", "Robust self-discipline"] },
  { min: 91, max: 180, name: "Mastery", color: "text-indigo-600", benefits: ["Practice becomes effortless", "Profound self-awareness", "Career and creative peak output", "Spiritual insights deepen", "Identity transformation complete"] },
  { min: 181, max: Infinity, name: "New Baseline", color: "text-purple-600", benefits: ["Permanent new normal", "Unshakeable discipline", "Deep inner peace", "Complete freedom from compulsion", "Compound effect of redirected energy"] },
];

export function StreakCalculator() {
  const [startDate, setStartDate] = useState("");

  const days = startDate
    ? Math.max(
        0,
        Math.floor(
          (new Date().getTime() - new Date(startDate).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      )
    : null;

  const phase = days !== null ? phases.find((p) => days >= p.min && days <= p.max) : null;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <label
          htmlFor="start-date"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          When did you start your streak?
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            setStartDate(e.target.value);
            if (e.target.value) {
              track("calculator_used");
            }
          }}
          className="w-full sm:w-auto border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {days !== null && phase && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm text-center">
            <div className="text-6xl md:text-8xl font-bold text-purple-600 mb-2">
              {days}
            </div>
            <div className="text-xl text-gray-600">
              {days === 1 ? "day" : "days"} of celibacy
            </div>
            <div className={`text-lg font-semibold mt-3 ${phase.color}`}>
              {phase.name} Phase
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Benefits at your current stage
            </h3>
            <ul className="space-y-2">
              {phase.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-green-500 mt-0.5">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {days < 90 && (
            <div className="bg-purple-50 rounded-2xl border border-purple-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Next milestone
              </h3>
              <p className="text-gray-600">
                {days < 7 && (
                  <>
                    <strong>Day 7</strong> — Testosterone peak. {7 - days}{" "}
                    {7 - days === 1 ? "day" : "days"} to go.
                  </>
                )}
                {days >= 7 && days < 14 && (
                  <>
                    <strong>Day 14</strong> — Mental clarity begins. {14 - days}{" "}
                    {14 - days === 1 ? "day" : "days"} to go.
                  </>
                )}
                {days >= 14 && days < 30 && (
                  <>
                    <strong>Day 30</strong> — One month milestone. {30 - days}{" "}
                    {30 - days === 1 ? "day" : "days"} to go.
                  </>
                )}
                {days >= 30 && days < 60 && (
                  <>
                    <strong>Day 60</strong> — Deep rewiring complete. {60 - days}{" "}
                    {60 - days === 1 ? "day" : "days"} to go.
                  </>
                )}
                {days >= 60 && days < 90 && (
                  <>
                    <strong>Day 90</strong> — Full reboot. {90 - days}{" "}
                    {90 - days === 1 ? "day" : "days"} to go.
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
