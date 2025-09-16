"use client";

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react"; 

type DropdownOption = { id: number; name: string };
  
interface HeadlessDropdownProps {
    options: DropdownOption[];
    defaultValue?: DropdownOption;
    onChange?: (value: DropdownOption) => void;
}

export default function HeadlessDropdown({options, defaultValue, onChange}: HeadlessDropdownProps) {
  const [selected, setSelected] = useState<DropdownOption>(defaultValue ?? options[0]);


  const handleChange = (val: DropdownOption) => {
    setSelected(val);
    onChange?.(val); 
    console.log(val);
  };
  
  return (
    <div className="w-40">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          {/* Button */}
          <Listbox.Button className="relative w-full cursor-default px-6 py-2.5 transition-colors duration-200 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center h-[48px]">
            <span className="block truncate text-gray-800 dark:text-gray-200">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </span>
          </Listbox.Button>

          {/* Options */}
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-1 text-sm shadow-lg focus:outline-none">
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.id}
                  value={opt}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-8 pr-4 ${
                      active ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {opt.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-2 flex items-center">
                          <Check className="h-4 w-4 text-blue-600" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
