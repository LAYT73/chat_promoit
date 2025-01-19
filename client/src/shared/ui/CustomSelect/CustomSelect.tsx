import React, { useEffect, useRef, useState } from 'react';

import styles from './CustomSelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Select...',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string | null>(
    null,
  );
  const [_, setSelectedValue] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <div className={styles.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.selectedValue}>
          {selectedOptionLabel || placeholder}
        </div>
        <div className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.optionItem}
              onClick={() => {
                handleSelect(option.value);
                setSelectedOptionLabel(option.label);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
