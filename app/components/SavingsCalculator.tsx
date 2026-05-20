"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

const presets = [
  { label: "Light (1x/week)", minutes: 15, sessions: 1 },
  { label: "Moderate (3x/week)", minutes: 20, sessions: 3 },
  { label: "Heavy (daily)", minutes: 25, sessions: 7 },
  { label: "Compulsive (2x/day)", minutes: 30, sessions: 14 },
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatHours(hours: number) {
  if (hours < 24) return `${Math.round(hours)} hours`;
  const days = hours / 24;
  if (days < 30) return `${days.toFixed(1)} days`;
  if (days < 365) return `${(days / 30).toFixed(1)} months`;
  return `${(days / 365).toFixed(1)} years`;
}

export function SavingsCalculator() {
  const [minutes, setMinutes] = useState(20);
  const [sessions, setSessions] = useState(5);
  const [rate, setRate] = useState(30);
  const [years, setYears] = useState(10);

  const minutesPerWeek = minutes * sessions;
  const hoursPerYear = (minutesPerWeek * 52) / 60;
  const hoursPerDecade = hoursPerYear * years;
  const moneyPerYear = hoursPerYear * rate;
  const moneyPerDecade = moneyPerYear * years;
  const daysOfLifePerYear = hoursPerYear / 24;
  const daysOfLifePerDecade = hoursPerDecade / 24;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
        <div>
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Quick presets
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setMinutes(p.minutes);
                  setSessions(p.sessions);
                  track("savings_preset", { preset: p.label });
                }}
                className="text-xs sm:text-sm bg-gray-50 hover:bg-purple-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 hover:text-purple-700 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="minutes"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Minutes per session
            </label>
            <input
              id="minutes"
              type="number"
              min={1}
              max={180}
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="sessions"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Sessions per week
            </label>
            <input
              id="sessions"
              type="number"
              min={0}
              max={50}
              value={sessions}
              onChange={(e) => setSessions(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Your hourly value ($)
            </label>
            <input
              id="rate"
              type="number"
              min={0}
              max={2000}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1.5">
              Wage, freelance rate, or what an hour of focused work is worth to
              you.
            </p>
          </div>

          <div>
            <label
              htmlFor="years"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Projection window (years)
            </label>
            <input
              id="years"
              type="number"
              min={1}
              max={60}
              value={years}
              onChange={(e) => setYears(Number(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 p-6 text-center">
          <div className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-2">
            Per year
          </div>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
            {formatMoney(moneyPerYear)}
          </div>
          <div className="text-gray-600">
            {formatHours(hoursPerYear)} of your life
          </div>
          <div className="text-xs text-gray-500 mt-2">
            About {daysOfLifePerYear.toFixed(1)} full days every year
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-6 text-center">
          <div className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-2">
            Over {years} years
          </div>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
            {formatMoney(moneyPerDecade)}
          </div>
          <div className="text-gray-600">
            {formatHours(hoursPerDecade)} of your life
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Roughly {daysOfLifePerDecade.toFixed(0)} full days
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">
          What you could buy with {formatMoney(moneyPerDecade)} instead
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <span className="font-semibold">
              {Math.max(1, Math.floor(moneyPerDecade / 1500))}
            </span>{" "}
            international trips at $1,500 each
          </li>
          <li>
            <span className="font-semibold">
              {Math.max(1, Math.floor(moneyPerDecade / 12000))}
            </span>{" "}
            years of rent at $1,000 a month
          </li>
          <li>
            A solid index fund position that compounds for the rest of your
            life
          </li>
          <li>
            Roughly {Math.max(1, Math.floor(hoursPerDecade / 10))} books read
            cover to cover at 10 hours each
          </li>
        </ul>
      </div>
    </div>
  );
}
